<template>
	<view>
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-item" v-for="item in swipperList" :key="item">

				<!-- <img :src="`/static/c${item}.png`" alt="" />				 -->
				<navigator class="nav" :url="`/subpakage/goods_detail/goods_detail?goods_id=${item}`">
					<image :src="`/static/c${item}.png`"></image>
				</navigator>

			</swiper-item>
		</swiper>
		<!-- 分类 -->
		<view class="category">
			<view class="category-item" @click="categoryClick(index+1)" v-for="(item,index) in category" :key="item">

				<image :src="`/static/c${index+1}.png`" mode="aspectFill" class="category-item-img"></image>
				<view class="">
					{{item}}
				</view>


			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			// 页面刚加载时候执行
			// uni.$http.get()
		},
		data() {
			return {
				swipperList: [1, 2, 3, 4],
				d: '123',
				category: ['全部', '医药', '生鲜', '服装']
			};
		},
		methods: {
			btnClick() {
				console.log("数据加载")
				uni.$http.get("https://httpbin.org/get").then((res) => {
					console.log("请求成功", res)
					this.d = res;
				}).finally(function() {
					uni.showToast({
						title: "数据加载成功..."
					})
				})
			},
			categoryClick(index){
				uni.switchTab({
					url:'/pages/cate/cate'
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		height: 330rpx;

		.swiper-item {
			// background-color: red;

			.nav,
			image {
				height: 100%;
				width: 100%;
			}
		}

	}

	.category {
		height: 100rpx;
		background-color: red;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		.category-item {
			background-color: antiquewhite;
			padding: 10rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.category-item-img {
			width: 30rpx;
			height: 30rpx;
		}

		.category-nav {}
	}
</style>
