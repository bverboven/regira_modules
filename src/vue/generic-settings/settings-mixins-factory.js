export default (moduleName, propertyName) => ({
    computed: {
        [propertyName]() {
            return this.$store.getters[`${moduleName}/${propertyName}`];
        }
    }
});