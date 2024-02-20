<template>
    <div class="r-radio">
        <el-radio-group v-bind="radioGroupProps">
            <el-radio
                v-bind="radio.props"
                v-for="radio in radioOptions"
                :key="radio.key"
            >
                <component :is="radio.slots.default" />
            </el-radio>
        </el-radio-group>
    </div>
</template>

<script lang="jsx" setup>
import { omit } from 'lodash-es'

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    options: {
        type: Array,
        default: () => []
    }
})

const emits = defineEmits([
    'update:modelValue'
])

const radioGroupProps = computed(() => {
    return {
        ...omit(props, ['options']),
        onChange: val => emits('update:modelValue', val)
    }
})

const radioOptions = computed(() => {
    return props.options.map(opt => {
        const { label, value } = opt

        return {
            key: value,
            props: {
                ...opt,
                label: value
            },
            slots: {
                default: () => label
            }
        }
    })
})

</script>

<style lang="scss" scoped>
// css
</style>
