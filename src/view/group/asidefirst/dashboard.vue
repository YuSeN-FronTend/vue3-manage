<template>
    <div>
        <input type="text" v-model="obj.name">
        <input type="text" v-model="obj.age">
        <button @click="getData">提交</button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { getDataFun } from '../../../api/user';
let obj = reactive({
    name: '',
    age: ''
})
async function getData() {
    const data = await getDataFun(obj)
    console.log(data);
    
}
</script>

<style scoped>

</style>