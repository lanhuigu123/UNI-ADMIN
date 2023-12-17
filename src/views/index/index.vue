<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" active-text-color="#008080">
          <el-menu-item index="/index/index">
            <i class="el-icon-s-home"></i>
            <span slot="title">后台首页</span>
          </el-menu-item>
          <el-menu-item index="/index/image">
            <i class="el-icon-picture"></i>
            <span slot="title">相册管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "indexView",
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.el-aside {
  height: calc(100vh - 60px);
  .el-menu {
    height: 100%;
  }
}
.el-main {
  background-color: #f8f9fa;
}
</style>
