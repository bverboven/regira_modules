export default () => ({
    // requires languageMixins
    computed: {
        translations() {
            return this.$store.getters['translations/translations'];
        },
        translate() {
            return key => {
                const translationEntry = this.translations[key];

                if (translationEntry == null) {
                    return key;
                }
                if (typeof translationEntry === 'string') {
                    return translationEntry;
                }

                let translation = translationEntry[this.lang];
                if (translation == null) {
                    translation = translationEntry[this.defaultLang];
                }

                return translation || key;
            };
        }
    }
});