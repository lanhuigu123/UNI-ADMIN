<template>
  <div class="content">
    <div class="formBox">
      <h2>UNI-ADMIN</h2>
      <div class="form">
        <el-form :model="formLabelAlign" :rules="rules" ref="formRef">
          <el-form-item prop="username">
            <el-input v-model="formLabelAlign.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="formLabelAlign.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item style="width: 100%">
            <el-button @click="handleLogin">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { loginApi } from "@/api/api"
export default {
  name: "loginView",
  components: {},
  data() {
    return {
      formLabelAlign: {
        username: "admin",
        password: "admin"
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleLogin() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          // alert("submit!")
          loginApi({
            ...this.formLabelAlign
          }).then((res) => {
            console.log(res)
            sessionStorage.setItem("token", res.data.token)
            this.$message.success("登陆成功")
            this.$router.push("/")
          })
        } else {
          console.log("error submit!!")
          return false
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  h2 {
    line-height: 60px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    color: #6c757d;
  }
  .formBox {
    width: 500px;
    height: 280px;
    border: 1px solid #ccc;
    margin: 100px auto;
    border-radius: 5px;

    .form {
      padding: 20px;
    }
  }
}
.el-button {
  width: 100%;
  background-color: #008080;
  color: #fff;
}
.el-input__inner {
  padding-left: 10px;
}
</style>
