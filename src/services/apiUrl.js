// const API_URL = process.env.REACT_APP_API_URL;

export const API_BASE_URL =
  process.env.REACT_APP_API_URL || process.env.REACT_APP_API_URL_DEFAULT;

export const HOMEITEMS_URL = `${API_BASE_URL}homeitems`;
export const API_URL_ATTENTIONITEM = `${API_BASE_URL}attentionitems`;
export const API_URL_LEGALITEM = `${API_BASE_URL}legalitems`;
export const API_URL_RESULTWORK = `${API_BASE_URL}resultworks`;
export const API_URL_PSYCHOLOGICALS = `${API_BASE_URL}psychologicals`;
export const API_URL_LEGALAIDS = `${API_BASE_URL}legalaids`;
export const API_URL_SOCIOADVICES = `${API_BASE_URL}socioadvices`;
export const API_URL_REHABILITATIONS = `${API_BASE_URL}rehabilitations`;
export const API_URL_CREATEWORCSHOP = `${API_BASE_URL}createworkshops`;
export const API_URL_WOMEN_CLUB = `${API_BASE_URL}womenclubs`;
export const API_URL_ANNOUNCEMENTS = `${API_BASE_URL}announcements`;
export const API_URL_NEWS = `${API_BASE_URL}news`;

export const UPLOAD_IMAGE_URL = `${API_BASE_URL}images/upload`;
export const IMAGES_URL = `${API_BASE_URL}images`;
export const IMAGES_URL_DB = `${API_BASE_URL}images/photos`;
