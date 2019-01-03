// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);
// 封装echarts
import myEcharts from "./libs/echarts/index.js"
Vue.prototype.echart = myEcharts;

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
