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
  const announcementsPanel = document.getElementById('announcementsPanel');
  const announcementIdInput = document.getElementById('announcementIdInput');
  const announcementTitleInput = document.getElementById('announcementTitleInput');
  const announcementBodyInput = document.getElementById('announcementBodyInput');
  const announcementLinkUrlInput = document.getElementById(
    'announcementLinkUrlInput',
  );
  const announcementLinkLabelInput = document.getElementById(
    'announcementLinkLabelInput',
  );
  const announcementAudienceSelect = document.getElementById(
    'announcementAudienceSelect',
  );
  const announcementActiveToggle = document.getElementById(
    'announcementActiveToggle',
  );
  const announcementStartsInput = document.getElementById('announcementStartsInput');
  const announcementEndsInput = document.getElementById('announcementEndsInput');
  const announcementResetButton = document.getElementById('announcementResetButton');
  const announcementSaveButton = document.getElementById('announcementSaveButton');
  const announcementsForm = document.getElementById('announcementsForm');
  const blockedWordsPanel = document.getElementById('blockedWordsPanel');
  const blockedWordsForm = document.getElementById('blockedWordsForm');
  const blockedWordInput = document.getElementById('blockedWordInput');
  const blockedWordAddButton = document.getElementById('blockedWordAddButton');
  const eventsPanel = document.getElementById('eventsPanel');
  const eventsForm = document.getElementById('eventsForm');
  const eventIdInput = document.getElementById('eventIdInput');
  const eventPosterPathInput = document.getElementById('eventPosterPathInput');
  const eventTitleInput = document.getElementById('eventTitleInput');
  const eventDateInput = document.getElementById('eventDateInput');
  const eventExpiresInput = document.getElementById('eventExpiresInput');
  const eventStatusInput = document.getElementById('eventStatusInput');
  const eventDescriptionInput = document.getElementById('eventDescriptionInput');
  const eventUrlInput = document.getElementById('eventUrlInput');
  const eventPosterInput = document.getElementById('eventPosterInput');
  const eventPosterPreview = document.getElementById('eventPosterPreview');
  const eventResetButton = document.getElementById('eventResetButton');
  const eventSaveButton = document.getElementById('eventSaveButton');
  const communicationsPanel = document.getElementById('communicationsPanel');
  const communicationActiveDevicesCount = document.getElementById(
    'communicationActiveDevicesCount',
  );
  const communicationActiveUsersCount = document.getElementById(
    'communicationActiveUsersCount',
  );
  const communicationQueuedCount = document.getElementById(
    'communicationQueuedCount',
  );
  const communicationLastBroadcastAt = document.getElementById(
    'communicationLastBroadcastAt',
  );
  const communicationActiveWindowLabel = document.getElementById(
    'communicationActiveWindowLabel',
  );
  const communicationTitleInput = document.getElementById(
    'communicationTitleInput',
  );
  const communicationBodyInput = document.getElementById(
    'communicationBodyInput',
  );
  const communicationSendButton = document.getElementById(
    'communicationSendButton',
  );

  const state = {
    supabase: null,
    session: null,
    admin: null,
    config: null,
    activeSection: 'riders',
    riders: [],
    passengers: [],
    rides: [],
    events: [],
    illeciti: [],
    safetyEvents: [],
    blockedUsers: [],
    blockedWords: [],
    communications: [],
    summary: null,
    telemetry: null,
    telemetryLogs: [],
    appUpdateSettings: null,
    announcements: [],
    announcementDraft: {
      id: '',
      title: '',
      body: '',
      linkUrl: '',
      linkLabel: '',
      audience: 'all',
      isActive: true,
      startsAt: '',
      endsAt: '',
    },
    communicationSummary: null,
    communicationDraft: {
      title: 'Aggiornamento Passengers',
      body: '',
      activeWithinDays: 30,
    },
    eventDraft: {
      id: '',
      title: '',
      description: '',
      eventDate: '',
      expiresAt: '',
      status: 'active',
      externalUrl: '',
      posterImagePath: '',
      posterPreviewUrl: '',
      posterFile: null,
    },
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
        'Elenco completo dei bikers con contatti sicurezza e possibilita di blocco tramite RPC.',
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
        { label: 'Telefono', value: (row) => row.phone_e164 || '-' },
        {
          label: 'Emergenza',
          value: (row) => row.emergency_contact_phone_e164 || '-',
        },
        {
          label: 'Sicurezza',
          render: (row) => {
            const verified = row.phone_verified_at || row.verification_level === 'phone_verified';
            return `<span class="pill ${verified ? 'is-active' : 'is-warning'}">${
              verified ? 'Verificato' : 'Telefono raccolto'
            }</span>`;
          },
        },
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
      searchText: (row) => [
        row.nickname,
        row.email,
        row.phone_e164,
        row.emergency_contact_phone_e164,
      ],
    },
    passengers: {
      title: 'Passengers',
      description:
        'Elenco completo dei passengers con contatti sicurezza e possibilita di blocco tramite RPC.',
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
        { label: 'Telefono', value: (row) => row.phone_e164 || '-' },
        {
          label: 'Emergenza',
          value: (row) => row.emergency_contact_phone_e164 || '-',
        },
        {
          label: 'Sicurezza',
          render: (row) => {
            const verified = row.phone_verified_at || row.verification_level === 'phone_verified';
            return `<span class="pill ${verified ? 'is-active' : 'is-warning'}">${
              verified ? 'Verificato' : 'Telefono raccolto'
            }</span>`;
          },
        },
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
      searchText: (row) => [
        row.nickname,
        row.email,
        row.phone_e164,
        row.emergency_contact_phone_e164,
      ],
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
    events: {
      title: 'Eventi',
      description:
        'Gestisci gli eventi pubblicati nell’app con locandina, data evento e scadenza di visibilita.',
      listRpc: 'admin_list_app_events',
      createRpc: 'admin_create_app_event',
      updateRpc: 'admin_update_app_event',
      deleteRpc: 'admin_delete_app_events',
      deleteFunction: 'admin-delete-app-events',
      deleteParam: 'p_ids',
      rowSelectable: true,
      deleteConfirmSingular: 'Confermi la cancellazione dell\'evento selezionato?',
      deleteConfirmPlural: (count) =>
        `Confermi la cancellazione di ${count} eventi selezionati?`,
      deleteButtonLabel: 'Elimina selezionati',
      deleteProgressLabel: 'Eliminazione...',
      deleteSuccessSingular: '1 evento eliminato.',
      deleteSuccessPlural: (count) => `${count} eventi eliminati.`,
      searchPlaceholder: 'Filtra per titolo, descrizione, stato o link',
      rowAction: (row) => ({
        label: 'Modifica',
        className: 'ghost-button',
        onClick: () => editEvent(row),
      }),
      columns: [
        { label: 'Titolo', value: (row) => row.title || '-' },
        {
          label: 'Stato',
          render: (row) =>
            `<span class="pill ${eventStatusClass(row.status)}">${escapeHtml(
              formatEventStatus(row.status),
            )}</span>`,
        },
        { label: 'Data evento', value: (row) => formatDateTime(row.event_date) },
        { label: 'Scadenza', value: (row) => formatDateTime(row.expires_at) },
        { label: 'Locandina', value: (row) => row.poster_image_path || '-' },
        { label: 'Link', value: (row) => row.external_url || '-' },
        { label: 'Azione', className: 'actions-col', action: true },
      ],
      searchText: (row) => [
        row.title,
        row.description,
        row.status,
        row.poster_image_path,
        row.external_url,
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
    safetyEvents: {
      title: 'Sicurezza giri',
      description:
        'Eventi sicurezza inviati da biker o passenger durante giri confermati.',
      listRpc: 'admin_list_ride_safety_events',
      deleteRpc: 'admin_delete_ride_safety_events',
      deleteParam: 'p_ids',
      rowSelectable: true,
      deleteConfirmSingular:
        'Confermi l\'eliminazione fisica dell\'evento sicurezza selezionato?',
      deleteConfirmPlural: (count) =>
        `Confermi l'eliminazione fisica di ${count} eventi sicurezza selezionati?`,
      deleteButtonLabel: 'Elimina selezionati',
      deleteProgressLabel: 'Eliminazione...',
      deleteSuccessSingular: '1 evento sicurezza eliminato.',
      deleteSuccessPlural: (count) => `${count} eventi sicurezza eliminati.`,
      searchPlaceholder:
        'Filtra per giro, nickname, telefono, tipo evento o messaggio',
      rowAction: (row) => {
        const status = String(row.status || '').toLowerCase();
        if (status === 'closed') {
          return {
            label: 'Riapri',
            className: 'ghost-button',
            onClick: () => updateSafetyEventStatus(row.id, 'open'),
          };
        }
        if (status === 'acknowledged') {
          return {
            label: 'Chiudi',
            className: 'primary-button',
            onClick: () => updateSafetyEventStatus(row.id, 'closed'),
          };
        }
        return {
          label: 'Prendi in carico',
          className: 'primary-button',
          onClick: () => updateSafetyEventStatus(row.id, 'acknowledged'),
        };
      },
      columns: [
        { label: 'Data', value: (row) => formatDateTime(row.created_at) },
        { label: 'Giro', value: (row) => row.ride_title || row.ride_id || '-' },
        { label: 'Utente', value: (row) => row.actor_nickname || '-' },
        { label: 'Ruolo', value: (row) => formatUserType(row.actor_role) },
        { label: 'Telefono', value: (row) => row.actor_phone_e164 || '-' },
        {
          label: 'Emergenza',
          value: (row) => row.actor_emergency_phone_e164 || '-',
        },
        {
          label: 'Evento',
          render: (row) =>
            `<span class="pill ${safetyEventTypeClass(row.event_type)}">${escapeHtml(
              formatSafetyEventType(row.event_type),
            )}</span>`,
        },
        { label: 'Messaggio', value: (row) => row.message || '-' },
        {
          label: 'Posizione',
          render: (row) => renderSafetyLocation(row),
        },
        {
          label: 'Stato',
          render: (row) =>
            `<span class="pill ${safetyStatusClass(row.status)}">${escapeHtml(
              formatSafetyStatus(row.status),
            )}</span>`,
        },
        { label: 'Azione', className: 'actions-col', action: true },
      ],
      searchText: (row) => [
        row.ride_title,
        row.ride_id,
        row.actor_nickname,
        row.actor_phone_e164,
        row.actor_emergency_phone_e164,
        row.event_type,
        row.message,
        row.status,
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
    announcements: {
      title: 'Avvisi App',
      description:
        'Pubblica popup in-app mostrati una sola volta a ogni utente loggato per ogni avviso creato.',
      listRpc: 'admin_list_app_announcements',
      createRpc: 'admin_create_app_announcement',
      updateRpc: 'admin_update_app_announcement',
      deleteRpc: 'admin_delete_app_announcements',
      dataKey: 'announcements',
      rowSelectable: true,
      deleteButtonLabel: 'Elimina avvisi',
      deleteConfirmSingular: 'Confermi la cancellazione dell\'avviso selezionato?',
      deleteConfirmPlural: (count) =>
        `Confermi la cancellazione di ${count} avvisi selezionati?`,
      deleteSuccessSingular: '1 avviso eliminato.',
      deleteSuccessPlural: (count) => `${count} avvisi eliminati.`,
      searchPlaceholder: 'Filtra per titolo, testo, target o admin',
      rowAction: (row) => ({
        label: 'Modifica',
        className: 'ghost-button',
        onClick: () => editAnnouncement(row),
      }),
      columns: [
        { label: 'Titolo', value: (row) => row.title || '-' },
        {
          label: 'Link',
          value: (row) => row.link_url || '-',
        },
        {
          label: 'Target',
          value: (row) => formatAnnouncementAudience(row.audience),
        },
        {
          label: 'Stato',
          render: (row) =>
            `<span class="pill ${announcementStatusClass(row)}">${escapeHtml(
              formatAnnouncementStatus(row),
            )}</span>`,
        },
        { label: 'Visualizzazioni', value: (row) => row.view_count ?? 0 },
        { label: 'Inizio', value: (row) => formatDateTime(row.starts_at) },
        { label: 'Fine', value: (row) => formatDateTime(row.ends_at) },
        { label: 'Creato da', value: (row) => row.created_by_username || '-' },
        { label: 'Creato il', value: (row) => formatDateTime(row.created_at) },
        { label: 'Azione', className: 'actions-col', action: true },
      ],
      searchText: (row) => [
        row.title,
        row.body,
        row.link_url,
        row.link_label,
        row.audience,
        formatAnnouncementAudience(row.audience),
        formatAnnouncementStatus(row),
        row.created_by_username,
        row.updated_by_username,
      ],
    },
    communications: {
      title: 'Comunicazioni',
      description:
        'Invia notifiche push broadcast ai device attivi registrati, separando questo flusso dalle notifiche automatiche dell\'app.',
      getRpc: 'admin_get_push_broadcast_summary',
      listRpc: 'admin_list_push_broadcasts',
      createRpc: 'admin_queue_push_broadcast',
      dataKey: 'communications',
      metricValue: () => state.communicationSummary?.active_device_tokens ?? 0,
      searchPlaceholder:
        'Filtra per titolo, testo, stato, admin creatore o eventuale errore',
      rowAction: (row) => {
        const status = String(row.status || '').trim().toLowerCase();
        if (status !== 'queued' && status !== 'failed') {
          return null;
        }
        return {
          label: status === 'queued' ? 'Invia ora' : 'Riprova',
          className: 'primary-button',
          onClick: () => triggerCommunicationBroadcast(row.id),
        };
      },
      columns: [
        { label: 'Titolo', value: (row) => row.title || '-' },
        { label: 'Testo', value: (row) => row.body || '-' },
        {
          label: 'Stato',
          render: (row) =>
            `<span class="pill ${broadcastStatusClass(row.status)}">${escapeHtml(
              formatBroadcastStatus(row.status),
            )}</span>`,
        },
        {
          label: 'Target',
          value: (row) => formatBroadcastTarget(row),
        },
        {
          label: 'Invii',
          value: (row) => `${row.sent_count || 0}/${row.requested_recipient_count || 0}`,
        },
        {
          label: 'Admin',
          value: (row) => row.requested_by_username || '-',
        },
        {
          label: 'Creato il',
          value: (row) => formatDateTime(row.created_at),
        },
        {
          label: 'Completato il',
          value: (row) => formatDateTime(row.completed_at),
        },
        {
          label: 'Ultimo errore',
          value: (row) => row.last_error || '-',
        },
        { label: 'Azione', className: 'actions-col', action: true },
      ],
      searchText: (row) => [
        row.title,
        row.body,
        row.status,
        row.requested_by_username,
        row.last_error,
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
    const isAnnouncementsSection = state.activeSection === 'announcements';
    const isBlockedWordsSection = state.activeSection === 'blockedWords';
    const isCommunicationsSection = state.activeSection === 'communications';
    const isEventsSection = state.activeSection === 'events';
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
    announcementsPanel.classList.toggle('hidden', !isAnnouncementsSection);
    eventsPanel.classList.toggle('hidden', !isEventsSection);
    blockedWordsPanel.classList.toggle('hidden', !isBlockedWordsSection);
    communicationsPanel.classList.toggle('hidden', !isCommunicationsSection);
    tableHead.parentElement.parentElement.classList.toggle(
      'hidden',
      meta.hideTable === true,
    );
    renderSectionControls(rows);

    if (isSummarySection) renderSummaryPanel();
    if (isTelemetrySection) renderTelemetryPanel();
    if (isAppUpdatesSection) renderAppUpdatePanel();
    if (isAnnouncementsSection) renderAnnouncementsPanel();
    if (isCommunicationsSection) renderCommunicationsPanel();
    if (isEventsSection) renderEventsPanel();

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

  function renderAnnouncementsPanel() {
    const draft = state.announcementDraft;
    announcementIdInput.value = draft.id;
    announcementTitleInput.value = draft.title;
    announcementBodyInput.value = draft.body;
    announcementLinkUrlInput.value = draft.linkUrl;
    announcementLinkLabelInput.value = draft.linkLabel;
    announcementAudienceSelect.value = ['all', 'biker', 'passenger'].includes(
      draft.audience,
    )
      ? draft.audience
      : 'all';
    announcementActiveToggle.checked = draft.isActive === true;
    announcementStartsInput.value = draft.startsAt;
    announcementEndsInput.value = draft.endsAt;
    announcementSaveButton.textContent = draft.id
      ? 'Aggiorna avviso'
      : 'Pubblica avviso';
  }

  function renderCommunicationsPanel() {
    const summary = state.communicationSummary || {};
    const windowDays = Number(
      summary.active_within_days || state.communicationDraft.activeWithinDays || 30,
    );
    communicationActiveDevicesCount.textContent = String(
      summary.active_device_tokens ?? 0,
    );
    communicationActiveUsersCount.textContent = String(summary.active_users ?? 0);
    communicationQueuedCount.textContent = String(summary.queued_broadcasts ?? 0);
    communicationActiveWindowLabel.textContent = String(windowDays);

    const lastReference = summary.last_completed_at || summary.last_broadcast_at;
    const lastStatus = formatBroadcastStatus(summary.last_broadcast_status);
    communicationLastBroadcastAt.textContent = lastReference
      ? `${formatDateTime(lastReference)} · ${lastStatus}`
      : '-';

    communicationTitleInput.value = state.communicationDraft.title;
    communicationBodyInput.value = state.communicationDraft.body;
  }

  function renderEventsPanel() {
    eventIdInput.value = state.eventDraft.id;
    eventTitleInput.value = state.eventDraft.title;
    eventDescriptionInput.value = state.eventDraft.description;
    eventDateInput.value = state.eventDraft.eventDate;
    eventExpiresInput.value = state.eventDraft.expiresAt;
    eventStatusInput.value = state.eventDraft.status || 'active';
    eventUrlInput.value = state.eventDraft.externalUrl;
    eventPosterPathInput.value = state.eventDraft.posterImagePath;

    if (state.eventDraft.posterPreviewUrl) {
      eventPosterPreview.src = state.eventDraft.posterPreviewUrl;
      eventPosterPreview.classList.remove('hidden');
    } else {
      eventPosterPreview.removeAttribute('src');
      eventPosterPreview.classList.add('hidden');
    }

    eventSaveButton.textContent = state.eventDraft.id ? 'Aggiorna evento' : 'Salva evento';
  }

  function toDateTimeLocalValue(value) {
    if (!value) return '';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    const pad = (number) => String(number).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate(),
    )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  function toIsoFromLocalInput(value) {
    const normalized = String(value || '').trim();
    if (!normalized) return null;
    const date = new Date(normalized);
    if (Number.isNaN(date.getTime())) return null;
    return date.toISOString();
  }

  function resetEventForm() {
    const objectUrl = state.eventDraft.posterPreviewUrl || '';
    if (objectUrl.startsWith('blob:')) {
      URL.revokeObjectURL(objectUrl);
    }
    state.eventDraft = {
      id: '',
      title: '',
      description: '',
      eventDate: '',
      expiresAt: '',
      status: 'active',
      externalUrl: '',
      posterImagePath: '',
      posterPreviewUrl: '',
      posterFile: null,
    };
    eventPosterInput.value = '';
    renderEventsPanel();
  }

  function editEvent(row) {
    const objectUrl = state.eventDraft.posterPreviewUrl || '';
    if (objectUrl.startsWith('blob:')) {
      URL.revokeObjectURL(objectUrl);
    }
    state.eventDraft = {
      id: String(row.id || ''),
      title: row.title || '',
      description: row.description || '',
      eventDate: toDateTimeLocalValue(row.event_date),
      expiresAt: toDateTimeLocalValue(row.expires_at),
      status: ['active', 'hidden'].includes(String(row.status || '').toLowerCase())
        ? String(row.status).toLowerCase()
        : 'active',
      externalUrl: row.external_url || '',
      posterImagePath: row.poster_image_path || '',
      posterPreviewUrl: '',
      posterFile: null,
    };
    eventPosterInput.value = '';
    renderEventsPanel();
    eventsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function resetAnnouncementForm() {
    state.announcementDraft = {
      id: '',
      title: '',
      body: '',
      linkUrl: '',
      linkLabel: '',
      audience: 'all',
      isActive: true,
      startsAt: '',
      endsAt: '',
    };
    renderAnnouncementsPanel();
  }

  function editAnnouncement(row) {
    state.announcementDraft = {
      id: String(row.id || ''),
      title: row.title || '',
      body: row.body || '',
      linkUrl: row.link_url || '',
      linkLabel: row.link_label || '',
      audience: ['all', 'biker', 'passenger'].includes(
        String(row.audience || '').toLowerCase(),
      )
        ? String(row.audience).toLowerCase()
        : 'all',
      isActive: row.is_active === true,
      startsAt: toDateTimeLocalValue(row.starts_at),
      endsAt: toDateTimeLocalValue(row.ends_at),
    };
    renderAnnouncementsPanel();
    announcementsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function updateAnnouncementDraftFromInputs() {
    state.announcementDraft.id = announcementIdInput.value.trim();
    state.announcementDraft.title = announcementTitleInput.value.trim();
    state.announcementDraft.body = announcementBodyInput.value.trim();
    state.announcementDraft.linkUrl = announcementLinkUrlInput.value.trim();
    state.announcementDraft.linkLabel = announcementLinkLabelInput.value.trim();
    state.announcementDraft.audience = announcementAudienceSelect.value || 'all';
    state.announcementDraft.isActive = announcementActiveToggle.checked;
    state.announcementDraft.startsAt = announcementStartsInput.value;
    state.announcementDraft.endsAt = announcementEndsInput.value;
  }

  async function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = String(reader.result || '');
        resolve(result.includes(',') ? result.split(',').pop() : result);
      };
      reader.onerror = () => reject(reader.error || new Error('Lettura immagine non riuscita'));
      reader.readAsDataURL(file);
    });
  }

  async function uploadEventPoster(file) {
    if (!file) return null;
    const result = await invokeEdgeFunction('admin-event-poster-upload', {
      fileName: file.name,
      contentType: file.type || 'image/jpeg',
      base64: await fileToBase64(file),
    });
    const storagePath = String(result?.storagePath || '').trim();
    if (!storagePath) {
      throw new Error('Upload locandina non riuscito.');
    }
    return {
      storagePath,
      displayUrl: String(result?.displayUrl || '').trim(),
    };
  }

  function updateEventDraftFromInputs() {
    state.eventDraft.id = eventIdInput.value.trim();
    state.eventDraft.title = eventTitleInput.value.trim();
    state.eventDraft.description = eventDescriptionInput.value.trim();
    state.eventDraft.eventDate = eventDateInput.value;
    state.eventDraft.expiresAt = eventExpiresInput.value;
    state.eventDraft.status = eventStatusInput.value || 'active';
    state.eventDraft.externalUrl = eventUrlInput.value.trim();
    state.eventDraft.posterImagePath = eventPosterPathInput.value.trim();
  }

  async function saveEvent(event) {
    event.preventDefault();
    const meta = sectionMeta.events;
    updateEventDraftFromInputs();

    if (state.eventDraft.title.length < 3) {
      showFlash('Inserisci un titolo di almeno 3 caratteri.', 'error');
      eventTitleInput.focus();
      return;
    }

    const eventDate = toIsoFromLocalInput(state.eventDraft.eventDate);
    const expiresAt = toIsoFromLocalInput(state.eventDraft.expiresAt);
    if (!eventDate) {
      showFlash('Inserisci una data evento valida.', 'error');
      eventDateInput.focus();
      return;
    }
    if (!expiresAt) {
      showFlash('Inserisci una data di scadenza valida.', 'error');
      eventExpiresInput.focus();
      return;
    }

    eventSaveButton.disabled = true;
    eventSaveButton.textContent = 'Salvataggio...';

    try {
      if (state.eventDraft.posterFile) {
        const upload = await uploadEventPoster(state.eventDraft.posterFile);
        state.eventDraft.posterImagePath = upload.storagePath;
        state.eventDraft.posterPreviewUrl = upload.displayUrl || state.eventDraft.posterPreviewUrl;
      }

      if (!state.eventDraft.posterImagePath) {
        showFlash('Carica una locandina per l\'evento.', 'error');
        eventPosterInput.focus();
        return;
      }

      const payload = {
        p_title: state.eventDraft.title,
        p_description: state.eventDraft.description || null,
        p_event_date: eventDate,
        p_expires_at: expiresAt,
        p_poster_image_path: state.eventDraft.posterImagePath,
        p_external_url: state.eventDraft.externalUrl || null,
        p_status: state.eventDraft.status || 'active',
      };

      if (state.eventDraft.id) {
        await callRpc(meta.updateRpc, {
          p_id: Number(state.eventDraft.id),
          ...payload,
        });
        showFlash('Evento aggiornato.', 'success');
      } else {
        await callRpc(meta.createRpc, payload);
        showFlash('Evento creato.', 'success');
      }

      resetEventForm();
      await loadSection('events');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      eventSaveButton.disabled = false;
      renderEventsPanel();
    }
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

  async function invokeEdgeFunction(name, body) {
    const { data, error } = await state.supabase.functions.invoke(name, {
      body,
    });
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
      } else if (sectionName === 'communications') {
        const [summary, rows] = await Promise.all([
          callRpc(meta.getRpc, {
            p_active_within_days: state.communicationDraft.activeWithinDays,
          }),
          callRpc(meta.listRpc),
        ]);
        state.communicationSummary = summary || null;
        state.communications = Array.isArray(rows) ? rows : [];
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

  async function updateSafetyEventStatus(eventId, status) {
    try {
      await callRpc('admin_update_ride_safety_event_status', {
        p_id: eventId,
        p_status: status,
      });
      showFlash('Evento sicurezza aggiornato.', 'success');
      await loadSection('safetyEvents');
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
      const result = meta.deleteFunction
        ? await invokeEdgeFunction(meta.deleteFunction, {
            ids: rowIds,
          })
        : await callRpc(meta.deleteRpc, {
            [deleteParam]: rowIds,
          });
      const deleted = Number(
        result && (result.deleted || result.deletedRows)
          ? result.deleted || result.deletedRows
          : 0,
      );
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

  async function saveAnnouncement(event) {
    event.preventDefault();
    const meta = sectionMeta.announcements;
    updateAnnouncementDraftFromInputs();

    const title = state.announcementDraft.title;
    const body = state.announcementDraft.body;
    const linkUrl = state.announcementDraft.linkUrl;
    const linkLabel = state.announcementDraft.linkLabel;
    const startsAt = toIsoFromLocalInput(state.announcementDraft.startsAt);
    const endsAt = toIsoFromLocalInput(state.announcementDraft.endsAt);

    if (title.length < 3) {
      showFlash('Inserisci un titolo di almeno 3 caratteri.', 'error');
      announcementTitleInput.focus();
      return;
    }

    if (body.length < 3) {
      showFlash('Inserisci un testo di almeno 3 caratteri.', 'error');
      announcementBodyInput.focus();
      return;
    }

    if (linkUrl && !/^https?:\/\//i.test(linkUrl)) {
      showFlash('Inserisci un link web valido che inizi con http:// o https://.', 'error');
      announcementLinkUrlInput.focus();
      return;
    }

    if (linkLabel && !linkUrl) {
      showFlash('Inserisci anche il link web per usare il testo pulsante.', 'error');
      announcementLinkUrlInput.focus();
      return;
    }

    if (startsAt && endsAt && new Date(endsAt).getTime() <= new Date(startsAt).getTime()) {
      showFlash('La fine visibilita deve essere successiva all\'inizio.', 'error');
      announcementEndsInput.focus();
      return;
    }

    announcementSaveButton.disabled = true;
    announcementSaveButton.textContent = 'Salvataggio...';

    const payload = {
      p_title: title,
      p_body: body,
      p_audience: state.announcementDraft.audience,
      p_is_active: state.announcementDraft.isActive,
      p_starts_at: startsAt,
      p_ends_at: endsAt,
      p_link_url: linkUrl || null,
      p_link_label: linkLabel || null,
    };

    try {
      if (state.announcementDraft.id) {
        await callRpc(meta.updateRpc, {
          p_id: state.announcementDraft.id,
          ...payload,
        });
        showFlash('Avviso aggiornato.', 'success');
      } else {
        await callRpc(meta.createRpc, payload);
        showFlash('Avviso pubblicato.', 'success');
      }

      resetAnnouncementForm();
      await loadSection('announcements');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      announcementSaveButton.disabled = false;
      announcementSaveButton.textContent = state.announcementDraft.id
        ? 'Aggiorna avviso'
        : 'Pubblica avviso';
    }
  }

  function formatBroadcastStatus(value) {
    const status = String(value || '').trim().toLowerCase();
    switch (status) {
      case 'queued':
        return 'In coda';
      case 'processing':
        return 'Invio';
      case 'partial':
        return 'Parziale';
      case 'failed':
        return 'Fallito';
      case 'sent':
        return 'Inviato';
      default:
        return status || '-';
    }
  }

  function formatAnnouncementAudience(value) {
    switch (String(value || '').trim().toLowerCase()) {
      case 'biker':
        return 'Bikers';
      case 'passenger':
        return 'Passengers';
      default:
        return 'Tutti';
    }
  }

  function formatAnnouncementStatus(row) {
    if (row.is_active !== true) return 'Nascosto';
    const now = Date.now();
    const startsAt = row.starts_at ? new Date(row.starts_at).getTime() : null;
    const endsAt = row.ends_at ? new Date(row.ends_at).getTime() : null;
    if (startsAt && !Number.isNaN(startsAt) && startsAt > now) return 'Programmato';
    if (endsAt && !Number.isNaN(endsAt) && endsAt <= now) return 'Scaduto';
    return 'Attivo';
  }

  function announcementStatusClass(row) {
    const status = formatAnnouncementStatus(row);
    if (status === 'Attivo') return 'is-active';
    if (status === 'Programmato') return 'is-warning';
    return 'is-blocked';
  }

  function broadcastStatusClass(value) {
    const status = String(value || '').trim().toLowerCase();
    if (status === 'sent') return 'is-active';
    if (status === 'queued' || status === 'partial' || status === 'processing') {
      return 'is-warning';
    }
    return 'is-blocked';
  }

  function formatBroadcastTarget(row) {
    const platform = row.target_platform ? row.target_platform.toUpperCase() : 'Tutti';
    const days = Number(row.active_within_days || 30);
    return `${platform} · ${days}g`;
  }

  function describeBroadcastResult(result) {
    const status = String(result?.status || '').trim().toLowerCase();
    const requested = Number(result?.requestedRecipientCount || 0);
    const sent = Number(result?.sentCount || 0);
    const failed = Number(result?.failedCount || 0);

    if (result?.alreadyProcessed) {
      return {
        variant: status === 'failed' ? 'error' : 'success',
        message: `Campagna già processata. Stato attuale: ${formatBroadcastStatus(status)}.`,
      };
    }

    if (status === 'failed') {
      return {
        variant: 'error',
        message: `Broadcast fallito: 0/${requested} device raggiunti.`,
      };
    }

    if (status === 'partial') {
      return {
        variant: 'success',
        message: `Broadcast completato parzialmente: ${sent} inviati, ${failed} falliti.`,
      };
    }

    return {
      variant: 'success',
      message: `Broadcast inviato a ${sent} device attivi.`,
    };
  }

  async function triggerCommunicationBroadcast(broadcastId) {
    try {
      const result = await invokeEdgeFunction('admin-broadcast-push', {
        broadcastId,
      });
      const feedback = describeBroadcastResult(result || {});
      showFlash(feedback.message, feedback.variant);
      await loadSection('communications');
      return result;
    } catch (error) {
      showFlash(normalizeError(error), 'error');
      await loadSection('communications');
      throw error;
    }
  }

  async function sendCommunicationBroadcast() {
    const meta = sectionMeta.communications;
    const title = state.communicationDraft.title.trim();
    const body = state.communicationDraft.body.trim();

    if (title.length < 3) {
      showFlash('Inserisci un titolo di almeno 3 caratteri.', 'error');
      communicationTitleInput.focus();
      return;
    }

    if (body.length < 3) {
      showFlash('Inserisci un testo di almeno 3 caratteri.', 'error');
      communicationBodyInput.focus();
      return;
    }

    const confirmed = window.confirm(
      `Confermi l'invio della notifica push a tutti i device attivi degli ultimi ${state.communicationDraft.activeWithinDays} giorni?`,
    );
    if (!confirmed) return;

    communicationSendButton.disabled = true;
    communicationSendButton.textContent = 'Invio in corso...';

    let queuedBroadcast = null;

    try {
      queuedBroadcast = await callRpc(meta.createRpc, {
        p_title: title,
        p_body: body,
        p_active_within_days: state.communicationDraft.activeWithinDays,
      });

      const result = await invokeEdgeFunction('admin-broadcast-push', {
        broadcastId: queuedBroadcast?.id,
      });
      const feedback = describeBroadcastResult(result || {});
      state.communicationDraft.body = '';
      renderCommunicationsPanel();
      showFlash(feedback.message, feedback.variant);
      await loadSection('communications');
    } catch (error) {
      const queuedSuffix = queuedBroadcast?.id
        ? ` Campagna #${queuedBroadcast.id} salvata in coda.`
        : '';
      showFlash(`${normalizeError(error)}${queuedSuffix}`, 'error');
      await loadSection('communications');
    } finally {
      communicationSendButton.disabled = false;
      communicationSendButton.textContent = 'Invia notifica broadcast';
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

  function formatEventStatus(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'active') return 'Attivo';
    if (normalized === 'hidden') return 'Nascosto';
    if (normalized === 'deleted') return 'Eliminato';
    return normalized || '-';
  }

  function eventStatusClass(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'active') return 'is-active';
    if (normalized === 'hidden') return 'is-warning';
    return 'is-blocked';
  }

  function formatSafetyEventType(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'check_in_ok') return 'Sto bene';
    if (normalized === 'assistance_request') return 'Richiesta supporto';
    if (normalized === 'emergency_alert') return 'Emergenza';
    return normalized || '-';
  }

  function safetyEventTypeClass(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'check_in_ok') return 'is-active';
    if (normalized === 'assistance_request') return 'is-warning';
    return 'is-blocked';
  }

  function formatSafetyStatus(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'open') return 'Aperto';
    if (normalized === 'acknowledged') return 'In carico';
    if (normalized === 'closed') return 'Chiuso';
    return normalized || '-';
  }

  function safetyStatusClass(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'closed') return 'is-active';
    if (normalized === 'acknowledged') return 'is-warning';
    return 'is-blocked';
  }

  function renderSafetyLocation(row) {
    const lat = Number(row.latitude);
    const lon = Number(row.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) return '-';
    const label = `${lat.toFixed(5)}, ${lon.toFixed(5)}`;
    const href = `https://www.google.com/maps?q=${lat},${lon}`;
    return `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
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
    announcementsForm.addEventListener('submit', saveAnnouncement);
    announcementResetButton.addEventListener('click', resetAnnouncementForm);
    blockedWordsForm.addEventListener('submit', addBlockedWord);
    eventsForm.addEventListener('submit', saveEvent);
    eventResetButton.addEventListener('click', resetEventForm);
    eventPosterInput.addEventListener('change', (event) => {
      updateEventDraftFromInputs();
      const file = event.target.files && event.target.files[0];
      const objectUrl = state.eventDraft.posterPreviewUrl || '';
      if (objectUrl.startsWith('blob:')) {
        URL.revokeObjectURL(objectUrl);
      }
      state.eventDraft.posterFile = file || null;
      state.eventDraft.posterPreviewUrl = file ? URL.createObjectURL(file) : '';
      renderEventsPanel();
    });
    communicationTitleInput.addEventListener('input', (event) => {
      state.communicationDraft.title = event.target.value;
    });
    communicationBodyInput.addEventListener('input', (event) => {
      state.communicationDraft.body = event.target.value;
    });
    communicationSendButton.addEventListener('click', sendCommunicationBroadcast);
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
