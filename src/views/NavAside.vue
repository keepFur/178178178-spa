<template>
    <el-menu :default-active="pagekey" @select="menuSelectHandler">
        <!-- <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-upload"></i>
                <span>全国空包专区</span>
            </template>
            <el-menu-item index="from_address_manage"><router-link tag="li" to="/admin/address/from_address_manage" exact="exact">添加/管理发货地</router-link></el-menu-item>
            <el-menu-item index="tbKB"><router-link tag="li" to="/admin/kb_buy/tbKB">淘宝下单</router-link></el-menu-item>
            <el-menu-item index="jdKB"><router-link tag="li" to="/admin/kb_buy/jdKB">京东下单</router-link></el-menu-item>
            <el-menu-item index="pddKB"><router-link tag="li" to="/admin/kb_buy/pddKB">拼多多下单</router-link></el-menu-item>
            <el-menu-item index="excelKB"><router-link tag="li" to="/admin/kb_buy/excelKB">Excel表格下单</router-link></el-menu-item>
            <el-menu-item index="ytKB"><router-link tag="li" to="/admin/kb_buy/ytKB">圆通-韵达（推荐）</router-link></el-menu-item>
            <el-menu-item index="kb_order_manage"><router-link tag="li" to="/admin/order/kb_order_manage" exact="exact">订单管理</router-link></el-menu-item>
        </el-submenu> -->
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-phone-outline"></i>
                <span>无线流量专区</span>
            </template>
            <el-menu-item index="bbTask"><router-link tag="li" to="/admin/task_buy/bbTask" exact="exact">宝贝任务</router-link></el-menu-item>
            <el-menu-item index="dpTask"><router-link tag="li" to="/admin/task_buy/dpTask" exact="exact">店铺任务</router-link></el-menu-item>
            <el-menu-item index="jdTask"><router-link tag="li" to="/admin/task_buy/jdTask" exact="exact">京东任务</router-link></el-menu-item>
            <el-menu-item index="task_order_manage"><router-link tag="li" to="/admin/order/task_order_manage" exact="exact">订单管理</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span>账号设置</span>
            </template>
            <el-menu-item index="update_password"><router-link tag="li" to="/admin/account_set/update_password" exact="exact">修改密码</router-link></el-menu-item>
            <el-menu-item index="vip_up"><router-link tag="li" to="/admin/account_set/vip_up" exact="exact">会员升级</router-link></el-menu-item>
            <el-menu-item index="update_info"><router-link tag="li" to="/admin/account_set/update_info" exact="exact">修改资料</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>财务管理</span>
            </template>
            <el-menu-item index="inline_pay"><router-link tag="li" to="/admin/money_manage/inline_pay" exact="exact">在线支付</router-link></el-menu-item>
            <el-menu-item index="money_detail"><router-link tag="li" to="/admin/money_manage/money_detail" exact="exact">资金明细</router-link></el-menu-item>
            <el-menu-item index="out_recored"><router-link tag="li" to="/admin/money_manage/out_recored" exact="exact">提现记录</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>其他服务</span>
            </template>
            <el-menu-item index="commit_order"><router-link tag="li" to="/admin/other_service/commit_order" exact="exact">提交工单</router-link></el-menu-item>
            <el-menu-item index="my_order"><router-link tag="li" to="/admin/other_service/my_order" exact="exact">我的工单</router-link></el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<style lang="less" scoped>
</style>
<script>
export default {
  data: function() {
    return {
      pagekey: this.$route.params.pagekey || 'tbKB'
    };
  },
  methods: {
    menuSelectHandler: function() {}
  }
};
</script>
