<template>
    <div>
        <el-col :span="17" :offset="2">
            <h3>密码修改</h3>
            <el-form :model="updatepasswordForm" ref="updateParrwordFormEle" :rules="updatepasswordFormRules" status-icon>
                <el-form-item label="原密码" prop="oldpassword">
                    <el-input v-model="updatepasswordForm.oldpassword" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newpassword">
                    <el-input v-model="updatepasswordForm.newpassword" auto-complete="off" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="confirmUpdateHandler('updateParrwordFormEle')">确 定</el-button>
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
      updatepasswordForm: {
        oldpassword: '',
        newpassword: ''
      },
      // 校验规则
      updatepasswordFormRules: {
        oldpassword: [
          {
            required: true,
            message: '请输入原密码',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ],
        newpassword: [
          {
            required: true,
            message: '请输入新密码',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    // 确认修改
    confirmUpdateHandler: function(formName) {
      this.$refs[formName].validate((valid, fildes) => {
        if (valid) {
          this.$message({
            message: '操作成功',
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
