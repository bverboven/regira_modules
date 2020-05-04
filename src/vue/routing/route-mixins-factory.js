import { trimLeft, trimRight } from '../../utilities/string-utility';

export default (baseUrl) => ({
  // requires languageMixins
  computed: {
    baseUrl() { return baseUrl; },
    getRoute() {
      return (name, params) => this.lang ? { name: `${name}${this.lang.toUpperCase()}`, params } : { path: '#' };
    },
    isActiveRoute() {
      return (name) => this.lang && (this.$route.name === name + this.lang.toUpperCase());
    }
  },
  methods: {
    getRelativeToBaseUrl(url) {
      return `${trimRight(baseUrl, '/')}/${trimLeft(url, '/')}`;
    }
  }
});