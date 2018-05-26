<template>
    <el-dialog title="免费注册" :visible.sync="dialogRegisterVisible" width="30%" @close="$emit('cancel-register')">
        <el-form :model="registerForm" ref="registerFormEle" :rules="registerFormRules" status-icon>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="registerForm.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="registerForm.password" auto-complete="off" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
                <el-input v-model="registerForm.confirmPassword" auto-complete="off" type="password"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('cancel-register')">取 消</el-button>
            <el-button type="primary" @click="confirmRegisterHandler('registerFormEle')">确 定</el-button>
        </div>
    </el-dialog>
</template>
<style lang="less" scoped>
</style>
<script>
// 校验注册的时候两次密码是否一致， 此处必须要使用箭头函数，不然的话，this不会指向当前的vue实例
let confirmPasswordValidator = (rule, value, callback) => {
  if (value !== this.registerForm.password) {
    callback(new Error('两次输入密码不一致'));
  } else {
    callback();
  }
};
export default {
  methods: {
    // 取消注册
    cancelHandler: function() {},
    // 确认注册
    confirmRegisterHandler: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '注册成功',
            type: 'success'
          });
        } else {
          return false;
        }
      });
    }
  },
  props: ['dialogRegisterVisibleProp'],
  watch: {
    dialogRegisterVisibleProp: function() {
      this.dialogRegisterVisible = this.dialogRegisterVisibleProp;
    }
  },
  data: function() {
    return {
      dialogRegisterVisible: this.dialogRegisterVisibleProp,
      registerForm: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      // 注册表单校验规则
      registerFormRules: {
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
        ],
        confirmPassword: [
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
          },
          {
            validator: confirmPasswordValidator
          }
        ]
      }
    };
  }
};
</script>
