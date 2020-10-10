import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Api from '@/components/Api'
import Contacts from '@/components/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/api',
      name: 'api',
      component: Api
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    }
  ]
})
