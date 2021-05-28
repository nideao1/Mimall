import Vue from 'vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

//根据前端的跨域方式做调整  如：/a/b -> /api/a/b => /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//接口错误拦截
axios.interceptors.response.use(function(response){
	let res = response.data;
	if(res.status == 0){
		return res.data;
	}else if(res.status == 10){
		window.location.href = '/#/login';
	}else{
		alert(res.msg);
	}
});


Vue.use(VueAxios,axios);
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
