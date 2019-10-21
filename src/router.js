import Vue from 'vue'
import Router from 'vue-router'
import ReportComponent from './components/ReportComponent'
import GraphWrapperComponent from './components/Graph/GraphWrapperComponent'

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
      component: GraphWrapperComponent
    }
  ]
})
