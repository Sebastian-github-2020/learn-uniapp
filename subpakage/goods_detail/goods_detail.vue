<template>
	<view>
		商品详情id:{{goods_id}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods_id:''
			};
		},
		onLoad(p) {
			console.log("id",p)
			this.goods_id = p.goods_id
		}
	}
</script>

<style lang="scss">

</style>
