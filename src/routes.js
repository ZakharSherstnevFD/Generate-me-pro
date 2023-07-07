//default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Dashboard from '@/pages/DashboardPage.vue'
import Templates from '@/pages/TemplatesPage.vue'
import ImageStock from '@/pages/ImageStockPage.vue'

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/templates',
      name: 'templates',
      component: Templates
    },
    {
      path: '/imageStock',
      name: 'imageStock',
      component: ImageStock
    },
  ]
})
