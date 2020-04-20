import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import directives from '@/components/directives'
import DiDataBind from '@/components/DiDataBind'
import EventDeal from '@/components/EventDeal'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello

    },
    {
      path: '/dire',
      name: 'directives',
      component: directives

    },
    {
      path: '/databind',
      name: 'DiDataBind',
      component: DiDataBind

    },
    {
      path: '/eventdeal',
      name: 'EventDeal',
      component: EventDeal

    }
  ]
})
