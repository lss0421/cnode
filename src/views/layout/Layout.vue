<template>
  <div>
    <Top></Top>
    
    <Right :username='username'></Right>
    <Buttom></Buttom>

    <router-view></router-view>
    
  </div>
</template>

<script>
import Top from "../../components/Top";

import Right from "../../components/Right";
import Buttom from "../../components/Buttom";
export default {
  name: "",
  props: {},
  components: {
    Top,
   
    Right,
    Buttom
  },
  data() {
    return {
username:''

    };
  },
  methods: {},
  mounted() {
this.username=this.$route.query.username

  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
div{
  background-color: #E1E1E1;
}
</style>