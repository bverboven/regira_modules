import { getFilenameWithoutExtension } from '../../utilities/file-utility';
import { getModuleEntries } from '../../utilities/webpack-utility';

/**
 * const ctx = require.context('.', true, /\.vue$/);
 * get a webpackContext function to loop through all the files
 * ctx.keys() returns all the filenames
 * ctx(filename) returns the module of the file
 * returns an object 
 *   key: the filename without extension
 *   value: the file's module
 * @param {Function} ctx = require.context('.', true, /\.vue$/);
 * @returns {Object} viewDictionary
 * @example { 'Home': { render() {} } }
 */
export const collectPageModules = ctx => {
    const entries = getModuleEntries(ctx).map(([filename, module]) => ([getFilenameWithoutExtension(filename), module.default]));
    return Object.fromEntries(entries);
};

/**
 * const ctx = require.context('.', true, /\.vue$/);
 * returns an nested object with lang as primary key
 * each value contains another object
 *   key: the filename without extension
 *   value: the file's module
 * @param {Function} ctx
 * @returns {Object} viewDictionary
 * @example { en: { 'Home': { render() {} } } }
 */
export const collectLocalizedModules = ctx => getModuleEntries(ctx)
    .reduce((result, [filename, module]) => {
        const lang = filename.split('/')[1];
        if (!result[lang]) {
            result[lang] = {};
        }
        result[lang][getFilenameWithoutExtension(filename)] = module.default;
        return result;
    }, {});
