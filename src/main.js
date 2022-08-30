// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//阻止显示生产环境信息
Vue.config.productionTip = false;


//数组去重
function unique(arr){
  var result = [], json = {};
  for (var i = 0, len = arr.length; i < len; i++){
      if (!json[arr[i]]) {
          json[arr[i]] = 1;
          result.push(arr[i]);  //返回没被删除的元素
      }
  }
  return result;
};

//获取数组最大值和最小值 type = 'max' 最大值，type = 'min' 最小值
function getMaxOrMinNum(arr,type){
    if(type == 'max'){
      return Math.max.apply(Math, arr);
    }else if(type == 'min'){
      return Math.min.apply(Math, arr);
    }
}



Vue.prototype.unique = unique;//数组去重
Vue.prototype.getMaxOrMinNum = getMaxOrMinNum;//数组取最大值和最小值 type = 'max' 最大值，type = 'min' 最小值



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
