<template>
  <div id="app">
    <!-- <div class="app-header" v-if="this.$store.state.headBoon">
      <p  v-if="this.$store.state.backBoon" @click="backs()">返回</p>
      {{this.$store.state.headTxt}}
    </div> -->
    <appheader></appheader>
    <transition class="contents">
      <router-view></router-view>
    </transition>
    <appfooter></appfooter>
  </div>
</template>

<script>
import appheader from './components/common/appheader.vue';
import appfooter from './components/common/appfooter.vue';
//把头部和底部作为公用组件引入
export default {
  name: 'App',
    data(){
      return{
          transitionName:'',
          showFooter: true
      }
    },
    beforeRouteUpdate(to,from,next){
        let isBack = this.$router.isBack;
        if( isBack ){
            this.transitionName = 'slide-right'
        }else{
            this.transitionName = 'slide-left'
        }
        this.$router.isBack = false;
    },
    mounted(){
      this.$store.commit('toggleHead',false);
    },
    components:{
      appheader,appfooter
    },
    created() {
      
    },
    destroyed() {

    },
    methods:{
      
    }
}
</script>

<style lang="less">
  @import "./assets/css/common";
  body{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
  .app-header{
    width: 100%;
    height: 0.88rem;
    background: #FF6666;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 0.36rem;
    text-align: center;
    line-height: 0.88rem;
    color: #333;
    p{
      position: fixed;
      left: 0.25rem;
      height: 0.88rem;
      line-height: 0.88rem;
      color: #fff;
      font-size: 0.3rem;
    }
  }
  .app-footer{
    width: 100%;
    height: 0.98rem;
    background: #FF6666;
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    div{
      width: 25%;
      height: 0.98rem;
      float: left;
      img{
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        margin: 0.1rem auto;
      }
      span{
        display: block;
        width: 100%;
        text-align: center;
        font-size: 0.2rem;
      }
    }
  }
</style>
