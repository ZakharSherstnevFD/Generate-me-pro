// заглушка (имитация данных с сервера, которые будем принимать в action)
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
