<template>
    <template v-for="item in props.navData" :key="item.path">
        <el-sub-menu v-if="item.children?.length" :index="item.path">
            <template #title>
                <el-icon>
                    <Icon :icon="item.meta.icon"></Icon>
                </el-icon>
                <span>{{ item.meta.name }}</span>
            </template>
            <nav-aside :navData="item.children"></nav-aside>
        </el-sub-menu>
        <el-menu-item v-else :index="item.path">
            <el-icon>
                <Icon :icon="item.meta.icon"></Icon>
            </el-icon>
            <template #title>
                <span>{{ item.meta.name }}</span>
            </template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
let props = defineProps(['navData']);

</script>

<style scoped>
</style>