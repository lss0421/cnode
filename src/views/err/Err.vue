<template>
 <div>
 
<h1>Sorry,Err！！！</h1>
 <el-button type="primary" plain @click="back">返回首页</el-button>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
back(){
    this.$router.replace('/')
}
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

h1 {
font-weight: 700;
font-size: 50px;

}
</style>