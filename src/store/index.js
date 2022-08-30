import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    //全局state对象   使用方法：this.$store.state.xxx
    state:{
        headBoon: true,
        headTxt: '百科全书',
        footBoon: true,
        footIndex: 1,
        backBoon: false,//返回是否显示
    },
    //实时监听state值的变化
    getters:{
        
    },
    //改变state的值  this.$store.commit('toggleHead','替换的值') 
    mutations:{
        toggleHead(state,boon) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
            state.headBoon = boon;
        },
        toggleName(state,name){ //同上，这里面的参数除了state之外还传了需要增加的值sum
           state.headTxt = name;
        },
        toggleFoot(state,boon) {  //同上
            state.footBoon = boon;
        },
        toggleFootTxt(state,index){
            state.footIndex = index;
        },
        toggleBack(state,boon){
            state.backBoon = boon;
        }
    },
    //这里面的方法是用来异步触发mutations里面的方法   this.$store.dispatch('hideFooter','替换的值')
    actions:{
        changeHead(context,boon){
            context.commit('toggleHead',boon)
        },
        changeHeadName(context,name){
            context.commit('toggleName',name)
        },
        changeFoot(context,boon){
            context.commit('toggleFoot',boon)
        },
        changeFootName(context,index){
            context.commit('toggleFootTxt',index)
        },
        changeBack(context,boon){
            context.commit('toggleBack',boon)
        }
    }
});
/**
 * state全局方法
 * ---------------------------------   同步方法    ----------------------------------
 * 公共头部显示隐藏
 * this.$store.commit('toggleHead',true); true显示 false隐藏
 * 公共底部导航显示隐藏
 * this.$store.commit('toggleHead',true); true显示 false隐藏
 * 公共头部标题更换
 * this.$store.commit('toggleName','替换后的标题');
 * 切换底部导航菜单选中下标
 * this.$store.commit('toggleFootTxt','替换后的下标'); 1首页 2图片 3视频 4个人
 * 切换返回按钮显示隐藏
 * this.$store.commit('toggleBack',true); true显示 false隐藏
 * 
 * ---------------------------------   异步方法    ----------------------------------
 * 公共头部显示隐藏
 * this.$store.dispatch('changeHead',true); true显示 false隐藏
 * 公共底部导航显示隐藏
 * this.$store.dispatch('changeFoot',true); true显示 false隐藏
 * 公共头部标题更换
 * this.$store.dispatch('changeHeadName','替换后的标题');
 * 切换底部导航菜单选中下标
 * this.$store.dispatch('changeFootName','替换后的下标');1首页 2图片 3视频 4个人
 * 切换返回按钮显示隐藏
 * this.$store.dispatch('changeBack',true); true显示 false隐藏
 * 
 */

export default store;