<template>
    <el-tabs v-model="editableTabsValue" type="card" :closable="closable" @tab-remove="removeTab" @tab-click="handleTab" @tab-add="addTab">
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
import { getCurrentInstance, ref, watchEffect } from 'vue';
import { useCar } from '../../../store'
import { storeToRefs } from 'pinia';
let store = useCar();
const { routePath } = storeToRefs(store)
let editableTabsValue = routePath;

let editableTabs = store.tabRoutes
let closable = ref(false)
let app = getCurrentInstance();
watchEffect(() => {
    if(store.tabRoutes.length > 1) {
        closable.value = true
    } else {
        closable.value = false
    }
})
function handleTab(e:any) {
    if(e.props.name !== sessionStorage.getItem('routePath')) {
        store.handleRoutePath(e.props.name)
        app?.appContext.config.globalProperties.$router.push(e.props.name)
    }
}

function removeTab(targetName: any) {
    let nowRoute = app?.appContext.config.globalProperties.$route.fullPath
    if(nowRoute === targetName) {
        store.tabRoutes.forEach((item:any, index:number) => {
            if(item.name === targetName) {
                if(index === store.tabRoutes.length - 1) {
                    store.deleteTabRoutes(index)
                    let name = store.tabRoutes[store.tabRoutes.length - 1].name
                    store.handleRoutePath(name)
                    app?.appContext.config.globalProperties.$router.push(name)
                } else {
                    store.deleteTabRoutes(index)
                    let name = store.tabRoutes[index].name
                    store.handleRoutePath(name)
                    app?.appContext.config.globalProperties.$router.push(name)
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