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
  const translationSearchButton = document.getElementById(
    'translationSearchButton',
  );
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
  const appAccessBlockedToggle = document.getElementById(
    'appAccessBlockedToggle',
  );
  const appAccessCurrentMode = document.getElementById('appAccessCurrentMode');
  const appAccessUpdatedAt = document.getElementById('appAccessUpdatedAt');
  const appAccessMessageInput = document.getElementById(
    'appAccessMessageInput',
  );
  const appAccessSaveButton = document.getElementById('appAccessSaveButton');
  const summaryTelemetryLevelSelect = document.getElementById(
    'summaryTelemetryLevelSelect',
  );
  const summaryTelemetryCurrentLevel = document.getElementById(
    'summaryTelemetryCurrentLevel',
  );
  const summaryTelemetryUpdatedAt = document.getElementById(
    'summaryTelemetryUpdatedAt',
  );
  const summaryTelemetrySaveButton = document.getElementById(
    'summaryTelemetrySaveButton',
  );
  const appAccessDayInput = document.getElementById('appAccessDayInput');
  const appAccessRefreshButton = document.getElementById(
    'appAccessRefreshButton',
  );
  const appAccessTotalUsers = document.getElementById('appAccessTotalUsers');
  const appAccessBikerUsers = document.getElementById('appAccessBikerUsers');
  const appAccessPassengerUsers = document.getElementById(
    'appAccessPassengerUsers',
  );
  const appAccessUnknownUsers = document.getElementById(
    'appAccessUnknownUsers',
  );
  const appAccessTotalEvents = document.getElementById('appAccessTotalEvents');
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
  const adsPanel = document.getElementById('adsPanel');
  const adsForm = document.getElementById('adsForm');
  const adIdInput = document.getElementById('adIdInput');
  const adImagePathInput = document.getElementById('adImagePathInput');
  const adTitleInput = document.getElementById('adTitleInput');
  const adBodyInput = document.getElementById('adBodyInput');
  const adTargetUrlInput = document.getElementById('adTargetUrlInput');
  const adCtaLabelInput = document.getElementById('adCtaLabelInput');
  const adPlacementSelect = document.getElementById('adPlacementSelect');
  const adAudienceSelect = document.getElementById('adAudienceSelect');
  const adPriorityInput = document.getElementById('adPriorityInput');
  const adActiveToggle = document.getElementById('adActiveToggle');
  const adStartsInput = document.getElementById('adStartsInput');
  const adEndsInput = document.getElementById('adEndsInput');
  const adImageInput = document.getElementById('adImageInput');
  const adImagePreview = document.getElementById('adImagePreview');
  const adResetButton = document.getElementById('adResetButton');
  const adSaveButton = document.getElementById('adSaveButton');
  const blockedWordsPanel = document.getElementById('blockedWordsPanel');
  const blockedWordsForm = document.getElementById('blockedWordsForm');
  const blockedWordInput = document.getElementById('blockedWordInput');
  const blockedWordAddButton = document.getElementById('blockedWordAddButton');
  const translationsPanel = document.getElementById('translationsPanel');
  const translationLocaleCards = document.getElementById('translationLocaleCards');
  const translationLocaleSelect = document.getElementById('translationLocaleSelect');
  const translationMissingOnlyToggle = document.getElementById(
    'translationMissingOnlyToggle',
  );
  const translationEditorForm = document.getElementById('translationEditorForm');
  const translationEditorKey = document.getElementById('translationEditorKey');
  const translationEditorDescription = document.getElementById(
    'translationEditorDescription',
  );
  const translationReferenceWrap = document.getElementById(
    'translationReferenceWrap',
  );
  const translationReferenceText = document.getElementById(
    'translationReferenceText',
  );
  const translationTextInput = document.getElementById('translationTextInput');
  const translationCancelButton = document.getElementById(
    'translationCancelButton',
  );
  const translationSaveButton = document.getElementById('translationSaveButton');
  const eventsPanel = document.getElementById('eventsPanel');
  const eventsForm = document.getElementById('eventsForm');
  const eventIdInput = document.getElementById('eventIdInput');
  const eventPosterPathInput = document.getElementById('eventPosterPathInput');
  const eventTitleInput = document.getElementById('eventTitleInput');
  const eventCountryInput = document.getElementById('eventCountryInput');
  const eventAdminArea1Input = document.getElementById('eventAdminArea1Input');
  const eventAdminArea2Input = document.getElementById('eventAdminArea2Input');
  const eventAdminArea1Field = document.getElementById('eventAdminArea1Field');
  const eventAdminArea2Field = document.getElementById('eventAdminArea2Field');
  const eventResolvedAreas = document.getElementById('eventResolvedAreas');
  const eventResolvedAreasText = document.getElementById('eventResolvedAreasText');
  const eventEditAreasButton = document.getElementById('eventEditAreasButton');
  const eventLocationInput = document.getElementById('eventLocationInput');
  const eventLocationSuggestions = document.getElementById(
    'eventLocationSuggestions',
  );
  const eventLatitudeInput = document.getElementById('eventLatitudeInput');
  const eventLongitudeInput = document.getElementById('eventLongitudeInput');
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
  const supportPanel = document.getElementById('supportPanel');
  const supportUserSearchForm = document.getElementById('supportUserSearchForm');
  const supportUserTypeSelect = document.getElementById('supportUserTypeSelect');
  const supportUserSearchInput = document.getElementById('supportUserSearchInput');
  const supportUserSearchButton = document.getElementById('supportUserSearchButton');
  const supportUserSearchResults = document.getElementById(
    'supportUserSearchResults',
  );
  const supportEmptyState = document.getElementById('supportEmptyState');
  const supportConversation = document.getElementById('supportConversation');
  const supportThreadTitle = document.getElementById('supportThreadTitle');
  const supportThreadMeta = document.getElementById('supportThreadMeta');
  const supportMessagesList = document.getElementById('supportMessagesList');
  const supportReplyInput = document.getElementById('supportReplyInput');
  const supportSendButton = document.getElementById('supportSendButton');
  const supportRefreshButton = document.getElementById('supportRefreshButton');
  const supportCloseButton = document.getElementById('supportCloseButton');
  const supportReopenButton = document.getElementById('supportReopenButton');
  const SUPPORT_AUTO_REFRESH_MS = 5000;
  // Copre ampiamente il catalogo attuale (~1100 chiavi); alzare se il
  // catalogo dovesse superare questa soglia.
  const TRANSLATIONS_PAGE_LIMIT = 5000;

  const state = {
    supabase: null,
    session: null,
    admin: null,
    config: null,
    activeSection: 'riders',
    riders: [],
    passengers: [],
    rides: [],
    groupRides: [],
    events: [],
    eventCountries: [],
    eventAdminAreas1: [],
    eventAdminAreas2: [],
    stories: [],
    socialStories: [],
    illeciti: [],
    safetyEvents: [],
    blockedUsers: [],
    blockedWords: [],
    translations: [],
    translationLocales: [],
    translationLocale: 'en',
    translationMissingOnly: false,
    translationSearch: '',
    translationReference: {},
    translationDraft: null,
    communications: [],
    support: [],
    supportUserResults: [],
    supportUserSearchStarted: false,
    loadingSupportUsers: false,
    openingSupportUserId: null,
    supportSelectedThread: null,
    supportMessages: [],
    summary: null,
    appAccessPolicy: null,
    appAccessSummary: null,
    appAccessSummaryDay: todayDateInputValue(),
    telemetry: null,
    telemetryLogs: [],
    appUpdateSettings: null,
    announcements: [],
    ads: [],
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
    adDraft: {
      id: '',
      title: '',
      body: '',
      imagePath: '',
      imagePreviewUrl: '',
      imageFile: null,
      targetUrl: '',
      ctaLabel: '',
      placement: 'community',
      audience: 'all',
      priority: 0,
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
      countryCode: '',
      adminArea1Id: '',
      adminArea2Id: '',
      adminArea1Name: '',
      adminArea2Name: '',
      areasAutoResolved: false,
      locationLabel: '',
      latitude: '',
      longitude: '',
      eventDate: '',
      expiresAt: '',
      status: 'active',
      externalUrl: '',
      posterImagePath: '',
      posterPreviewUrl: '',
      posterFile: null,
    },
    eventLocationSessionToken: '',
    eventLocationSearchTimer: null,
    selectedRowIds: new Set(),
    rideFilters: {
      status: '',
      expired: 'all',
    },
    search: '',
    loadingSection: false,
    loadingSupportMessages: false,
    supportAutoRefreshTimer: null,
    refreshingSupport: false,
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
      accessPolicyGetRpc: 'admin_get_app_access_policy',
      accessPolicyUpdateRpc: 'admin_update_app_access_policy',
      telemetryGetRpc: 'admin_get_app_telemetry_settings',
      telemetryUpdateRpc: 'admin_update_app_telemetry_settings',
      appAccessSummaryRpc: 'admin_get_app_access_summary',
      hideSearch: true,
      hideTable: true,
      metricValue: () => 10,
      columns: [],
    },
    riders: {
      title: 'Bikers',
      description:
        'Elenco completo dei bikers con contatti sicurezza e possibilita di blocco tramite RPC.',
      listRpc: 'admin_list_riders',
      listFunction: 'admin-list-user-media',
      listFunctionPayload: { userType: 'riders' },
      toggleRpc: 'admin_set_rider_blocked',
      toggleParam: 'p_uid',
      searchPlaceholder: 'Filtra per nickname, email, telefono o path immagine',
      rowAction: (row) => {
        const isBlocked = row.bloccato === true;
        return {
          label: isBlocked ? 'Sblocca' : 'Blocca',
          className: isBlocked ? 'ghost-button' : 'primary-button',
          onClick: () => toggleBlocked(row.id, !isBlocked),
        };
      },
      columns: [
        {
          label: 'Avatar',
          render: (row) =>
            renderImageCell({
              signedUrl: row.avatar_signed_url,
              imagePath: row.avatar_url,
              label: `Avatar ${row.nickname || 'biker'}`,
            }),
        },
        {
          label: 'Moto',
          render: (row) =>
            renderImageCell({
              signedUrl: row.moto_signed_url,
              imagePath: row.foto_moto,
              label: `Moto ${row.nickname || 'biker'}`,
            }),
        },
        { label: 'Nickname', value: (row) => row.nickname || '-' },
        { label: 'Email', value: (row) => row.email || '-' },
        { label: 'Telefono', value: (row) => row.phone_e164 || '-' },
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
        row.avatar_url,
        row.foto_moto,
      ],
    },
    passengers: {
      title: 'Passengers',
      description:
        'Elenco completo dei passengers con contatti sicurezza e possibilita di blocco tramite RPC.',
      listRpc: 'admin_list_passengers',
      listFunction: 'admin-list-user-media',
      listFunctionPayload: { userType: 'passengers' },
      toggleRpc: 'admin_set_passenger_blocked',
      toggleParam: 'p_uid',
      searchPlaceholder: 'Filtra per nickname, email, telefono o path immagine',
      rowAction: (row) => {
        const isBlocked = row.bloccato === true;
        return {
          label: isBlocked ? 'Sblocca' : 'Blocca',
          className: isBlocked ? 'ghost-button' : 'primary-button',
          onClick: () => toggleBlocked(row.id, !isBlocked),
        };
      },
      columns: [
        {
          label: 'Avatar',
          render: (row) =>
            renderImageCell({
              signedUrl: row.avatar_signed_url,
              imagePath: row.avatar_url,
              label: `Avatar ${row.nickname || 'passenger'}`,
            }),
        },
        { label: 'Nickname', value: (row) => row.nickname || '-' },
        { label: 'Email', value: (row) => row.email || '-' },
        { label: 'Telefono', value: (row) => row.phone_e164 || '-' },
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
        row.avatar_url,
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
    groupRides: {
      title: 'Giri di gruppo',
      description:
        'Elenco dei giri di gruppo con owner, data di partenza, scadenza e cancellazione amministrativa via RPC.',
      listRpc: 'admin_list_group_rides',
      deleteRpc: 'admin_delete_group_rides',
      deleteParam: 'p_group_ride_ids',
      deleteButtonLabel: 'Elimina giri selezionati',
      deleteConfirmSingular:
        'Confermi la cancellazione del giro di gruppo selezionato?',
      deleteConfirmPlural: (count) =>
        `Confermi la cancellazione dei ${count} giri di gruppo selezionati?`,
      deleteSuccessSingular: '1 giro di gruppo eliminato.',
      deleteSuccessPlural: (count) => `${count} giri di gruppo eliminati.`,
      searchPlaceholder:
        'Filtra per nome giro, owner, ruolo, stato o data di partenza',
      rowSelectable: true,
      columns: [
        { label: 'Nome giro', value: (row) => row.title || '-' },
        { label: 'Owner', value: (row) => row.owner_nickname || '-' },
        { label: 'Ruolo owner', value: (row) => formatUserType(row.owner_role) },
        { label: 'Data di partenza', value: (row) => formatDateTime(row.start_time) },
        {
          label: 'Stato',
          render: (row) =>
            `<span class="pill ${groupRideStatusClass(row.status)}">${escapeHtml(
              formatGroupRideStatus(row.status),
            )}</span>`,
        },
        {
          label: 'Scaduto',
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
        row.owner_id,
        row.owner_nickname,
        row.owner_role,
        formatUserType(row.owner_role),
        row.status,
        formatGroupRideStatus(row.status),
        formatDateTime(row.start_time),
      ],
    },
    events: {
      title: 'Eventi',
      description:
        'Gestisci gli eventi pubblicati nell’app con locandina, data evento e scadenza di visibilita.',
      listRpc: 'admin_list_app_events',
      listFunction: 'admin-list-app-events',
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
      searchPlaceholder: 'Filtra per titolo, descrizione, regione, stato o link',
      rowActions: (row) => [
        ...(canApproveEvent(row)
          ? [
              {
                label: 'Approva',
                className: 'primary-button',
                onClick: () => approveEvent(row),
              },
            ]
          : []),
        ...(row.moderation_status === 'pending_review'
          ? [
              {
                label: 'Rifiuta',
                className: 'ghost-button',
                onClick: () => rejectEvent(row),
              },
            ]
          : []),
        {
          label: 'Modifica',
          className: 'ghost-button',
          onClick: () => editEvent(row),
        },
      ],
      columns: [
        {
          label: 'Locandina',
          render: (row) =>
            renderImageCell({
              signedUrl: row.poster_signed_url,
              imagePath: row.poster_image_path,
              label: `Locandina ${row.title || 'evento'}`,
            }),
        },
        { label: 'Titolo', render: (row) => renderEventTitle(row) },
        {
          label: 'Stato',
          render: (row) =>
            `<span class="pill ${eventStatusClass(row.status)}">${escapeHtml(
              formatEventStatus(row.status),
            )}</span>`,
        },
        { label: 'Stato', value: (row) => row.country_code || '-' },
        { label: 'Area', value: (row) => row.admin_area_1_name || row.regione || '-' },
        { label: 'Autore', value: (row) => row.author_nickname || '-' },
        { label: 'Moderazione', value: (row) => row.moderation_status || '-' },
        { label: 'Data evento', value: (row) => formatDateTime(row.event_date) },
        { label: 'Scadenza', value: (row) => formatDateTime(row.expires_at) },
        { label: 'Link', value: (row) => row.external_url || '-' },
        { label: 'Azione', className: 'actions-col', action: true },
      ],
      searchText: (row) => [
        row.title,
        row.description,
        row.regione,
        row.country_code,
        row.admin_area_1_name,
        row.author_nickname,
        row.moderation_status,
        row.status,
        row.poster_image_path,
        row.external_url,
      ],
    },
    stories: {
      title: 'Storie',
      description:
        'Visualizza storie attive e scadute, con cancellazione amministrativa della riga e dell\'immagine nel bucket dedicato.',
      listRpc: 'admin_list_stories',
      listFunction: 'admin-list-stories',
      deleteFunction: 'admin-delete-stories',
      rowSelectable: true,
      deleteConfirmSingular:
        'Confermi la cancellazione della storia selezionata e della sua immagine?',
      deleteConfirmPlural: (count) =>
        `Confermi la cancellazione di ${count} storie selezionate e delle immagini associate?`,
      deleteButtonLabel: 'Elimina storie',
      deleteProgressLabel: 'Eliminazione...',
      deleteSuccessSingular: '1 storia eliminata.',
      deleteSuccessPlural: (count) => `${count} storie eliminate.`,
      searchPlaceholder:
        'Filtra per titolo, descrizione, autore, ruolo, stato o luogo',
      columns: [
        {
          label: 'Immagine',
          render: (row) => renderStoryImageCell(row),
        },
        { label: 'Titolo', value: (row) => row.title || '-' },
        { label: 'Autore', value: (row) => row.author_nickname || '-' },
        { label: 'Ruolo', value: (row) => formatUserType(row.author_type) },
        {
          label: 'Stato',
          render: (row) =>
            `<span class="pill ${storyLifecycleClass(row.lifecycle_status)}">${escapeHtml(
              formatStoryLifecycle(row.lifecycle_status),
            )}</span>`,
        },
        { label: 'Like', value: (row) => row.like_count ?? 0 },
        { label: 'Luogo', value: (row) => row.location_label || '-' },
        { label: 'Creata il', value: (row) => formatDateTime(row.created_at) },
        { label: 'Scade il', value: (row) => formatDateTime(row.expires_at) },
        { label: 'Path immagine', value: (row) => row.image_path || '-' },
      ],
      searchText: (row) => [
        row.id,
        row.title,
        row.description,
        row.author_nickname,
        row.author_email,
        row.author_type,
        formatUserType(row.author_type),
        row.status,
        row.lifecycle_status,
        formatStoryLifecycle(row.lifecycle_status),
        row.location_label,
        row.location_full_address,
        row.image_path,
      ],
    },
    socialStories: {
      title: 'Storie social',
      description:
        'Modera le proposte degli utenti e controlla separatamente la pubblicazione sui feed Facebook e Instagram ufficiali.',
      listRpc: 'admin_list_story_social_submissions',
      listFunction: 'admin-list-story-social-submissions',
      deleteRpc: 'admin_delete_story_social_submissions',
      deleteParam: 'p_ids',
      rowSelectable: true,
      deleteConfirmSingular:
        'Confermi la cancellazione della proposta social selezionata? I post già pubblicati su Facebook e Instagram non saranno eliminati.',
      deleteConfirmPlural: (count) =>
        `Confermi la cancellazione di ${count} proposte social? I post già pubblicati su Facebook e Instagram non saranno eliminati.`,
      deleteButtonLabel: 'Elimina selezionate',
      deleteProgressLabel: 'Eliminazione...',
      deleteSuccessSingular: '1 proposta social eliminata dal database.',
      deleteSuccessPlural: (count) =>
        `${count} proposte social eliminate dal database.`,
      searchPlaceholder:
        'Filtra per titolo, autore, stato di moderazione o pubblicazione',
      rowActions: (row) => [
        ...(row.moderation_status === 'pending_review'
          ? [
              {
                label: 'Approva e pubblica',
                className: 'primary-button',
                onClick: () => approveStorySocialSubmission(row),
              },
              {
                label: 'Rifiuta',
                className: 'ghost-button',
                onClick: () => rejectStorySocialSubmission(row),
              },
            ]
          : []),
        ...([row.facebook_status, row.instagram_status].some((value) =>
          ['failed', 'retrying'].includes(String(value || '').toLowerCase()),
        )
          ? [
              {
                label: 'Riprova canali falliti',
                className: 'ghost-button',
                onClick: () => retryStorySocialSubmission(row),
              },
            ]
          : []),
      ],
      columns: [
        {
          label: 'Immagine',
          render: (row) => renderStoryImageCell(row),
        },
        { label: 'Titolo', value: (row) => row.title || '-' },
        { label: 'Autore', value: (row) => row.author_nickname || '-' },
        {
          label: 'Account Instagram',
          render: (row) =>
            window.PassengersSocialProfile.renderInstagramAccount(
              row.instagram_username_snapshot,
            ),
        },
        {
          label: 'Account Facebook',
          render: (row) =>
            window.PassengersSocialProfile.renderFacebookAccount(
              row.facebook_profile_snapshot,
            ),
        },
        {
          label: 'Moderazione',
          render: (row) =>
            `<span class="pill ${socialStatusClass(row.moderation_status)}">${escapeHtml(
              formatSocialModerationStatus(row.moderation_status),
            )}</span>`,
        },
        {
          label: 'Pubblicazione Facebook',
          render: (row) => renderSocialPublicationStatus(
            row.facebook_status,
            row.facebook_permalink,
            row.facebook_error,
          ),
        },
        {
          label: 'Pubblicazione Instagram',
          render: (row) => renderSocialPublicationStatus(
            row.instagram_status,
            row.instagram_permalink,
            row.instagram_error,
          ),
        },
        {
          label: 'Consenso',
          value: (row) => `${row.consent_version || '-'} · ${row.consent_locale || '-'}`,
        },
        { label: 'Scadenza revisione', value: (row) => formatDateTime(row.expires_at) },
        { label: 'Azione', className: 'actions-col', action: true },
      ],
      searchText: (row) => [
        row.id,
        row.story_id,
        row.title,
        row.description,
        row.author_nickname,
        row.author_type,
        row.instagram_username_snapshot,
        row.facebook_profile_snapshot,
        row.moderation_status,
        row.facebook_status,
        row.instagram_status,
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
    ads: {
      title: 'ADS',
      description:
        'Gestisci le card advertising custom Passengers mostrate accanto agli slot native Google nei feed.',
      listRpc: 'admin_list_app_custom_ads',
      createRpc: 'admin_create_app_custom_ad',
      updateRpc: 'admin_update_app_custom_ad',
      deleteRpc: 'admin_delete_app_custom_ads',
      deleteParam: 'p_ids',
      rowSelectable: true,
      deleteButtonLabel: 'Elimina ADS',
      deleteConfirmSingular:
        'Confermi la cancellazione dell\'ADS selezionato e della sua immagine?',
      deleteConfirmPlural: (count) =>
        `Confermi la cancellazione di ${count} ADS selezionati e delle immagini associate?`,
      deleteSuccessSingular: '1 ADS eliminato.',
      deleteSuccessPlural: (count) => `${count} ADS eliminati.`,
      searchPlaceholder:
        'Filtra per titolo, testo, placement, target, link o path immagine',
      rowAction: (row) => ({
        label: 'Modifica',
        className: 'ghost-button',
        onClick: () => editAd(row),
      }),
      columns: [
        { label: 'Titolo', value: (row) => row.title || '-' },
        {
          label: 'Placement',
          value: (row) => formatAdPlacement(row.placement),
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
        { label: 'Priorita', value: (row) => row.priority ?? 0 },
        {
          label: 'Impression',
          value: (row) => row.impression_count ?? 0,
        },
        { label: 'Click', value: (row) => row.click_count ?? 0 },
        { label: 'Inizio', value: (row) => formatDateTime(row.starts_at) },
        { label: 'Fine', value: (row) => formatDateTime(row.ends_at) },
        { label: 'Immagine', value: (row) => row.image_path || '-' },
        { label: 'Link', value: (row) => row.target_url || '-' },
        { label: 'Azione', className: 'actions-col', action: true },
      ],
      searchText: (row) => [
        row.title,
        row.body,
        row.placement,
        formatAdPlacement(row.placement),
        row.audience,
        formatAnnouncementAudience(row.audience),
        formatAnnouncementStatus(row),
        row.image_path,
        row.target_url,
        row.cta_label,
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
    support: {
      title: 'Supporto',
      description:
        'Conversazioni di supporto aperte dagli utenti o avviate individualmente dagli admin tramite RPC.',
      listRpc: 'admin_support_list_threads',
      dataKey: 'support',
      searchPlaceholder: 'Filtra per nickname, email, ruolo, stato o ultimo messaggio',
      rowAction: (row) => ({
        label: 'Apri',
        className: 'primary-button',
        onClick: () => openSupportThread(row),
      }),
      columns: [
        { label: 'Utente', value: (row) => row.user_nickname || '-' },
        { label: 'Email', value: (row) => row.user_email || '-' },
        { label: 'Ruolo', value: (row) => formatUserType(row.user_type) },
        {
          label: 'Stato',
          render: (row) =>
            `<span class="pill ${supportStatusClass(row.status)}">${escapeHtml(
              formatSupportStatus(row.status),
            )}</span>`,
        },
        { label: 'Messaggi', value: (row) => row.message_count ?? 0 },
        { label: 'Ultimo messaggio', value: (row) => row.last_message_body || '-' },
        { label: 'Aggiornata il', value: (row) => formatDateTime(row.last_message_at) },
        { label: 'Azione', className: 'actions-col', action: true },
      ],
      searchText: (row) => [
        row.user_nickname,
        row.user_email,
        row.user_type,
        formatUserType(row.user_type),
        row.status,
        formatSupportStatus(row.status),
        row.last_message_body,
      ],
    },
    translations: {
      title: 'Traduzioni',
      description:
        'Cataloghi multilingua dell\'app: revisiona i testi per lingua, individua le chiavi mancanti e pubblica i bundle via RPC.',
      listRpc: 'admin_translations_list',
      searchPlaceholder: 'Cerca una chiave o un testo nel database',
      rowAction: (row) => ({
        label: row.text == null ? 'Traduci' : 'Modifica',
        className: row.text == null ? 'primary-button' : 'ghost-button',
        onClick: () => editTranslation(row),
      }),
      columns: [
        {
          label: 'Chiave',
          className: 'translation-key-col',
          render: (row) => `<code>${escapeHtml(row.key)}</code>`,
        },
        { label: 'Namespace', value: (row) => row.namespace || '-' },
        {
          label: 'Testo',
          className: 'translation-text-col',
          value: (row) => truncateText(row.text, 120),
        },
        {
          label: 'Stato',
          render: (row) =>
            `<span class="pill ${row.text == null ? 'is-blocked' : 'is-active'}">${
              row.text == null ? 'Mancante' : 'Tradotta'
            }</span>`,
        },
        {
          label: 'Aggiornata il',
          value: (row) => formatDateTime(row.translation_updated_at),
        },
        { label: 'Azione', className: 'actions-col', action: true },
      ],
      searchText: (row) => [row.key, row.namespace, row.text, row.description],
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
    let rows = getCurrentRows();
    const meta = sectionMeta[state.activeSection];
    if (typeof meta.extraFilter === 'function') {
      rows = rows.filter(meta.extraFilter);
    }
    const query =
      state.activeSection === 'translations'
        ? ''
        : state.search.trim().toLowerCase();
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
    const isAdsSection = state.activeSection === 'ads';
    const isBlockedWordsSection = state.activeSection === 'blockedWords';
    const isCommunicationsSection = state.activeSection === 'communications';
    const isSupportSection = state.activeSection === 'support';
    const isEventsSection = state.activeSection === 'events';
    const isTranslationsSection = state.activeSection === 'translations';
    const rows = getFilteredRows();

    sectionTitle.textContent = meta.title;
    sectionDescription.textContent = meta.description;
    searchInput.placeholder = meta.searchPlaceholder || 'Filtra risultati';
    itemsCount.textContent = String(
      typeof meta.metricValue === 'function' ? meta.metricValue() : rows.length,
    );
    searchInput.closest('.field').classList.toggle('hidden', meta.hideSearch === true);
    translationSearchButton.classList.toggle('hidden', !isTranslationsSection);
    translationSearchButton.disabled = isTranslationsSection && state.loadingSection;
    summaryPanel.classList.toggle('hidden', !isSummarySection);
    telemetryPanel.classList.toggle('hidden', !isTelemetrySection);
    appUpdatePanel.classList.toggle('hidden', !isAppUpdatesSection);
    announcementsPanel.classList.toggle('hidden', !isAnnouncementsSection);
    adsPanel.classList.toggle('hidden', !isAdsSection);
    eventsPanel.classList.toggle('hidden', !isEventsSection);
    blockedWordsPanel.classList.toggle('hidden', !isBlockedWordsSection);
    communicationsPanel.classList.toggle('hidden', !isCommunicationsSection);
    supportPanel.classList.toggle('hidden', !isSupportSection);
    translationsPanel.classList.toggle('hidden', !isTranslationsSection);
    tableHead.parentElement.parentElement.classList.toggle(
      'hidden',
      meta.hideTable === true,
    );
    renderSectionControls(rows);

    if (isSummarySection) renderSummaryPanel();
    if (isTelemetrySection) renderTelemetryPanel();
    if (isAppUpdatesSection) renderAppUpdatePanel();
    if (isAnnouncementsSection) renderAnnouncementsPanel();
    if (isAdsSection) renderAdsPanel();
    if (isCommunicationsSection) renderCommunicationsPanel();
    if (isSupportSection) renderSupportPanel();
    if (isEventsSection) renderEventsPanel();
    if (isTranslationsSection) renderTranslationsPanel();

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
          const actions = meta.rowActions
            ? meta.rowActions(row)
            : meta.rowAction
            ? [meta.rowAction(row)]
            : [];
          if (!actions.length) {
            tr.appendChild(td);
            return;
          }
          actions.filter(Boolean).forEach((action) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = action.className || 'ghost-button';
            button.textContent = action.label || 'Azione';
            button.addEventListener('click', action.onClick);
            td.appendChild(button);
          });
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
    const accessPolicy = state.appAccessPolicy || {};
    const accessSummary = state.appAccessSummary || {};
    const accessBlocked = accessPolicy.access_blocked === true;

    appAccessBlockedToggle.checked = accessBlocked;
    appAccessCurrentMode.textContent = accessBlocked ? 'Accesso bloccato' : 'Accesso consentito';
    appAccessCurrentMode.className = accessBlocked ? 'is-danger-text' : 'is-success-text';
    appAccessUpdatedAt.textContent = formatDateTime(accessPolicy.updated_at);
    appAccessMessageInput.value =
      accessPolicy.message ||
      'L\'app e temporaneamente non disponibile. Riprova piu tardi.';
    renderTelemetrySettingsControls({
      select: summaryTelemetryLevelSelect,
      currentLabel: summaryTelemetryCurrentLevel,
      updatedLabel: summaryTelemetryUpdatedAt,
    });
    appAccessDayInput.value =
      state.appAccessSummaryDay || accessSummary.day || todayDateInputValue();
    appAccessTotalUsers.textContent = String(accessSummary.total_users ?? 0);
    appAccessBikerUsers.textContent = String(accessSummary.biker_users ?? 0);
    appAccessPassengerUsers.textContent = String(
      accessSummary.passenger_users ?? 0,
    );
    appAccessUnknownUsers.textContent = String(
      accessSummary.unknown_users ?? 0,
    );
    appAccessTotalEvents.textContent = String(accessSummary.total_events ?? 0);

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
        note: 'Record in rides con status = open e start_time futura',
      },
      {
        label: 'Numero di uscite accettate',
        value: summary.rides_confirmed ?? 0,
        note: 'Giri accettati: record in rides con status = closed',
      },
      {
        label: 'Numero di uscite completate',
        value: summary.rides_completed ?? 0,
        note: 'Record in rides con status = completed',
      },
      {
        label: 'Numero di giri di gruppo aperti',
        value: summary.group_rides_open ?? 0,
        note: 'Giri di gruppo con status = active',
      },
      {
        label: 'Numero di giri di gruppo chiusi',
        value: summary.group_rides_closed ?? 0,
        note: 'Giri di gruppo cancellati o completati',
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
      {
        label: 'Blocco accesso app',
        value: accessBlocked ? 'Attivo' : 'Non attivo',
        note: 'Policy globale letta all\'avvio dell\'app',
      },
      {
        label: 'Telemetria log DB',
        value: formatTelemetryLevel(state.telemetry?.remote_min_level || 'error'),
        note: 'Soglia remota configurata per app_telemetry_events',
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

  function todayDateInputValue() {
    const date = new Date();
    const pad = (number) => String(number).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate(),
    )}`;
  }

  function truncateText(value, max) {
    if (value == null) return '-';
    const text = String(value);
    return text.length > max ? `${text.slice(0, max - 1)}…` : text;
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
    renderTelemetrySettingsControls({
      select: telemetryLevelSelect,
      currentLabel: telemetryCurrentLevel,
      updatedLabel: telemetryUpdatedAt,
    });
  }

  function renderTelemetrySettingsControls({
    select,
    currentLabel,
    updatedLabel,
  }) {
    const settings = state.telemetry || {};
    const level = String(settings.remote_min_level || 'error').trim().toLowerCase();
    select.value = ['off', 'error', 'warning', 'info'].includes(level)
      ? level
      : 'error';
    currentLabel.textContent = formatTelemetryLevel(level);
    currentLabel.className = level === 'off' ? 'is-danger-text' : 'is-success-text';
    updatedLabel.textContent = formatDateTime(settings.updated_at);
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

  function fillSelect(select, rows, valueKey, labelForRow, placeholder) {
    const selected = select.value;
    select.innerHTML = '';
    const empty = document.createElement('option');
    empty.value = '';
    empty.textContent = placeholder;
    select.appendChild(empty);
    rows.forEach((row) => {
      const option = document.createElement('option');
      option.value = String(row[valueKey] ?? '');
      option.textContent = labelForRow(row);
      select.appendChild(option);
    });
    select.value = selected;
  }

  async function loadEventAdminAreas1() {
    const countryCode = state.eventDraft.countryCode;
    state.eventAdminAreas1 = countryCode
      ? await callRpc('rpc_geo_list_admin_areas', {
          p_country_code: countryCode,
          p_level: 1,
          p_parent_id: null,
        })
      : [];
    await loadEventAdminAreas2();
  }

  async function loadEventAdminAreas2() {
    const countryCode = state.eventDraft.countryCode;
    const parentId = Number(state.eventDraft.adminArea1Id);
    state.eventAdminAreas2 =
      countryCode && Number.isSafeInteger(parentId) && parentId > 0
        ? await callRpc('rpc_geo_list_admin_areas', {
            p_country_code: countryCode,
            p_level: 2,
            p_parent_id: parentId,
          })
        : [];
  }

  async function sendEventModerationPush(row, requestId) {
    let lastError = '';
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        const result = await invokeEdgeFunction('send-push', {
          type: 'app_event_moderated',
          event_id: String(row.id),
          request_id: requestId,
        });
        if (Number(result?.sent || 0) > 0) return '';
        if (result?.status === 'processing') {
          lastError = 'invio già in elaborazione';
        } else {
          const attempted = Array.isArray(result?.notifications)
            ? result.notifications.reduce(
                (total, item) => total + Number(item?.attempted || 0),
                0,
              )
            : 0;
          lastError = attempted > 0
            ? 'FCM non ha confermato la consegna'
            : 'nessun token destinatario trovato';
        }
        console.warn('Event moderation push returned no deliveries', result);
      } catch (error) {
        lastError = normalizeError(error);
        console.warn('Event moderation push failed', error);
      }
      if (attempt < 3) {
        await new Promise((resolve) => window.setTimeout(resolve, attempt * 750));
      }
    }
    return ` Push non inviata dopo 3 tentativi: ${lastError}`;
  }

  async function approveEvent(row) {
    try {
      await callRpc('admin_app_event_approve', { p_event_id: Number(row.id) });
      const pushWarning = await sendEventModerationPush(row, crypto.randomUUID());
      showFlash(
        `Evento approvato e pubblicato.${pushWarning}`,
        pushWarning ? 'warning' : 'success',
      );
      await loadSection('events');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    }
  }

  async function rejectEvent(row) {
    const reason = window.prompt('Motivo del rifiuto (obbligatorio):', '');
    if (reason === null) return;
    if (reason.trim().length < 3) {
      showFlash('Inserisci un motivo di almeno 3 caratteri.', 'error');
      return;
    }
    try {
      await callRpc('admin_app_event_reject', {
        p_event_id: Number(row.id),
        p_reason: reason.trim(),
      });
      const pushWarning = await sendEventModerationPush(row, crypto.randomUUID());
      showFlash(
        `Evento rifiutato.${pushWarning}`,
        pushWarning ? 'warning' : 'success',
      );
      await loadSection('events');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    }
  }

  async function runStorySocialWorker() {
    const result = await invokeEdgeFunction('publish-story-to-social', {
      source: 'admin',
      batch_size: 6,
    });
    const results = Array.isArray(result?.results) ? result.results : [];
    const pushNotifications = Array.isArray(result?.push_notifications)
      ? result.push_notifications
      : [];
    return {
      claimed: Number(result?.claimed || 0),
      published: results.filter((item) => item.status === 'published').length,
      failed: results.filter((item) => item.status !== 'published').length,
      pushFailed: pushNotifications.filter((item) => item.status === 'failed').length,
      pushProcessing: pushNotifications.filter((item) => item.status === 'processing').length,
    };
  }

  async function approveStorySocialSubmission(row) {
    const initialCaption = String(row.admin_caption || row.suggested_caption || '').trim();
    const caption = window.prompt(
      'Caption da pubblicare su Facebook e Instagram (massimo 2200 caratteri):',
      initialCaption,
    );
    if (caption === null) return;
    if (caption.trim().length < 1 || caption.trim().length > 2200) {
      showFlash('La caption deve contenere da 1 a 2200 caratteri.', 'error');
      return;
    }
    try {
      await callRpc('admin_approve_story_social_submission', {
        p_submission_id: Number(row.id),
        p_caption: caption.trim(),
      });
    } catch (error) {
      showFlash(normalizeError(error), 'error');
      return;
    }

    try {
      const worker = await runStorySocialWorker();
      const warning = worker.failed > 0
        ? ` ${worker.failed} canali richiedono un nuovo tentativo.`
        : worker.pushFailed > 0
        ? ' Pubblicazione completata, ma la push di conferma sarà ritentata dal job schedulato.'
        : worker.pushProcessing > 0
        ? ' La push di conferma è già in elaborazione.'
        : worker.claimed === 0
        ? ' La richiesta è in coda e sarà elaborata dal job schedulato.'
        : '';
      showFlash(
        `Richiesta approvata. ${worker.published} pubblicazioni completate.${warning}`,
        warning ? 'warning' : 'success',
      );
    } catch (error) {
      showFlash(
        `Richiesta approvata e accodata. Avvio immediato non riuscito: ${normalizeError(error)}`,
        'warning',
      );
    }
    await loadSection('socialStories');
  }

  async function rejectStorySocialSubmission(row) {
    const reason = window.prompt('Motivo del rifiuto (obbligatorio):', '');
    if (reason === null) return;
    if (reason.trim().length < 3) {
      showFlash('Inserisci un motivo di almeno 3 caratteri.', 'error');
      return;
    }
    try {
      await callRpc('admin_reject_story_social_submission', {
        p_submission_id: Number(row.id),
        p_reason: reason.trim(),
      });
      showFlash('Proposta social rifiutata.', 'success');
      await loadSection('socialStories');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    }
  }

  async function retryStorySocialSubmission(row) {
    let queued = 0;
    try {
      queued = await callRpc('admin_retry_story_social_publication', {
        p_submission_id: Number(row.id),
        p_platform: null,
      });
    } catch (error) {
      showFlash(normalizeError(error), 'error');
      return;
    }

    try {
      const worker = await runStorySocialWorker();
      showFlash(
        `${Number(queued || 0)} canali rimessi in coda; ${worker.published} pubblicati ora.`,
        worker.failed > 0 ? 'warning' : 'success',
      );
    } catch (error) {
      showFlash(
        `${Number(queued || 0)} canali rimessi in coda. Avvio immediato non riuscito: ${normalizeError(error)}`,
        'warning',
      );
    }
    await loadSection('socialStories');
  }

  function renderEventsPanel() {
    eventIdInput.value = state.eventDraft.id;
    eventTitleInput.value = state.eventDraft.title;
    fillSelect(
      eventCountryInput,
      state.eventCountries,
      'country_code',
      (row) => row.name_it || row.name_en || row.country_code,
      'Seleziona Stato',
    );
    eventCountryInput.value = state.eventDraft.countryCode;
    fillSelect(
      eventAdminArea1Input,
      state.eventAdminAreas1,
      'id',
      (row) => row.name,
      'Seleziona area',
    );
    eventAdminArea1Input.value = state.eventDraft.adminArea1Id;
    fillSelect(
      eventAdminArea2Input,
      state.eventAdminAreas2,
      'id',
      (row) => row.name,
      'Nessuna area locale',
    );
    eventAdminArea2Input.value = state.eventDraft.adminArea2Id;
    const areasAutoResolved = Boolean(
      state.eventDraft.areasAutoResolved && state.eventDraft.adminArea1Id,
    );
    eventAdminArea1Field.classList.toggle('hidden', areasAutoResolved);
    eventAdminArea2Field.classList.toggle('hidden', areasAutoResolved);
    eventResolvedAreas.classList.toggle('hidden', !areasAutoResolved);
    eventResolvedAreasText.textContent = [
      eventCountryInput.selectedOptions[0]?.textContent || state.eventDraft.countryCode,
      state.eventDraft.adminArea1Name ||
        eventAdminArea1Input.selectedOptions[0]?.textContent || '',
      state.eventDraft.adminArea2Name ||
        eventAdminArea2Input.selectedOptions[0]?.textContent || '',
    ].filter(Boolean).join(' · ');
    eventLocationInput.value = state.eventDraft.locationLabel;
    eventLatitudeInput.value = state.eventDraft.latitude;
    eventLongitudeInput.value = state.eventDraft.longitude;
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

  function renderAdsPanel() {
    adIdInput.value = state.adDraft.id;
    adTitleInput.value = state.adDraft.title;
    adBodyInput.value = state.adDraft.body;
    adTargetUrlInput.value = state.adDraft.targetUrl;
    adCtaLabelInput.value = state.adDraft.ctaLabel;
    adImagePathInput.value = state.adDraft.imagePath;
    adPlacementSelect.value = [
      'community',
      'friends',
      'events',
      'stories',
    ].includes(state.adDraft.placement)
      ? state.adDraft.placement
      : 'community';
    adAudienceSelect.value = ['all', 'biker', 'passenger'].includes(
      state.adDraft.audience,
    )
      ? state.adDraft.audience
      : 'all';
    adPriorityInput.value = String(state.adDraft.priority ?? 0);
    adActiveToggle.checked = state.adDraft.isActive === true;
    adStartsInput.value = state.adDraft.startsAt;
    adEndsInput.value = state.adDraft.endsAt;

    if (state.adDraft.imagePreviewUrl) {
      adImagePreview.src = state.adDraft.imagePreviewUrl;
      adImagePreview.classList.remove('hidden');
    } else {
      adImagePreview.removeAttribute('src');
      adImagePreview.classList.add('hidden');
    }

    adSaveButton.textContent = state.adDraft.id ? 'Aggiorna ADS' : 'Salva ADS';
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
      countryCode: state.eventCountries[0]?.country_code || '',
      adminArea1Id: '',
      adminArea2Id: '',
      adminArea1Name: '',
      adminArea2Name: '',
      areasAutoResolved: false,
      locationLabel: '',
      latitude: '',
      longitude: '',
      eventDate: '',
      expiresAt: '',
      status: 'active',
      externalUrl: '',
      posterImagePath: '',
      posterPreviewUrl: '',
      posterFile: null,
    };
    closeEventLocationSuggestions();
    eventPosterInput.value = '';
    renderEventsPanel();
    loadEventAdminAreas1()
      .then(renderEventsPanel)
      .catch((error) => showFlash(normalizeError(error), 'error'));
  }

  function resetAdForm() {
    const objectUrl = state.adDraft.imagePreviewUrl || '';
    if (objectUrl.startsWith('blob:')) {
      URL.revokeObjectURL(objectUrl);
    }
    state.adDraft = {
      id: '',
      title: '',
      body: '',
      imagePath: '',
      imagePreviewUrl: '',
      imageFile: null,
      targetUrl: '',
      ctaLabel: '',
      placement: 'community',
      audience: 'all',
      priority: 0,
      isActive: true,
      startsAt: '',
      endsAt: '',
    };
    adImageInput.value = '';
    renderAdsPanel();
  }

  async function editEvent(row) {
    const objectUrl = state.eventDraft.posterPreviewUrl || '';
    if (objectUrl.startsWith('blob:')) {
      URL.revokeObjectURL(objectUrl);
    }
    state.eventDraft = {
      id: String(row.id || ''),
      title: row.title || '',
      description: row.description || '',
      countryCode: row.country_code || 'IT',
      adminArea1Id: String(row.admin_area_1_id || ''),
      adminArea2Id: String(row.admin_area_2_id || ''),
      adminArea1Name: row.admin_area_1_name || '',
      adminArea2Name: row.admin_area_2_name || '',
      areasAutoResolved: Boolean(row.location_label && row.admin_area_1_id),
      locationLabel: row.location_label || '',
      latitude: row.latitude == null ? '' : String(row.latitude),
      longitude: row.longitude == null ? '' : String(row.longitude),
      eventDate: toDateTimeLocalValue(row.event_date),
      expiresAt: toDateTimeLocalValue(row.expires_at),
      status: ['active', 'hidden'].includes(String(row.status || '').toLowerCase())
        ? String(row.status).toLowerCase()
        : 'active',
      externalUrl: row.external_url || '',
      posterImagePath: row.poster_image_path || '',
      posterPreviewUrl: row.poster_signed_url || '',
      posterFile: null,
    };
    await loadEventAdminAreas1();
    eventPosterInput.value = '';
    renderEventsPanel();
    eventsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function editAd(row) {
    const objectUrl = state.adDraft.imagePreviewUrl || '';
    if (objectUrl.startsWith('blob:')) {
      URL.revokeObjectURL(objectUrl);
    }
    state.adDraft = {
      id: String(row.id || ''),
      title: row.title || '',
      body: row.body || '',
      imagePath: row.image_path || '',
      imagePreviewUrl: '',
      imageFile: null,
      targetUrl: row.target_url || '',
      ctaLabel: row.cta_label || '',
      placement: ['community', 'friends', 'events', 'stories'].includes(
        String(row.placement || '').toLowerCase(),
      )
        ? String(row.placement).toLowerCase()
        : 'community',
      audience: ['all', 'biker', 'passenger'].includes(
        String(row.audience || '').toLowerCase(),
      )
        ? String(row.audience).toLowerCase()
        : 'all',
      priority: Number.parseInt(row.priority ?? 0, 10) || 0,
      isActive: row.is_active === true,
      startsAt: toDateTimeLocalValue(row.starts_at),
      endsAt: toDateTimeLocalValue(row.ends_at),
    };
    adImageInput.value = '';
    renderAdsPanel();
    adsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  async function uploadAdImage(file) {
    if (!file) return null;
    const result = await invokeEdgeFunction('admin-custom-ad-image-upload', {
      fileName: file.name,
      contentType: file.type || 'image/jpeg',
      base64: await fileToBase64(file),
    });
    const storagePath = String(result?.storagePath || '').trim();
    if (!storagePath) {
      throw new Error('Upload immagine ADS non riuscito.');
    }
    return {
      storagePath,
      displayUrl: String(result?.displayUrl || '').trim(),
    };
  }

  function updateEventDraftFromInputs() {
    state.eventDraft.id = eventIdInput.value.trim();
    state.eventDraft.title = eventTitleInput.value.trim();
    state.eventDraft.countryCode = eventCountryInput.value.trim();
    state.eventDraft.adminArea1Id = eventAdminArea1Input.value.trim();
    state.eventDraft.adminArea2Id = eventAdminArea2Input.value.trim();
    state.eventDraft.locationLabel = eventLocationInput.value.trim();
    state.eventDraft.latitude = eventLatitudeInput.value.trim();
    state.eventDraft.longitude = eventLongitudeInput.value.trim();
    state.eventDraft.description = eventDescriptionInput.value.trim();
    state.eventDraft.eventDate = eventDateInput.value;
    state.eventDraft.expiresAt = eventExpiresInput.value;
    state.eventDraft.status = eventStatusInput.value || 'active';
    state.eventDraft.externalUrl = eventUrlInput.value.trim();
    state.eventDraft.posterImagePath = eventPosterPathInput.value.trim();
  }

  function closeEventLocationSuggestions() {
    eventLocationSuggestions.innerHTML = '';
    eventLocationSuggestions.classList.add('hidden');
  }

  function newEventLocationSessionToken() {
    state.eventLocationSessionToken = crypto.randomUUID();
    return state.eventLocationSessionToken;
  }

  async function searchEventLocations() {
    const input = eventLocationInput.value.trim();
    if (input.length < 3) {
      closeEventLocationSuggestions();
      return;
    }
    const sessionToken = state.eventLocationSessionToken || newEventLocationSessionToken();
    try {
      const result = await invokeEdgeFunction('admin-place-autocomplete', {
        action: 'autocomplete',
        input,
        countryCode: eventCountryInput.value || 'IT',
        sessionToken,
      });
      if (eventLocationInput.value.trim() !== input) return;
      const suggestions = Array.isArray(result?.suggestions) ? result.suggestions : [];
      eventLocationSuggestions.innerHTML = '';
      suggestions.forEach((suggestion) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'event-location-suggestion';
        button.setAttribute('role', 'option');
        const title = document.createElement('strong');
        title.textContent = suggestion.primaryText || suggestion.fullText || '';
        const subtitle = document.createElement('small');
        subtitle.textContent = suggestion.secondaryText || '';
        button.append(title, subtitle);
        button.addEventListener('click', () => selectEventLocation(suggestion));
        eventLocationSuggestions.appendChild(button);
      });
      eventLocationSuggestions.classList.toggle('hidden', suggestions.length === 0);
    } catch (error) {
      closeEventLocationSuggestions();
      showFlash(`Autocomplete indirizzo non disponibile: ${normalizeError(error)}`, 'error');
    }
  }

  async function selectEventLocation(suggestion) {
    const fallback = String(suggestion.fullText || suggestion.primaryText || '').trim();
    eventLocationInput.value = fallback;
    closeEventLocationSuggestions();
    try {
      const result = await invokeEdgeFunction('admin-place-autocomplete', {
        action: 'details',
        placeId: suggestion.placeId,
        sessionToken: state.eventLocationSessionToken,
        countryCode: eventCountryInput.value || 'IT',
      });
      const latitude = Number(result?.latitude);
      const longitude = Number(result?.longitude);
      if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
        throw new Error('Coordinate non disponibili');
      }
      const label = String(result?.formattedAddress || fallback).trim();
      state.eventDraft.locationLabel = label;
      state.eventDraft.latitude = String(latitude);
      state.eventDraft.longitude = String(longitude);
      state.eventDraft.adminArea1Id = result?.adminArea1Id == null
        ? ''
        : String(result.adminArea1Id);
      state.eventDraft.adminArea2Id = result?.adminArea2Id == null
        ? ''
        : String(result.adminArea2Id);
      state.eventDraft.adminArea1Name = String(result?.adminArea1Name || '');
      state.eventDraft.adminArea2Name = String(result?.adminArea2Name || '');
      state.eventDraft.areasAutoResolved = Boolean(state.eventDraft.adminArea1Id);
      eventLocationInput.value = label;
      eventLatitudeInput.value = String(latitude);
      eventLongitudeInput.value = String(longitude);
      state.eventLocationSessionToken = '';
      await loadEventAdminAreas1();
      renderEventsPanel();
      if (!state.eventDraft.areasAutoResolved) {
        showFlash(
          'Indirizzo acquisito, ma le aree non sono state riconosciute. Selezionale manualmente.',
          'warning',
        );
      }
    } catch (error) {
      eventLatitudeInput.value = '';
      eventLongitudeInput.value = '';
      state.eventDraft.latitude = '';
      state.eventDraft.longitude = '';
      state.eventDraft.adminArea1Id = '';
      state.eventDraft.adminArea2Id = '';
      state.eventDraft.adminArea1Name = '';
      state.eventDraft.adminArea2Name = '';
      state.eventDraft.areasAutoResolved = false;
      renderEventsPanel();
      showFlash(`Impossibile acquisire le coordinate: ${normalizeError(error)}`, 'error');
    }
  }

  function updateAdDraftFromInputs() {
    state.adDraft.id = adIdInput.value.trim();
    state.adDraft.title = adTitleInput.value.trim();
    state.adDraft.body = adBodyInput.value.trim();
    state.adDraft.targetUrl = adTargetUrlInput.value.trim();
    state.adDraft.ctaLabel = adCtaLabelInput.value.trim();
    state.adDraft.imagePath = adImagePathInput.value.trim();
    state.adDraft.placement = adPlacementSelect.value || 'community';
    state.adDraft.audience = adAudienceSelect.value || 'all';
    state.adDraft.priority = parseOptionalIntegerInput(adPriorityInput.value) ?? 0;
    state.adDraft.isActive = adActiveToggle.checked;
    state.adDraft.startsAt = adStartsInput.value;
    state.adDraft.endsAt = adEndsInput.value;
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
    if (!state.eventDraft.countryCode || !state.eventDraft.adminArea1Id) {
      showFlash('Seleziona Stato e area amministrativa dell\'evento.', 'error');
      eventCountryInput.focus();
      return;
    }
    const latitude = Number(state.eventDraft.latitude);
    const longitude = Number(state.eventDraft.longitude);
    if (
      state.eventDraft.locationLabel.length < 3 ||
      !Number.isFinite(latitude) ||
      !Number.isFinite(longitude)
    ) {
      showFlash('Cerca e seleziona un indirizzo valido per acquisire le coordinate.', 'error');
      eventLocationInput.focus();
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
        p_country_code: state.eventDraft.countryCode,
        p_admin_area_1_id: Number(state.eventDraft.adminArea1Id),
        p_admin_area_2_id: state.eventDraft.adminArea2Id
          ? Number(state.eventDraft.adminArea2Id)
          : null,
        p_location_label: state.eventDraft.locationLabel,
        p_latitude: latitude,
        p_longitude: longitude,
        p_event_date: eventDate,
        p_expires_at: expiresAt,
        p_poster_image_path: state.eventDraft.posterImagePath,
        p_external_url: state.eventDraft.externalUrl || null,
        p_status: state.eventDraft.status || 'active',
      };

      let savedEvent;
      const wasEditing = Boolean(state.eventDraft.id);
      if (state.eventDraft.id) {
        savedEvent = await callRpc(meta.updateRpc, {
          p_id: Number(state.eventDraft.id),
          ...payload,
        });
      } else {
        savedEvent = await callRpc(meta.createRpc, payload);
      }

      const savedRow = Array.isArray(savedEvent) ? savedEvent[0] : savedEvent;
      const savedEventId = Number(savedRow?.id || state.eventDraft.id);
      let publicationPushWarning = '';
      if (payload.p_status === 'active' && Number.isSafeInteger(savedEventId)) {
        try {
          await invokeEdgeFunction('send-push', {
            type: 'app_event_published',
            event_id: String(savedEventId),
            request_id: crypto.randomUUID(),
          });
        } catch (error) {
          console.warn('Event publication push failed', error);
          publicationPushWarning = ' Push territoriale non confermata: la coda proverà nuovamente l\'invio.';
        }
      }

      resetEventForm();
      await loadSection('events');
      showFlash(
        `${wasEditing ? 'Evento aggiornato.' : 'Evento creato.'}${publicationPushWarning}`,
        publicationPushWarning ? 'warning' : 'success',
      );
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      eventSaveButton.disabled = false;
      renderEventsPanel();
    }
  }

  async function saveAd(event) {
    event.preventDefault();
    const meta = sectionMeta.ads;
    updateAdDraftFromInputs();

    const startsAt = toIsoFromLocalInput(state.adDraft.startsAt);
    const endsAt = toIsoFromLocalInput(state.adDraft.endsAt);

    if (state.adDraft.title.length < 3) {
      showFlash('Inserisci un titolo ADS di almeno 3 caratteri.', 'error');
      adTitleInput.focus();
      return;
    }

    if (state.adDraft.body.length < 3) {
      showFlash('Inserisci un testo ADS di almeno 3 caratteri.', 'error');
      adBodyInput.focus();
      return;
    }

    if (state.adDraft.targetUrl && !/^https?:\/\//i.test(state.adDraft.targetUrl)) {
      showFlash('Inserisci un link ADS valido che inizi con http:// o https://.', 'error');
      adTargetUrlInput.focus();
      return;
    }

    if (state.adDraft.ctaLabel && !state.adDraft.targetUrl) {
      showFlash('Inserisci anche il link web per usare il testo CTA.', 'error');
      adTargetUrlInput.focus();
      return;
    }

    if (startsAt && endsAt && new Date(endsAt).getTime() <= new Date(startsAt).getTime()) {
      showFlash('La fine visibilita deve essere successiva all\'inizio.', 'error');
      adEndsInput.focus();
      return;
    }

    adSaveButton.disabled = true;
    adSaveButton.textContent = 'Salvataggio...';

    try {
      if (state.adDraft.imageFile) {
        const upload = await uploadAdImage(state.adDraft.imageFile);
        state.adDraft.imagePath = upload.storagePath;
        state.adDraft.imagePreviewUrl = upload.displayUrl || state.adDraft.imagePreviewUrl;
      }

      if (!state.adDraft.imagePath) {
        showFlash('Carica un\'immagine per l\'ADS.', 'error');
        adImageInput.focus();
        return;
      }

      const payload = {
        p_title: state.adDraft.title,
        p_body: state.adDraft.body,
        p_image_path: state.adDraft.imagePath,
        p_target_url: state.adDraft.targetUrl || null,
        p_cta_label: state.adDraft.ctaLabel || null,
        p_placement: state.adDraft.placement,
        p_audience: state.adDraft.audience,
        p_is_active: state.adDraft.isActive,
        p_starts_at: startsAt,
        p_ends_at: endsAt,
        p_priority: state.adDraft.priority,
      };

      if (state.adDraft.id) {
        await callRpc(meta.updateRpc, {
          p_id: Number(state.adDraft.id),
          ...payload,
        });
        showFlash('ADS aggiornato.', 'success');
      } else {
        await callRpc(meta.createRpc, payload);
        showFlash('ADS creato.', 'success');
      }

      resetAdForm();
      await loadSection('ads');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      adSaveButton.disabled = false;
      renderAdsPanel();
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
    if (error) {
      throw new Error(await resolveEdgeFunctionError(error));
    }
    return data;
  }

  async function resolveEdgeFunctionError(error) {
    const fallback = normalizeError(error);
    const response = error?.context;
    if (!response || typeof response.clone !== 'function') return fallback;

    try {
      const payload = await response.clone().json();
      if (payload?.error) return String(payload.error);
      if (payload?.message) return String(payload.message);
    } catch (_) {
      try {
        const text = await response.clone().text();
        if (text.trim()) return text.trim();
      } catch (_) {
        return fallback;
      }
    }

    return fallback;
  }

  async function loadRows(meta, params) {
    if (meta.listFunction) {
      const result = await invokeEdgeFunction(meta.listFunction, {
        ...(meta.listFunctionPayload || {}),
        ...(params || {}),
      });
      if (Array.isArray(result)) return result;
      return Array.isArray(result?.rows) ? result.rows : [];
    }
    return callRpc(meta.listRpc, params);
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
    const previousSection = state.activeSection;
    state.activeSection = sectionName;
    if (previousSection !== sectionName) {
      searchInput.value =
        sectionName === 'translations' ? state.translationSearch : state.search;
    }
    state.selectedRowIds.clear();
    if (sectionName !== 'support') {
      stopSupportAutoRefresh();
    }
    renderMenu();
    state.loadingSection = true;
    renderTable();
    try {
      const meta = sectionMeta[sectionName];
      if (sectionName === 'summary') {
        const [summary, accessPolicy, telemetrySettings, appAccessSummary] = await Promise.all([
          callRpc(meta.getRpc),
          callRpc(meta.accessPolicyGetRpc),
          callRpc(meta.telemetryGetRpc),
          callRpc(meta.appAccessSummaryRpc, {
            p_day: state.appAccessSummaryDay || todayDateInputValue(),
          }),
        ]);
        state.summary = summary || null;
        state.appAccessPolicy = accessPolicy || null;
        state.telemetry = telemetrySettings || null;
        state.appAccessSummary = appAccessSummary || null;
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
        const rows = await loadRows(meta, buildRideFilterPayload());
        state.rides = Array.isArray(rows) ? rows : [];
      } else if (sectionName === 'events') {
        const [rows, countries] = await Promise.all([
          loadRows(meta),
          callRpc('rpc_geo_list_enabled_countries'),
        ]);
        state.events = Array.isArray(rows) ? rows : [];
        state.eventCountries = Array.isArray(countries) ? countries : [];
        if (!state.eventDraft.countryCode) {
          state.eventDraft.countryCode =
            state.eventCountries.find((row) => row.country_code === 'IT')?.country_code ||
            state.eventCountries[0]?.country_code ||
            '';
        }
        await loadEventAdminAreas1();
      } else if (sectionName === 'translations') {
        const locales = await callRpc('admin_locales_list');
        state.translationLocales = Array.isArray(locales) ? locales : [];
        if (
          !state.translationLocales.some(
            (locale) => locale.code === state.translationLocale,
          )
        ) {
          state.translationLocale = state.translationLocales[0]?.code || 'it';
        }
        const listPayload = (locale, missingOnly) => ({
          p_locale: locale,
          p_search: state.translationSearch || null,
          p_missing_only: missingOnly,
          p_limit: TRANSLATIONS_PAGE_LIMIT,
          p_offset: 0,
        });
        const needsReference = state.translationLocale !== 'it';
        const [rows, referenceRows] = await Promise.all([
          callRpc(
            meta.listRpc,
            listPayload(state.translationLocale, state.translationMissingOnly),
          ),
          needsReference
            ? callRpc(meta.listRpc, listPayload('it', false))
            : Promise.resolve([]),
        ]);
        state.translations = Array.isArray(rows) ? rows : [];
        state.translationReference = {};
        (Array.isArray(referenceRows) ? referenceRows : []).forEach((row) => {
          if (row.text != null) state.translationReference[row.key] = row.text;
        });
        closeTranslationEditor();
      } else {
        const rows = await loadRows(meta);
        state[sectionName] = Array.isArray(rows) ? rows : [];
      }
      state.loadingSection = false;
      renderTable();
      if (sectionName === 'support') {
        startSupportAutoRefresh();
      }
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
    if ((!meta.deleteRpc && !meta.deleteFunction) || !rowIds.length) return;

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
    await saveTelemetrySettingsFrom({
      level: telemetryLevelSelect.value,
      button: telemetrySaveButton,
      progressText: 'Salvataggio...',
      idleText: 'Salva soglia log',
      afterSave: renderTelemetryPanel,
    });
  }

  async function saveSummaryTelemetrySettings() {
    await saveTelemetrySettingsFrom({
      level: summaryTelemetryLevelSelect.value,
      button: summaryTelemetrySaveButton,
      progressText: 'Salvataggio...',
      idleText: 'Salva telemetria',
      afterSave: renderSummaryPanel,
    });
  }

  async function refreshAppAccessSummary() {
    const meta = sectionMeta.summary;
    const selectedDay = appAccessDayInput.value || todayDateInputValue();
    state.appAccessSummaryDay = selectedDay;
    appAccessRefreshButton.disabled = true;
    appAccessRefreshButton.textContent = 'Caricamento...';

    try {
      state.appAccessSummary = await callRpc(meta.appAccessSummaryRpc, {
        p_day: selectedDay,
      });
      renderSummaryPanel();
      showFlash('Accessi app aggiornati.', 'success');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      appAccessRefreshButton.disabled = false;
      appAccessRefreshButton.textContent = 'Aggiorna accessi';
    }
  }

  async function saveTelemetrySettingsFrom({
    level,
    button,
    progressText,
    idleText,
    afterSave,
  }) {
    const meta = sectionMeta.telemetry;
    button.disabled = true;
    button.textContent = progressText;

    try {
      const updated = await callRpc(meta.updateRpc, {
        p_remote_min_level: level,
      });
      state.telemetry = updated || {
        remote_min_level: level,
      };
      afterSave();
      showFlash('Soglia telemetria aggiornata.', 'success');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      button.disabled = false;
      button.textContent = idleText;
    }
  }

  async function saveAppAccessPolicy() {
    const meta = sectionMeta.summary;
    const message = appAccessMessageInput.value.trim();

    if (message.length < 3) {
      showFlash('Inserisci un messaggio di almeno 3 caratteri.', 'error');
      appAccessMessageInput.focus();
      return;
    }

    appAccessSaveButton.disabled = true;
    appAccessSaveButton.textContent = 'Salvataggio...';

    try {
      const updated = await callRpc(meta.accessPolicyUpdateRpc, {
        p_access_blocked: appAccessBlockedToggle.checked,
        p_message: message,
      });
      state.appAccessPolicy = updated || null;
      renderSummaryPanel();
      showFlash('Blocco accesso app aggiornato.', 'success');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      appAccessSaveButton.disabled = false;
      appAccessSaveButton.textContent = 'Salva blocco accesso';
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

  function formatAdPlacement(value) {
    switch (String(value || '').trim().toLowerCase()) {
      case 'friends':
        return 'Amici';
      case 'events':
        return 'Eventi';
      case 'stories':
        return 'Storie';
      default:
        return 'Community';
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

  function formatSupportStatus(value) {
    switch (String(value || '').trim().toLowerCase()) {
      case 'pending_admin':
        return 'Da rispondere';
      case 'closed':
        return 'Chiusa';
      default:
        return 'Aperta';
    }
  }

  function supportStatusClass(value) {
    const status = String(value || '').trim().toLowerCase();
    if (status === 'closed') return 'is-blocked';
    if (status === 'pending_admin') return 'is-warning';
    return 'is-active';
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

  function startSupportAutoRefresh() {
    stopSupportAutoRefresh();
    state.supportAutoRefreshTimer = window.setInterval(() => {
      refreshSupportQuietly().catch((error) => {
        console.warn('Support auto-refresh failed', error);
      });
    }, SUPPORT_AUTO_REFRESH_MS);
  }

  function stopSupportAutoRefresh() {
    if (state.supportAutoRefreshTimer) {
      window.clearInterval(state.supportAutoRefreshTimer);
      state.supportAutoRefreshTimer = null;
    }
    state.refreshingSupport = false;
  }

  async function refreshSupportQuietly() {
    if (
      state.activeSection !== 'support' ||
      state.loadingSection ||
      state.refreshingSupport
    ) {
      return;
    }

    state.refreshingSupport = true;
    try {
      const selectedThreadId = Number(
        state.supportSelectedThread?.thread_id || state.supportSelectedThread?.id,
      );
      const rows = await loadRows(sectionMeta.support);
      state.support = Array.isArray(rows) ? rows : [];

      if (Number.isFinite(selectedThreadId) && selectedThreadId > 0) {
        const refreshed = state.support.find(
          (row) => Number(row.thread_id || row.id) === selectedThreadId,
        );
        if (refreshed) {
          state.supportSelectedThread = refreshed;
        }
        const messages = await callRpc('admin_support_list_messages', {
          p_thread_id: selectedThreadId,
        });
        state.supportMessages = Array.isArray(messages) ? messages : [];
      }

      renderTable();
    } finally {
      state.refreshingSupport = false;
    }
  }

  function renderSupportPanel() {
    renderSupportUserSearchResults();
    const selected = state.supportSelectedThread;
    const hasSelected = !!selected;
    supportEmptyState.classList.toggle('hidden', hasSelected);
    supportConversation.classList.toggle('hidden', !hasSelected);
    if (!hasSelected) return;

    const status = String(selected.status || 'open').trim().toLowerCase();
    supportThreadTitle.textContent = selected.user_nickname || 'Utente';
    supportThreadMeta.textContent = [
      formatUserType(selected.user_type),
      selected.user_email || null,
      `Stato: ${formatSupportStatus(status)}`,
      `Aggiornata: ${formatDateTime(selected.last_message_at)}`,
    ]
      .filter(Boolean)
      .join(' · ');
    supportCloseButton.classList.toggle('hidden', status === 'closed');
    supportReopenButton.classList.toggle('hidden', status !== 'closed');

    renderSupportMessages();
  }

  function renderSupportUserSearchResults() {
    supportUserSearchResults.innerHTML = '';

    if (state.loadingSupportUsers) {
      supportUserSearchResults.textContent = 'Ricerca utenti in corso...';
      return;
    }

    if (!state.supportUserSearchStarted) {
      supportUserSearchResults.textContent =
        'Inserisci almeno 2 caratteri per cercare un utente.';
      return;
    }

    if (!state.supportUserResults.length) {
      supportUserSearchResults.textContent = 'Nessun utente trovato.';
      return;
    }

    state.supportUserResults.forEach((user) => {
      const row = document.createElement('div');
      row.className = 'support-user-search-result';

      const details = document.createElement('div');
      const title = document.createElement('strong');
      title.textContent = user.user_nickname || 'Utente';
      const meta = document.createElement('span');
      meta.textContent = [
        formatUserType(user.user_type),
        user.user_email || null,
        user.active_thread_id ? 'Chat attiva' : 'Nessuna chat attiva',
      ]
        .filter(Boolean)
        .join(' · ');
      details.append(title, meta);

      const button = document.createElement('button');
      button.className = user.active_thread_id ? 'ghost-button' : 'primary-button';
      button.type = 'button';
      button.textContent = user.active_thread_id ? 'Apri chat' : 'Avvia chat';
      button.disabled = state.openingSupportUserId === user.user_id;
      button.addEventListener('click', () => openOrCreateSupportThreadForUser(user));

      row.append(details, button);
      supportUserSearchResults.appendChild(row);
    });
  }

  async function searchSupportUsers(event) {
    event.preventDefault();
    const search = supportUserSearchInput.value.trim();
    if (search.length < 2) {
      showFlash('Inserisci almeno 2 caratteri per cercare un utente.', 'error');
      supportUserSearchInput.focus();
      return;
    }

    state.supportUserSearchStarted = true;
    state.loadingSupportUsers = true;
    state.supportUserResults = [];
    supportUserSearchButton.disabled = true;
    supportUserSearchButton.textContent = 'Ricerca...';
    renderSupportUserSearchResults();

    try {
      const rows = await callRpc('admin_support_search_users', {
        p_user_type: supportUserTypeSelect.value,
        p_search: search,
        p_limit: 30,
      });
      state.supportUserResults = Array.isArray(rows) ? rows : [];
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      state.loadingSupportUsers = false;
      supportUserSearchButton.disabled = false;
      supportUserSearchButton.textContent = 'Cerca utente';
      renderSupportUserSearchResults();
    }
  }

  async function openOrCreateSupportThreadForUser(user) {
    if (!user?.user_id || state.openingSupportUserId) return;
    state.openingSupportUserId = user.user_id;
    renderSupportUserSearchResults();

    try {
      const thread = await callRpc('admin_support_get_or_create_thread', {
        p_user_id: user.user_id,
      });
      const threadId = Number(thread?.thread_id || thread?.id);
      if (!Number.isFinite(threadId) || threadId <= 0) {
        throw new Error('Thread supporto non disponibile.');
      }

      await loadSection('support');
      const refreshed = state.support.find(
        (row) => Number(row.thread_id || row.id) === threadId,
      );
      await openSupportThread(refreshed || thread);
      supportReplyInput.focus();
      showFlash(
        user.active_thread_id
          ? 'Conversazione supporto aperta.'
          : 'Nuova conversazione supporto pronta per il primo messaggio.',
        'success',
      );
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    } finally {
      state.openingSupportUserId = null;
      renderSupportUserSearchResults();
    }
  }

  function renderSupportMessages() {
    supportMessagesList.innerHTML = '';

    if (state.loadingSupportMessages) {
      supportMessagesList.innerHTML = '<div class="support-empty-state">Caricamento messaggi...</div>';
      return;
    }

    if (!state.supportMessages.length) {
      supportMessagesList.innerHTML = '<div class="support-empty-state">Nessun messaggio disponibile.</div>';
      return;
    }

    state.supportMessages.forEach((message) => {
      const article = document.createElement('article');
      const role = String(message.sender_role || '').trim().toLowerCase();
      article.className = `support-message ${role === 'admin' ? 'is-admin' : 'is-user'}`;
      article.innerHTML = `
        <div class="support-message-meta">
          <strong>${escapeHtml(role === 'admin' ? 'Admin' : 'Utente')}</strong>
          <span>${escapeHtml(formatDateTime(message.created_at))}</span>
        </div>
        <p>${escapeHtml(message.body || '')}</p>
      `;
      supportMessagesList.appendChild(article);
    });

    supportMessagesList.scrollTop = supportMessagesList.scrollHeight;
  }

  async function openSupportThread(row) {
    state.supportSelectedThread = row;
    state.supportMessages = [];
    renderSupportPanel();
    await loadSupportMessages(row.thread_id || row.id);
  }

  async function loadSupportMessages(threadId) {
    const normalizedId = Number(threadId);
    if (!Number.isFinite(normalizedId) || normalizedId <= 0) return;
    state.loadingSupportMessages = true;
    renderSupportPanel();
    try {
      const rows = await callRpc('admin_support_list_messages', {
        p_thread_id: normalizedId,
      });
      state.supportMessages = Array.isArray(rows) ? rows : [];
      state.loadingSupportMessages = false;
      renderSupportPanel();
    } catch (error) {
      state.loadingSupportMessages = false;
      renderSupportPanel();
      showFlash(normalizeError(error), 'error');
    }
  }

  async function sendSupportReply() {
    const selected = state.supportSelectedThread;
    const threadId = Number(selected?.thread_id || selected?.id);
    const body = supportReplyInput.value.trim();

    if (!Number.isFinite(threadId) || threadId <= 0) {
      showFlash('Seleziona una conversazione supporto.', 'error');
      return;
    }
    if (body.length < 2) {
      showFlash('Inserisci una risposta di almeno 2 caratteri.', 'error');
      supportReplyInput.focus();
      return;
    }

    supportSendButton.disabled = true;
    supportSendButton.textContent = 'Invio...';

    try {
      const sent = await callRpc('admin_support_send_message', {
        p_thread_id: threadId,
        p_body: body,
      });
      let pushWarning = '';
      if (sent?.id) {
        try {
          const pushResult = await invokeEdgeFunction('send-push', {
            type: 'support_admin_reply_created',
            support_thread_id: String(threadId),
            support_message_id: String(sent.id),
          });
          if (!pushResult || Number(pushResult.sent || 0) <= 0) {
            const attempted = Array.isArray(pushResult?.notifications)
              ? pushResult.notifications.reduce(
                  (total, item) => total + Number(item?.attempted || 0),
                  0,
                )
              : 0;
            pushWarning = attempted > 0
              ? ' Push non inviata: FCM non ha confermato la consegna.'
              : ' Push non inviata: nessun token destinatario trovato.';
            console.warn('Support reply push returned no deliveries', pushResult);
          }
        } catch (error) {
          pushWarning = ` Push non inviata: ${normalizeError(error)}`;
          console.warn('Support reply push failed', error);
        }
      }
      supportReplyInput.value = '';
      showFlash(`Risposta inviata.${pushWarning}`, pushWarning ? 'warning' : 'success');
      await loadSupportMessages(threadId);
      await loadSection('support');
      const refreshed = state.support.find((row) => Number(row.thread_id) === threadId);
      if (refreshed) {
        state.supportSelectedThread = refreshed;
        renderSupportPanel();
      }
    } catch (error) {
      showFlash(normalizeError(error), 'error');
      supportReplyInput.focus();
    } finally {
      supportSendButton.disabled = false;
      supportSendButton.textContent = 'Invia risposta';
    }
  }

  async function updateSupportThreadStatus(status) {
    const selected = state.supportSelectedThread;
    const threadId = Number(selected?.thread_id || selected?.id);
    if (!Number.isFinite(threadId) || threadId <= 0) return;

    try {
      await callRpc('admin_support_update_thread_status', {
        p_thread_id: threadId,
        p_status: status,
      });
      showFlash(status === 'closed' ? 'Chat supporto chiusa.' : 'Chat supporto riaperta.', 'success');
      await loadSection('support');
      const refreshed = state.support.find((row) => Number(row.thread_id) === threadId);
      state.supportSelectedThread = refreshed || { ...selected, status };
      renderSupportPanel();
    } catch (error) {
      showFlash(normalizeError(error), 'error');
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

  function renderTranslationsPanel() {
    translationLocaleSelect.innerHTML = '';
    state.translationLocales.forEach((locale) => {
      const option = document.createElement('option');
      option.value = locale.code;
      option.textContent = `${locale.name} (${locale.code})`;
      translationLocaleSelect.appendChild(option);
    });
    translationLocaleSelect.value = state.translationLocale;
    translationMissingOnlyToggle.checked = state.translationMissingOnly;

    translationLocaleCards.innerHTML = '';
    state.translationLocales.forEach((locale) => {
      const card = document.createElement('article');
      card.className = 'translation-locale-card';

      const missing = Number(locale.missing_keys || 0);
      const publishedLabel = locale.published_at
        ? formatDateTime(locale.published_at)
        : 'mai pubblicato';

      card.innerHTML = `
        <div class="translation-locale-card-head">
          <strong>${escapeHtml(locale.name)} (${escapeHtml(locale.code)})</strong>
          <span class="pill ${locale.enabled ? 'is-active' : 'is-warning'}">
            ${locale.enabled ? 'Attiva' : 'Spenta'}
          </span>
        </div>
        <p class="translation-locale-meta">
          Bundle v${escapeHtml(String(locale.bundle_version ?? 0))} ·
          ${escapeHtml(publishedLabel)}
        </p>
        <p class="translation-locale-meta">
          ${escapeHtml(String(locale.translated_keys ?? 0))}/${escapeHtml(
            String(locale.total_keys ?? 0),
          )} chiavi tradotte ·
          <span class="${missing > 0 ? 'is-danger-text' : 'is-success-text'}">
            ${escapeHtml(String(missing))} mancanti
          </span>
        </p>
      `;

      const actions = document.createElement('div');
      actions.className = 'translation-locale-actions';

      const toggleButton = document.createElement('button');
      toggleButton.type = 'button';
      toggleButton.className = 'ghost-button';
      toggleButton.textContent = locale.enabled ? 'Disabilita' : 'Abilita';
      toggleButton.addEventListener('click', () =>
        toggleTranslationLocaleEnabled(locale),
      );
      actions.appendChild(toggleButton);

      const publishButton = document.createElement('button');
      publishButton.type = 'button';
      publishButton.className = 'primary-button';
      publishButton.textContent = 'Pubblica bundle';
      publishButton.addEventListener('click', () =>
        publishTranslationBundle(locale),
      );
      actions.appendChild(publishButton);

      card.appendChild(actions);
      translationLocaleCards.appendChild(card);
    });

    renderTranslationEditor();
  }

  function renderTranslationEditor() {
    const draft = state.translationDraft;
    translationEditorForm.classList.toggle('hidden', !draft);
    if (!draft) return;

    translationEditorKey.textContent = `${draft.key} · ${state.translationLocale}`;
    translationEditorDescription.textContent = draft.description || '';
    translationEditorDescription.classList.toggle('hidden', !draft.description);

    const reference = state.translationReference[draft.key];
    translationReferenceWrap.classList.toggle('hidden', reference == null);
    translationReferenceText.textContent = reference || '';
  }

  function editTranslation(row) {
    state.translationDraft = {
      key: row.key,
      description: row.description || '',
    };
    renderTranslationEditor();
    translationTextInput.value = row.text || '';
    translationTextInput.focus();
  }

  function closeTranslationEditor() {
    state.translationDraft = null;
    translationTextInput.value = '';
    translationEditorForm.classList.add('hidden');
  }

  function extractPlaceholders(text) {
    const found = String(text || '').match(/\{[a-zA-Z0-9_]+\}/g) || [];
    return [...new Set(found)].sort();
  }

  async function refreshTranslationLocales() {
    const locales = await callRpc('admin_locales_list');
    state.translationLocales = Array.isArray(locales) ? locales : [];
  }

  async function saveTranslation(event) {
    event.preventDefault();
    const draft = state.translationDraft;
    if (!draft) return;

    const text = translationTextInput.value;
    if (!text.trim()) {
      showFlash('Il testo della traduzione non puo essere vuoto.', 'error');
      translationTextInput.focus();
      return;
    }

    const reference = state.translationReference[draft.key];
    if (reference != null) {
      const expected = extractPlaceholders(reference);
      const actual = extractPlaceholders(text);
      if (expected.join(',') !== actual.join(',')) {
        const proceed = window.confirm(
          `Attenzione: i placeholder non coincidono con il testo italiano.\n` +
            `Attesi: ${expected.join(', ') || '(nessuno)'}\n` +
            `Trovati: ${actual.join(', ') || '(nessuno)'}\n\nSalvare comunque?`,
        );
        if (!proceed) return;
      }
    }

    translationSaveButton.disabled = true;
    translationSaveButton.textContent = 'Salvataggio...';

    try {
      await callRpc('admin_translations_upsert', {
        p_key: draft.key,
        p_locale: state.translationLocale,
        p_text: text,
      });
      const row = state.translations.find((item) => item.key === draft.key);
      if (row) {
        row.text = text;
        row.translation_updated_at = new Date().toISOString();
      }
      if (state.translationLocale === 'it') {
        state.translationReference[draft.key] = text;
      }
      await refreshTranslationLocales();
      closeTranslationEditor();
      showFlash(
        `Traduzione salvata (${draft.key}, ${state.translationLocale}). ` +
          'Ricordati di pubblicare il bundle per renderla visibile alle app.',
        'success',
      );
      renderTable();
    } catch (error) {
      showFlash(normalizeError(error), 'error');
      translationTextInput.focus();
    } finally {
      translationSaveButton.disabled = false;
      translationSaveButton.textContent = 'Salva traduzione';
    }
  }

  async function publishTranslationBundle(locale) {
    const missing = Number(locale.missing_keys || 0);
    const warning = missing > 0
      ? `\nAttenzione: ${missing} chiavi sono ancora senza traduzione (i client useranno il fallback).`
      : '';
    const proceed = window.confirm(
      `Pubblicare il bundle "${locale.code}"? I client riceveranno i testi correnti al prossimo avvio.${warning}`,
    );
    if (!proceed) return;

    try {
      const version = await callRpc('admin_publish_translation_bundle', {
        p_locale: locale.code,
      });
      await refreshTranslationLocales();
      renderTranslationsPanel();
      showFlash(`Bundle "${locale.code}" pubblicato: versione ${version}.`, 'success');
    } catch (error) {
      showFlash(normalizeError(error), 'error');
    }
  }

  async function toggleTranslationLocaleEnabled(locale) {
    const enabling = locale.enabled !== true;
    const message = enabling
      ? `Abilitare la lingua "${locale.code}"? I device in questa lingua inizieranno a ricevere il bundle pubblicato.`
      : `Disabilitare la lingua "${locale.code}"? I device torneranno al fallback (catalogo bundled).`;
    if (!window.confirm(message)) return;

    try {
      await callRpc('admin_locales_upsert', {
        p_code: locale.code,
        p_name: locale.name,
        p_enabled: enabling,
        p_fallback_locale: locale.fallback_locale,
      });
      await refreshTranslationLocales();
      renderTranslationsPanel();
      showFlash(
        `Lingua "${locale.code}" ${enabling ? 'abilitata' : 'disabilitata'}.`,
        'success',
      );
    } catch (error) {
      showFlash(normalizeError(error), 'error');
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
    stopSupportAutoRefresh();
    await state.supabase.auth.signOut();
    state.session = null;
    state.admin = null;
    renderSignedOut();
    showFlash('Sessione chiusa.', 'success');
  }

  function renderSignedOut() {
    stopSupportAutoRefresh();
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

  function formatGroupRideStatus(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'active') return 'Aperto';
    if (normalized === 'completed') return 'Completato';
    if (normalized === 'cancelled') return 'Cancellato';
    return normalized || '-';
  }

  function groupRideStatusClass(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'active') return 'is-active';
    if (normalized === 'completed') return 'is-warning';
    return 'is-blocked';
  }

  function formatEventStatus(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'active') return 'Attivo';
    if (normalized === 'hidden') return 'Nascosto';
    if (normalized === 'deleted') return 'Eliminato';
    return normalized || '-';
  }

  function isEventAgentEvent(row) {
    const publisherKind = String(row?.publisher_kind || '').trim().toLowerCase();
    return publisherKind === 'admin' && row?.created_by === null;
  }

  function canApproveEvent(row) {
    const moderationStatus = String(row?.moderation_status || '')
      .trim()
      .toLowerCase();
    return (
      moderationStatus === 'pending_review' ||
      (moderationStatus === 'draft' && isEventAgentEvent(row))
    );
  }

  function renderEventTitle(row) {
    const title = escapeHtml(row?.title || '-');
    if (!isEventAgentEvent(row)) return title;
    return `
      <div class="event-title-cell">
        <span class="event-agent-badge" title="Evento proposto automaticamente">Event Agent</span>
        <span>${title}</span>
      </div>
    `;
  }

  function eventStatusClass(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'active') return 'is-active';
    if (normalized === 'hidden') return 'is-warning';
    return 'is-blocked';
  }

  function formatStoryLifecycle(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'active') return 'Attiva';
    if (normalized === 'expired') return 'Scaduta';
    if (normalized === 'hidden') return 'Nascosta';
    return normalized || '-';
  }

  function storyLifecycleClass(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'active') return 'is-active';
    if (normalized === 'expired') return 'is-warning';
    return 'is-blocked';
  }

  function formatSocialModerationStatus(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'pending_review') return 'In revisione';
    if (normalized === 'approved') return 'Approvata';
    if (normalized === 'rejected') return 'Rifiutata';
    if (normalized === 'cancelled') return 'Ritirata';
    if (normalized === 'expired') return 'Scaduta';
    return normalized || '-';
  }

  function formatSocialPublicationStatus(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (!normalized) return 'Non avviata';
    if (normalized === 'queued') return 'In coda';
    if (normalized === 'processing') return 'In pubblicazione';
    if (normalized === 'retrying') return 'Retry programmato';
    if (normalized === 'published') return 'Pubblicata';
    if (normalized === 'failed') return 'Fallita';
    return normalized;
  }

  function socialStatusClass(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'approved' || normalized === 'published') return 'is-active';
    if (['pending_review', 'queued', 'processing', 'retrying'].includes(normalized)) {
      return 'is-warning';
    }
    return 'is-blocked';
  }

  function renderSocialPublicationStatus(status, permalink, error) {
    const label = formatSocialPublicationStatus(status);
    const normalizedLink = String(permalink || '').trim();
    const normalizedError = String(error || '').trim();
    const title = normalizedError ? ` title="${escapeHtml(normalizedError)}"` : '';
    const pill = `<span class="pill ${socialStatusClass(status)}"${title}>${escapeHtml(label)}</span>`;
    if (!normalizedLink) return pill;
    return `<a href="${escapeHtml(normalizedLink)}" target="_blank" rel="noopener noreferrer">${pill}</a>`;
  }

  function renderStoryImageCell(row) {
    const signedUrl = String(row.image_signed_url || '').trim();
    const imagePath = String(row.image_path || '').trim();
    if (!signedUrl) return escapeHtml(imagePath || '-');
    return `
      <a class="story-image-link" href="${escapeHtml(
        signedUrl,
      )}" target="_blank" rel="noopener noreferrer">
        <img class="story-image-thumb" src="${escapeHtml(
          signedUrl,
        )}" alt="${escapeHtml(row.title || 'Storia')}" />
      </a>
    `;
  }

  function renderImageCell({ signedUrl, imagePath, label }) {
    const normalizedSignedUrl = String(signedUrl || '').trim();
    const normalizedPath = String(imagePath || '').trim();
    if (!normalizedSignedUrl) {
      return `<span class="image-empty">${escapeHtml(normalizedPath || '-')}</span>`;
    }
    return `
      <a class="story-image-link" href="${escapeHtml(
        normalizedSignedUrl,
      )}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(
        normalizedPath || label || 'Immagine',
      )}">
        <img class="story-image-thumb" src="${escapeHtml(
          normalizedSignedUrl,
        )}" alt="${escapeHtml(label || 'Immagine')}" loading="lazy" />
      </a>
    `;
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
      if (state.activeSection === 'translations') return;
      state.search = event.target.value;
      renderTable();
    });
    translationSearchButton.addEventListener('click', () => {
      state.translationSearch = searchInput.value.trim();
      loadSection('translations');
    });
    searchInput.addEventListener('keydown', (event) => {
      if (state.activeSection !== 'translations' || event.key !== 'Enter') return;
      event.preventDefault();
      translationSearchButton.click();
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
    summaryTelemetrySaveButton.addEventListener(
      'click',
      saveSummaryTelemetrySettings,
    );
    appAccessRefreshButton.addEventListener('click', refreshAppAccessSummary);
    appAccessDayInput.addEventListener('change', refreshAppAccessSummary);
    appAccessSaveButton.addEventListener('click', saveAppAccessPolicy);
    appUpdateSaveButton.addEventListener('click', saveAppUpdateSettings);
    announcementsForm.addEventListener('submit', saveAnnouncement);
    announcementResetButton.addEventListener('click', resetAnnouncementForm);
    adsForm.addEventListener('submit', saveAd);
    adResetButton.addEventListener('click', resetAdForm);
    blockedWordsForm.addEventListener('submit', addBlockedWord);
    translationEditorForm.addEventListener('submit', saveTranslation);
    translationCancelButton.addEventListener('click', closeTranslationEditor);
    translationLocaleSelect.addEventListener('change', (event) => {
      state.translationLocale = event.target.value;
      loadSection('translations');
    });
    translationMissingOnlyToggle.addEventListener('change', (event) => {
      state.translationMissingOnly = event.target.checked;
      loadSection('translations');
    });
    eventsForm.addEventListener('submit', saveEvent);
    eventResetButton.addEventListener('click', resetEventForm);
    eventCountryInput.addEventListener('change', async () => {
      state.eventDraft.countryCode = eventCountryInput.value;
      state.eventDraft.adminArea1Id = '';
      state.eventDraft.adminArea2Id = '';
      state.eventDraft.adminArea1Name = '';
      state.eventDraft.adminArea2Name = '';
      state.eventDraft.areasAutoResolved = false;
      state.eventDraft.locationLabel = '';
      state.eventDraft.latitude = '';
      state.eventDraft.longitude = '';
      await loadEventAdminAreas1();
      renderEventsPanel();
    });
    eventAdminArea1Input.addEventListener('change', async () => {
      state.eventDraft.adminArea1Id = eventAdminArea1Input.value;
      state.eventDraft.adminArea2Id = '';
      state.eventDraft.adminArea1Name =
        eventAdminArea1Input.selectedOptions[0]?.textContent || '';
      state.eventDraft.adminArea2Name = '';
      state.eventDraft.areasAutoResolved = false;
      await loadEventAdminAreas2();
      renderEventsPanel();
    });
    eventAdminArea2Input.addEventListener('change', () => {
      state.eventDraft.adminArea2Id = eventAdminArea2Input.value;
      state.eventDraft.adminArea2Name =
        eventAdminArea2Input.selectedOptions[0]?.textContent || '';
      state.eventDraft.areasAutoResolved = false;
    });
    eventEditAreasButton.addEventListener('click', () => {
      state.eventDraft.areasAutoResolved = false;
      renderEventsPanel();
    });
    eventLocationInput.addEventListener('input', () => {
      eventLatitudeInput.value = '';
      eventLongitudeInput.value = '';
      state.eventDraft.latitude = '';
      state.eventDraft.longitude = '';
      state.eventDraft.areasAutoResolved = false;
      window.clearTimeout(state.eventLocationSearchTimer);
      state.eventLocationSearchTimer = window.setTimeout(searchEventLocations, 300);
    });
    eventLocationInput.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeEventLocationSuggestions();
    });
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
    adImageInput.addEventListener('change', (event) => {
      updateAdDraftFromInputs();
      const file = event.target.files && event.target.files[0];
      const objectUrl = state.adDraft.imagePreviewUrl || '';
      if (objectUrl.startsWith('blob:')) {
        URL.revokeObjectURL(objectUrl);
      }
      state.adDraft.imageFile = file || null;
      state.adDraft.imagePreviewUrl = file ? URL.createObjectURL(file) : '';
      renderAdsPanel();
    });
    communicationTitleInput.addEventListener('input', (event) => {
      state.communicationDraft.title = event.target.value;
    });
    communicationBodyInput.addEventListener('input', (event) => {
      state.communicationDraft.body = event.target.value;
    });
    communicationSendButton.addEventListener('click', sendCommunicationBroadcast);
    supportUserSearchForm.addEventListener('submit', searchSupportUsers);
    supportSendButton.addEventListener('click', sendSupportReply);
    supportRefreshButton.addEventListener('click', () => {
      const selected = state.supportSelectedThread;
      const threadId = selected?.thread_id || selected?.id;
      loadSupportMessages(threadId);
    });
    supportCloseButton.addEventListener('click', () => updateSupportThreadStatus('closed'));
    supportReopenButton.addEventListener('click', () => updateSupportThreadStatus('open'));
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
