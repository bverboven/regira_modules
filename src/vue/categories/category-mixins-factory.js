export default () => ({
    // requires routeMixins
    computed: {
        categories() {
            return this.$store.getters['categories/categories'];
        },

        categoryTitle() {
            return category => category.title ? this.getLocalizedValue(category.title) : category.name;
        },
        navTitle() {
            return category => (category.navTitle ? this.getLocalizedValue(category.navTitle) : null) || this.categoryTitle(category);
        }
    }
});