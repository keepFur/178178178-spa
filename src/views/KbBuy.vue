
<template>
    <div>
        <el-col :span="12" :offset="2">
            <el-form ref="kb-buy-form-ele" :model="kbBuyForm" style="padding:24px;" :rules="kbBuyFormRules" label-position="top" size="small"
                status-icon @submit.native.prevent>
                <h3>「{{plantformMap[$route.params.pagekey]}}」空包下单</h3>
                <el-form-item label="选择快递" prop="kdType">
                    <el-select v-model="kbBuyForm.kdType" placeholder="请选择快递公司" style="width:100%;">
                        <el-option v-for="(tb,index) in kdTypeKB" :label="tb.name" :value="tb.id" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="发货地址" prop="toAddress">
                    <el-select v-model="kbBuyForm.toAddress" placeholder="请选择发货地址" style="width:100%;">
                        <el-option label="发货地址1" value="shanghai"></el-option>
                        <el-option label="发货地址2" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="包裹重量（kg）" prop="packageWeight">
                    <el-input type="age" v-model.number="kbBuyForm.packageWeight" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="收件人信息" prop="toUserInfo">
                    <el-input type="textarea" rows="10" placeholder="例子：张三，13688888888 ，广东省 深圳市 罗湖区 深南大道102号，518000" v-model="kbBuyForm.toUserInfo"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button>检查格式是否正确</el-button>
                    <el-button type="primary" @click="onSubmitHandler">立即下单</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="5" style="padding:24px;">
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix text-center">
                    <span style="color:#f90;">快递信息预览「{{kdTypeKB[kbBuyForm.kdType].alias}}」</span>
                </div>
                <div class="text item">
                    普通会员：{{kdTypeKB[kbBuyForm.kdType].price.ptvip}} 元/单
                </div>
                <div class="text item">
                    vip会员：{{kdTypeKB[kbBuyForm.kdType].price.vip}} 元/单
                </div>
                <div class="text item">
                    金牌代理商：{{kdTypeKB[kbBuyForm.kdType].price.jpvip}} 元/单
                </div>
                <div class="text item">
                    有无底单：有
                </div>
                <div class="text item">
                    申请底单：12小时内
                </div>
                <div class="text item">
                    底单收费：免费 + 内网
                </div>
                <div class="text item">
                    签收时间：2 - 3 天
                </div>
                <div class="text item">
                    物流显示时间：21点前下单，次日中午之前显示 {{kdTypeKB[kbBuyForm.kdType].alias}}官网和淘宝都有记录，只用在淘宝，不同步{{kdTypeKB[kbBuyForm.kdType].alias}}官网
                </div>
            </el-card>
            <el-card class="box-card" shadow="hover" style="margin-top:64px;">
                <div slot="header" class="clearfix text-center">
                    <span style="color:#f90;">下单注意事项</span>
                </div>
                <div class="text item">
                    1，提交前先点击「检查格式正确按钮」检验地址是否正确
                </div>
                <div class="text item">
                    2，收件人信息栏一次最多输入「500」条信息
                </div>
                <div class="text item">
                    3，收件人信息栏的格式「姓名，手机，省（空格）市（空格）县区（空格）详细地址，邮编」，严格按照格式要求来，三个逗号，三个空格，一个都不要少，也不能多
                </div>
            </el-card>
        </el-col>
    </div>
</template>
<style lang="less" scoped>
</style>
<script>
import mockdata from '../libs/mock.js';
const kb = mockdata.kb;
export default {
  data: function() {
    return {
      kdTypeKB: kb[this.$route.params.pagekey],
      plantformMap: {
        tbKB: '淘宝',
        jdKB: '京东',
        pddKB: '拼多多',
        excelKB: 'excel下单',
        ytKB: '圆通-韵达'
      },
      kbBuyForm: {
        kdType: 0,
        toAddress: '',
        packageWeight: 1.0,
        toUserInfo: ''
      },
      kbBuyFormRules: {
        packageWeight: [
          {
            required: true,
            message: '包裹重量不能为空'
          },
          {
            type: 'number',
            message: '包裹重量只能是数字'
          }
        ],
        toUserInfo: [
          {
            required: true,
            message: '收件人信息不能为空'
          }
        ],
        kdType: [
          {
            required: true,
            message: '快递类型不能为空'
          }
        ],
        toAddress: [
          {
            required: true,
            message: '发货地址不能为空'
          }
        ]
      }
    };
  },
  methods: {
    onSubmitHandler: function() {
      this.$message({
        message: '购买成功',
        type: 'success'
      });
    }
  },
  beforeRouteUpdate: function(to, from, next) {
    this.kdTypeKB = kb[to.params.pagekey];
    // 一定要调用next
    next();
  }
};
</script>
