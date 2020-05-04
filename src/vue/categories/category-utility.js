import sitemapGenerator from './sitemap-generator';

export const findCategory = (name, categories) => categories.find(c => c.name === name);
export const getChildCategories = (parentName, categories) => categories.filter(c => c.parentName === parentName);
export const getHeaderCategories = (categories) => categories.filter(c => c.header);
export const getFooterCategories = (categories) => categories.filter(c => c.footer);
export const getSitemapNodes = (categories) => categories.getRoots().filter(c => c.value.sitemap !== false);
export const generateSitemap = sitemapGenerator;

export default {
    findCategory,
    getChildCategories,
    getHeaderCategories,
    getFooterCategories,
    getSitemapNodes,
    generateSitemap
};