

export default{
  state:{
    links: [
      {
        url: '/dashboard',
        title: 'Dashboard',
        icon: '&#9776;',
      },
      {
        url: '/templates',
        title: 'Templates',
        icon: '&#9745;',
      },
      {
        url: '/imageStock',
        title: 'Image Stock',
        icon: '&#10066;',
      },
    ],
  },
  mutations:{},
  actions:{},
  getters:{
    getLinks(state) {
      return state.links
    }
  },
}
