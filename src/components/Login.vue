<template>
  <div class="login_container">
    <div class="login_box">
      <!--   头像区域   -->
      <div class="avatar_box">
        <img src="../assets/logo.png">
      </div>
      <!--   登陆表单区   -->
      <el-form :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!--    用户名,使用的验证规则是username    -->
        <el-form-item prop="username">
          <!--     使用图标要先在main.js中导入./assets/fonts/iconfont.css     -->
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!--    密码    -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <!--    按钮区域    -->
        <el-form-item class="btns">
          <el-button type="primary">登陆</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<!-- 注意不要随便留空格 -->
<script>
export default {
  data () {
    return {
      loginForm: {
        // 只能用单引号
        username: '11',
        password: '22'
      },
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登陆名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  /*圆角设置*/
  border-radius: 10px;
  /*定位*/
  position: absolute;
  /*距离左侧50%*/
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50px);
  /*头像盒子的宽高*/
  .avatar_box {
    height: 130px;
    width: 130px;
    /*盒子的边框*/
    border: 1px solid #eee;
    /*圆角边框*/
    border-radius: 50%;
    /*图片和边框的间距*/
    padding: 10px;
    /*向外扩散10像素*/
    box-shadow: 0 0 10px #ddd;
    /*定位*/
    position: absolute;
    /*整体距离左侧50%*/
    left: 50%;
    /*自身再向左移动自身50%的距离*/
    transform: translate(-50%, -50%);
    background-color: #fff;
    /*图片的宽高*/
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      /*图片的背景色*/
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  /*距离底部为0*/
  bottom: 0;
  width: 100%;
  /*上下左右间距，上下为0，左右为20px*/
  padding: 0 20px;
  /*表单的尺寸为表单外的box的尺寸*/
  box-sizing: border-box;
}

.btns {
  /*弹性盒模型，它的所有子元素自动成为容器成员*/
  /*https://www.cnblogs.com/hellocd/p/10443237.html*/
  display: flex;
  /*右对其，flex-start为左对其，默认左对其*/
  justify-content: flex-end;
}
</style>
