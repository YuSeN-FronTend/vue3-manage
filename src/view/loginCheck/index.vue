<template>
    <div id="box">
            <div id="image" v-if="isSuccess">
                <div class="smallBox"></div>
                <div class="sliderBox"></div>
            </div>
            <div :class="icon === 'CircleCloseFilled'?'checkFail':'checkSuccess'" v-else>
                <div class="check-body">
                    <el-icon :size="60">
                            <Icon :icon="icon"></Icon>
                        </el-icon>
                    <div v-if="icon=== 'CircleCloseFilled'" style="margin-top: 10px;">验证失败 请按提示重新操作</div>
                    <div v-else style="margin-top: 10px;">验证成功</div>
                </div>
            </div>
        <div id="slider">
            <div id="btn"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, nextTick, ref, watch } from "vue"
let isSuccess = ref(true);
let icon = ref('CircleCloseFilled')
const emit = defineEmits(['checkBol'])
let checkBol = ref(false);
onMounted(() => {
    // 判断鼠标是否按住拖动
    let isMouseDown = false;
    // 判断拖动滑块的中心点值
    let x;
    // 初始距离左侧位置
    let initialX = '8px';
    // 想要设置的重合浮动边界范围
    let range = 2;
    const image = document.getElementById('image')
    const btn = document.getElementById('btn')
    const slider = document.getElementById('slider')
    btn.style.left = initialX;
    let randomLeft, randomTop, smallBox, sliderBox;
    function domCheckChange() {
        // 根据自己盒子大小自行生成
        randomLeft = Math.trunc(Math.random() * 170) + 150 + 'px';
        randomTop = Math.trunc(Math.random() * 150) + 20 + 'px';
        smallBox = document.querySelector('.smallBox')
        sliderBox = document.querySelector('.sliderBox')
        smallBox.style.left = randomLeft;
        smallBox.style.top = randomTop;
        sliderBox.style.top = randomTop;
    }
    domCheckChange()
    // 设定最远端的位置
    let initialFar;
    nextTick(() => {
        initialFar = document.getElementById('box').offsetWidth - sliderBox.offsetWidth - initialX.slice(0, -2);
    })
    btn.addEventListener('mousedown', function (event) {
        // 监听是否点击拖动
        x = event.clientX - event.offsetX;
        isMouseDown = true
    })
    document.addEventListener('mousemove', function (event) {
        if (isMouseDown) {
            if (event.clientX - x > sliderBox.offsetWidth && event.clientX - x < initialFar) {
                // 如果在可移动的边界范围内
                btn.style.left = event.clientX - x + 'px'
                sliderBox.style.left = event.clientX - x + 'px'
            } else if (event.clientX - x > initialFar) {
                // 如果超出最大边界范围
                btn.style.left = initialFar + 'px'
                sliderBox.style.left = initialFar + 'px'
            } else if (event.clientX - x < sliderBox.offsetWidth) {
                // 出国小于最小边界范围
                btn.style.left = initialX;
                sliderBox.style.left = initialX;
            }
        }
    })
    document.addEventListener('mouseup', function () {
        if (isMouseDown) {
            if (sliderBox.offsetLeft > smallBox.offsetLeft - range && sliderBox.offsetLeft < smallBox.offsetLeft + range) {
                // 重合
                icon.value = 'SuccessFilled'
                isSuccess.value = false
                setTimeout(() => {
                    checkBol.value = true;
                }, 1000)
            } else {
                // 未重合
                icon.value = 'CircleCloseFilled'
                isSuccess.value = false
                setTimeout(() => {
                    btn.style.left = initialX
                    sliderBox.style.left = initialX
                    isSuccess.value = true
                    nextTick(() => {
                        domCheckChange()
                    })
                }, 1000)
            }
            isMouseDown = false
        }
    })
})
watch(checkBol, (newVal, oldVal) => {
    if (newVal) {
        emit('checkBol', newVal)
    }
})


</script>

<style>
#box {
    width: 400px;
    height: 300px;
}

#image {
    width: 400px;
    height: 250px;
    background-color: aquamarine;
    position: relative;
}

.checkFail {
    width: 400px;
    height: 250px;
    background-color: #ffebe5;
    color: #f74c21;
}
.checkSuccess {
    width: 400px;
    height: 250px;
    background-color: #dcfff7;
    color: #0fbda0;
}
.check-body {
        font-size: 18px;
        font-weight: bold;
        font-family: Microsoft YaHei;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

#slider {
    width: 100%;
    height: 25px;
    margin-top: 25px;
    position: relative;
    background-color: #ecf0f3;
    border-radius: 50px;
}

#btn {
    position: absolute;
    top: -4px;
    width: 50px;
    height: 34px;
    background-color: white;
    box-shadow: 0px 0px 6px 0px rgba(89, 89, 89, 0.5);
    border-radius: 10px;
    cursor: pointer;
}

.smallBox {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(107, 107, 107, 0.5);
}

.sliderBox {
    position: absolute;
    left: 8px;
    width: 50px;
    height: 50px;
    background-color: aquamarine;
    box-shadow: 0px 0px 10px 0px rgba(107, 107, 107, 0.5);
}</style>