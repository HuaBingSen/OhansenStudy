<template>
  <div id="app">
    <router-view/>
    <TableBar></TableBar>
  </div>
</template>
<script>
import alarm from './views/alarm'
import worldClock from './views/worldClock'
import secondWatch from './views/secondWatch'
import calculatClock from './views/calculatClock'

import TableBar from './views/tabbar'
export default {
  components: [alarm, worldClock, secondWatch, calculatClock,TableBar],
  created: function() {
    this.$router.push('/')
  }
}

</script>

<style>
</style>
