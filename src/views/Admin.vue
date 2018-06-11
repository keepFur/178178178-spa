<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
        </el-header>
        <el-container style="margin-top:60px;height:100%;">
            <el-aside width="200px">
                <nav-aside></nav-aside>
            </el-aside>
            <el-main style="padding:0">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<style lang="less" scoped>
.el-header {
  background-color: #2196f3;
  color: #fff;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>
<script>
import NavAside from './NavAside';
export default {
  components: {
    NavAside
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>
