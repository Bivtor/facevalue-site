// Single source of truth for external URLs.
export const LINKS = {
	chrome: 'https://chromewebstore.google.com/detail/face-value/kogpodijhdpkdnahicgmnncdibiagkge',
	firefox: 'https://addons.mozilla.org/addon/face-value/',
	edge: 'https://microsoftedge.microsoft.com/addons/detail/face-value/bamcfhioabjibgbadknjemmdoeemlnpe',
	github: 'https://github.com/Bivtor/yt-clickbait-remover',
	support: '/support', // internal donations hub (extension popup points here too)
	donate: 'https://github.com/sponsors/Bivtor', // live once Sponsors enrollment is approved
	contact: 'mailto:contact@carpinteriacws.com'
} as const;
