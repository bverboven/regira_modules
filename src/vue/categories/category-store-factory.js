export default manager => ({
    namespaced: true,
    state: manager.state,
    getters: {
        categories: state => state.items || []
    },
    mutations: {
        load: (state, payload) => {
            manager.state.items = payload;
        }
    },
    actions: {
        load: async ({ commit }) => {
            const tree = await manager.list();
            commit('load', tree);
        }
    }
});