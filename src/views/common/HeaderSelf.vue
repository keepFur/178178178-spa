<template>
    <header>
        <nav class="top">
            <span class="tel pull-left">
                <i class="el-icon-time"></i>
                <span>{{nowDate}}</span>
            </span>
            <ul class="text-right">
                <li>
                    <a href="#" @click="dialogLoginVisible=true">登录</a>
                </li>
                <li>
                    <a href="#" @click="dialogRegisterVisible=true">免费注册</a>
                </li>
                <li>
                    <a href="#" @click="dialogAboutVisible=true">关于</a>
                </li>
                <li>
                    <a href="#" @click="dialogHelpVisible=true">帮助</a>
                </li>
                <li>
                    <a href="#" title="保存之后，妈妈再也不用担心我找不到网址了！" @click="saveDeskHandler">保存到桌面</a>
                </li>
            </ul>
        </nav>
        <nav class="main">
            <!-- 此处两种方式  一个是使用直接潜入到结构中，还有一种是背景图片，一般logo的话 是使用img标签 -->
            <a href="#" class="brand pull-left">
                <img src="../../asserts/imgs/logo@1x.png" alt="回到首页">
            </a>
            <ul class="text-right">
                <li>
                    <router-link to="/products">首页</router-link>
                </li>
                <li>
                    <router-link to="/vip_center/kb_buy/tbKB">会员中心</router-link>
                </li>
                <li>
                    <a href="#worldKB">全国空包</a>
                </li>
                <li>
                    <a href="#mobileCollege">无线流量</a>
                </li>
                <li>
                    <a href="#mobileCollege">宝贝收藏</a>
                </li>
                <li>
                    <a href="#" @click.prevent="dialogHelpVisible=true">联系客服</a>
                </li>
            </ul>
        </nav>
        <!-- 登录 -->
        <login :dialog-login-visible-prop="dialogLoginVisible" @cancel-login="dialogLoginVisible=false"></login>
        <!-- 注册 -->
        <register :dialog-register-visible-prop="dialogRegisterVisible" @cancel-register="dialogRegisterVisible=false"></register>
        <!-- 关于本站 -->
        <about :dialog-about-visible-prop="dialogAboutVisible" @close-about="dialogAboutVisible=false"></about>
        <!-- 帮助 -->
        <help :dialog-help-visible-prop="dialogHelpVisible" @close-help="dialogHelpVisible=false"></help>
    </header>
</template>
<style lang="less" scoped>
</style>
<script>
import Login from '../Login';
import Register from '../Register';
import About from '../About';
import Help from '../Help';
export default {
  components: {
    Login,
    Register,
    About,
    Help
  },
  data: function() {
    return {
      // 登录
      dialogLoginVisible: false,
      // 注册
      dialogRegisterVisible: false,
      // 关于
      dialogAboutVisible: false,
      // 帮助
      dialogHelpVisible: false,
      // 当前时间
      nowDate: new Date()
    };
  },
  methods: {
    // 保存到桌面
    saveDeskHandler: function() {
      this.$message({
        message: '保存成功',
        type: 'success'
      });
    },
    // 会员中心
    vipCenterHandler: function() {}
  }
};
</script>
