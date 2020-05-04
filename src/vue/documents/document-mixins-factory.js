import { getFilename } from '../../utilities/file-utility';
import { trim, trimLeft } from '../../utilities/string-utility';
import { FileHelper } from '../../io';

export default () => ({
    // requires routeMixins
    computed: {
        documents() {
            return this.$store.getters['documents/documents'];
        },
        findDocument() {
            return code => this.documents != null ? this.documents.find(f => f.code === code) : null;
        },
        getDocumentTitle() {
            return document => {
                if (document == null || document.title == null) {
                    return '';
                }
                return document.title[this.lang] ? document.title[this.lang] : document.title;
            }
        },
        getFilename() {
            return document => {
                if (document == null || document.filename == null) {
                    return '';
                }
                return document.filename[this.lang] ? document.filename[this.lang] : document.filename;
            }
        },
        getDocumentUrl() {
            return input => {
                let document = input;
                if (typeof input === "string") {
                    document = this.findDocument(input);
                }
                if (document == null) {
                    return null;
                }
                return this.createDocumentUrl(document)
            };
        }
    },
    methods: {
        createDocumentUrl(document) {
            let documentFilename = this.getFilename(document);
            if (typeof (this._documentBaseFolder) === "string") {
                documentFilename = `${trim(this._documentBaseFolder, '/')}/${trimLeft(documentFilename, '/')}`;
            }
            return this.getRelativeToBaseUrl(documentFilename);
        },
        openDocument(document, target = '_blank') {
            document = typeof document === 'string' ? this.findDocument(document) : document;
            const documentUrl = this.createDocumentUrl(document);
            window.open(documentUrl, target);
        },
        async save(document, type, filename = null) {
            const fh = new FileHelper();
            const documentUrl = this.createDocumentUrl(document);
            const documentFilename = filename || getFilename(this.getFilename(document));
            return fh.saveAs(documentUrl, type, documentFilename);
        }
    }
});