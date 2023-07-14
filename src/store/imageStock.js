
export default{
  state:{
    images: [],
    imagesMain: []
  },
  mutations:{
    setImages(state, payload) {
      state.images = payload
    },
    setImagesMain(state, payload) {
      state.imagesMain = payload
    },

  },
  actions:{
    setImages({commit}, payload) {
      commit('setImages', payload)
    },
    setImagesMain({commit}, payload) {
      commit('setImagesMain', payload)
    },
  },
  getters:{
    getImages(state) {
      return state.images
    },
    getImagesMain(state) {
      return state.imagesMain
    }
  },
}
