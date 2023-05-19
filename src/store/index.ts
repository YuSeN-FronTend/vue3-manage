import { defineStore } from 'pinia' // 引入pinia

export const useCar = defineStore('test', {
    state: () => {
        return  {
            email: '',
            password: '',
            name: '',
            isCollapse: false,
            routePath: sessionStorage.getItem('routePath') || '/dashboard' as String,
            tabRoutes: JSON.parse(String(sessionStorage.getItem('tabRoutes'))) || [] as Array<any>
        }
    },
    actions: {
        addTabRoutes(tabRoutes:any) {
            this.tabRoutes.push(tabRoutes);
            sessionStorage.setItem('tabRoutes', JSON.stringify(this.tabRoutes));
        },
        handleRoutePath(routePath: String) {
            this.routePath = routePath;            
            sessionStorage.setItem('routePath', String(this.routePath))
        },
        deleteTabRoutes(index: Number) {
            this.tabRoutes.splice(index,1);
            sessionStorage.setItem('tabRoutes', JSON.stringify(this.tabRoutes))
        }
    },
    // getters: {
    //     getTabsRoutes(state){
    //         return state.tabRoutes
    //     },
    //     getRoutePath(state) {
    //         return state.routePath
    //     }
    // }
})