<template>
    <div class="header">
        <div class="toggle" >
            <el-icon class="toggle-icon" @click="store.isCollapse = !store.isCollapse">
                <Icon :icon="store.isCollapse ? 'Expand' : 'Fold'"></Icon>
            </el-icon>
        </div>
        <div class="header-img">
                <img class="image" src="../../assets/image.jpg">
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCar } from '../../store/index'

let store = useCar();
</script>

<style lang="scss" scoped>
.header{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &-img{
        height: 100%;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        .image{
            height: 50px;
            width: 50px;
            border-radius: 50%;
        }
    }
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
}

</style>