<template>
    <div>
        <el-col :span="17" :offset="2">
            <h3>会员升级</h3>
            <el-form :model="upvipForm" ref="upvipFormEle" :rules="vipupFormRules" status-icon>
                <el-form-item label="当前会员等级" prop="oldvip">
                    <el-input v-model="vipupForm.oldvip" auto-complete="off" readonly></el-input>
                </el-form-item>
                <el-form-item label="升级到" prop="newvip">
                    <el-select v-model="vipupForm.newvip" placeholder="选择会员等级" style="width:100%;">
                        <el-option value="pt" label="普通会员"></el-option>
                        <el-option value="vip"  label="vip会员"></el-option>
                        <el-option value="jp"  label="金牌代理商"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="confirmVipupHandler('upvipFormEle')">确 定</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>
<style lang="less" scoped>
</style>
<script>
export default {
  data: function() {
    return {
      vipupForm: {
        oldvip: '普通会员',
        newvip: ''
      },
      vipupFormRules: {
        newvip: [
          {
            require: true,
            message: '请选择新的等级'
          }
        ]
      }
    };
  },
  methods: {
    confirmUpvipHandler: function(formName) {
      this.$refs[formName].validate((valid, fileds) => {
        if (valid) {
          this.$message({
            message: '升级成功',
            type: 'success'
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
