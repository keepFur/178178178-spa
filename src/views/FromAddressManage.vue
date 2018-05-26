<template>
    <div>
        <el-col :span="14" :offset="1" style="padding:24px;">
            <el-table :data="addressData" style="width: 100%">
                <el-table-column prop="fromName" label="发件人姓名" width="180">
                </el-table-column>
                <el-table-column prop="fromPhone" label="发货人电话" width="180">
                </el-table-column>
                <el-table-column prop="fromAddress" label="收件人所在区域">
                </el-table-column>
                <el-table-column prop="fromDetailAddress" label="收件人详细地址">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="editAddreassHandler(scope.row)">编辑</el-button>
                        <el-button @click="deleteAddressHandler(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
        <el-col :span="5"  style="padding:24px;">
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix text-center">
                    <span style="color:#f90;">注意事项</span>
                </div>
                <div class="text item">
                    1， 请正确的填写发货信息,因为发货信息错误而导致物流对不上,不负责
                </div>
                <div class="text item">
                    2，如出现缺少地区，请及时联系客服添加
                </div>
                <div style="padding: 14px;">
                    <div class="bottom clearfix">
                        <el-button type="primary" @click="addAddressHandler">立即添加</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
        <!-- 添加发件人地址弹出框 -->
        <el-dialog title="添加发件人地址" :visible.sync="dialogAddAddressVisible" width="30%" label-position="top">
            <el-form :model="addAddressForm" ref="addAddressFormEle" :rules="addAddressFormRules" status-icon>
                <el-form-item label="发件人姓名" prop="fromName">
                    <el-input v-model="addAddressForm.fromName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="发件人电话" prop="fromPhone">
                    <el-input v-model="addAddressForm.fromPhone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="所在区域" prop="fromAddress">
                    <el-cascader :options="fromAddressInfo" style="width:100%;" size="small" expand-trigger="hover" v-model="addAddressForm.fromAddress">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="详细地址" prop="fromDetailAddress">
                    <el-input v-model="addAddressForm.fromDetailAddress" auto-complete="off" placeholder="非必填"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogAddAddressVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmAddFromAddressHandler('addAddressFormEle')">确 定</el-button>
            </div>
        </el-dialog>
         <!-- 编辑发件人信息 -->
        <el-dialog title="编辑发件人地址" :visible.sync="dialogEditAddressVisible" width="30%" label-position="top">
            <el-form :model="editAddressForm" ref="editAddressFormEle" :rules="addAddressFormRules" status-icon>
                <el-form-item label="发件人姓名" prop="fromName">
                    <el-input v-model="editAddressForm.fromName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="发件人电话" prop="fromPhone">
                    <el-input v-model="editAddressForm.fromPhone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="所在区域" prop="fromAddress">
                    <el-cascader :options="fromAddressInfo" separator="-" style="width:100%;" size="small" expand-trigger="hover" v-model="editAddressForm.fromAddress">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="详细地址" prop="fromDetailAddress">
                    <el-input v-model="editAddressForm.fromDetailAddress" auto-complete="off" placeholder="非必填"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogEditAddressVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmAddFromEditressHandler('editAddressFormEle')">确 定</el-button>
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
      // 添加
      dialogAddAddressVisible: false,
      // 编辑
      dialogEditAddressVisible: false,
      // 添加地址表单
      addAddressForm: {
        fromName: '',
        fromAddress: [],
        fromPhone: '',
        fromDetailAddress: ''
      },
      // 编辑收件人信息
      editAddressForm: {
        index: 0,
        fromName: '',
        fromAddress: [],
        fromPhone: '',
        fromDetailAddress: ''
      },
      // 添加地址表单验证规则
      addAddressFormRules: {
        fromName: [
          {
            required: true,
            message: '请填写发件人名字'
          }
        ],
        fromAddress: [
          {
            required: true,
            message: '请选择发件地址'
          }
        ],
        fromPhone: [
          {
            required: true,
            message: '请填写发件人电话'
          }
        ]
      },
      // 省份信息
      fromAddressInfo: [
        {
          value: '江苏省',
          label: '江苏省',
          children: [
            {
              value: '南京市',
              label: '南京市',
              children: [
                {
                  value: '江陵区',
                  label: '江陵区'
                }
              ]
            }
          ]
        },
        {
          value: '浙江省',
          label: '浙江省',
          children: [
            {
              value: '杭州市',
              label: '杭州市',
              children: [
                {
                  value: '西湖区',
                  label: '西湖区'
                }
              ]
            }
          ]
        }
      ],
      //  地址数据
      addressData: [
        {
          index: 0,
          fromName: '王小虎',
          fromPhone: '17770534313',
          fromAddress: ['江苏省', '南京市', '江陵区'],
          fromDetailAddress: '金沙江路 1518 弄'
        },
        {
          index: 1,
          fromName: '白小虎',
          fromPhone: '17770534313',
          fromAddress: ['浙江省', '杭州市', '西湖区'],
          fromDetailAddress: '金沙江路 1518 弄'
        }
      ]
    };
  },
  methods: {
    // 删除地址
    deleteAddressHandler: function(row) {
      this.$confirm('此操作将永久删除该地址, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.addressData.splice(row.index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    // 编辑地址
    editAddreassHandler: function(row) {
      this.dialogEditAddressVisible = true;
      this.editAddressForm = row;
    },
    // 添加地址
    addAddressHandler: function() {
      this.dialogAddAddressVisible = true;
    },
    // 确认添加
    confirmAddFromAddressHandler: function(formName) {
      this.$refs[formName].validate((valid, fildes) => {
        if (valid) {
          this.$message({
            message: '添加成功',
            type: 'success'
          });
          this.dialogAddAddressVisible = false;
          this.addressData.push(this.addAddressForm);
        } else {
          return false;
        }
      });
    }
  }
};
</script>
