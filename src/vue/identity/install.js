import createAuthenticationModule from './authentication-store-factory';
import createAuthenticationMixins from './authentication-mixins-factory';
import { mixin } from '../../utilities/object-utility';

export default (Vue, options = { authenticationService, store, router }) => {
    const { authenticationService, store, router } = options;
    const authenticationModule = createAuthenticationModule(authenticationService);
    store.registerModule('authentication', authenticationModule);

    const mixins = mixin(
        createAuthenticationMixins()
    );
    Vue.mixin(mixins);
};