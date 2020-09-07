import Vue from 'vue'
// 最好写到一起，不好分开导入，不然会报错
// 按需导入需要的Button, Form,FormItem,Input
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn
} from 'element-ui'
// 全局注册这些使用到的组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
// 需要全局挂载，将Message挂载到vue的原型对象上,$message是自定义属性，可以修改名字
// 每一个组件都可以通过this访问到$message
Vue.prototype.$message = Message
