<template>
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
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
import { watch, ref, getCurrentInstance } from 'vue';
import { useCar } from '../../../store'
let store = useCar();
console.log(store);

let editableTabsValue = store.routePath;

let editableTabs = store.tabRoutes
// function removeTab(targetName: any) {
//     let tabs = editableTabs
//     let activeName = editableTabsValue
//     if (activeName === targetName) {
//         tabs.forEach((tab:any, index:any) => {
//             if (tab.name === targetName) {
//                 let nextTab = tabs[index + 1] || tabs[index - 1]
//                 if (nextTab) {
//                     activeName = nextTab.name
//                 }
//             }
//         })
//     }

//     editableTabsValue.value = activeName
//     editableTabs = tabs.filter((tab) => tab.name !== targetName)
// }
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