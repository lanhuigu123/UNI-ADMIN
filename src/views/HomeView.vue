<template>
  <div>
    <el-container>
      <el-header>
        <h4 class="logo">UNI-ADMIN</h4>
        <div>
          <el-menu
            router
            default-active="/index"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/index">首页</el-menu-item>
            <el-menu-item index="/shop">商品</el-menu-item>
            <el-menu-item index="/order">订单</el-menu-item>
            <el-menu-item index="/vip">会员</el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <el-avatar :size="30"> </el-avatar>
                admin</template
              >
              <el-menu-item index="2-1">修改</el-menu-item>
              <el-menu-item index="2-2">退出</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { logoutApi } from "@/api/api"
export default {
  name: "homeView",
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      console.log(this.$route)
      if (key == "2-2") {
        logoutApi()
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            this.$message({
              type: "error", // success error warning
              message: err,
              duration: 2000
            })
          })
        // sessionStorage.removeItem("token")
        // this.$message({
        //   type: "warning", // success error warning
        //   message: "退出成功",
        //   duration: 2000
        // })
        // this.$router.push("/login")
      } else {
        return false
      }
    }
  }
}
</script>
<style scoped lang="scss">
.el-header {
  background-color: #545c64;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    color: #fff;
  }
  .logo:hover {
    color: #cbd3da;
  }
}
.el-main {
  padding: 0;
}
</style>
