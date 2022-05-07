
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// 导入网络请求包
import{$http} from '@escook/request-miniprogram'
uni.$http = $http; // 将网络请求框架 挂载到 uni app的全局对象上
// 配置请求拦截器
$http.beforeRequest = function(){
	uni.showLoading({
		title:'数据加载中'
	})
}
// 配置响应拦截器
$http.afterRequest = function(){
	uni.hideLoading();
}
// 配置弹窗的方法
uni.$showMsg = function(title="数据请求失败",duration=1500){
	uni.showToast({
		title,
		duration
	})
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif