<template>
    <el-row>
        <el-col :span="24">
            <el-menu :uniqueOpened="true" :default-active="treeNode" class="el-menu-vertical-demo"
                background-color="#191a23" text-color="#fff" active-text-color="#4d70ff" router
                :collapse="store.isCollapse">
                <div class="asideImg">
                    {{ store.isCollapse ? '管理' : '系统' }}
                </div>
                <nav-aside :navData="props.navData"></nav-aside>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { useCar } from '../../store/index'
import { storeToRefs } from 'pinia'
let props = defineProps(['navData'])

let store = useCar();
const { routePath } = storeToRefs(store)
let treeNode = routePath
</script>

<style scoped>
.el-menu-vertical-demo {
    height: 100vh;
}

.el-menu {
    border-right: none;
}

.el-sub-menu .el-sub-menu__icon-arrow {
    display: none !important;
}

.asideImg {
    height: 7vh;
    background-color: #191a23;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
}</style>