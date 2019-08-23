
<template>
	<div class="tabberWarp" >
		<div class="warp">
			<item :txt='item.txt' :page='item.page' @change='getVal' v-for='item in tabbarDes' :sel='selected' :key="item.index">
				<img :src="item.normalImg" slot='normalImg'>
				<img :src="item.activeImg" slot='activeImg'>
			</item>
		</div>
	</div>
</template>
<script type="text/javascript">
	import item from './item.vue'
  export default {
    components: {
      item
    },
    data() {
			return{
				selected:'/',
				tabbarDes:[
					{
						txt:'闹钟',
						page:'alarm',
						normalImg:require('../assets/icon/alarm-default.png'),
						activeImg:require('../assets/icon/alarm-active.png')
					},				
					{
						txt:'世界时钟',
						page:'worldClock',
						normalImg:require('../assets/icon/clock-default.png'),
						activeImg:require('../assets/icon/clock-active.png')
					},
					{
						txt:'秒表',
						page:'secondWatch',
						normalImg:require('../assets/icon/stopwatch-default.png'),
						activeImg:require('../assets/icon/stopwatch-active.png')
					},
					{
						txt:'计时器',
						page:'calculatClock',
						normalImg:require('../assets/icon/calculateClock-default.png'),
						activeImg:require('../assets/icon/calculateClock-active.png')
					}
				]
			}
    },
    methods:{
			getVal:function(res){
				this.selected = res;
			}
		}
  }
	
</script>
<style type="text/css">
	.warp{
		width: 100%;
		border-top: 1px solid #eee;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 0;
	}
	.warp img{
		width: 20px;
		height: 20px;
	}
	.tabberWarp img{
		margin-top: 10px;
		margin-bottom: 5px;
 
	}
	.tabberWarp{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding-bottom: 5px;
		background: #fff;
	}
</style>