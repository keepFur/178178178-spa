<template>
    <div class="transaction clearfix">
        <div class="trans-content">
            <div class="trans-data pull-left text-left">
                <span>平台累计成交金额</span>
                <span class="trans-money">{{totalMoney}}</span>
                <span>万元</span>
            </div>
            <div class="trans-data pull-left text-left">
                <span>过去7日成交金额</span>
                <span class="trans-money">{{lastSeneveDayMoney}}</span>
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
  data: function() {
    return {
      totalMoney: 18880,
      lastSeneveDayMoney: 2000
    };
  },
  mounted: function() {
    this.initData();
  },
  methods: {
    // 从后台取数据
    initData: function() {
        
    },
    // 查看运营报告
    viewOperationReportHandler: function() {
      this.$message({
        message: '操作成功',
        type: 'success'
      });
    }
  }
};
</script>
