import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入饿了么UI-plus
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css';
// 引入饿了么UI 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入 bootstrap
import "../public/bootstrap/css/bootstrap.min.css"
import '../public/jquery/jquery.min'
import '../public/bootstrap/js/bootstrap.min'

const app = createApp(App);
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(router)
app.use(ElementPlus)
app.mount('#app')
