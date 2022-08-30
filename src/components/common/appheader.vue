<template>
  <div class="app-header" v-if="this.$store.state.headBoon">
      <p  v-if="this.$store.state.backBoon" @click="backs()">返回</p>
      {{this.$store.state.headTxt}}
    </div>
</template>

<script>
export default {
  name: "appheader",
  data() {
    return {
      
    };
  },
  methods: {
    backs(){
        this.$router.go(-1)
      }
  },
  mounted() {},
  created() {},
};
</script>

<style lang="less" scoped>
@import "../../assets/css/common";
.app-header {
  width: 100%;
  height: 0.88rem;
  background: #ff6666;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 0.36rem;
  text-align: center;
  line-height: 0.88rem;
  color: #333;
  p {
    position: fixed;
    left: 0.25rem;
    height: 0.88rem;
    line-height: 0.88rem;
    color: #fff;
    font-size: 0.3rem;
  }
}
</style>
