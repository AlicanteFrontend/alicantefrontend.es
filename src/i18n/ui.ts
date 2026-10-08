export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const routes = {
	home: { es: '/', en: '/en/' },
	about: { es: '/quienes-somos/', en: '/en/about/' },
	activities: { es: '/actividades/', en: '/en/activities/' },
	contact: { es: '/contacto/', en: '/en/contact/' },
	conduct: { es: '/codigo-de-conducta/', en: '/en/code-of-conduct/' },
	legal: { es: '/aviso-legal/', en: '/en/legal-notice/' },
} as const;
export type Page = keyof typeof routes;

export const ui = {
	es: {
		'nav.home': 'Inicio',
		'nav.about': 'Quiénes somos',
		'nav.activities': 'Actividades',
		'nav.contact': 'Contacto',
		'nav.conduct': 'Código de conducta',
		'nav.legal': 'Aviso legal y privacidad',
		'nav.label': 'Principal',
		'nav.homeLogo': 'Alicante Frontend, ir al inicio',
		'org.taxId': 'NIF',
		'switch.label': 'Read in English',
		'footer.nav': 'Navegación',
		'footer.follow': 'Síguenos',
		'footer.navLabel': 'Pie de página',
		'footer.madeWith': 'Hecho con',
		'footer.inAlicante': 'en Alicante',
	},
	en: {
		'nav.home': 'Home',
		'nav.about': 'About us',
		'nav.activities': 'Activities',
		'nav.contact': 'Contact',
		'nav.conduct': 'Code of conduct',
		'nav.legal': 'Legal notice & privacy',
		'nav.label': 'Main',
		'nav.homeLogo': 'Alicante Frontend, go to home page',
		'org.taxId': 'Tax ID (NIF)',
		'switch.label': 'Leer en español',
		'footer.nav': 'Navigation',
		'footer.follow': 'Follow us',
		'footer.navLabel': 'Footer',
		'footer.madeWith': 'Made with',
		'footer.inAlicante': 'in Alicante',
	},
} as const;

export const navPages: Page[] = ['home', 'about', 'activities', 'contact', 'conduct'];

export function useTranslations(lang: Lang) {
	return (key: keyof (typeof ui)['es']) => ui[lang][key];
}

export function otherLang(lang: Lang): Lang {
	return lang === 'es' ? 'en' : 'es';
}
