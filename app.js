(function () {
  const flashMessage = document.getElementById('flashMessage');
  const environmentBadge = document.getElementById('environmentBadge');
  const loginView = document.getElementById('loginView');
  const dashboardView = document.getElementById('dashboardView');
  const loginForm = document.getElementById('loginForm');
  const identifierInput = document.getElementById('identifierInput');
  const passwordInput = document.getElementById('passwordInput');
  const loginButton = document.getElementById('loginButton');
  const logoutButton = document.getElementById('logoutButton');
  const adminIdentity = document.getElementById('adminIdentity');
  const menu = document.getElementById('menu');
  const sectionTitle = document.getElementById('sectionTitle');
  const sectionDescription = document.getElementById('sectionDescription');
  const itemsCount = document.getElementById('itemsCount');
  const searchInput = document.getElementById('searchInput');
  const refreshButton = document.getElementById('refreshButton');
  const rideFilters = document.getElementById('rideFilters');
  const rideStatusFilter = document.getElementById('rideStatusFilter');
  const rideExpiredFilter = document.getElementById('rideExpiredFilter');
  const bulkActions = document.getElementById('bulkActions');
  const selectAllRowsCheckbox = document.getElementById('selectAllRowsCheckbox');
  const selectedRowsCount = document.getElementById('selectedRowsCount');
  const deleteSelectedButton = document.getElementById('deleteSelectedButton');
  const tableHead = document.getElementById('tableHead');
  const tableBody = document.getElementById('tableBody');
  const tableState = document.getElementById('tableState');
  const telemetryPanel = document.getElementById('telemetryPanel');
  const telemetryLevelSelect = document.getElementById('telemetryLevelSelect');
  const telemetryCurrentLevel = document.getElementById('telemetryCurrentLevel');
  const telemetryUpdatedAt = document.getElementById('telemetryUpdatedAt');
  const telemetrySaveButton = document.getElementById('telemetrySaveButton');

  const state = {
    supabase: null,
    session: null,
    admin: null,
    config: null,
    activeSection: 'riders',
    riders: [],
    passengers: [],
    rides: [],
    illeciti: [],
    blockedUsers: [],
    telemetry: null,
    telemetryLogs: [],
    selectedRideIds: new Set(),
    rideFilters: {
      status: '',
      expired: 'all',
    },
    search: '',
    loadingSection: false,
  };

  const authSessionStorage = createScopedSessionStorage();

  function createScopedSessionStorage() {
    const memoryFallback = new Map();

    function read(store, key) {
      return store.getItem(key);
    }

    function write(store, key, value) {
      store.setItem(key, value);
    }

    function remove(store, key) {
      store.removeItem(key);
    }

    return {
      getItem(key) {
        try {
          return read(window.sessionStorage, key);
        } catch (_) {
          return memoryFallback.has(key) ? memoryFallback.get(key) : null;
        }
      },
      setItem(key, value) {
        try {
          write(window.sessionStorage, key, value);
        } catch (_) {
          memoryFallback.set(key, value);
        }
      },
      removeItem(key) {
        try {
          remove(window.sessionStorage, key);
        } catch (_) {
          memoryFallback.delete(key);
        }
      },
    };
  }

  function stripSensitiveLoginParams() {
    const currentUrl = new URL(window.location.href);
    const sensitiveParams = ['identifier', 'username', 'email', 'password'];
    let changed = false;

    sensitiveParams.forEach((name) => {
      if (currentUrl.searchParams.has(name)) {
        currentUrl.searchParams.delete(name);
        changed = true;
      }
    });

    if (changed) {
      window.history.replaceState({}, document.title, currentUrl.toString());
    }
  }

  function getConfig() {
    return state.config || {};
  }

  const sectionMeta = {
    riders: {
      title: 'Bikers',
      description:
        'Elenco completo dei bikers con possibilita di blocco e sblocco tramite RPC.',
      listRpc: 'admin_list_riders',
      toggleRpc: 'admin_set_rider_blocked',
      toggleParam: 'p_uid',
      searchPlaceholder: 'Filtra per nickname o email',
      rowAction: (row) => {
        const isBlocked = row.bloccato === true;
        return {
          label: isBlocked ? 'Sblocca' : 'Blocca',
          className: isBlocked ? 'ghost-button' : 'primary-button',
          onClick: () => toggleBlocked(row.id, !isBlocked),
        };
      },
      columns: [
        { label: 'Nickname', value: (row) => row.nickname || '-' },
        { label: 'Email', value: (row) => row.email || '-' },
        {
          label: 'Stato',
          render: (row) => {
            const isBlocked = row.bloccato === true;
            return `<span class="pill ${isBlocked ? 'is-blocked' : 'is-active'}">${
              isBlocked ? 'Bloccato' : 'Attivo'
            }</span>`;
          },
        },
        { label: 'Azione', className: 'actions-col', action: true },
      ],
      searchText: (row) => [row.nickname, row.email],
    },
    passengers: {
      title: 'Passengers',
      description:
        'Elenco completo dei passengers con possibilita di blocco e sblocco tramite RPC.',
      listRpc: 'admin_list_passengers',
      toggleRpc: 'admin_set_passenger_blocked',
      toggleParam: 'p_uid',
      searchPlaceholder: 'Filtra per nickname o email',
      rowAction: (row) => {
        const isBlocked = row.bloccato === true;
        return {
          label: isBlocked ? 'Sblocca' : 'Blocca',
          className: isBlocked ? 'ghost-button' : 'primary-button',
          onClick: () => toggleBlocked(row.id, !isBlocked),
        };
      },
      columns: [
        { label: 'Nickname', value: (row) => row.nickname || '-' },
        { label: 'Email', value: (row) => row.email || '-' },
        {
          label: 'Stato',
          render: (row) => {
            const isBlocked = row.bloccato === true;
            return `<span class="pill ${isBlocked ? 'is-blocked' : 'is-active'}">${
              isBlocked ? 'Bloccato' : 'Attivo'
            }</span>`;
          },
        },
        { label: 'Azione', className: 'actions-col', action: true },
      ],
      searchText: (row) => [row.nickname, row.email],
    },
    rides: {
      title: 'Uscite',
      description:
        'Elenco uscite con filtri per stato e scadenza, selezione massiva e cancellazione via RPC amministrative.',
      listRpc: 'admin_list_rides',
      deleteRpc: 'admin_delete_rides',
      searchPlaceholder:
        'Filtra per id, titolo, stato, ruolo proponente, nickname rider, nickname passenger o partenza',
      rowSelectable: true,
      columns: [
        { label: 'Id', value: (row) => row.id || '-' },
        { label: 'Titolo Uscita', value: (row) => row.title || '-' },
        {
          label: 'Stato',
          render: (row) =>
            `<span class="pill ${rideStatusClass(row.status)}">${escapeHtml(
              row.status || '-',
            )}</span>`,
        },
        {
          label: 'Proposta da',
          value: (row) => formatUserType(row.proposed_by_role),
        },
        { label: 'Nickname rider', value: (row) => row.rider_nickname || '-' },
        {
          label: 'Nickname passenger',
          value: (row) => row.passenger_nickname || '-',
        },
        { label: 'Partenza', value: (row) => row.start_location || '-' },
        { label: 'Data uscita', value: (row) => formatDateTime(row.start_time) },
        {
          label: 'Scaduta',
          render: (row) => {
            const expired = row.is_expired === true;
            return `<span class="pill ${expired ? 'is-blocked' : 'is-active'}">${
              expired ? 'Si' : 'No'
            }</span>`;
          },
        },
      ],
      searchText: (row) => [
        row.id,
        row.title,
        row.status,
        row.proposed_by_role,
        row.rider_nickname,
        row.passenger_nickname,
        row.start_location,
      ],
    },
    illeciti: {
      title: 'Illeciti',
      description:
        'Elenco delle segnalazioni illecite con dati di segnalante e segnalato letti tramite RPC.',
      listRpc: 'admin_list_illeciti',
      searchPlaceholder: 'Filtra per nickname, email, tipo utente o note',
      columns: [
        { label: 'Nickname richiedente', value: (row) => row.segnalante_nickname || '-' },
        { label: 'Mail richiedente', value: (row) => row.segnalante_email || '-' },
        { label: 'Tipo richiedente', value: (row) => formatUserType(row.segnalante_tipo) },
        { label: 'Nickname segnalato', value: (row) => row.segnalato_nickname || '-' },
        { label: 'Mail segnalato', value: (row) => row.segnalato_email || '-' },
        { label: 'Tipo segnalato', value: (row) => formatUserType(row.segnalato_tipo) },
        { label: 'Note', value: (row) => row.note || '-' },
      ],
      searchText: (row) => [
        row.segnalante_nickname,
        row.segnalante_email,
        row.segnalante_tipo,
        row.segnalato_nickname,
        row.segnalato_email,
        row.segnalato_tipo,
        row.note,
      ],
    },
    blockedUsers: {
      title: 'Utenti Bloccati',
      description:
        'Elenco dei blocchi tra utenti con dati di bloccante e bloccato letti tramite RPC.',
      listRpc: 'admin_list_user_blocks',
      actionRpc: 'admin_delete_user_block',
      actionParam: 'p_id',
      actionSuccessMessage: 'Blocco utente rimosso.',
      searchPlaceholder: 'Filtra per nickname, email, tipo utente o note',
      rowAction: (row) => ({
        label: 'Sblocca',
        className: 'ghost-button',
        onClick: () => deleteUserBlock(row.id),
      }),
      columns: [
        { label: 'Nickname richiedente', value: (row) => row.segnalante_nickname || '-' },
        { label: 'Mail richiedente', value: (row) => row.segnalante_email || '-' },
        { label: 'Tipo richiedente', value: (row) => formatUserType(row.segnalante_tipo) },
        { label: 'Nickname segnalato', value: (row) => row.segnalato_nickname || '-' },
        { label: 'Mail segnalato', value: (row) => row.segnalato_email || '-' },
        { label: 'Tipo segnalato', value: (row) => formatUserType(row.segnalato_tipo) },
        { label: 'Note', value: (row) => row.note || '-' },
        { label: 'Azione', className: 'actions-col', action: true },
      ],
      searchText: (row) => [
        row.segnalante_nickname,
        row.segnalante_email,
        row.segnalante_tipo,
        row.segnalato_nickname,
        row.segnalato_email,
        row.segnalato_tipo,
        row.note,
      ],
    },
    telemetry: {
      title: 'Telemetria',
      description:
        'Configura la soglia dei log remoti e consulta gli eventi presenti in app_telemetry_events.',
      getRpc: 'admin_get_app_telemetry_settings',
      listRpc: 'admin_list_app_telemetry_events',
      updateRpc: 'admin_update_app_telemetry_settings',
      dataKey: 'telemetryLogs',
      searchPlaceholder:
        'Filtra per user id, nickname, email, level, tag, message o details',
      columns: [
        { label: 'Id Utente', value: (row) => row.user_id || '-' },
        { label: 'Nickname', value: (row) => row.nickname || '-' },
        { label: 'Mail', value: (row) => row.email || '-' },
        {
          label: 'Level',
          render: (row) => {
            const level = String(row.level || '').trim().toLowerCase();
            const className =
              level === 'error'
                ? 'is-blocked'
                : level === 'warning'
                  ? 'is-warning'
                  : 'is-active';
            return `<span class="pill ${className}">${escapeHtml(
              level || '-',
            )}</span>`;
          },
        },
        { label: 'Tag', value: (row) => row.tag || '-' },
        { label: 'Message', value: (row) => row.message || '-' },
        {
          label: 'Details',
          render: (row) =>
            `<pre class="json-cell">${escapeHtml(
              formatJsonCell(row.details),
            )}</pre>`,
        },
        { label: 'Client Platform', value: (row) => row.client_platform || '-' },
        { label: 'Source', value: (row) => row.source || '-' },
      ],
      searchText: (row) => [
        row.user_id,
        row.nickname,
        row.email,
        row.level,
        row.tag,
        row.message,
        formatJsonCell(row.details),
        row.client_platform,
        row.source,
      ],
    },
  };

  function showFlash(message, variant) {
    flashMessage.textContent = message;
    flashMessage.className = 'flash';
    if (variant) {
      flashMessage.classList.add(`is-${variant}`);
    }
    flashMessage.classList.remove('hidden');
    window.clearTimeout(showFlash._timerId);
    showFlash._timerId = window.setTimeout(() => {
      flashMessage.classList.add('hidden');
    }, 3600);
  }

  function renderMenu() {
    const buttons = menu.querySelectorAll('.menu-button');
    buttons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.section === state.activeSection);
    });
  }

  function getCurrentRows() {
    const meta = sectionMeta[state.activeSection] || {};
    const dataKey = meta.dataKey || state.activeSection;
    return state[dataKey] || [];
  }

  function getFilteredRows() {
    const rows = getCurrentRows();
    const meta = sectionMeta[state.activeSection];
    const query = state.search.trim().toLowerCase();
    if (!query) return rows;
    return rows.filter((row) =>
      (meta.searchText ? meta.searchText(row) : [row.nickname, row.email]).some((value) =>
        String(value || '').toLowerCase().includes(query),
      ),
    );
  }

  function renderTableHead(columns) {
    tableHead.innerHTML = '';
    const tr = document.createElement('tr');
    const meta = sectionMeta[state.activeSection];

    if (meta.rowSelectable) {
      const th = document.createElement('th');
      th.className = 'select-col';
      th.textContent = 'Sel.';
      tr.appendChild(th);
    }

    columns.forEach((column) => {
      const th = document.createElement('th');
      th.textContent = column.label;
      if (column.className) {
        th.className = column.className;
      }
      tr.appendChild(th);
    });
    tableHead.appendChild(tr);
  }

  function renderRideControls(rows) {
    const isRidesSection = state.activeSection === 'rides';
    rideFilters.classList.toggle('hidden', !isRidesSection);
    bulkActions.classList.toggle('hidden', !isRidesSection);

    if (!isRidesSection) return;

    rideStatusFilter.value = state.rideFilters.status;
    rideExpiredFilter.value = state.rideFilters.expired;
    updateRideBulkActions(rows);
  }

  function updateRideBulkActions(rows) {
    if (state.activeSection !== 'rides') return;

    const visibleIds = rows.map((row) => row.id).filter(Boolean);
    const selectedVisibleCount = visibleIds.filter((id) => state.selectedRideIds.has(id)).length;
    const selectedCount = state.selectedRideIds.size;

    selectedRowsCount.textContent =
      selectedCount === 1 ? '1 selezionata' : `${selectedCount} selezionate`;
    deleteSelectedButton.disabled = selectedCount === 0;
    selectAllRowsCheckbox.checked =
      visibleIds.length > 0 && selectedVisibleCount === visibleIds.length;
    selectAllRowsCheckbox.indeterminate =
      selectedVisibleCount > 0 && selectedVisibleCount < visibleIds.length;
  }

  function renderTable() {
    const meta = sectionMeta[state.activeSection];
    const isTelemetrySection = state.activeSection === 'telemetry';
    const rows = getFilteredRows();

    sectionTitle.textContent = meta.title;
    sectionDescription.textContent = meta.description;
    searchInput.placeholder = meta.searchPlaceholder || 'Filtra risultati';
    itemsCount.textContent = String(
      typeof meta.metricValue === 'function' ? meta.metricValue() : rows.length,
    );
    searchInput.closest('.field').classList.toggle('hidden', meta.hideSearch === true);
    telemetryPanel.classList.toggle('hidden', !isTelemetrySection);
    tableHead.parentElement.parentElement.classList.toggle(
      'hidden',
      meta.hideTable === true,
    );
    renderRideControls(rows);

    if (isTelemetrySection) renderTelemetryPanel();

    renderTableHead(meta.columns);
    tableBody.innerHTML = '';

    if (state.loadingSection) {
      tableState.textContent = 'Caricamento in corso...';
      tableState.classList.remove('hidden');
      updateRideBulkActions(rows);
      return;
    }

    if (!rows.length) {
      tableState.textContent = 'Nessun risultato disponibile per la selezione corrente.';
      tableState.classList.remove('hidden');
      updateRideBulkActions(rows);
      return;
    }

    tableState.classList.add('hidden');

    rows.forEach((row) => {
      const tr = document.createElement('tr');

      if (meta.rowSelectable) {
        const td = document.createElement('td');
        td.className = 'select-col';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = state.selectedRideIds.has(row.id);
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            state.selectedRideIds.add(row.id);
          } else {
            state.selectedRideIds.delete(row.id);
          }
          updateRideBulkActions(getFilteredRows());
        });
        td.appendChild(checkbox);
        tr.appendChild(td);
      }

      meta.columns.forEach((column) => {
        const td = document.createElement('td');
        if (column.className) {
          td.className = column.className === 'actions-col' ? 'row-actions' : column.className;
        }

        if (column.action) {
          const action = meta.rowAction ? meta.rowAction(row) : null;
          if (!action) {
            tr.appendChild(td);
            return;
          }
          const button = document.createElement('button');
          button.type = 'button';
          button.className = action.className || 'ghost-button';
          button.textContent = action.label || 'Azione';
          button.addEventListener('click', action.onClick);
          td.appendChild(button);
        } else if (column.render) {
          td.innerHTML = column.render(row);
        } else {
          td.textContent = String(column.value(row));
        }

        tr.appendChild(td);
      });

      tableBody.appendChild(tr);
    });

    updateRideBulkActions(rows);
  }

  function formatTelemetryLevel(level) {
    switch (String(level || '').trim().toLowerCase()) {
      case 'off':
        return 'Off';
      case 'error':
        return 'Solo error';
      case 'warning':
        return 'Warning + error';
      case 'info':
        return 'Info + warning + error';
      default:
        return '-';
    }
  }

  function formatDateTime(value) {
    if (!value) return '-';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '-';
    return new Intl.DateTimeFormat('it-IT', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(date);
  }

  function formatJsonCell(value) {
    if (value == null) return '-';
    if (typeof value === 'string') return value;
    try {
      return JSON.stringify(value, null, 2);
    } catch (_) {
      return String(value);
    }
  }

  function renderTelemetryPanel() {
    const settings = state.telemetry || {};
    const level = String(settings.remote_min_level || 'error').trim().toLowerCase();
    telemetryLevelSelect.value = ['off', 'error', 'warning', 'info'].includes(level)
      ? level
      : 'error';
    telemetryCurrentLevel.textContent = formatTelemetryLevel(level);
    telemetryUpdatedAt.textContent = formatDateTime(settings.updated_at);
  }

  async function callRpc(name, params) {
    const { data, error } = await state.supabase.rpc(name, params || {});
    if (error) throw error;
    return data;
  }

  async function ensureAdminContext() {
    try {
      const sessionResult = await state.supabase.auth.getSession();
      const session = sessionResult.data.session;
      if (!session) {
        state.session = null;
        state.admin = null;
        renderSignedOut();
        return false;
      }

      state.session = session;
      state.admin = await callRpc('admin_get_session_context');
      renderSignedIn();
      return true;
    } catch (error) {
      await state.supabase.auth.signOut();
      state.session = null;
      state.admin = null;
      renderSignedOut();
      showFlash('Accesso amministratore non autorizzato.', 'error');
      return false;
    }
  }

  function buildRideFilterPayload() {
    const status = String(state.rideFilters.status || '').trim();
    const expired = String(state.rideFilters.expired || 'all').trim().toLowerCase();

    return {
      p_status: status || null,
      p_is_expired:
        expired === 'expired' ? true : expired === 'upcoming' ? false : null,
    };
  }

  async function loadSection(sectionName) {
    state.activeSection = sectionName;
    if (sectionName !== 'rides') {
      state.selectedRideIds.clear();
    }
    renderMenu();
    state.loadingSection = true;
    renderTable();
    try {
      const meta = sectionMeta[sectionName];
      if (sectionName === 'telemetry') {
        const [settings, rows] = await Promise.all([
          callRpc(meta.getRpc),
          callRpc(meta.listRpc),
        ]);
        state.telemetry = settings || null;
        state.telemetryLogs = Array.isArray(rows) ? rows : [];
      } else if (sectionName === 'rides') {
        const rows = await callRpc(meta.listRpc, buildRideFilterPayload());
        state.rides = Array.isArray(rows) ? rows : [];
        state.selectedRideIds = new Set(
          Array.from(state.selectedRideIds).filter((id) =>
            state.rides.some((row) => row.id === id),
          ),
        );
      } else {
        const rows = await callRpc(meta.listRpc);
        state[sectionName] = Array.isArray(rows) ? rows : [];
      }
      state.loadingSection = false;
      renderTable();
    } catch (error) {
      state.loadingSection = false;
      renderTable();
      showFlash(normalizeError(error), 'error');
    }
  }

  async function toggleBlocked(userId, blocked) {
    const meta = sectionMeta[state.activeSection];
    if (!meta.toggleRpc) return;
    const payload = {
      [meta.toggleParam]: userId,
      p_blocked: blocked,
    };

    try {
      await callRpc(meta.toggleRpc, payload);
      showFlash(blocked ? 'Utente bloccato.' : 'Utente sbloccato.', 'success');
      await loadSection(state.activeSection);
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    }
  }

  async function deleteUserBlock(blockId) {
    const meta = sectionMeta[state.activeSection];
    if (!meta.actionRpc) return;

    try {
      await callRpc(meta.actionRpc, {
        [meta.actionParam]: blockId,
      });
      showFlash(meta.actionSuccessMessage || 'Operazione completata.', 'success');
      await loadSection(state.activeSection);
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    }
  }

  async function deleteSelectedRides() {
    const rideIds = Array.from(state.selectedRideIds);
    if (!rideIds.length) return;

    const confirmed = window.confirm(
      rideIds.length === 1
        ? 'Confermi la cancellazione dell\'uscita selezionata?'
        : `Confermi la cancellazione di ${rideIds.length} uscite selezionate?`,
    );
    if (!confirmed) return;

    deleteSelectedButton.disabled = true;
    deleteSelectedButton.textContent = 'Eliminazione...';

    try {
      const result = await callRpc(sectionMeta.rides.deleteRpc, {
        p_ride_ids: rideIds,
      });
      const deleted = Number(result && result.deleted ? result.deleted : 0);
      state.selectedRideIds.clear();
      showFlash(
        deleted === 1 ? '1 uscita eliminata.' : `${deleted} uscite eliminate.`,
        'success',
      );
      await loadSection('rides');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      deleteSelectedButton.textContent = 'Elimina selezionate';
      deleteSelectedButton.disabled = state.selectedRideIds.size === 0;
    }
  }

  async function saveTelemetrySettings() {
    const meta = sectionMeta.telemetry;
    const level = telemetryLevelSelect.value;
    telemetrySaveButton.disabled = true;
    telemetrySaveButton.textContent = 'Salvataggio...';

    try {
      const updated = await callRpc(meta.updateRpc, {
        p_remote_min_level: level,
      });
      state.telemetry = updated || {
        remote_min_level: level,
      };
      renderTelemetryPanel();
      showFlash('Soglia telemetria aggiornata.', 'success');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      telemetrySaveButton.disabled = false;
      telemetrySaveButton.textContent = 'Salva soglia log';
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    if (!state.supabase) {
      showFlash('Config admin non pronta per l\'ambiente selezionato.', 'error');
      return;
    }
    const identifier = identifierInput.value.trim();
    const password = passwordInput.value;

    if (!identifier || !password) {
      showFlash('Inserisci username o email e password.', 'error');
      return;
    }

    loginButton.disabled = true;
    loginButton.textContent = 'Accesso in corso...';

    try {
      const resolved = await callRpc('admin_resolve_login_identifier', {
        p_identifier: identifier,
      });

      if (!resolved || !resolved.email) {
        throw new Error('Amministratore non autorizzato.');
      }

      const authResult = await state.supabase.auth.signInWithPassword({
        email: resolved.email,
        password,
      });

      if (authResult.error) throw authResult.error;

      const hasContext = await ensureAdminContext();
      if (hasContext) {
        passwordInput.value = '';
        showFlash('Login effettuato con successo.', 'success');
        await loadSection(state.activeSection);
      }
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      loginButton.disabled = false;
      loginButton.textContent = 'Accedi';
    }
  }

  async function handleLogout() {
    if (!state.supabase) {
      renderSignedOut();
      return;
    }
    await state.supabase.auth.signOut();
    state.session = null;
    state.admin = null;
    renderSignedOut();
    showFlash('Sessione chiusa.', 'success');
  }

  function renderSignedOut() {
    loginView.classList.remove('hidden');
    dashboardView.classList.add('hidden');
    menu.classList.add('hidden');
    logoutButton.classList.add('hidden');
    adminIdentity.classList.add('hidden');
    passwordInput.value = '';
  }

  function renderSignedIn() {
    loginView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
    menu.classList.remove('hidden');
    logoutButton.classList.remove('hidden');
    adminIdentity.classList.remove('hidden');
    adminIdentity.textContent = `${state.admin.username} · ${state.admin.email}`;
  }

  function normalizeError(error) {
    if (!error) return 'Errore non previsto.';
    if (typeof error === 'string') return error;
    if (error.message) return error.message;
    return 'Errore non previsto.';
  }

  function formatUserType(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'biker' || normalized === 'rider') return 'Biker';
    if (normalized === 'passenger') return 'Passenger';
    return normalized || '-';
  }

  function rideStatusClass(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'open' || normalized === 'reserved' || normalized === 'closed') {
      return 'is-active';
    }
    if (normalized === 'completed') {
      return 'is-warning';
    }
    return 'is-blocked';
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function attachEvents() {
    loginForm.addEventListener('submit', handleLogin);
    logoutButton.addEventListener('click', handleLogout);
    refreshButton.addEventListener('click', () => loadSection(state.activeSection));
    searchInput.addEventListener('input', (event) => {
      state.search = event.target.value;
      renderTable();
    });
    rideStatusFilter.addEventListener('change', (event) => {
      state.rideFilters.status = event.target.value;
      state.selectedRideIds.clear();
      loadSection('rides');
    });
    rideExpiredFilter.addEventListener('change', (event) => {
      state.rideFilters.expired = event.target.value;
      state.selectedRideIds.clear();
      loadSection('rides');
    });
    selectAllRowsCheckbox.addEventListener('change', () => {
      if (state.activeSection !== 'rides') return;
      const visibleIds = getFilteredRows().map((row) => row.id).filter(Boolean);
      if (selectAllRowsCheckbox.checked) {
        visibleIds.forEach((id) => state.selectedRideIds.add(id));
      } else {
        visibleIds.forEach((id) => state.selectedRideIds.delete(id));
      }
      renderTable();
    });
    deleteSelectedButton.addEventListener('click', deleteSelectedRides);
    menu.addEventListener('click', (event) => {
      const button = event.target.closest('.menu-button');
      if (!button) return;
      const sectionName = button.dataset.section;
      if (!sectionMeta[sectionName]) return;
      loadSection(sectionName);
    });
    telemetrySaveButton.addEventListener('click', saveTelemetrySettings);
  }

  function renderEnvironmentBadge() {
    const config = getConfig();
    const environmentLabel =
      (config.environmentLabel || config.environment || 'prod').trim();
    if (!environmentBadge) return;
    environmentBadge.textContent = `Env: ${environmentLabel}`;
    environmentBadge.classList.remove('hidden');
  }

  async function bootstrap() {
    stripSensitiveLoginParams();

    state.config = await (
      window.PASSENGERS_ADMIN_CONFIG_PROMISE ||
      Promise.resolve(window.PASSENGERS_ADMIN_CONFIG || {})
    );

    const config = getConfig();
    const supabaseUrl = (config.supabaseUrl || '').trim();
    const supabaseAnonKey = (config.supabaseAnonKey || '').trim();
    const anonKeyStorageKey = (config.anonKeyStorageKey || '').trim();
    const authStorageKey = (config.authStorageKey || '').trim();

    attachEvents();
    renderEnvironmentBadge();
    renderSignedOut();

    if (!supabaseUrl || !supabaseAnonKey) {
      const storageHint = anonKeyStorageKey
        ? ` oppure salva la chiave in localStorage con la chiave ${anonKeyStorageKey}`
        : '';
      showFlash(
        `Config admin mancante: apri la pagina con ?anonKey=LA_TUA_CHIAVE${storageHint}.`,
        'error',
      );
      return;
    }

    state.supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: authStorageKey || undefined,
        storage: authSessionStorage,
      },
    });

    const hasContext = await ensureAdminContext();
    if (hasContext) {
      await loadSection(state.activeSection);
    }
  }

  bootstrap();
})();
