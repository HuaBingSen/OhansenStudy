import Vue from 'vue'
import Router from 'vue-router'

import alarm from '@/views/alarm.vue'
import worldClock from '@/views/worldClock'
import calculatClock from '@/views/calculatClock'
import secondWatch from '@/views/secondWatch'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component: alarm
    },
    {
      path: '/alarm',
      name: 'alarm',
      component: alarm
    },
    {
      path: '/worldClock',
      name: 'worldClock',
      component: worldClock
    },
    {
      path: '/secondWatch',
      name: 'secondWatch',
      component: secondWatch
    },
    {
      path: '/calculatClock',
      name: 'calculatClock',
      component: calculatClock
    }
  ]
})

