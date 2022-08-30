<template>
  <div class="content">
      <div class="list">
          <div class="list-box" v-for="i in imglist" :key="i.name">
              <div>
                <img :src="i.url" alt="">
              </div>
              <p>{{i.name}}</p>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        imglist:[
            {url:require('../../assets/image/loading/loading_1.gif'),name:'loading1'},
            {url:require('../../assets/image/loading/loading_2.gif'),name:'loading2'},
            {url:require('../../assets/image/loading/loading_3.gif'),name:'loading3'},
            {url:require('../../assets/image/loading/loading_4.gif'),name:'loading4'},
            {url:require('../../assets/image/loading/loading_5.gif'),name:'loading5'},
            {url:require('../../assets/image/loading/loading_6.gif'),name:'loading6'},
            {url:require('../../assets/image/loading/loading_7.gif'),name:'loading7'},
            {url:require('../../assets/image/loading/loading_8.gif'),name:'loading8'},
            {url:require('../../assets/image/loading/loading_9.gif'),name:'loading9'},
            {url:require('../../assets/image/loading/loading_10.gif'),name:'loading10'},
            {url:require('../../assets/image/loading/loading_11.gif'),name:'loading11'},
            {url:require('../../assets/image/loading/loading_12.gif'),name:'loading12'},
            {url:require('../../assets/image/loading/loading_13.gif'),name:'loading13'},
            {url:require('../../assets/image/loading/loading_14.gif'),name:'loading14'},
            {url:require('../../assets/image/loading/loading_15.gif'),name:'loading15'},
            {url:require('../../assets/image/loading/loading_16.gif'),name:'loading16'},
            {url:require('../../assets/image/loading/loading_17.gif'),name:'loading17'},
            {url:require('../../assets/image/loading/loading_18.gif'),name:'loading18'},
            {url:require('../../assets/image/loading/loading_19.gif'),name:'loading19'},
            {url:require('../../assets/image/loading/loading_20.gif'),name:'loading20'},
            {url:require('../../assets/image/loading/loading_21.gif'),name:'loading21'},
            {url:require('../../assets/image/loading/loading_22.gif'),name:'loading22'},
            {url:require('../../assets/image/loading/loading_23.gif'),name:'loading23'},
            {url:require('../../assets/image/loading/loading_24.gif'),name:'loading24'},
            {url:require('../../assets/image/loading/loading_25.gif'),name:'loading25'},
            {url:require('../../assets/image/loading/loading_26.gif'),name:'loading26'},
            {url:require('../../assets/image/loading/loading_27.gif'),name:'loading27'},
            {url:require('../../assets/image/loading/loading_28.gif'),name:'loading28'},
            {url:require('../../assets/image/loading/loading_29.gif'),name:'loading29'},
            {url:require('../../assets/image/loading/loading_30.gif'),name:'loading30'},
            {url:require('../../assets/image/loading/loading_31.gif'),name:'loading31'},
            {url:require('../../assets/image/loading/loading_32.gif'),name:'loading32'},
            {url:require('../../assets/image/loading/loading_33.gif'),name:'loading33'},
            {url:require('../../assets/image/loading/loading_34.gif'),name:'loading34'},
            {url:require('../../assets/image/loading/loading_35.gif'),name:'loading35'}
        ]
      };
    },
    methods: {
      
    },
    mounted(){
      this.$store.commit('toggleName','loading图标列表');
      this.$store.commit('toggleHead',true);
      this.$store.commit('toggleBack',true);
    },
    created() {
      
    },
  };
</script>

<style lang="less" scoped>
  @import "../../assets/css/common";
  .content{
    padding-bottom: 0.98rem;
    padding-top: 0.88rem;
  }
  .list{
    width: 7rem;
    height: auto;
    margin: 0 auto;
    font-size: 0.3rem;
    color: #333;
    .list-box{
        width: 25%;
        height: 1.3rem;
        display: inline-block;
        margin-bottom: 0.3rem;
        div{
            width: 100%;
            height: 1rem;
            position: relative;
            img{
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: auto;
            }
        }
        p{
            width: 100%;
            text-align: center;
        }
    }
  }
</style>
