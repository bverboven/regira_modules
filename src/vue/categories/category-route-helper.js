import { getLocalizedValue } from "../multilanguage/language-utility";

export default (
  categories,
  { languages, pageModules, defaultPageView = "GenericPage" }
) => {
  // generate route path
  const getPath = (page, lang) => {
    let path;
    if (page.path) {
      path = page.path[lang || languages[0]];
      if (page.parentName) {
        const parent = categories.find(p => p.name === page.parentName);
        path = getPath(parent, lang) + path;
      } else {
        path = (lang ? "/" + lang : "") + path;
      }
    }
    return path;
  };
  // generate route redirect URL (if any)
  const getRedirect = (page, lang) => {
    if (page.redirect) {
      const redirect =
        page.redirect[lang] || page.redirect + lang.toUpperCase();
      return { name: redirect };
    }
    return undefined;
  };
  const setMeta = (route, page, lang) => {
    if (!("meta" in route)) {
      route.meta = {};
    }
    // external link
    if (page.externalUrl) {
      route.meta.external = {
        url: getLocalizedValue(page.externalUrl, lang),
        newWindow: true
      };
    }
  };
  const setMetaTags = (route, name, content) => {
    if (!("meta" in route)) {
      route.meta = {};
    }
    if (!route.meta.metaTags) {
      route.meta.metaTags = [];
    }
    route.meta.metaTags.push({ name, content });
  };
  const createRoute = (page, lang = null) => {
    const route = {
      path: getPath(page, lang)
    };

    if (lang == null) {
      // without lang
      route.name = page.name;
    } else {
      // with lang
      route.name = page.name + lang.toUpperCase();
      route.component = async () =>
        pageModules[page.view] || pageModules[defaultPageView];

      // redirect
      if (page.redirect != null) {
        route.redirect = getRedirect(page, lang);
      }
    }
    // meta
    setMeta(route, page, lang);

    return route;
  };

  // generate and add route to RouteCollection (for each language)
  const addPageRoute = page => {
    const routes = [];
    routes.push(createRoute(page, null));

    languages.forEach(lang => {
      routes.push(createRoute(page, lang));
    });

    if (Array.isArray(page.children)) {
      for (let child of page.children) {
        routes = addPageRoute(child);
      }
    }
    return routes;
  };

  const routes = categories
    // ignore categories without path (usually redirects to external link)
    .filter(c => c.path)
    .flatMap(addPageRoute);

  // modify the notFound routes by adding noindex metadata for robots
  const notFoundRoutes = routes.filter(r => r.name.indexOf("notFound") === 0);
  for (let notFoundRoute of notFoundRoutes) {
    setMetaTags(notFoundRoute, "robots", "noindex");
  }

  return routes;
};
