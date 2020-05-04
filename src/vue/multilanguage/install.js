import createTranslationModule from './translation-store-factory';
import LanguageManager from './language-manager';
import createLanguageMixins from './language-mixins-factory';
import createTranslationMixins from './translation-mixins-factory';
import { mixin } from '../../utilities/object-utility';

export default (Vue, { service, store, router, translations, defaultLang = 'en' }) => {
    const module = createTranslationModule(service);
    store.registerModule('translations', module);

    // languages
    const languages = [...new Set(
        Object.values(translations)
            .map(x => Object.keys(x))
            .flat()
            .concat(defaultLang))
    ];

    const languageManager = new LanguageManager(router, languages);
    languageManager.init(navigator.language.substring(0, 2) || languages[0] || defaultLang);
    Vue.prototype.$lang = languageManager;

    const mixins = mixin(
        createLanguageMixins(),
        createTranslationMixins()
    );
    Vue.mixin(mixins);
};