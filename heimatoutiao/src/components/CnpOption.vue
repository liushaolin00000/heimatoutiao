<template>
   <div class="container">
       <div>{{left}}</div>
       <div class="right">{{right}}<i class="iconfont icon-youjiantou"></i></div>
   </div>
</template>

<script>
export default {
  props:['left','right']
}
</script>

<style lang='less' scoped>
    .container{
        display: flex;
        padding: 20/360*100vw;
        justify-content: space-between;
        border-bottom: 1px #E4E4E4 solid;
        .right{
            color: rgba(148, 148, 148, 0.866666666666667);
            i{
                padding-left:6/360*100vw;
            }
        }
    }
</style>