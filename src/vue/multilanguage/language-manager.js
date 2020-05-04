import languageUtility from './language-utility';

class LanguageManager {
    constructor(router, languages) {
        this.router = router;
        this.languages = languages;
    }

    get currentRoute() {
        return this.router.currentRoute;
    }
    get currentLang() {
        return languageUtility.getLangFromRoute(this.currentRoute, this.languages) || this.defaultLang;
    }
    get routes() {
        return this.router.options.routes;
    }


    init(defaultLang) {
        this.defaultLang = languageUtility.isValidLang(defaultLang, this.languages) ? defaultLang : 'en';
        const savedLang = localStorage.getItem('lang');
        this.savedLang = languageUtility.isValidLang(savedLang, this.languages) ? savedLang : null;

        this.restoreSavedLang();
        this.saveLangOnChange();
    }

    restoreSavedLang() {
        let initialized = false;
        this.router.beforeEach((to, from, next) => {
            if (initialized) {
                return next();
            }
            //console.debug('Restore saved lang', { mgr: this, to, from });

            initialized = true;
            const currentLang = languageUtility.getLangFromRoute(to, this.languages);
            const fallbackLang = this.savedLang || this.defaultLang;

            if (fallbackLang && from.name == null && !currentLang) {
                const newRouteName = this.getRouteNameForLang(fallbackLang, to);
                return next({ name: newRouteName });
            }
            return next();
        });
    }
    saveLangOnChange() {
        this.router.afterEach((to) => {
            const toLang = languageUtility.getLangFromRoute(to, this.languages);
            this.setHtmlLang(toLang);
            if (toLang !== this.savedLang) {
                localStorage.setItem('lang', toLang);
            }
        });
    }
    changeLang(lang) {
        if (this.currentLang === lang) {
            return;
        }

        const newRouteName = this.getRouteNameForLang(lang, this.currentRoute);
        if (!newRouteName) {
            return;
        }

        this.router.push({ name: newRouteName });
    }

    getRouteNameForLang(lang, route = null) {
        if (!route) {
            route = this.currentRoute;
        }

        return languageUtility.getRouteNameForLang(lang, route, this.languages);
    }
    getLangUrl(lang, route = null) {
        if (!route) {
            route = this.currentRoute;
        }

        return languageUtility.getLangUrl(lang, route, this.routes, this.languages);
    }
    getInitialRoute(route, lang) {
        const currentLang = this.getLangFromRoute(route, this.languages);

        if (lang && this.languages.includes(lang) && !currentLang) {
            const newRouteName = route.name.substring(0, route.name.length - 2) + lang.toUpperCase();
            return { name: newRouteName };
        }
        return null;
    }

    setHtmlLang(lang) {
        document.querySelector('html').setAttribute('lang', lang);
    }
}

export default LanguageManager;
