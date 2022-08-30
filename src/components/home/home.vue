<template>
  <div class="content">
    <div class="box">{{times}}</div>
    <div class="btn" @click="begin()">重新开始</div>
    
    <div v-for="item in list" :class="item.child.class">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      times: 300,
      timer: null,
      list:[
        {name:'Apple',child:{class:'item1'}},
        {name:'小米',child:{class:'item2'}}
      ]
    };
  },
  methods: {
    begin() {
      let that = this;
      that.timer && clearInterval(that.timer);
      that.times = 300;
      that.timer = setInterval(function() {
        if (that.times == 0) {
          this.times = "已结束！";
          clearInterval(that.timer);
        } else {
          that.times--;
        }
      }, 1000);
    }
  },
  mounted() {
    let that = this;
    that.$store.commit("toggleHead", false);
    that.$store.commit("toggleBack", false);
    clearInterval(that.timer);
    that.timer = setInterval(function() {
      if (that.times == 0) {
        this.times = "已结束！";
        clearInterval(that.timer);
      } else {
        that.times--;
      }
    }, 1000);
  },
  created() {}
};
</script>

<style lang="less" scoped>
@import "../../assets/css/common";
.content {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #f0f0f0;
  .box {
    width: 100%;
    height: 4rem;
    font-weight: 600;
    text-align: center;
    font-size: 3rem;
    line-height: 4rem;
  }
  .btn {
    text-align: center;
  }
  .item1{
    color: red;
  }
  .item2{
    color: yellow;
  }
}
</style>
