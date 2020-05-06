import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import directives from '@/components/directives'
import DiDataBind from '@/components/DiDataBind'
import EventDeal from '@/components/EventDeal'
import StyleDemo from '@/components/StyleDemo'
import ComputeDemo from '@/components/ComputeDemo'
import WatchDemo from '@/components/WatchDemo'
import AjaxDemos from '@/components/AjaxDemos'
import AjaxDemos2 from '@/components/AjaxDemos2'
import AjaxDemos3 from '@/components/AjaxDemos3'
import UseMixin from '@/components/UseMixin'
import ParentComponent from '@/components/ParentComponent'
import A from '@/components/A'
import VuexDemo1 from '@/components/VuexDemo1'
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
      path: '/databind/:id',
      name: 'DiDataBind',
      component: DiDataBind

    },
    {
      path: '/eventdeal',
      name: 'EventDeal',
      component: EventDeal

    },
    {
      path: '/style',
      name: ' StyleDemo',
      component: StyleDemo

    },
    {
      path: '/computed',
      name: 'ComputeDemo',
      component: ComputeDemo

    },
    {
      path: '/watch',
      name: 'WatchDemo',
      component: WatchDemo
    },
    {
      path: '/ajax',
      name: 'AjaxDemos',
      component: AjaxDemos
    },
    {
      path: '/ajax2',
      name: 'AjaxDemos2',
      component: AjaxDemos2
    },
    {
      path: '/ajax3',
      name: 'AjaxDemos3',
      component: AjaxDemos3
    },
    {
      path: '/mixin',
      name: 'UseMixin',
      component: UseMixin
    },
    {
      path: '/parent',
      name: 'ParentComponent',
      component: ParentComponent
    },
    {
      path: '/a',
      name: 'A',
      component: A
    },
    {
      path: '/vuexhello',
      name: 'VuexDemo1',
      component: VuexDemo1
    }
  ]
})
