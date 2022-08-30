<template>
  <div class="content">
    <div class="box">
      <!-- <div v-for="i in imgList" :key="i.type">
        <img :src="i.url" alt="">
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "photo",
    data() {
      return {
        // imgList:[
        //   {url:require('../../assets/image/photo/1.jpg'),type:'1'},
        //   {url:require('../../assets/image/photo/2.jpg'),type:'2'},
        //   {url:require('../../assets/image/photo/3.jpg'),type:'3'},
        //   {url:require('../../assets/image/photo/4.jpg'),type:'4'},
        //   {url:require('../../assets/image/photo/5.jpg'),type:'5'},
        //   {url:require('../../assets/image/photo/6.jpg'),type:'6'},
        //   {url:require('../../assets/image/photo/7.jpg'),type:'7'},
        //   {url:require('../../assets/image/photo/8.jpg'),type:'8'},
        //   {url:require('../../assets/image/photo/9.jpg'),type:'9'},
        //   {url:require('../../assets/image/photo/10.jpg'),type:'10'},
        //   {url:require('../../assets/image/photo/11.jpg'),type:'11'},
        //   {url:require('../../assets/image/photo/12.jpg'),type:'12'},
        //   {url:require('../../assets/image/photo/13.jpg'),type:'13'},
        //   {url:require('../../assets/image/photo/14.jpg'),type:'14'},
        //   {url:require('../../assets/image/photo/15.jpg'),type:'15'},
        //   {url:require('../../assets/image/photo/16.jpg'),type:'16'},
        //   {url:require('../../assets/image/photo/17.jpg'),type:'17'},
        //   {url:require('../../assets/image/photo/18.jpg'),type:'18'},
        //   {url:require('../../assets/image/photo/19.jpg'),type:'19'},
        //   {url:require('../../assets/image/photo/20.jpg'),type:'20'},
        //   {url:require('../../assets/image/photo/21.jpg'),type:'21'},
        //   {url:require('../../assets/image/photo/22.jpg'),type:'22'},
        //   {url:require('../../assets/image/photo/23.jpg'),type:'23'},
        //   {url:require('../../assets/image/photo/24.jpg'),type:'24'},
        //   {url:require('../../assets/image/photo/25.jpg'),type:'25'},
        //   {url:require('../../assets/image/photo/26.jpg'),type:'26'},
        //   {url:require('../../assets/image/photo/27.jpg'),type:'27'},
        //   {url:require('../../assets/image/photo/28.jpg'),type:'28'},
        //   {url:require('../../assets/image/photo/29.jpg'),type:'29'},
        //   {url:require('../../assets/image/photo/30.jpg'),type:'30'},
        //   {url:require('../../assets/image/photo/31.jpg'),type:'31'},
        //   {url:require('../../assets/image/photo/32.jpg'),type:'32'},
        //   {url:require('../../assets/image/photo/33.jpg'),type:'33'},
        //   {url:require('../../assets/image/photo/34.jpg'),type:'34'},
        //   {url:require('../../assets/image/photo/35.jpg'),type:'35'},
        //   {url:require('../../assets/image/photo/36.jpg'),type:'36'},
        //   {url:require('../../assets/image/photo/37.jpg'),type:'37'},
        //   {url:require('../../assets/image/photo/38.jpg'),type:'38'},
        //   {url:require('../../assets/image/photo/39.jpg'),type:'39'},
        //   {url:require('../../assets/image/photo/40.jpg'),type:'40'},
        //   {url:require('../../assets/image/photo/41.jpg'),type:'41'},
        //   {url:require('../../assets/image/photo/42.jpg'),type:'42'},
        //   {url:require('../../assets/image/photo/43.jpg'),type:'43'},
        //   {url:require('../../assets/image/photo/44.jpg'),type:'44'},
        //   {url:require('../../assets/image/photo/45.jpg'),type:'45'},
        //   {url:require('../../assets/image/photo/46.jpg'),type:'46'},
        //   {url:require('../../assets/image/photo/47.jpg'),type:'47'},
        //   {url:require('../../assets/image/photo/48.jpg'),type:'48'},
        //   {url:require('../../assets/image/photo/49.jpg'),type:'49'},
        //   {url:require('../../assets/image/photo/50.jpg'),type:'50'},
        //   {url:require('../../assets/image/photo/51.jpg'),type:'51'},
        //   {url:require('../../assets/image/photo/52.jpg'),type:'52'},
        //   {url:require('../../assets/image/photo/53.jpg'),type:'53'},
        //   {url:require('../../assets/image/photo/54.jpg'),type:'54'},
        //   {url:require('../../assets/image/photo/55.jpg'),type:'55'},
        //   {url:require('../../assets/image/photo/56.jpg'),type:'56'},
        //   {url:require('../../assets/image/photo/57.jpg'),type:'57'},
        //   {url:require('../../assets/image/photo/58.jpg'),type:'58'},
        //   {url:require('../../assets/image/photo/59.jpg'),type:'59'},
        //   {url:require('../../assets/image/photo/60.jpg'),type:'60'},
        //   {url:require('../../assets/image/photo/61.jpg'),type:'61'},
        //   {url:require('../../assets/image/photo/62.jpg'),type:'62'},
        //   {url:require('../../assets/image/photo/63.jpg'),type:'63'},
        //   {url:require('../../assets/image/photo/64.jpg'),type:'64'},
        //   {url:require('../../assets/image/photo/65.jpg'),type:'65'},
        //   {url:require('../../assets/image/photo/66.jpg'),type:'66'},
        //   {url:require('../../assets/image/photo/67.jpg'),type:'67'},
        //   {url:require('../../assets/image/photo/68.jpg'),type:'68'},
        //   {url:require('../../assets/image/photo/69.jpg'),type:'69'},
        //   {url:require('../../assets/image/photo/70.jpg'),type:'70'},
        //   {url:require('../../assets/image/photo/71.jpg'),type:'71'},
        //   {url:require('../../assets/image/photo/72.jpg'),type:'72'},
        //   {url:require('../../assets/image/photo/73.jpg'),type:'73'},
        //   {url:require('../../assets/image/photo/74.jpg'),type:'74'},
        //   {url:require('../../assets/image/photo/75.jpg'),type:'75'},
        //   {url:require('../../assets/image/photo/76.jpg'),type:'76'},
        //   {url:require('../../assets/image/photo/77.jpg'),type:'77'},
        //   {url:require('../../assets/image/photo/78.jpg'),type:'78'},
        //   {url:require('../../assets/image/photo/79.jpg'),type:'79'},
        //   {url:require('../../assets/image/photo/80.jpg'),type:'80'},
        //   {url:require('../../assets/image/photo/81.jpg'),type:'81'},
        //   {url:require('../../assets/image/photo/82.jpg'),type:'82'},
        //   {url:require('../../assets/image/photo/83.jpg'),type:'83'},
        //   {url:require('../../assets/image/photo/84.jpg'),type:'84'},
        //   {url:require('../../assets/image/photo/85.jpg'),type:'85'},
        //   {url:require('../../assets/image/photo/86.jpg'),type:'86'},
        //   {url:require('../../assets/image/photo/87.jpg'),type:'87'},
        //   {url:require('../../assets/image/photo/88.jpg'),type:'88'},
        //   {url:require('../../assets/image/photo/89.jpg'),type:'89'},
        //   {url:require('../../assets/image/photo/90.jpg'),type:'90'},
        //   {url:require('../../assets/image/photo/91.jpg'),type:'91'},
        //   {url:require('../../assets/image/photo/92.jpg'),type:'92'},
        //   {url:require('../../assets/image/photo/93.jpg'),type:'93'},
        //   {url:require('../../assets/image/photo/94.jpg'),type:'94'},
        //   {url:require('../../assets/image/photo/95.jpg'),type:'95'},
        //   {url:require('../../assets/image/photo/96.jpg'),type:'96'},
        //   {url:require('../../assets/image/photo/97.jpg'),type:'97'},
        //   {url:require('../../assets/image/photo/98.jpg'),type:'98'},
        //   {url:require('../../assets/image/photo/99.jpg'),type:'99'}
        // ]
      };
    },
    methods: {

    },
    mounted(){
      this.$store.commit('toggleName','图片');
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
    margin: 0.98rem auto 1rem;
    div{
      width:7rem;
      height: 100%;
      margin-bottom: 0.1rem;
      img{
        width:7rem;
        height: 100%;
      }
    }
  }
</style>
