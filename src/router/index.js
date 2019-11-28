import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import reportAnalysis from '@/components/reportAnalysis/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/reportAnalysis',
      name: 'reportAnalysis',
      component: reportAnalysis
    }
  ]
})
