import seeders from '../seeders/seedersTemplates'

export default{
  state:{
    templates: seeders,
  },
  mutations:{},
  actions:{},
  getters:{
    getTemplates(state) {
      return state.templates.seeders
    },
  },
}
