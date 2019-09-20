<template>
  <div>
    <h1>排行榜</h1>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  methods: { 

  },
  data() {
    return {
      id: ''
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.name = this.$route.query.name;
    console.log(this.id, this.name)
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>