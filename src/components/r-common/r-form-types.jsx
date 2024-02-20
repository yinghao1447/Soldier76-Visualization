import { defineAsyncComponent } from 'vue'

const components = {
    AutoComplete: defineAsyncComponent(() => import('element-plus/es/components/autocomplete/index.mjs')),
    Cascader: defineAsyncComponent(() => import('element-plus/es/components/cascader/index.mjs')),
    Checkbox: defineAsyncComponent(() => import('element-plus/es/components/checkbox/index.mjs')),
    ColorPicker: defineAsyncComponent(() => import('element-plus/es/components/color-picker/index.mjs')),
    DatePicker: defineAsyncComponent(() => import('element-plus/es/components/date-picker/index.mjs')),
    DateTimePicker: defineAsyncComponent(() => import('element-plus/es/components/date-picker/index.mjs')),
    Input: defineAsyncComponent(() => import('element-plus/es/components/input/index.mjs')),
    InputNumber: defineAsyncComponent(() => import('element-plus/es/components/input-number/index.mjs')),
    // Radio: defineAsyncComponent(() => import('element-plus/es/components/radio/index.mjs')),
    Radio: defineAsyncComponent(() => import('@/components/r-common/r-radio.vue')),
    Rate: defineAsyncComponent(() => import('element-plus/es/components/rate/index.mjs')),
    Select: defineAsyncComponent(() => import('element-plus/es/components/select/index.mjs')),
    Slider: defineAsyncComponent(() => import('element-plus/es/components/slider/index.mjs')),
    Switch: defineAsyncComponent(() => import('element-plus/es/components/switch/index.mjs')),
    TimePicker: defineAsyncComponent(() => import('element-plus/es/components/time-picker/index.mjs')),
    TimeSelect: defineAsyncComponent(() => import('element-plus/es/components/time-picker/index.mjs')),
    Transfer: defineAsyncComponent(() => import('element-plus/es/components/transfer/index.mjs')),
    // Upload: defineAsyncComponent(() => import('element-plus/es/components/upload/index.mjs'))
    Upload: defineAsyncComponent(() => import('@/components/r-common/r-upload.vue'))
}

const styles = {
    AutoComplete: () => import('element-plus/es/components/autocomplete/style/index.mjs'),
    Cascader: () => import('element-plus/es/components/cascader/style/index.mjs'),
    Checkbox: () => import('element-plus/es/components/checkbox/style/index.mjs'),
    ColorPicker: () => import('element-plus/es/components/color-picker/style/index.mjs'),
    DatePicker: () => import('element-plus/es/components/date-picker/style/index.mjs'),
    DateTimePicker: () => import('element-plus/es/components/date-picker/style/index.mjs'),
    Input: () => import('element-plus/es/components/input/style/index.mjs'),
    InputNumber: () => import('element-plus/es/components/input-number/style/index.mjs'),
    // Radio: () => import('element-plus/es/components/radio/style/index.mjs'),
    Rate: () => import('element-plus/es/components/rate/style/index.mjs'),
    Select: () => import('element-plus/es/components/select/style/index.mjs'),
    Slider: () => import('element-plus/es/components/slider/style/index.mjs'),
    Switch: () => import('element-plus/es/components/switch/style/index.mjs'),
    TimePicker: () => import('element-plus/es/components/time-picker/style/index.mjs'),
    TimeSelect: () => import('element-plus/es/components/time-picker/style/index.mjs'),
    Transfer: () => import('element-plus/es/components/transfer/style/index.mjs')
    // Upload: () => import('element-plus/es/components/upload/style/index.mjs')
}

export default function importFormItemType (type) {
    // 加载样式 (懒加载)
    styles[type]?.()

    // 返回组件
    return components[type] ?? {
        render () {
            return <span>未知类型({ type })</span>
        }
    }
}
