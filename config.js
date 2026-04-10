(function () {
  const STORAGE_PREFIX = 'passengers_admin';
  const ENVIRONMENTS = {
    dev: {
      label: 'Development',
      supabaseUrl: 'http://127.0.0.1:54321',
    },
    uat: {
      label: 'UAT',
      supabaseUrl: 'https://ggupzjdpqviejwwvdxoj.supabase.co',
    },
    prod: {
      label: 'Production',
      supabaseUrl: 'https://nqxgffnivddnkyqbntiy.supabase.co',
    },
  };

  function isLocalHost() {
    const host = window.location.hostname.toLowerCase();
    return host === '127.0.0.1' || host === 'localhost';
  }

  function isPlaceholderValue(value) {
    return typeof value === 'string' && /^YOUR_[A-Z0-9_]+$/.test(value.trim());
  }

  function normalizeConfigValue(value) {
    if (typeof value !== 'string') {
      return '';
    }

    const trimmed = value.trim();
    if (!trimmed || isPlaceholderValue(trimmed)) {
      return '';
    }

    return trimmed;
  }

  function readStoredValue(key) {
    try {
      return window.localStorage.getItem(key) || '';
    } catch (_) {
      return '';
    }
  }

  function writeStoredValue(key, value) {
    try {
      if (!value) return;
      window.localStorage.setItem(key, value);
    } catch (_) {
      // Ignore storage access failures and keep using the in-memory value.
    }
  }

  function removeSensitiveParams(paramNames) {
    const currentUrl = new URL(window.location.href);
    let changed = false;

    paramNames.forEach((name) => {
      if (currentUrl.searchParams.has(name)) {
        currentUrl.searchParams.delete(name);
        changed = true;
      }
    });

    if (changed) {
      window.history.replaceState({}, document.title, currentUrl.toString());
    }
  }

  function mergeRuntimeConfig(baseConfig, overrideConfig) {
    const merged = {
      ...(baseConfig || {}),
    };

    Object.entries(overrideConfig || {}).forEach(([key, value]) => {
      if (
        value &&
        typeof value === 'object' &&
        !Array.isArray(value) &&
        merged[key] &&
        typeof merged[key] === 'object' &&
        !Array.isArray(merged[key])
      ) {
        merged[key] = {
          ...merged[key],
          ...value,
        };
        return;
      }

      merged[key] = value;
    });

    return merged;
  }

  function normalizeRepoEnvPayload(environmentName, payload) {
    const supabaseUrl = normalizeConfigValue(payload?.SUPABASE_URL);
    const supabaseAnonKey = normalizeConfigValue(payload?.SUPABASE_ANON_KEY);

    if (!supabaseUrl && !supabaseAnonKey) {
      return {};
    }

    return {
      [environmentName]: {
        supabaseUrl,
        supabaseAnonKey,
      },
    };
  }

  function resolveRepoConfigPath(environmentName) {
    if (!ENVIRONMENTS[environmentName]) {
      return '';
    }

    return `/.env.${environmentName}.json`;
  }

  function readRuntimeOverride(runtimeConfig, environmentName, fieldName) {
    const scopedValue = normalizeConfigValue(runtimeConfig[environmentName]?.[fieldName]);
    if (scopedValue) {
      return scopedValue;
    }

    const globalValue = normalizeConfigValue(runtimeConfig[fieldName]);
    if (globalValue) {
      return globalValue;
    }

    return '';
  }

  async function loadJsonConfigFile(pathname) {
    if (!pathname) {
      return {};
    }

    try {
      const response = await window.fetch(
        new URL(pathname, window.location.href).toString(),
        {
          cache: 'no-store',
        },
      );

      if (!response.ok) {
        return {};
      }

      const payload = await response.json();
      return payload && typeof payload === 'object' ? payload : {};
    } catch (_) {
      return {};
    }
  }

  async function loadRuntimeConfig() {
    const params = new URLSearchParams(window.location.search);
    const environmentName = (params.get('env') || '').trim().toLowerCase();
    const configSource = (params.get('configSource') || '').trim().toLowerCase();
    const runtimeConfigFile = await loadJsonConfigFile('./runtime-config.json');
    let repoConfigFile = {};

    if (configSource === 'repo' && isLocalHost() && ENVIRONMENTS[environmentName]) {
      const repoPayload = await loadJsonConfigFile(resolveRepoConfigPath(environmentName));
      repoConfigFile = normalizeRepoEnvPayload(environmentName, repoPayload);
    }

    return mergeRuntimeConfig(
      mergeRuntimeConfig(runtimeConfigFile, repoConfigFile),
      window.PASSENGERS_ADMIN_RUNTIME_CONFIG || {},
    );
  }

  function resolveEnvironmentName() {
    const params = new URLSearchParams(window.location.search);
    const forced = (params.get('env') || '').trim().toLowerCase();
    if (forced && ENVIRONMENTS[forced]) {
      return forced;
    }

    if (isLocalHost()) {
      return 'dev';
    }

    return 'prod';
  }

  function getAnonKeyStorageKey(environmentName) {
    return `${STORAGE_PREFIX}:${environmentName}:supabaseAnonKey`;
  }

  function resolveSupabaseUrl(environmentName, runtimeConfig) {
    const params = new URLSearchParams(window.location.search);
    const fromParams = normalizeConfigValue(params.get('supabaseUrl') || '');
    if (fromParams) {
      return fromParams;
    }

    const runtimeOverride = readRuntimeOverride(
      runtimeConfig,
      environmentName,
      'supabaseUrl',
    );
    if (runtimeOverride) {
      return runtimeOverride;
    }

    return ENVIRONMENTS[environmentName].supabaseUrl;
  }

  function resolveAnonKey(environmentName, runtimeConfig) {
    const params = new URLSearchParams(window.location.search);
    const fromParams = normalizeConfigValue(
      params.get('supabaseAnonKey') || params.get('anonKey') || '',
    );
    const storageKey = getAnonKeyStorageKey(environmentName);

    if (fromParams) {
      writeStoredValue(storageKey, fromParams);
      removeSensitiveParams(['supabaseAnonKey', 'anonKey']);
      return fromParams;
    }

    const runtimeOverride = readRuntimeOverride(
      runtimeConfig,
      environmentName,
      'supabaseAnonKey',
    );
    if (runtimeOverride) {
      return runtimeOverride;
    }

    return normalizeConfigValue(readStoredValue(storageKey));
  }

  async function buildConfig() {
    const environmentName = resolveEnvironmentName();
    const selected = ENVIRONMENTS[environmentName];
    const anonKeyStorageKey = getAnonKeyStorageKey(environmentName);
    const runtimeConfig = await loadRuntimeConfig();

    return {
      environment: environmentName,
      environmentLabel: selected.label,
      supabaseUrl: resolveSupabaseUrl(environmentName, runtimeConfig),
      supabaseAnonKey: resolveAnonKey(environmentName, runtimeConfig),
      anonKeyStorageKey,
      runtimeConfigLoaded: Object.keys(runtimeConfig).length > 0,
    };
  }

  window.PASSENGERS_ADMIN_CONFIG_PROMISE = buildConfig().then((config) => {
    window.PASSENGERS_ADMIN_CONFIG = config;
    return config;
  });
})();
