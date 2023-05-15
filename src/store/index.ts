import { defineStore } from 'pinia' // 引入pinia

export const useCar = defineStore('test', {
    state: () => {
        return({
            email: '',
            password: '',
            name: ''
        })
    }
})