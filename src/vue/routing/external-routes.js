import { redirect as htmlRedirect } from "../../utilities/html-utility";

// https://stackoverflow.com/questions/50633001/vuejs-vue-router-linking-an-external-website#answer-57650154
export default router => {
  // Override matcher to fix external links.
  const match = router.matcher.match;
  router.matcher.match = (...args) => {
    let route = match.apply(router, args);
    if (route.meta.external == null) {
      return route;
    }
    return Object.freeze({ ...route, fullPath: route.path });
  };

  // Override resolver to fix external links.
  const resolve = router.resolve;
  router.resolve = (...args) => {
    const resolved = resolve.apply(router, args);
    if (resolved.route.meta.external != null) {
      resolved.href = resolved.route.fullPath;
    }
    return resolved;
  };

  // Handle external routes.
  router.beforeEach((to, from, next) => {
    const external = to.meta ? to.meta.external : null;
    if (external) {
      if (external.newWindow) {
        window.open(external.url, "_blank");
      } else {
        htmlRedirect(external.url);
      }
      return next(false);
    }
    next();
  });
};
