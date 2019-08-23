<template>
  <div id="app">
    <router-view/>
    <tabbar />
  </div>
</template>
<script>
import alarm from './views/alarm'
import worldClock from './views/worldClock'
import secondWatch from './views/secondWatch'
import calculatClock from './views/calculatClock'

import tabbar from './components/tabbar'
export default {
  components: {alarm, worldClock, secondWatch, calculatClock,tabbar},
  created: function() {
    this.$router.push('/')
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
