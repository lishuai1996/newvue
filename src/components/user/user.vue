<template>
  <div class="content">
     <div class="list" @click="toLoad()">
       <p>loading组件列表</p>
     </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        
      };
    },
    methods: {
      toLoad(){
        this.$router.push('/loadlist');
      }
    },
    mounted(){
      this.$store.commit('toggleName','个人中心');
      this.$store.commit('toggleHead',true);
      this.$store.commit('toggleBack',false);
    },
    created() {
      
    },
  };
</script>

<style lang="less" scoped>
  @import "../../assets/css/common";
  .list{
    width: 6.6rem;
    height: 0.88rem;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
    font-size: 0.3rem;
    color: #333;
    line-height: 0.88rem;
    padding-top: 0.88rem;
  }
</style>
