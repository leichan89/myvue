<template>
  <el-container class="home-container">
    <!--  头部区域  -->
    <el-header>
      <div>
        <img src="../assets/target.png" alt="" height="50">
        <span>OG·大哥大</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!--  页面主体区域  -->
    <el-container>
      <!-- 侧边区域 -->
      <el-aside width="200px">Aside</el-aside>
      <!--  右侧内容区域  -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  /*按钮的对其方式，这里是两边对齐*/
  justify-content: space-between;
  padding-left: 0;
  /*这里是让退出按钮的大小居中*/
  align-items: center;
  color: #fff;
  font-size: 25px;
  /*设置el-header标签中的div属性*/
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: #EAEDF1;
}
</style>
