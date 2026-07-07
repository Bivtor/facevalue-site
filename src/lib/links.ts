// Single source of truth for external URLs.
// TODO before launch: fill in the real store listings, repo, and donation URLs.
export const LINKS = {
	chrome: '#',
	firefox: '#',
	edge: '#',
	github: 'https://github.com/Bivtor/yt-clickbait-remover',
	support: '/support', // internal donations hub (extension popup points here too)
	donate: '#', // the external payment link, used on /support
	contact: 'mailto:contact@carpinteriacws.com'
} as const;
