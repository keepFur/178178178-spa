<template>
    <header>
        <nav class="main">
            <!-- 此处两种方式  一个是使用直接潜入到结构中，还有一种是背景图片，一般logo的话 是使用img标签 -->
            <a href="#" class="brand pull-left">
                <img src="../../asserts/imgs/logo@1x.png" alt="回到首页">
            </a>
            <ul class="text-right">
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <a href="#">充值</a>
                </li>
                <li>
                    <a href="#" @click.prevent="dialogHelpVisible=true">客服</a>
                </li>
                <li>
                    <router-link to="/admin/task_buy/bbTask">控制台</router-link>
                </li>
                <li>
                    <el-button type="primary" @click.native="dialogLoginVisible=true">登录</el-button>
                    <el-button @click="dialogRegisterVisible=true">注册</el-button>
                </li>
            </ul>
        </nav>
        <!-- 登录 -->
        <el-dialog title="用户登录" :visible.sync="dialogLoginVisible" width="30%" :append-to-body="true">
            <el-form :model="loginForm" ref="loginFormEle" :rules="loginFormRules" status-icon>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" auto-complete="off" type="password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogLoginVisible=false">取 消</el-button>
                <el-button type="primary" @click="confirmLoginHandler('loginFormEle')">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 注册 -->
        <el-dialog title="用户注册" :visible.sync="dialogRegisterVisible" width="30%" :append-to-body="true">
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
                <el-button @click="dialogRegisterVisible=false">取 消</el-button>
                <el-button type="primary" @click="confirmRegisterHandler('registerFormEle')">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 帮助 -->
        <el-dialog title="联系方式" :visible.sync="dialogHelpVisible" :append-to-body="true">
            <el-card shadow="hover">
                QQ:838472035
            </el-card>
            <el-card shadow="hover">
                邮箱:keepFur@163.com
            </el-card>
            <el-card shadow="hover">
                服务时间:9:00-22:00
            </el-card>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogHelpVisible=false">关 闭</el-button>
            </div>
        </el-dialog>
    </header>
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
  data: function() {
    return {
      // 登录
      dialogLoginVisible: false,
      // 注册
      dialogRegisterVisible: false,
      // 帮助
      dialogHelpVisible: false,
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
      },
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
  },
  methods: {
    // 保存到桌面
    saveDeskHandler: function() {
      this.$message({
        message: '保存成功',
        type: 'success'
      });
    },
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
    },
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
    },
    // 会员中心
    vipCenterHandler: function() {}
  }
};
</script>
