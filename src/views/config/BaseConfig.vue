<template>
    <div class="page-container">
        <pre>{{ formData }}</pre>

        <r-form
            :model-value="formData"
            :config="formConfig"
            @update:model-value="val => (formData = val)"
        />
    </div>
</template>

<script lang="jsx" setup>
import { useConfigStore } from '@/stores/config'

const { baseConfig: formData } = useConfigStore()

const formConfig = ref([
    {
        label: '调试模式',
        key: 'debug',
        type: 'Switch'
    }
])

</script>

<style lang="scss" scoped>
// css
</style>
