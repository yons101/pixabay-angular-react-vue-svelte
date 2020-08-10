import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        images: [],
        loading: true
    },

    getters: {
        images: (state) => state.images,
        loading: (state) => state.loading
    },

    mutations: {
        FETCH_IMAGES: async (state, searchTerm = "nature") => {
            await fetch(
                `https://pixabay.com/api/?key=17039239-7ccdc3f5c80caa80d628661b2&q=${searchTerm}&image_type=photo&pretty=true`
            )
                .then((res) => res.json())
                .then((data) => {
                    state.images = data.hits;
                    state.loading = false;
                })
                .catch((err) => console.log(err));
        }
    },
    actions: {
        fetchImages({ commit }, searchTerm) {
            commit("FETCH_IMAGES", searchTerm);
        }
    }
});

export default store;
