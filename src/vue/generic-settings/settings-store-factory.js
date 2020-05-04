export default (manager, propertyName) => ({
    namespaced: true,
    state: manager.state,
    getters: {
        [propertyName]: state => state.details || {}
    },
    mutations: {
        load: (state, payload) => {
            manager.state.details = payload;
        }
    },
    actions: {
        load: async ({ commit }) => {
            const item = await manager.details();
            commit('load', item);
        }
    }
});