// configure default backend location

export const BASE_ESPIM_API = 'http://localhost:8083/';

export const ESPIM_API = BASE_ESPIM_API + 'api/';

// configure participants module url
export const ESPIM_REST_Participants: string = ESPIM_API + 'participants/';

// configure observers module url
export const ESPIM_REST_Observers: string = ESPIM_API + 'observers/';

// configure programs module url
export const ESPIM_REST_Programs: string = ESPIM_API + 'programs/';
export const ESPIM_REST_ProgramUsers: string = ESPIM_API + 'programUsers/';

// configure events module url
export const ESPIM_REST_Events: string = ESPIM_API + 'events/';

// configure interventions module url
export const ESPIM_REST_Interventions: string = ESPIM_API + 'interventions/';

// configure triggers module url
export const ESPIM_REST_Triggers: string = ESPIM_API + 'triggers/';

// configure sensors module url
export const ESPIM_REST_Sensors: string = ESPIM_API + 'sensors/';

export const ESPIM_REST_Media: string = ESPIM_API + 'media/';

export const ESPIM_REST_ExternalApplications: string = ESPIM_API + 'external-applications/';

// config default page size
export const PAGE_SIZE = 10;
