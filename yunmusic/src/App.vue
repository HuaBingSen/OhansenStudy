<template>
  <div id="app">
    <router-view/>
    <tabbar />
  </div>
</template>
<script>
import music from './views/music'
import rank from './views/rank'
import mine from './views/mine'

import tabbar from './components/tabbar'
export default {
  components: {music, rank, mine,tabbar},
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
