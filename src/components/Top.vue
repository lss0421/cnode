<template>
 <div class="head">
 <span class='el-icon-search'></span>
<input type="text" > 
<div class="nav">
<a href="#">首页</a>
<a href="#">新手入门</a>
<a href="#">API</a>
<a href="#">关于</a>
<a href="#">注册</a>
<a href="#">登陆</a>
</div>
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
.head{
    height: 50px;
    width: 100%;
     background-color: #444444;
    background-image: url(../assets/head-log.png);
    background-repeat: no-repeat;
    background-position: 80px center;

}

span{
    position: absolute;
    margin-left: 234px;
    margin-top: 18px;
}
input{
    width: 240px;
    height: 26px;
margin-left: 220px;
background-color: #888888;
border-radius: 25px;

}
.nav{
    margin-left:700px;
    display: inline-block;
}
a{
    display: inline-block;
    text-decoration: none;
    font-size: 14px;
    line-height: 50px;
    color: #CCCCCC;
    text-indent: 20px;
}

a:hover {
    color: white;
}
input:hover {
    background-color: white;
}
</style>