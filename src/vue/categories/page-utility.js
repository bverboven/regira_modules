import { getHttpsUrl, toAbsoluteUrl } from '../../utilities/http-utility';
import { setMetaTag, setCanonicalTag } from '../../utilities/html-utility';
import { trimRight } from '../../utilities/string-utility';
import { findCategory } from './category-utility';
import { getLangFromRoute, getLocalizedValue } from '../multilanguage/language-utility';

export const findPageCategory = (routeName, lang, categories) => {
    if (!routeName) {
        return null;
    }
    let category = findCategory(routeName, categories);
    if (!category) {
        const upperLang = lang.toUpperCase();
        if (routeName && routeName.lastIndexOf(upperLang) === routeName.length - upperLang.length) {
            category = findCategory(routeName.substring(0, routeName.length - upperLang.length), categories);
        }
    }
    return category || console.error("Could not find category", { routeName: routeName });
};
export const implementMetaDescriptionTag = (router, categories, languages, defaultLang) => {
    router.afterEach((to) => {
        const lang = getLangFromRoute(to, languages) || defaultLang;
        const pageCategory = findPageCategory(to.name, lang, categories);
        setMetaTag("description", getLocalizedValue(pageCategory.description, lang) || '');
    });
};
export const generateCanonicalUrl = (path, forceSSL = true) => {
    let url = toAbsoluteUrl(path, window.location.origin);
    if (forceSSL) {
        url = getHttpsUrl(url);
    }
    return trimRight(url, '/');
};
export const implementCanonicalTag = (router, forceSSL = true) => {
    router.afterEach((to) => {
        const path = router.resolve(to).href;
        const canonicalUrl = generateCanonicalUrl(path, forceSSL);
        setCanonicalTag(canonicalUrl);
    });
};
export const implementDocumentTitle = (router, titleFormat, categories, languages, defaultLang) => {
    router.afterEach((to) => {
        const lang = getLangFromRoute(to, languages) || defaultLang;
        const pageCategory = findPageCategory(to.name, lang, categories);
        document.title = titleFormat.replace('{title}', getLocalizedValue(pageCategory.title, lang));
    });
};

export default {
    findPageCategory,
    generateCanonicalUrl,
    implementMetaDescriptionTag,
    implementCanonicalTag,
    implementDocumentTitle
};