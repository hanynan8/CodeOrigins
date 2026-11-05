// Company logo (hosted on Cloudinary). Change LOGO_FILE to switch the logo everywhere:
// navbar, footer, browser-tab icon, apple icon, manifest and structured data.
const BASE = 'https://res.cloudinary.com/di6ctjhjp/image/upload';
const LOGO_FILE =
  'v1793846868/gpt-image-2_Design_a_modern_futuristic_tech_logo_banner_for_a_software_company_named_Code_Le-0_1_k2i1dn.jpg';

export const LOGO_ORIGINAL = `${BASE}/${LOGO_FILE}`;

// Square crop of the logo, `size` px. `round: true` = circular PNG with transparent corners
// (Cloudinary does the cropping/rounding, so no image file has to be stored in the project).
export const logoUrl = (size, { round = false } = {}) =>
  `${BASE}/w_${size},h_${size},c_fill,g_auto${round ? ',r_max,f_png' : ',f_auto'},q_auto/${LOGO_FILE}`;

export const LOGO_ICON = logoUrl(256, { round: true });   // circular tab icon
export const LOGO_ICON_SMALL = logoUrl(64, { round: true });
export const LOGO_APPLE = logoUrl(180);                    // iOS rounds the corners itself
export const siteIcons = {
  icon: [{ url: LOGO_ICON, type: 'image/png', sizes: '256x256' }],
  shortcut: LOGO_ICON_SMALL,
  apple: LOGO_APPLE,
};
