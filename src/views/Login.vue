<template>
    <div>
        <el-dialog title="用户登录" :visible.sync="dialogLoginVisible" width="30%" @close="$emit('cancel-login')">
            <el-form :model="loginForm" ref="loginFormEle" :rules="loginFormRules" status-icon>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" auto-complete="off" type="password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="$emit('cancel-login')">取 消</el-button>
                <el-button type="primary" @click="confirmLoginHandler('loginFormEle')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style lang="less" scoped>
</style>
<script>
export default {
  props: ['dialogLoginVisibleProp'],
  watch: {
    dialogLoginVisibleProp: function() {
      this.dialogLoginVisible = this.dialogLoginVisibleProp;
    }
  },
  data: function() {
    return {
      dialogLoginVisible: this.dialogLoginVisibleProp,
      loginForm: {
        username: '',
        password: ''
      },
      // 校验规则
      loginFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
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
    // 确认登录
    confirmLoginHandler: function(formName) {
      this.$refs[formName].validate((valid, fildes) => {
        if (valid) {
          this.$message({
            message: '登录成功',
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
