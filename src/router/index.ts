import { createRouter, createWebHistory } from 'vue-router';
import { useCar } from '../store'
const routes:any = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../view/login.vue')
    },
    {
        path: '/layout',
        name: 'Layout',
        redirect: '/group',
        component: () => import('../view/layout.vue'),
        children:[
            {
                path:'/group',
                redirect: '/dashboard',
                meta: {
                    type: 'first',
                    name: '导航一',
                    icon: 'Menu'
                },
                children:[
                    {
                        path: '/dashboard',
                        name: 'Dashboard',
                        component: () => import('../view/group/asidefirst/dashboard.vue'),
                        meta: {
                            type: 'second',
                            name: '首页',
                            icon: 'House'
                        }
                    },
                    {
                        path: '/personCenter',
                        name: 'PersonCenter',
                        component: () => import('../view/group/asidefirst/personCenter.vue'),
                        meta: {
                            type: 'second',
                            name: '个人中心',
                            icon: 'UserFilled'
                        }
                    }
                ]
            },
            {
                path: '/adminCenter',
                name: 'adminCenter',
                component: () => import('../view/group/adminCenter.vue'),
                meta: {
                    type: 'first',
                    name: '配置中心',
                    icon: 'Setting'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if(to.name === 'Login') {
        if(sessionStorage.getItem('routePath')) {
            sessionStorage.removeItem('routePath')
        }
        if (sessionStorage.getItem('tabRoutes')) {
            sessionStorage.removeItem('tabRoutes')
        }
        next()
    } else if (from.name === 'Login') {
        if(!sessionStorage.getItem('tabRoutes')){
            useCar().addTabRoutes({
                name: to.fullPath,
                title: to.meta.name,
                icon: to.meta.icon
            })
        }
        next()
    } else if (to.name !== 'Login') {
        let handleRoutes = JSON.parse(String(sessionStorage.getItem('tabRoutes')))
        let result = handleRoutes.some((item:any) => to.fullPath === item.name);
        if(!result){
            useCar().addTabRoutes({
                name: to.fullPath,
                title: to.meta.name,
                icon: to.meta.icon
            })
        }
        next();
    } else {
        next()
    }     
})


export default router;