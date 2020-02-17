<template>
  <div class="container">
    <CnpHeader @clicks="handleback" title="我的关注" />
    <div class="demo" v-for="(item,index) in focus" :key='index'>
      <img :src="'http://localhost:3000'+item.head_img" alt />
      <div class="info">
        <p>{{item.nickname}}</p>
        <p>2019-10-10</p>
      </div>
      <div class="focus" @click="handleCfocus">取消关注</div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
import CnpHeader from "@/components/CnpHeader.vue";
export default {
  components: {
    CnpHeader
  },
  data(){
    return{
      focus:[]
    }
  },
  methods: {
    handleback() {
      this.$router.back();
    },
    handleCfocus(){
       axios({
      url:
        "http://localhost:3000/user_unfollow/"+localStorage.getItem("userId"),
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token")
      },
    }).then(res => {
      console.log(res)
      if (res.status == 200) {
        // console.log(res)
         this.$toast.success(res.data.message)
      }
    });
    }
  },
  mounted() {
    axios({
      url:
        "http://localhost:3000/user_follows/",
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token")
      },
    }).then(res => {
      // console.log(res)
      if (res.status == 200) {
         this.focus = res.data.data
      }
    });
  }
};
</script>

<style lang="less" scoped>
.container {
  .demo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20/360 * 100vw;
    border-bottom: 1px solid #d7d7d7;
    img {
      width: 50/360 * 100vw;
      height: 50/360 * 100vw;
      border-radius: 50%;
    }
    .info {
      flex: 1;
      padding-left: 20/360 * 100vw;
      p:nth-child(2) {
        color: #949494;
        font-size: 14/360 * 100vw;
      }
    }
    .focus {
      background-color: rgba(153, 153, 153, 0.2);
      width: 73/360 * 100vw;
      height: 30/360 * 100vw;
      text-align: center;
      line-height: 30/360 * 100vw;
      border-radius: 20px;
      padding: 5px;
    }
  }
}
</style>