<template>
    <el-tabs v-model="editableTabsValue" type="card" :closable="closable" @tab-remove="removeTab" @tab-click="handleTab">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :name="item.name">
            <template #label>
                <el-icon style="margin-right: 8px">
                    <Icon :icon="item.icon"></Icon>  
                </el-icon> 
                <span>{{ item.title }}</span>
            </template>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
// 设置判断边界
let closable = ref(false)
import { useCar } from '../../../store'
import { storeToRefs } from 'pinia';
let store = useCar();
// 将路由设置为响应式
const { routePath } = storeToRefs(store)
let editableTabsValue = routePath;
let editableTabs = store.tabRoutes

// 监听tabs为最后一个时不可关闭
watchEffect(() => {
    if (store.tabRoutes.length > 1) {
        closable.value = true
    } else {
        closable.value = false
    }
})
import { useRouter,useRoute } from 'vue-router'
let router = useRouter();
let route = useRoute();
// 点击tabs时切换路由
function handleTab(e:any) {
    if(e.props.name !== routePath) {
        router.push(e.props.name)
    }
}
// 删除tab键做的一些操作
function removeTab(targetName: any) {
    let nowRoute = route.fullPath
    if(nowRoute === targetName) {
        store.tabRoutes.forEach((item:any, index:number) => {
            if(item.name === targetName) {
                if(index === store.tabRoutes.length - 1) {
                    store.deleteTabRoutes(index)
                    let name = store.tabRoutes[store.tabRoutes.length - 1].name
                    router.push(name)
                } else {
                    store.deleteTabRoutes(index)
                    let name = store.tabRoutes[index].name
                    router.push(name)
                }
            }
        });
    } else {
        store.tabRoutes.forEach((item: any, index: number) => {
            if (item.name === targetName) {
                store.deleteTabRoutes(index);
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.el-tabs {
    background-color: #fff;
    border: 0;
    box-shadow: 0px 0px 8px 0px rgba($color: #696868, $alpha: 0.5);

    :deep(.el-tabs__item) {
        border-bottom: 0px !important;
    }

    :deep(.el-tabs__content) {
        width: 0;
        height: 0;
        display: none;
    }
}

:deep(.el-tabs__header) {
    margin: 0;
}

:deep(.el-tabs__item.is-active) {
    background-color: #e0e8f8;
}</style>