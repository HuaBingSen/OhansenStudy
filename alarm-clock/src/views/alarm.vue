<template>
  <div class="wrapper">
    <div class="head">
      <div class="clock">
        <span>闹钟</span>
      </div>
      <div class="functions">
        <span class="ling" @click="chooseMusic">
          <i class="el-icon-message-solid"></i>
        </span>
        <span class="plus" @click="addAlarm">
          <i class="el-icon-plus" ></i>
        </span>
        <span class="edit" @click="editing">
          <i class="el-icon-s-tools" ></i>
        </span>
      </div>
    </div>
    <div class="popup">
      <div class="mask" :class="{'maskpop':isShow}"></div>
       <div class="content" :class="{'trans':isShow}">
        <i class="el-icon-close" @click="pophide"></i>
        <span>添加闹钟</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   methods: {
     change() {
       this.$router.push({
         path: '/secondWatch',
         query: {
           id: 1
         }
       })
     },
    goSecondWatch() {
      // this.$router.push({path:'/secondWatch'})
      this.$router.push({name:'secondWatch'})
    },
    //  选择铃声
    chooseMusic() {
      console.log('chooseMusic')
    },
    //  显示
    addAlarm() {
      this.isShow = true;
      console.log('addAlarm')
    },
    //  编辑
    editing() {
      console.log('editing')
    },
    pophide() {
      this.isShow = false
    }
   },
   data() {
    return {
      isShow: false,
      id: 1
    }
  }
  }

</script>

<style scoped>
.html {
  height: 100%;
  width: 100px;
}
.head {
  height: 90px;
  width: 100%;
  display: flex;
}
.head::before {
  content: '';
  position: absolute;
  left: 0;
  top: 90px;
  height: 0.05rem;
  width: 100%;
  background-color: #f10215;
  transform: scaleY(0.5);
  transform-origin: center bottom;
  z-index: 2;
}
.head .clock {
  height: 100%;
  width: 50%;
}
.head .clock span {
  font-size: 2rem;
  font-family:  "楷体","楷体_GB2312";
  position: relative;
  top: 40px;
  left: 24px;
}
.head .functions {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: space-around;
}
.head .functions span {
  margin-top: 36px;
  width: 55px;
  height: 55px;
  font-size: 30px;
  color:#f10215;
  text-align: center;
}
.mask {
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  opacity: 0;
  transition: all 0.5s;
  visibility: hidden;
}
.maskpop {
  pointer-events: auto;
  opacity: 1;
  visibility: visible;
}
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
.trans {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>
