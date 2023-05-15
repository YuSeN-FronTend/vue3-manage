<template>
  <div class="container">
    <el-container>
      <el-aside width="220px">
        <Aside/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Aside from '../components/layout/aside.vue';
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;

  .el-header {
    height: 7vh;
    background-color: #f6f6f6;
  }

  .el-aside {
    height: 100vh;
  }

  .el-main {
    background-color: #e1e5ec;
    height: 93vh;
  }
}
</style>