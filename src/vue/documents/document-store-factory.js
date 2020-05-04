export default manager => ({
    namespaced: true,
    state: manager.state,
    getters: {
        documents: state => state.items || []
    },
    mutations: {
        load: (state, payload) => {
            manager.state.items = payload;
        }
    },
    actions: {
        load: async ({ commit }) => {
            const items = await manager.list();
            commit('load', items);
        }
    }
});