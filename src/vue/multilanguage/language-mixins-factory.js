import { getLangFromRoute, getLangUrl } from './language-utility';

export default () => ({
    computed: {
        lang() {
            return (this.$route ? getLangFromRoute(this.$route, this.$lang.languages) : null) || this.$lang.defaultLang;
        },
        langUrl() {
            return lang => getLangUrl(lang, this.$route, this.$lang.routes, this.$lang.languages);
        },
        getLocalizedValue() {
            return value => value && value[this.lang] ? value[this.lang] : value;
        }
    },
    methods: {
        changeLang(lang) {
            this.$lang.changeLang(lang);
        }
    }
});