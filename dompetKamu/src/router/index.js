import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'

import PageIndex from '@/pages/index'
import PageEasy from '@/pages/easy'
import PageStable from '@/pages/stable'
import PageAbout from '@/pages/about'
import PageAccount from '@/pages/account'
import PageLogin from '@/pages/login'
import PageReg from '@/pages/reg'
import PageNotfound from '@/pages/notfound'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'PageIndex',
      component: PageIndex
    },
    {
      path: '/easy',
      name: 'PageEasy',
      component: PageEasy
    },
    {
      path: '/stable',
      name: 'PageStable',
      component: PageStable
    },
    {
      path: '/about',
      name: 'PageAbout',
      component: PageAbout
    },
    {
      path: '/account',
      name: 'PageAccount',
      component: PageAccount
    },
    {
      path: '/login',
      name: 'PageLogin',
      component: PageLogin
    },
    {
      path: '/reg',
      name: 'PageReg',
      component: PageReg
    },
    {
      path: '/notfound',
      name: 'PageNotfound',
      component: PageNotfound
    },
    { 
    	path: '*', 
    	redirect: '/notfound'
    }
  ]
})