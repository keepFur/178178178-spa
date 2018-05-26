<template>
    <section class="product clearfix">
         <el-row>
            <nav-aside></nav-aside>
            <router-view></router-view>
        </el-row>
    </section>
</template>
<style lang="less" scoped>
</style>
<script>
import NavAside from './NavAside';
export default {
  components: {
    NavAside
  }
};
</script>
