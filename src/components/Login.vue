<template>
  <div class="login_container">
    <div class="login_box"></div>
  </div>
</template>

<!-- 注意不要随便留空格 -->
<script>
export default {}
</script>

<style lang="less" scoped>
.login_container{
  background-color: #2b4b6b;
  height: 100%;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50px);
}
</style>
