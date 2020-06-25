import Vue from 'vue'
// 最好写到一起，不好分开导入，不然会报错
// 按需导入需要的Button, Form,FormItem,Input
import { Button, Form, FormItem, Input } from 'element-ui'

// 全局注册这些使用到的组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
