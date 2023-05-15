<template>
    <el-row>
        <el-col :span="24">
            <h5>自定义颜色</h5>
            <el-menu :uniqueOpened="true" default-active="/dashboard" class="el-menu-vertical-demo" @open="handleOpen"
                @close="handleClose" background-color="#191a23" text-color="#fff" active-text-color="#4d70ff" router>
                <div v-for="item in list" :key="item.path">
                    <el-sub-menu v-if="item.children.length">
                        <template #title>
                            <el-icon>
                                <Icon :icon="item.meta.icon"></Icon>
                            </el-icon>
                            <span>{{ item.meta.name }}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item v-for="childItem in item.children" :key="childItem.path" :index="childItem.path">
                                <el-icon>
                                    <Icon :icon="childItem.meta?.icon"></Icon>
                                </el-icon>{{ childItem.meta?.name }}</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-menu-item v-else :index="item.path">
                        <template #title>
                            <el-icon>
                                <Icon :icon="item.meta.icon"></Icon>
                            </el-icon>
                            {{ item.meta.name }}</template>
                    </el-menu-item>
                </div>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

let list = router.getRoutes().filter((item) => item.meta.type === 'first')
console.log(list);



const handleOpen = (key: any, keyPath: any) => {
    console.log(key, keyPath);
};
const handleClose = (key: any, keyPath: any) => {
    console.log(key, keyPath);
};
</script>

<style scoped></style>