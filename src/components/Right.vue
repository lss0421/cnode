<template>
  <div>
    <div class="first-box">
  <div v-if="username==='null'">
      <p class="fir-fir">CNode：Node.js专业中文社区</p>
      <p class="fir-fir">您可以 登录 或 注册 , 也可以</p>
      <el-button type="primary" class="fir-fir" @click="login">登陆</el-button>
</div>

<div v-else>

  <p class="fir-fir">{{username}}您好,欢迎您登陆成功！</p>
      <div class="fir-fir" v-text="value"></div>
      <el-button type="primary" class="fir-fir" @click="liuyan">留言</el-button>
      <el-button type="primary" class="fir-fir" @click="del">退出</el-button>

 </div>
    </div>
    <div class="second-box">
      <img src="../assets/tu1.png" alt />
      <img src="../assets/tu2.jpg" alt /> 
      <img src="../assets/tu3.jpg" alt />
    </div>
    <div class="third-box">
      <el-card>
        <div slot="header" class="clearfix">
          <span>无人回复的话题</span>
        </div>
        <a alt="我招了个程序员：他什么都好，就是不太会写程序">我招了个程序员：他什么都好，就是不太...</a>
        <a alt="CabloyJS V3.2.0支持Socket IO">CabloyJS V3.2.0支持Socket IO</a>
        <a alt="从零到部署：用 Vue 和 Express 实现迷你全栈电商应用（四)">从零到部署：用 Vue 和 Express 实现迷你...</a>
        <a alt="Linux 主机在线文件管理工具">Linux 主机在线文件管理工具</a>
        <a alt="nodejs 的反序列化存在漏洞么">nodejs 的反序列化存在漏洞么</a>
      </el-card>
    </div>
    <div class="fourth-box">
      <el-card>
        <div slot="header" class="clearfix">
          <span>积分榜 TOP 100 >></span>
        </div>
        <div id="shuju">
          22250
          <span>i5ting</span>
        </div>
        <div id="shuju">
          15810
          <span>alsotang</span>
        </div>
        <div id="shuju">
          9695
          <span>atian25</span>
        </div>
        <div id="shuju">
          9350
          <span>leapon</span>
        </div>
        <div id="shuju">
          8780
          <span>jiyinyiyong</span>
        </div>
        <div id="shuju">
          7480
          <span>yakczh</span>
        </div>
        <div id="shuju">
          6855
          <span>im-here</span>
        </div>
        <div id="shuju">
          6115
          <span>DevinXian</span>
        </div>
        <div id="shuju">
          5815
          <span>chapgaga</span>
        </div>
        <div id="shuju">
          5370
          <span>magicdawn</span>
        </div>
      </el-card>
    </div>
    <div class="fivth-box">
    <div class=" fiv-fir"><span class="shequ">友情社区</span></div>
    <div class="fiv-sec">
    <img src="../assets/tu4.png" alt="" class="tubiao">
    <img src="../assets/tu5.png" alt="" class="tubiao">
    {{username}}
    </div>
    
    
    </div>
    <div class="sixth-box">
      <div class="fiv-fir"><span class="shequ">客户二维码</span></div>
    <div class="erweima"></div>
    <div class="kehu">客户源码地址</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    username: {
      type: String,
      default:''
    }
  },
  components: {},
  data() {
    return {
      username: '',
      value:'这个人很懒，什么都没留下'
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
del(){
 this.$router.replace("/login");
},

liuyan(){
let words=prompt('请输入您的留言');
this.value=words

}

  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>


<style scoped lang='scss'>

.kehu {
    font-size: 14px;
    margin-left: 105px;
}
.erweima {
    width: 220px;
    height: 220px;
    background-image: url(../assets/erweima.png);
    margin-left: 40px;
}

.tubiao {
width: 160px;
height: 65px;
}

.shequ {
    line-height: 40px;
    margin-left: 20px;
}


.fiv-sec {
    width: 300px;
    height: 140px;
    margin-bottom: 0;
}


.fiv-fir {
    width: 300px;
    height: 40px;
    background-color:#F6F6F6 ;
    margin-left: 0;
}

#shuju {
    height: 25px;
    line-height: 25px;
    
}
span {
  margin-left: 10px;
}

a:hover {
  cursor: pointer;
}
a {
    line-height: 25px;
  font-size: 14px;
  width: 300px;
  margin-top: 15px;
  display: block;
}
.fir-fir {
  margin-top: 15px;
  margin-left: 20px;
}

.first-box {
  width: 300px;
  height: 120px;

  margin-top: 15px;
  margin-left: 1175px;
  background-color: white;
}
.second-box {
  width: 300px;
  height: 295px;
  margin-top: 15px;
  margin-left: 1175px;
  background-color: white;
}
.third-box {
  width: 300px;
  height: 290px;

  margin-top: 15px;
  margin-left: 1175px;
  background-color: white;
}
.fourth-box {
  width: 300px;
  height: 350px;

  margin-top: 15px;
  margin-left: 1175px;
  background-color: white;
}
.fivth-box {
  width: 300px;
  height: 180px;

  margin-top: 15px;
  margin-left: 1175px;
  background-color: white;
}
.sixth-box {
  width: 300px;
  height: 300px;

  margin-top: 15px;
  margin-left: 1175px;
  background-color: white;
}

img {
  width: 290px;
  height: 90px;
  margin-top: 3px;
  margin-left: 5px;
}
</style>