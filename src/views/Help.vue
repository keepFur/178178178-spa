<template>
    <el-dialog title="联系方式" :visible.sync="dialogHelpVisible" @close="$emit('close-help')">
        <el-card shadow="hover">
            QQ:838472035
        </el-card>
        <el-card shadow="hover">
            邮箱:keepFur@163.com
        </el-card>
        <el-card shadow="hover">
            服务时间:9:00-22:00
        </el-card>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('close-help')">关 闭</el-button>
        </div>
    </el-dialog>
</template>
<style lang="less" scoped>
</style>
<script>
export default {
  props: ['dialogHelpVisibleProp'],
  watch: {
    dialogHelpVisibleProp: function() {
      this.dialogHelpVisible = this.dialogHelpVisibleProp;
    }
  },
  data: function() {
    return {
      dialogHelpVisible: this.dialogHelpVisibleProp
    };
  }
};
</script>
