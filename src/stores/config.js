import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
    const baseConfig = ref({})

    return {
        baseConfig
    }
})
