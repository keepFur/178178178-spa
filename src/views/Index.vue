<template>
    <div class="container">
        <!-- 交易信息 -->
         <transaction></transaction>
        <!-- 广告轮播图 -->
        <ad></ad>
        <!-- 网站功能介绍 -->
        <feature></feature>
        <!-- 网站公告 -->
        <notice></notice>
        <!-- 无线流量任务 -->
        <product-task></product-task>
        <!--  空包 -->
        <product-kb></product-kb>
        <!-- 底部导航 -->
        <nav-footer></nav-footer>
    </div>
</template>
<style lang="less" scoped>
</style>
<script>
import Transaction from './common/Transaction';
import Ad from './Ad';
import Feature from './common/Feature';
import Notice from './common/Notice';
import ProductKb from './ProductKb';
import ProductTask from './ProductTask';
import NavFooter from './common/NavFooter';
export default {
  components: {
    Transaction,
    Ad,
    Feature,
    Notice,
    ProductTask,
    ProductKb,
    NavFooter
  }
};
</script>
