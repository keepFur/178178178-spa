<template>
    <div class="container">
      <header-self></header-self>
      <!-- 交易信息 -->
      <!-- <transaction></transaction> -->
      <!-- 广告轮播图 -->
      <ad></ad>
      <!-- 网站功能介绍 -->
      <feature></feature>
      <!-- 网站公告 -->
      <notice></notice>
      <products></products>
      <!-- <router-view></router-view> -->
      <!-- 底部导航 -->
      <nav-footer></nav-footer>
      <footer-self></footer-self>
    </div>
</template>
<style lang="less" scoped>
.container {
  margin-top: 5.5rem;
}
</style>
<script>
import HeaderSelf from './common/HeaderSelf';
import Transaction from './common/Transaction';
import Ad from './Ad';
import Feature from './common/Feature';
import Notice from './common/Notice';
import ProductKb from './ProductKb';
import Products from './Products';
import ProductTask from './ProductTask';
import NavFooter from './common/NavFooter';
import FooterSelf from './common/FooterSelf';
export default {
  components: {
    HeaderSelf,
    Transaction,
    Ad,
    Feature,
    Notice,
    ProductTask,
    ProductKb,
    Products,
    NavFooter,
    FooterSelf
  }
};
</script>
