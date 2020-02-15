<template>
  <div class="container">
    <input type="text" :placeholder="placeholder" 
    @input="hanldeInput"
     :class="{'success':state===true,'error':state===false}"
     @blur="handleblur"/>
  </div>
</template>

<script>
export default {
 props:['placeholder','rule','errms'],
 data(){
   return{
      state:{}
   }
 },
 methods:{
     hanldeInput(e){
      this.$emit('inputs',e.target.value)
     const res = this.rule.test(e.target.value)
      this.state = res
 },
 handleblur(){
   if(!this.state){
      this.$toast.fail(this.errms)
   }
 }
}
}
</script>

<style scoped lang="less">
.container {
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #929292;
    padding: 10px 0;
    font-size: 18/360 * 100vw;
    margin-top: 10px;
    background-color: #f2f2f2;
  }
  .error{
    border-bottom:1px solid red;
  }
  .success{
    border-bottom:1px solid green;
  }
}
</style>