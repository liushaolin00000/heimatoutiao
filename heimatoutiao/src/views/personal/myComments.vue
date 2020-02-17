<template>
  <div class="container">
    <CnpHeader @clicks="$router.back()" title="我的跟帖" />
    <div class="all">
      <div class="demo" v-for="(item,index) in comments" :key="index">
        <p class="time">2019-10-10 10:25</p>
        <div class="content" v-if="item.parent" >
          <p>回复：{{item.parent.user.nickname}}</p>
          <p>{{item.parent.content}}</p>
        </div>
        <div class="reply">
          <p>{{item.content}}</p>
          <p>
            <span>原文：{{item.post.title}}</span>
            <i class="iconfont icon-youjiantou"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import CnpHeader from "@/components/CnpHeader.vue";
export default {
  components: {
    CnpHeader
  },
  data(){
    return{
     comments:[]
    }
  },
  methods: {},
  mounted(){
      axios({
      url:
        "http://localhost:3000/user_comments",
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token")
      },
    }).then(res => {
      this.comments = res.data.data
    });
  }
};
</script>

<style lang="less" scoped>
.all {
 
  .demo {
    border-bottom:1px solid #D7D7D7;
     padding: 20/360 * 100vw;
    .time {
      color: rgba(121, 121, 121, 0.866666666666667);
    }
    .content {
      background-color: #e4e4e4;
      line-height: 30px;
      padding: 10px;
      color: rgba(134, 134, 134, 0.866666666666667);
      margin: 10px 0;
    }
    .reply {
      P:nth-child(1){
        margin-top: 10px;
      }
      p:nth-child(2) {
        margin-top: 10px;
        color: rgba(121, 121, 121, 0.866666666666667);
        display: flex;
        justify-content: space-between;
        span {
          width: 70%;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>