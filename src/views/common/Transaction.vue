<template>
    <div class="transaction clearfix">
        <div class="trans-content">
            <div class="trans-data pull-left text-left">
                <span>平台累计成交金额</span>
                <span class="trans-money">8888</span>
                <span>万元</span>
            </div>
            <div class="trans-data pull-left text-left">
                <span>过去7日成交金额</span>
                <span class="trans-money">18888</span>
                <span>万元</span>
            </div>
            <div class="trans-report pull-right">
                <a href="#" @click.prevent="viewOperationReportHandler">查看平台运营报告</a>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
</style>
<script>
export default {
  methods: {
    viewOperationReportHandler: function() {
      this.$message({
        message: '操作成功',
        type: 'success'
      });
    }
  }
};
</script>
