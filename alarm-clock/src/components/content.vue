<template>
  <div class="content" :class="{'trans':isShow}">
    {{isShow}}
    <i class="el-icon-close" @click="pophide"></i>
    <span>添加闹钟</span>
  </div>
</template>

<script>
export default {
  props: ['isShow'],
  methods: {
    pophide () {
      this.isShow = !this.isShow
    }
  },
  data() {
    return {
      // ishow: this.isShow
    }
  }
}
</script>

<style scoped>
.content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top:  0;
  background-color: #fff;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  box-shadow: 0 -1px 40px rgba(0, 0, 0, .3);
  -webkit-transition: -webkit-transform .3s cubic-bezier(0, 0, .25, 1) 80ms;
  transition: transform .3s cubic-bezier(0, 0, .25, 1) 80ms;
}
</style>