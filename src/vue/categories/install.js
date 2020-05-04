import createCategoryModule from './category-store-factory';
import createCategoryRoutes from './category-route-helper';
import createCategoryMixins from './category-mixins-factory';
import implementExternalRoutes from '../routing/external-routes';
import { implementMetaDescriptionTag, implementCanonicalTag, implementDocumentTitle } from './page-utility';

export default (Vue, { service, categories, titleFormat = '', store, router, oldRoutes = [], pageModules, localizedModules }) => {
    const module = createCategoryModule(service);
    store.registerModule('categories', module);

    const languages = Vue.prototype.$lang.languages;

    // convert to routes
    const pageRoutes = createCategoryRoutes(categories, {
        languages,
        pageModules
    });
    //console.debug("PAGE_ROUTES", { pageRoutes });

    router.addRoutes(pageRoutes.concat(oldRoutes));
    // also update the VueRouter routes object
    Array.prototype.splice.apply(router.options.routes, [0, 0, ...pageRoutes]);

    const categoryMixins = createCategoryMixins();
    Vue.mixin(categoryMixins);

    Vue.prototype._pageModules = pageModules;
    Vue.prototype._localizedModules = localizedModules;

    // custom page data (meta, title, ...)
    implementExternalRoutes(router);
    implementCanonicalTag(router, true);
    implementMetaDescriptionTag(router, categories, languages, Vue.prototype.$lang.defaultLang);
    implementDocumentTitle(router, titleFormat, categories, languages, Vue.prototype.$lang.defaultLang);
};