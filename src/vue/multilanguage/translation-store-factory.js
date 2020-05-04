export default (manager) => ({
    namespaced: true,
    state: manager.state,
    getters: {
        translations: state => state.details || {},
        languages: (state, getters) => [...new Set(Object
            .values(getters.translations)
            .map(x => Object.keys(x))
            .flat())]
    },
    mutations: {
        load: (state, payload) => {
            manager.state.details = payload;
        }
    },
    actions: {
        load: async ({ commit }) => {
            const details = await manager.details();
            commit('load', details);
        }
    }
});