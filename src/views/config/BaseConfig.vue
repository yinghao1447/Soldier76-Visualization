<template>
    <div class="page-container">
        <pre v-if="isDev">{{ formData }}</pre>

        <r-form
            v-model="formData"
            :config="formConfig"
        />
        <!-- @update:model-value="val => (formData = val)" -->
    </div>
</template>

<script lang="jsx" setup>
import { useConfigStore } from '@/stores/config'

const isDev = process.env.NODE_ENV === 'development'
const { baseConfig: formData } = useConfigStore()

const formConfig = computed(() => [
    {
        label: '调试模式',
        key: 'debug',
        type: 'Switch',
        tip: '是否输出调试信息，关闭后可以减小 CPU 计算压力。建议调试时开启，调试完毕后关闭。'
    },
    {
        label: '负载等级',
        key: 'cpuLoad',
        type: 'Slider',
        tip: '建议输入 1 ~ 30 之间的数字，不能小于 1 。值越小，压枪效果越好，值越大，帧数越高。(过分掉帧会直接影响压枪效果，请在保证帧数的情况下减小该值)',
        props: {
            min: 1,
            max: 30
        }
    }
])

</script>

<style lang="scss" scoped>
// css
</style>
