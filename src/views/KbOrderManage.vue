<template>
    <div>
        <el-col :span="19" :offset="1" style="padding:24px;">
            <el-table :data="orderData" style="width: 100%">
                <el-table-column prop="plant" label="电商平台" width="150">
                </el-table-column>
                <el-table-column prop="kdCompany" label="快递公司" width="150">
                </el-table-column>
                <el-table-column prop="kdOrder" label="物流单号" width="150">
                </el-table-column>
                <el-table-column prop="fromAddress" label="发件人地址" >
                </el-table-column>
                <el-table-column prop="toName" label="收件人姓名" width="150">
                </el-table-column>
                <el-table-column prop="toAddress" label="收件人地址">
                </el-table-column>
                <el-table-column prop="orderDate" label="下单时间">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="editOrderHandler(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
        <!-- 修改订单信息弹出框 -->
        <el-dialog title="修改订单信息" :visible.sync="dialogEditOrderVisible">
            <el-form :model="editOrderForm" ref="editOrderFormEle" :rules="editOrderFormRules" status-icon>
                <el-form-item label="发件人姓名" prop="fromName">
                    <el-input v-model="editOrderForm.fromName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="发件人电话" prop="fromPhone">
                    <el-input v-model="editOrderForm.fromPhone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="发件人所在区域" prop="fromAddress">
                    <el-cascader :options="fromAddressInfo" style="width:100%;" size="small" expand-trigger="hover" v-model="editOrderForm.fromAddress">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="发件人详细地址" prop="fromDetailAddress">
                    <el-input v-model="editOrderForm.fromDetailAddress" auto-complete="off" placeholder="非必填"></el-input>
                </el-form-item>
                <br>
                <el-form-item label="收件人姓名" prop="toName">
                    <el-input v-model="editOrderForm.toName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="收件人电话" prop="toPhone">
                    <el-input v-model="editOrderForm.toPhone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="收件人所在区域" prop="toAddress">
                    <el-cascader :options="fromAddressInfo" style="width:100%;" size="small" expand-trigger="hover" v-model="editOrderForm.toAddress">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="收件人详细地址" prop="toDetailAddress">
                    <el-input v-model="editOrderForm.toDetailAddress" auto-complete="off" placeholder="非必填"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogEditOrderVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmAddFromAddressHandler('editOrderFormEle')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style lang="less" scoped>
</style>
<script>
export default {
  data: function() {
    return {
      dialogEditOrderVisible: false,
      orderData: [
        {
          plant: '京东',
          kdCompany: '圆通快递',
          kdOrder: '123456789',
          fromAddress: '广东省 广州市 白云区',
          toName: '李伟',
          toAddress: '广东省 深圳市 罗湖区',
          orderDate: '2018-5-26'
        },
        {
          plant: '淘宝',
          kdCompany: '国通快递',
          kdOrder: '123456789789',
          fromAddress: '广东省 广州市 白云区',
          toName: '李伟',
          toAddress: '广东省 深圳市 罗湖区',
          orderDate: '2018-4-26'
        }
      ],
      fromAddressInfo: [],
      editOrderForm: {
        fromName: '',
        fromPhone: '',
        fromAddress: '',
        fromDetailAddress: '',
        toName: '',
        toPhone: '',
        toAddress: '',
        toDetailAddress: ''
      },
      editOrderFormRules: {}
    };
  },
  methods: {
    editOrderHandler: function(row) {
      this.dialogEditOrderVisible = true;
      this.editOrderForm = row;
    }
  }
};
</script>
