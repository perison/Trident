import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import Md from '@/components/Md'
import Water from '@/components/Water'
import Upgrade from '@/page/UpgradeView/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'导航。',
      component:Nav,
      children:[
        {
          path:'/md',
          name:'md',
          component:Md,
        },
        {
          path:'/water',
          name:'water',
          component:Water,
        },
        {
          path:'/upgrade',
          name:'upgrade',
          component:Upgrade,
        },
      ]
    }
  ]
})
