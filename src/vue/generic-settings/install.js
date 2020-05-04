import createSitesettingsModule from './settings-store-factory';
import createSitesettingsMixins from './settings-mixins-factory';

export default (Vue, { service, store, moduleName = 'sitesettings', propertyName = moduleName }) => {
    const sitesettingsModule = createSitesettingsModule(service, propertyName);
    store.registerModule(moduleName, sitesettingsModule);

    const mixins = createSitesettingsMixins(moduleName, propertyName);
    Vue.mixin(mixins);
};