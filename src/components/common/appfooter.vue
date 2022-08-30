<template>
  <div class="app-footer" v-if="this.$store.state.footBoon">
      <div @click="footCheck(1,'/')">
        <p v-if="this.$store.state.footIndex == 1">
          <img src="../../assets/image/footer/home_active.png" alt="">
          <span style="color: #000;">首页</span>
        </p>
        <p v-else>
          <img src="../../assets/image/footer/home.png" alt="">
          <span style="color: #fff;">首页</span>
        </p>
      </div>
      <div @click="footCheck(2,'/photo')">
        <p v-if="this.$store.state.footIndex == 2">
          <img src="../../assets/image/footer/photo_active.png" alt="">
          <span style="color: #000;">美图</span>
        </p>
        <p v-else>
          <img src="../../assets/image/footer/photo.png" alt="">
          <span style="color: #fff;">美图</span>
        </p>
      </div>
      <div @click="footCheck(3,'/video')">
        <p v-if="this.$store.state.footIndex == 3">
          <img src="../../assets/image/footer/video_active.png" alt="">
          <span style="color: #000;">视频</span>
        </p>
        <p v-else>
          <img src="../../assets/image/footer/video.png" alt="">
          <span style="color: #fff;">视频</span>
        </p>
      </div>
      <div @click="footCheck(4,'/user')">
        <p v-if="this.$store.state.footIndex == 4">
          <img src="../../assets/image/footer/user_active.png" alt="">
          <span style="color: #000;">我的</span>
        </p>
        <p v-else>
          <img src="../../assets/image/footer/user.png" alt="">
          <span style="color: #fff;">我的</span>
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: "appfooter",
  data() {
    return {
      
    };
  },
  methods: {
      footCheck(index,url){
        this.$store.dispatch('changeFootName',index);
        this.$router.replace(url);
      }
  },
  mounted() {},
  created() {},
};
</script>

<style lang="less" scoped>
@import "../../assets/css/common";
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
