import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
    const baseConfig = reactive({
        debug: false,
        cpuLoad: 2
    })

    return {
        baseConfig
    }
})
