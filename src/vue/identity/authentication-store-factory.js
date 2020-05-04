export default (identityManager) => ({
    state: identityManager.state,
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        userId: state => state.userId
    },
    mutations: {
        confirmLogin: (state) => {

        }
    },
    actions: {
        login: async ({ commit }, { email, password }) => {
            const response = await identityManager.login(email, password);
            commit('confirmLogin');
            return response;
        }
    }
});

