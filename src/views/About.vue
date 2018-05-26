<template>
     <el-dialog title="关于本站" :visible.sync="dialogAboutVisible" @close="$emit('close-about')">
        <el-card shadow="hover">
            本站不是最便宜的，但售后是最好的！！！
        </el-card>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('close-about')">关 闭</el-button>
        </div>
    </el-dialog>
</template>
<style lang="less" scoped>
</style>
<script>
export default {
  props: ['dialogAboutVisibleProp'],
  watch: {
    dialogAboutVisibleProp: function() {
      this.dialogAboutVisible = this.dialogAboutVisibleProp;
    }
  },
  data: function() {
    return {
      dialogAboutVisible: this.dialogAboutVisibleProp
    };
  }
};
</script>
