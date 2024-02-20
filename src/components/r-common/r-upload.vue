<template>
    <el-upload
        class="r-upload"
        v-model:file-list="modelFileList"
        :action="rConfig.uploadUrl"
    >
        This is a Vue component.
    </el-upload>
</template>

<script lang="jsx" setup>
import rConfig from '@/components/r-common/r-config.js'

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => []
    }
})

const emits = defineEmits([
    'update:modelValue'
])

const fileList = ref(props.modelValue)

const modelFileList = computed({
    get: () => props.modelValue,
    set: val => {
        fileList.value = val
        emits('update:modelValue', val)
    }
})

</script>

<style lang="scss" scoped>
// css
</style>
