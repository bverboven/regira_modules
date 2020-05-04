import createDocumentModule from './document-store-factory';

export default (Vue, { service, store, baseFolder }) => {
    const documentModule = createDocumentModule(service);
    store.registerModule('documents', documentModule);

    if (typeof (baseFolder) === "string") {
        Vue.prototype._documentBaseFolder = baseFolder;
    }
};