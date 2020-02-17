<template>
  <div class="container">
    <CnpHeader @clicks="handleback"  title="编辑资料" />
    <div class="img">
      <img :src="imgSrc" alt />
      <van-uploader :after-read="afterRead" class="van-uploader" />
    </div>
    <CnpOption left="昵称" :right="detail.nickname" @click.native="show1=!show1" />
    <van-dialog v-model="show1" title="修改昵称" show-cancel-button @confirm="handlecf1">
      <van-field :value="detail.nickname" ref="ww" />
    </van-dialog>
    <CnpOption left="账号名" :right="detail.username" @click.native="handleusername" />
    <CnpOption left="密码" :right="detail.password" @click.native="handlepassword" />
    <CnpOption left="性别" :right="detail.gender==1?'男':'女'" @click.native="show2=!show2" />
    <van-dialog v-model="show2" title="修改性别" show-cancel-button @confirm="handlecf2">
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="男" clickable @click="radio = '1'">
            <van-radio slot="right-icon" name="1" />
          </van-cell>
          <van-cell title="女" clickable @click="radio = '0'">
            <van-radio slot="right-icon" name="0" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-dialog>
  </div>
</template>

<script>
import axios from "axios";
import CnpHeader from "@/components/CnpHeader";
import CnpOption from "@/components/CnpOption";
import { psDetail } from "@/network/personal.js";
export default {
  data() {
    return {
      detail: {},
      imgSrc: "",
      show1: false,
      show2: false,
      radio:"",
    };
  },
  components: {
    CnpHeader,
    CnpOption
  },
  methods: {
    handleback() {
      this.$router.push("/personal");
    },
    afterRead(file) {
      //构造表单数据
      const formData = new FormData();
      formData.append("file", file.file);
      axios({
        url: "http://localhost:3000/upload",
        method: "POST",
        data: formData,
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        const { data } = res.data;
        //把头像url上传到用户资料

        this.imgSrc = "http://127.0.0.1:3000" + data.url;
        // console.log(this.detail.head_img);
        //把头像url上传到服务器保存起来
        axios({
          url:
            "http://localhost:3000/user_update/" +
            localStorage.getItem("userId"),
          method: "POST",
          headers: {
            Authorization: localStorage.getItem("token")
          },
          data: {
            head_img: data.url
          }
        }).then(res => {
          if (res.status == 200) {
            this.$toast.success(res.data.message);
          }
        });
      });
    },
    handlecf1() {
      this.detail.nickname = this.$refs.ww.$refs.input.value;
      // this.detail.nickname = '111'
      // console.log(this.detail.nickname)
      //编辑用户名将其上传至服务器
      axios({
        url:
          "http://localhost:3000/user_update/" + localStorage.getItem("userId"),
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token")
        },
        data: {
          nickname: this.$refs.ww.$refs.input.value
        }
      }).then(res => {
        if (res.status == 200) {
          this.$toast.success("昵称" + res.data.message);
        }
      });
    },
    handleusername() {
      this.$toast.fail("要改用户名就求我啊！");
    },
    handlepassword() {
      this.$toast.fail("密码不是你想改就能改的");
    },
    handlecf2(){
      this.detail.gender = Number(this.radio)
       axios({
        url:
          "http://localhost:3000/user_update/" + localStorage.getItem("userId"),
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token")
        },
        data: {
         gender:Number(this.radio)
        }
      }).then(res => {
        if (res.status == 200) {
          this.$toast.success("性别" + res.data.message);
        }
      });
    }
  },
  mounted() {
    psDetail().then(res => {
      this.detail = res.data.data;
      this.radio = String(res.data.data.gender)
      if (res.data.data.head_img) {
        this.imgSrc = "http://127.0.0.1:3000" + res.data.data.head_img;
      } else {
        this.imgSrc = "../../static/2.jpg";
      }
    });
  }
};
</script>

<style lang='less' scoped>
.container {
  .img {
    text-align: center;
    margin: 20px 0;
    margin-left: 16/360 * 100vw;
    position: relative;
    img {
      width: 80/360 * 100vw;
      height: 80/360 * 100vw;
      border-radius: 50%;
      position: absolute;
    }
  }
}
/deep/ .van-uploader {
  opacity: 0;
}
</style>