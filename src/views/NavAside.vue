<template>
    <el-col :span="3">
        <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 14px;" class="text-center">
                <p>亲爱的「aaa」</p>
                <p>欢迎来到178科技网</p>
                <p>当前账户余额：100元</p>
            </div>
        </el-card>
        <el-menu :default-active="pagekey" @select="menuSelectHandler">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-upload"></i>
                    <span>全国空包专区</span>
                </template>
                <el-menu-item index="from_address_manage"><router-link tag="li" to="/vip_center/address/from_address_manage" exact="exact">添加/管理发货地</router-link></el-menu-item>
                <el-menu-item index="tbKB"><router-link tag="li" to="/vip_center/kb_buy/tbKB">淘宝下单</router-link></el-menu-item>
                <el-menu-item index="jdKB"><router-link tag="li" to="/vip_center/kb_buy/jdKB">京东下单</router-link></el-menu-item>
                <el-menu-item index="pddKB"><router-link tag="li" to="/vip_center/kb_buy/pddKB">拼多多下单</router-link></el-menu-item>
                <el-menu-item index="excelKB"><router-link tag="li" to="/vip_center/kb_buy/excelKB">Excel表格下单</router-link></el-menu-item>
                <el-menu-item index="ytKB"><router-link tag="li" to="/vip_center/kb_buy/ytKB">圆通-韵达（推荐）</router-link></el-menu-item>
                <el-menu-item index="kb_order_manage"><router-link tag="li" to="/vip_center/order/kb_order_manage" exact="exact">订单管理</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-phone-outline"></i>
                    <span>无线流量专区</span>
                </template>
                <el-menu-item index="bbTask"><router-link tag="li" to="/vip_center/task_buy/bbTask" exact="exact">宝贝任务</router-link></el-menu-item>
                <el-menu-item index="dpTask"><router-link tag="li" to="/vip_center/task_buy/dpTask" exact="exact">店铺任务</router-link></el-menu-item>
                <el-menu-item index="jdTask"><router-link tag="li" to="/vip_center/task_buy/jdTask" exact="exact">京东任务</router-link></el-menu-item>
                <el-menu-item index="task_order_manage"><router-link tag="li" to="/vip_center/order/task_order_manage" exact="exact">订单管理</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>账号设置</span>
                </template>
                <el-menu-item index="3-1">修改密码</el-menu-item>
                <el-menu-item index="3-2">会员升级</el-menu-item>
                <el-menu-item index="3-3">修改资料</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-tickets"></i>
                    <span>财务管理</span>
                </template>
                <el-menu-item index="4-1">在线支付</el-menu-item>
                <el-menu-item index="4-2">资金明细</el-menu-item>
                <el-menu-item index="4-3">提现记录</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-col>
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
