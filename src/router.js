import Vue from 'vue'
import Router from 'vue-router'
import ReportComponent from './components/ReportComponent'
import GraphComponent from './components/GraphComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ReportComponent
    },
    {
      path: '/graph',
      name: 'graph',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: GraphComponent
    }
  ]
})
