export const isValidLang = (lang, languages) => languages.includes(lang);
export const getLangFromRoute = (route, languages) => {
    const segments = route.path.split('/').filter(s => s);
    const lang = segments && segments.length ? segments[0] : null;
    if (isValidLang(lang, languages)) {
        return lang;
    }
    return null;
};
export const getRouteNameForLang = (lang, route, languages) => {
    const routeName = route.name;
    if (!routeName) {
        return null;
    }

    let normalizedRouteName = routeName;
    const routeLang = getLangFromRoute(route, languages);
    if (routeLang) {
        normalizedRouteName = routeName.substring(0, routeName.length - 2);
    }

    return normalizedRouteName + lang.toUpperCase();
};
export const getLangUrl = (lang, route, routes, languages) => {
    const newRouteName = getRouteNameForLang(lang, route, languages);
    if (!newRouteName) {
        return null;
    }

    const langRoute = routes.find(r => r.name === newRouteName);

    if (langRoute == null) {
        return null;
    }

    return langRoute.path;
};
export const getLocalizedValue = (value, lang) => value && value[lang] ? value[lang] : value;


export default {
    isValidLang,
    getLangFromRoute,
    getRouteNameForLang,
    getLangUrl,
    getLocalizedValue
};