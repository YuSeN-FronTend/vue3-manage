<template>
    <div class="header">
        <div class="toggle">
            <el-icon class="toggle-icon" @click="store.isCollapse = !store.isCollapse">
                <Icon :icon="store.isCollapse ? 'Expand' : 'Fold'"></Icon>
            </el-icon>
        </div>
        <div class="header-box">
            <el-dropdown @visible-change="arrowChange">
                <div class="header-box-img">
                    <img class="image" src="../../assets/image.jpg"/>
                    <span>超级管理员<el-icon :class="arrow?'arrowTransform':'arrowTransformReturn'"><Icon icon="ArrowDown"></Icon></el-icon></span>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <div class="dropdown-box">
                            <img class="downImage" src="../../assets/image.jpg"/>
                            <div class="downText">
                                当前角色:
                                <br>
                                超级管理员
                            </div>
                        </div>
                        <el-dropdown-item divided @click="personCenter">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="quit">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useCar } from '../../store/index'
let store = useCar();
import { useRouter } from "vue-router";
let router = useRouter()
function quit() {
    router.push('/login');
}
function personCenter() {
    router.push('/personCenter')
}
import { ref } from 'vue'

let arrow = ref(false);
function arrowChange(value:boolean) {
    arrow.value = value
}
</script>

<style lang="scss" scoped>
.header {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    &-box {
        width: 170px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &-img {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .image {
                height: 50px;
                width: 50px;
                border-radius: 50%;
                cursor: pointer;
                margin-right: 10px;
            }
        }
        &-img:focus{
            outline: none;
        }
    }
    &-box:hover {
        background-color: #e4edfa;
    }
    .toggle {
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
    .dropdown-box {
        display: flex;
        justify-content: center;
        align-items: center;
        .downText{
            margin-right: 10px;
            width: 70px;
        }
        .downImage{
            height: 50px;
            width: 50px;
            border-radius:10%;
            margin: 5px 10px;
        }
    }
    .arrowTransform{
        transition: 0.2s;
        transform-origin: center;
        transform: rotateZ(180deg);
    }
    .arrowTransformReturn {
        transition: 0.2s;
        transform-origin: center;
        transform: rotate(0deg);
    }
</style>