
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
						txt:'音乐',
						page:'music',
						normalImg:require('../assets/icon/music-default.png'),
						activeImg:require('../assets/icon/music-active.png')
					},				
					{
						txt:'排行榜',
						page:'rank',
						normalImg:require('../assets/icon/rank-default.png'),
						activeImg:require('../assets/icon/rank-active.png')
					},
					{
						txt:'我的',
						page:'mine',
						normalImg:require('../assets/icon/mine-default.png'),
						activeImg:require('../assets/icon/mine-active.png')
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