import { createApp, createVNode } from 'vue'
import App from './App.vue'
import router from "./router/index";
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus';
import * as Icons from '@element-plus/icons'
import navAside from './components/layout/navAside/index.vue'
import { generateRoutesFromMenu } from './router/getRoutes'
const app = createApp(App);
app.component('navAside', navAside)
app.use(createPinia())

let menu = JSON.parse(String(sessionStorage.getItem('userInfo')))?.routeInfo
generateRoutesFromMenu(menu)?.forEach((item: any) => {
    router.addRoute(item)
})
app.use(router)
app.use(ElementPlus)
app.mount('#app')
// 创建Icon组件
const Icon = (props: { icon: string }) => {
    const { icon } = props
    return createVNode(Icons[icon as keyof typeof Icons])
}
// 注册Icon组件
app.component('Icon', Icon)