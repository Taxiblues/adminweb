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
  const summaryPanel = document.getElementById('summaryPanel');
  const summaryGrid = document.getElementById('summaryGrid');
  const telemetryPanel = document.getElementById('telemetryPanel');
  const telemetryLevelSelect = document.getElementById('telemetryLevelSelect');
  const telemetryCurrentLevel = document.getElementById('telemetryCurrentLevel');
  const telemetryUpdatedAt = document.getElementById('telemetryUpdatedAt');
  const telemetrySaveButton = document.getElementById('telemetrySaveButton');
  const appUpdatePanel = document.getElementById('appUpdatePanel');
  const appUpdateForceToggle = document.getElementById('appUpdateForceToggle');
  const appUpdateCurrentMode = document.getElementById('appUpdateCurrentMode');
  const appUpdateUpdatedAt = document.getElementById('appUpdateUpdatedAt');
  const appUpdateTitleInput = document.getElementById('appUpdateTitleInput');
  const appUpdateBodyInput = document.getElementById('appUpdateBodyInput');
  const androidMinBuildInput = document.getElementById('androidMinBuildInput');
  const androidMinVersionInput = document.getElementById('androidMinVersionInput');
  const androidLatestBuildInput = document.getElementById('androidLatestBuildInput');
  const androidLatestVersionInput = document.getElementById('androidLatestVersionInput');
  const androidStoreUrlInput = document.getElementById('androidStoreUrlInput');
  const iosMinBuildInput = document.getElementById('iosMinBuildInput');
  const iosMinVersionInput = document.getElementById('iosMinVersionInput');
  const iosLatestBuildInput = document.getElementById('iosLatestBuildInput');
  const iosLatestVersionInput = document.getElementById('iosLatestVersionInput');
  const iosStoreUrlInput = document.getElementById('iosStoreUrlInput');
  const appUpdateSaveButton = document.getElementById('appUpdateSaveButton');
  const blockedWordsPanel = document.getElementById('blockedWordsPanel');
  const blockedWordsForm = document.getElementById('blockedWordsForm');
  const blockedWordInput = document.getElementById('blockedWordInput');
  const blockedWordAddButton = document.getElementById('blockedWordAddButton');

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
    blockedWords: [],
    summary: null,
    telemetry: null,
    telemetryLogs: [],
    appUpdateSettings: null,
    selectedRowIds: new Set(),
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
    summary: {
      title: 'Summary',
      description:
        'Sintesi rapida dei principali indicatori operativi dell’app.',
      getRpc: 'admin_get_summary',
      hideSearch: true,
      hideTable: true,
      metricValue: () => 7,
      columns: [],
    },
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
      deleteParam: 'p_ride_ids',
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
      deleteRpc: 'admin_delete_illeciti',
      deleteParam: 'p_ids',
      rowSelectable: true,
      deleteConfirmSingular: 'Confermi la cancellazione della segnalazione selezionata?',
      deleteConfirmPlural: (count) =>
        `Confermi la cancellazione di ${count} segnalazioni selezionate?`,
      deleteButtonLabel: 'Elimina selezionate',
      deleteProgressLabel: 'Eliminazione...',
      deleteSuccessSingular: '1 segnalazione eliminata.',
      deleteSuccessPlural: (count) => `${count} segnalazioni eliminate.`,
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
    blockedWords: {
      title: 'Parole non ammesse',
      description:
        'Gestisci l\'elenco delle parole o espressioni bloccate nei controlli contenuti lato backend.',
      listRpc: 'admin_list_blocked_words',
      addRpc: 'admin_add_blocked_word',
      deleteRpc: 'admin_delete_blocked_words',
      deleteParam: 'p_ids',
      rowSelectable: true,
      deleteConfirmSingular: 'Confermi la cancellazione della parola selezionata?',
      deleteConfirmPlural: (count) =>
        `Confermi la cancellazione di ${count} parole selezionate?`,
      deleteButtonLabel: 'Elimina selezionate',
      deleteProgressLabel: 'Eliminazione...',
      deleteSuccessSingular: '1 parola eliminata.',
      deleteSuccessPlural: (count) => `${count} parole eliminate.`,
      searchPlaceholder: 'Filtra per parola o data di creazione',
      columns: [
        { label: 'Id', value: (row) => row.id || '-' },
        { label: 'Parola', value: (row) => row.parola || '-' },
        { label: 'Creata il', value: (row) => formatDateTime(row.created_at) },
      ],
      searchText: (row) => [row.id, row.parola, row.created_at],
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
      deleteRpc: 'admin_delete_app_telemetry_events',
      deleteParam: 'p_ids',
      dataKey: 'telemetryLogs',
      rowSelectable: true,
      deleteConfirmSingular: 'Confermi la cancellazione dell\'evento telemetria selezionato?',
      deleteConfirmPlural: (count) =>
        `Confermi la cancellazione di ${count} eventi telemetria selezionati?`,
      deleteButtonLabel: 'Elimina selezionate',
      deleteProgressLabel: 'Eliminazione...',
      deleteSuccessSingular: '1 evento telemetria eliminato.',
      deleteSuccessPlural: (count) => `${count} eventi telemetria eliminati.`,
      searchPlaceholder:
        'Filtra per user id, nickname, email, level, tag, message o details',
      columns: [
        { label: 'Id', value: (row) => row.id || '-' },
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
        { label: 'Creato il', value: (row) => formatDateTime(row.created_at) },
      ],
      searchText: (row) => [
        row.id,
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
    appUpdates: {
      title: 'Aggiornamenti App',
      description:
        'Configura per piattaforma la versione minima supportata, la versione consigliata e il link diretto allo store.',
      getRpc: 'admin_get_app_update_settings',
      updateRpc: 'admin_update_app_update_settings',
      hideSearch: true,
      hideTable: true,
      metricValue: () => 1,
      columns: [],
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

  function getRowId(row) {
    return row && row.id != null ? row.id : null;
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

  function renderSectionControls(rows) {
    const meta = sectionMeta[state.activeSection];
    const isRidesSection = state.activeSection === 'rides';
    const supportsBulkActions = meta.rowSelectable === true;
    rideFilters.classList.toggle('hidden', !isRidesSection);
    bulkActions.classList.toggle('hidden', !supportsBulkActions);

    if (isRidesSection) {
      rideStatusFilter.value = state.rideFilters.status;
      rideExpiredFilter.value = state.rideFilters.expired;
    }

    updateSelectionBulkActions(rows);
  }

  function updateSelectionBulkActions(rows) {
    const meta = sectionMeta[state.activeSection];
    if (meta.rowSelectable !== true) {
      selectedRowsCount.textContent = '0 selezionate';
      deleteSelectedButton.disabled = true;
      selectAllRowsCheckbox.checked = false;
      selectAllRowsCheckbox.indeterminate = false;
      return;
    }

    const visibleIds = rows.map((row) => getRowId(row)).filter((id) => id != null);
    const selectedVisibleCount = visibleIds.filter((id) => state.selectedRowIds.has(id)).length;
    const selectedCount = state.selectedRowIds.size;
    const deleteButtonLabel = meta.deleteButtonLabel || 'Elimina selezionate';

    selectedRowsCount.textContent =
      selectedCount === 1 ? '1 selezionata' : `${selectedCount} selezionate`;
    deleteSelectedButton.disabled = selectedCount === 0;
    deleteSelectedButton.textContent = deleteButtonLabel;
    selectAllRowsCheckbox.checked =
      visibleIds.length > 0 && selectedVisibleCount === visibleIds.length;
    selectAllRowsCheckbox.indeterminate =
      selectedVisibleCount > 0 && selectedVisibleCount < visibleIds.length;
  }

  function renderTable() {
    const meta = sectionMeta[state.activeSection];
    const isSummarySection = state.activeSection === 'summary';
    const isTelemetrySection = state.activeSection === 'telemetry';
    const isAppUpdatesSection = state.activeSection === 'appUpdates';
    const isBlockedWordsSection = state.activeSection === 'blockedWords';
    const rows = getFilteredRows();

    sectionTitle.textContent = meta.title;
    sectionDescription.textContent = meta.description;
    searchInput.placeholder = meta.searchPlaceholder || 'Filtra risultati';
    itemsCount.textContent = String(
      typeof meta.metricValue === 'function' ? meta.metricValue() : rows.length,
    );
    searchInput.closest('.field').classList.toggle('hidden', meta.hideSearch === true);
    summaryPanel.classList.toggle('hidden', !isSummarySection);
    telemetryPanel.classList.toggle('hidden', !isTelemetrySection);
    appUpdatePanel.classList.toggle('hidden', !isAppUpdatesSection);
    blockedWordsPanel.classList.toggle('hidden', !isBlockedWordsSection);
    tableHead.parentElement.parentElement.classList.toggle(
      'hidden',
      meta.hideTable === true,
    );
    renderSectionControls(rows);

    if (isSummarySection) renderSummaryPanel();
    if (isTelemetrySection) renderTelemetryPanel();
    if (isAppUpdatesSection) renderAppUpdatePanel();

    if (meta.hideTable === true) {
      tableHead.innerHTML = '';
      tableBody.innerHTML = '';
      tableState.classList.add('hidden');
      updateSelectionBulkActions(rows);
      return;
    }

    renderTableHead(meta.columns);
    tableBody.innerHTML = '';

    if (state.loadingSection) {
      tableState.textContent = 'Caricamento in corso...';
      tableState.classList.remove('hidden');
      updateSelectionBulkActions(rows);
      return;
    }

    if (!rows.length) {
      tableState.textContent = 'Nessun risultato disponibile per la selezione corrente.';
      tableState.classList.remove('hidden');
      updateSelectionBulkActions(rows);
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
        const rowId = getRowId(row);
        checkbox.checked = state.selectedRowIds.has(rowId);
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            state.selectedRowIds.add(rowId);
          } else {
            state.selectedRowIds.delete(rowId);
          }
          updateSelectionBulkActions(getFilteredRows());
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

    updateSelectionBulkActions(rows);
  }

  function renderSummaryPanel() {
    const summary = state.summary || {};
    const tiles = [
      {
        label: 'Numero di Biker registrati',
        value: summary.bikers_registered ?? 0,
        note: 'Totale profili biker presenti in app',
      },
      {
        label: 'Numero di Passengers registrati',
        value: summary.passengers_registered ?? 0,
        note: 'Totale profili passenger presenti in app',
      },
      {
        label: 'Numero di uscite aperte',
        value: summary.rides_open ?? 0,
        note: 'Record in rides con status = open',
      },
      {
        label: 'Numero di uscite prenotate',
        value: summary.rides_completed ?? 0,
        note: 'Record in rides con status = completed',
      },
      {
        label: 'Numero uscite cancellate',
        value: summary.rides_deleted ?? 0,
        note: 'Record in rides con status = deleted',
      },
      {
        label: 'Numero utenti bloccati',
        value: summary.blocked_users ?? 0,
        note: 'Utenti con profilo amministrativamente bloccato',
      },
      {
        label: 'Numero illeciti',
        value: summary.illeciti_total ?? 0,
        note: 'Segnalazioni illecite registrate',
      },
    ];

    summaryGrid.innerHTML = '';
    tiles.forEach((tile) => {
      const article = document.createElement('article');
      article.className = 'summary-tile';
      article.innerHTML = `
        <span class="summary-tile-label">${escapeHtml(tile.label)}</span>
        <strong class="summary-tile-value">${escapeHtml(tile.value)}</strong>
        <span class="summary-tile-note">${escapeHtml(tile.note)}</span>
      `;
      summaryGrid.appendChild(article);
    });
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

  function renderAppUpdatePanel() {
    const settings = state.appUpdateSettings || {};
    appUpdateForceToggle.checked = settings.force_update === true;
    appUpdateCurrentMode.textContent = settings.force_update === true ? 'Blocco attivo' : 'Solo suggerimento';
    appUpdateUpdatedAt.textContent = formatDateTime(settings.updated_at);
    appUpdateTitleInput.value = settings.message_title || 'Aggiornamento disponibile';
    appUpdateBodyInput.value =
      settings.message_body ||
      'E disponibile una nuova versione dell\'app. Aggiorna per continuare con miglioramenti e correzioni.';
    androidMinBuildInput.value = settings.android_min_supported_build ?? '';
    androidMinVersionInput.value = settings.android_min_supported_version || '';
    androidLatestBuildInput.value = settings.android_latest_recommended_build ?? '';
    androidLatestVersionInput.value = settings.android_latest_recommended_version || '';
    androidStoreUrlInput.value = settings.android_store_url || '';
    iosMinBuildInput.value = settings.ios_min_supported_build ?? '';
    iosMinVersionInput.value = settings.ios_min_supported_version || '';
    iosLatestBuildInput.value = settings.ios_latest_recommended_build ?? '';
    iosLatestVersionInput.value = settings.ios_latest_recommended_version || '';
    iosStoreUrlInput.value = settings.ios_store_url || '';
  }

  function parseOptionalIntegerInput(value) {
    const normalized = String(value || '').trim();
    if (!normalized) return null;
    const parsed = Number.parseInt(normalized, 10);
    return Number.isFinite(parsed) ? parsed : null;
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
    state.selectedRowIds.clear();
    renderMenu();
    state.loadingSection = true;
    renderTable();
    try {
      const meta = sectionMeta[sectionName];
      if (sectionName === 'summary') {
        const summary = await callRpc(meta.getRpc);
        state.summary = summary || null;
      } else if (sectionName === 'telemetry') {
        const [settings, rows] = await Promise.all([
          callRpc(meta.getRpc),
          callRpc(meta.listRpc),
        ]);
        state.telemetry = settings || null;
        state.telemetryLogs = Array.isArray(rows) ? rows : [];
      } else if (sectionName === 'appUpdates') {
        const settings = await callRpc(meta.getRpc);
        state.appUpdateSettings = settings || null;
      } else if (sectionName === 'rides') {
        const rows = await callRpc(meta.listRpc, buildRideFilterPayload());
        state.rides = Array.isArray(rows) ? rows : [];
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

  async function deleteSelectedRows() {
    const meta = sectionMeta[state.activeSection];
    const rowIds = Array.from(state.selectedRowIds);
    if (!meta.deleteRpc || !rowIds.length) return;

    const confirmMessage =
      rowIds.length === 1
        ? meta.deleteConfirmSingular || 'Confermi la cancellazione della riga selezionata?'
        : typeof meta.deleteConfirmPlural === 'function'
          ? meta.deleteConfirmPlural(rowIds.length)
          : `Confermi la cancellazione di ${rowIds.length} righe selezionate?`;
    const confirmed = window.confirm(confirmMessage);
    if (!confirmed) return;

    deleteSelectedButton.disabled = true;
    deleteSelectedButton.textContent = meta.deleteProgressLabel || 'Eliminazione...';

    try {
      const deleteParam = meta.deleteParam || 'p_ids';
      const result = await callRpc(meta.deleteRpc, {
        [deleteParam]: rowIds,
      });
      const deleted = Number(result && result.deleted ? result.deleted : 0);
      state.selectedRowIds.clear();
      const successMessage =
        deleted === 1
          ? meta.deleteSuccessSingular || '1 riga eliminata.'
          : typeof meta.deleteSuccessPlural === 'function'
            ? meta.deleteSuccessPlural(deleted)
            : `${deleted} righe eliminate.`;
      showFlash(
        successMessage,
        'success',
      );
      await loadSection(state.activeSection);
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      deleteSelectedButton.textContent = meta.deleteButtonLabel || 'Elimina selezionate';
      deleteSelectedButton.disabled = state.selectedRowIds.size === 0;
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

  async function saveAppUpdateSettings() {
    const meta = sectionMeta.appUpdates;
    appUpdateSaveButton.disabled = true;
    appUpdateSaveButton.textContent = 'Salvataggio...';

    try {
      const updated = await callRpc(meta.updateRpc, {
        p_force_update: appUpdateForceToggle.checked,
        p_message_title: appUpdateTitleInput.value.trim(),
        p_message_body: appUpdateBodyInput.value.trim(),
        p_android_min_supported_build: parseOptionalIntegerInput(androidMinBuildInput.value),
        p_android_min_supported_version: androidMinVersionInput.value.trim() || null,
        p_android_latest_recommended_build: parseOptionalIntegerInput(
          androidLatestBuildInput.value,
        ),
        p_android_latest_recommended_version:
          androidLatestVersionInput.value.trim() || null,
        p_android_store_url: androidStoreUrlInput.value.trim() || null,
        p_ios_min_supported_build: parseOptionalIntegerInput(iosMinBuildInput.value),
        p_ios_min_supported_version: iosMinVersionInput.value.trim() || null,
        p_ios_latest_recommended_build: parseOptionalIntegerInput(
          iosLatestBuildInput.value,
        ),
        p_ios_latest_recommended_version: iosLatestVersionInput.value.trim() || null,
        p_ios_store_url: iosStoreUrlInput.value.trim() || null,
      });
      state.appUpdateSettings = updated || null;
      renderAppUpdatePanel();
      showFlash('Configurazione aggiornamenti salvata.', 'success');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      appUpdateSaveButton.disabled = false;
      appUpdateSaveButton.textContent = 'Salva configurazione update';
    }
  }

  async function addBlockedWord(event) {
    event.preventDefault();
    const meta = sectionMeta.blockedWords;
    const word = blockedWordInput.value.trim();

    if (!word) {
      showFlash('Inserisci una parola da bloccare.', 'error');
      blockedWordInput.focus();
      return;
    }

    blockedWordAddButton.disabled = true;
    blockedWordAddButton.textContent = 'Salvataggio...';

    try {
      await callRpc(meta.addRpc, {
        p_parola: word,
      });
      blockedWordInput.value = '';
      showFlash('Parola bloccata aggiunta.', 'success');
      await loadSection('blockedWords');
      blockedWordInput.focus();
    } catch (error) {
      showFlash(normalizeError(error), 'error');
      blockedWordInput.focus();
    } finally {
      blockedWordAddButton.disabled = false;
      blockedWordAddButton.textContent = 'Aggiungi parola';
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
      state.selectedRowIds.clear();
      loadSection('rides');
    });
    rideExpiredFilter.addEventListener('change', (event) => {
      state.rideFilters.expired = event.target.value;
      state.selectedRowIds.clear();
      loadSection('rides');
    });
    selectAllRowsCheckbox.addEventListener('change', () => {
      const meta = sectionMeta[state.activeSection];
      if (meta.rowSelectable !== true) return;
      const visibleIds = getFilteredRows().map((row) => getRowId(row)).filter((id) => id != null);
      if (selectAllRowsCheckbox.checked) {
        visibleIds.forEach((id) => state.selectedRowIds.add(id));
      } else {
        visibleIds.forEach((id) => state.selectedRowIds.delete(id));
      }
      renderTable();
    });
    deleteSelectedButton.addEventListener('click', deleteSelectedRows);
    menu.addEventListener('click', (event) => {
      const button = event.target.closest('.menu-button');
      if (!button) return;
      const sectionName = button.dataset.section;
      if (!sectionMeta[sectionName]) return;
      loadSection(sectionName);
    });
    telemetrySaveButton.addEventListener('click', saveTelemetrySettings);
    appUpdateSaveButton.addEventListener('click', saveAppUpdateSettings);
    blockedWordsForm.addEventListener('submit', addBlockedWord);
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
