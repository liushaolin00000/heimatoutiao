<template>
   <div>
       <i class="iconfont icon-zuojiantou" @click="handleback"></i>
       <span>{{title}}</span>
   </div>
</template>

<script>
export default {
    props:['title'],
    methods:{
        handleback(){
            this.$emit('clicks')
        }
    }
}
</script>

<style lang="less" scoped>
   div{
     display: flex;
    padding: 20/360*100vw;
    vertical-align:bottom;
    span{
        flex:1;
        text-align: center;
        font-weight:700;
    }
   }
</style>