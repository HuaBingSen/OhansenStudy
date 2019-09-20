import Vue from 'vue'
import Router from 'vue-router'

import music from '@/views/music.vue'
import rank from '@/views/rank'
import mine from '@/views/mine'


Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'music',
      component: music
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})

