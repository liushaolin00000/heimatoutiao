<template>
  <div class="container">
    <div class="info" @click="$router.push('/editData')">
      <img :src="imgSrc" alt />
      <div class="nickname">
        <i class="iconfont icon-nan nan" v-if="detail.gender===1"></i>
        <i class="iconfont icon-nv nv" v-if="detail.gender===0"></i>
        <span>{{detail.nickname}}</span>
        <p>2019-10-10</p>
      </div>
      <i class="iconfont icon-youjiantou jiantou"></i>
    </div>
    <CnpOption left="我的关注" right="关注的用户"  @click.native="$router.push('/myFocus')"></CnpOption>
    <CnpOption left="我的跟帖" right="跟帖/回复" @click.native="$router.push('/myComments')"></CnpOption>
    <CnpOption left="我的收藏" right="文章/视频" @click.native="$router.push('/myFavorite')"></CnpOption>
    <CnpOption left="退出" @click.native="handleQuit"></CnpOption>
  </div>
</template>

<script>
import CnpOption from "@/components/CnpOption.vue";
import { psDetail } from "@/network/personal.js";
export default {
  components: {
    CnpOption
  },
  data() {
    return {
      detail: "",
      imgSrc: "",
      show1: false
    };
  },
  methods: {
    handleQuit() {
      this.$router.replace("/login");
      localStorage.clear();
    },
    
  },
  mounted() {
    psDetail().then(res => {
      this.detail = res.data.data;
      // console.log(res);
      if (res.data.data.head_img) {
        this.imgSrc = "http://127.0.0.1:3000" + res.data.data.head_img;
      } else {
        this.imgSrc = "../../static/2.jpg";
      }
    });
  }
};
</script>

<style scoped lang='less'>
.container {
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 5px solid #e4e4e4;
    padding: 20/360 * 100vw;
    img {
      width: 75/360 * 100vw;
      height: 75/360 * 100vw;
      border-radius: 50%;
    }
    .nickname {
      flex: 1;
      padding-left: 20/360 * 100vw;
      .nan {
        color: #79bbeb;
      }
      .nv {
        color: deeppink;
      }
    }
    .jiantou {
      font-size: 17/360 * 100vw;
    }
  }
}
</style>