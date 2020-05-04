import createRouteMixins from './route-mixins-factory';
import parseRouteMetaTags from './route-meta-tags-helper';

export default (Vue, options = { router, baseUrl }) => {
    const { router, baseUrl } = options;

    const routeMixins = createRouteMixins(baseUrl);
    Vue.mixin(routeMixins);

    parseRouteMetaTags(router);

    // Google analytics: push route changes
    if (typeof (ga) === "function") {
        router.afterEach((to) => {
            ga('set', 'page', to.path);
            ga('send', 'pageview');
        });
    }
};