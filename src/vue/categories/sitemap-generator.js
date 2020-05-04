import { getSitemapNodes } from './category-utility';
import { generateCanonicalUrl } from './page-utility';

const generateSitemap = (categories) => {
    const sitemapNodes = getSitemapNodes(categories);
    const paths = sitemapNodes.map(x => Object.entries(x.value.path)).flat().map(([lang, path]) => `${lang}${path}`);
    const urls = paths.map(p => generateCanonicalUrl(p, true));
    urls.sort();
    return urls.join('\n');
};

export default generateSitemap;