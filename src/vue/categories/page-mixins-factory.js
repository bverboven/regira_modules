import { findPageCategory } from './page-utility';

// only include this mixin on page-components that have a generic localized component (<component :is="pageView" v-if="pageView" />)
export default () => ({
    // requires categoryMixins
    data() {
        return {
            pageView: null
        }
    },
    computed: {
        routeName() {
            return this.$route ? this.$route.name : null;
        },
        pageCategory() {
            return findPageCategory(this.routeName, this.lang, this.categories);
        },
        pageTitle() {
            return this.pageCategory ? this.categoryTitle(this.pageCategory) : this.routeName;
        },
        pageViewName() {
            return this.pageCategory ? this.pageCategory.view : null;
        },
        loader() {
            // make async to return a Promise
            return async lang => this._localizedModules[lang][this.pageViewName];
        }
    },
    watch: {
        lang: function () {
            this.setPageView();
        },
        pageViewName: function () {
            this.setPageView();
        }
    },
    methods: {
        async setPageView() {
            if (this.ignoreView || !this.pageViewName) {
                return;
            }

            try {
                await this.loader(this.lang);
                this.pageView = () => this.loader(this.lang);
            } catch (error) {
                console.error('Loading view failed', {
                    view: this.pageViewName,
                    lang: this.lang,
                    route: this.$route,
                    error
                });
            }
        }
    },
    created() {
        this.setPageView();
    }
});
