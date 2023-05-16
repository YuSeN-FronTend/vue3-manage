<template>
    <div class="toggle" >
        <el-icon class="toggle-icon" @click="store.isCollapse = !store.isCollapse">
            <Icon :icon="store.isCollapse?'Expand':'Fold'"></Icon>
        </el-icon>
    </div>
</template>

<script setup lang="ts">
import { useCar } from '../../store/index'

let store = useCar();
</script>

<style lang="scss" scoped>
.toggle{
    height: 100%;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-icon {
        font-size: 30px;
        cursor: pointer;
    }
}
</style>