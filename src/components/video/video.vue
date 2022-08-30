<template>
  <div class="content">
    
  </div>
</template>

<script>
  export default {
    name: "video",
    data() {
      return {
        // list:[
        //   {url:require('../../assets/image/video/video1.mp4'),name:'宝贝儿子1'},
        //   {url:require('../../assets/image/video/video2.mp4'),name:'宝贝儿子2'},
        //   {url:require('../../assets/image/video/video3.mp4'),name:'宝贝儿子3'},
        //   {url:require('../../assets/image/video/video4.mp4'),name:'宝贝儿子4'}
        // ]
      };
    },
    methods: {
      
    },
    mounted(){
      this.$store.commit('toggleName','视频');
      this.$store.commit('toggleHead',true);
      this.$store.commit('toggleBack',false);
    },
    created() {
      
    },
  };
</script>

<style lang="less" scoped>
  @import "../../assets/css/common";
  .box{
    width: 7rem;
    height: auto;
    margin: 0 auto;
    margin-top: 0.98rem;
    div{
      width:7rem;
      height: 100%;
      margin-bottom: 0.1rem;
      video{
        width:7rem;
        height: 100%;
      }
    }
  }
</style>
