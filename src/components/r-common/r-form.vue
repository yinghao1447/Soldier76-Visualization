<template>
    <el-form
        ref="$form"
        label-position="right"
        label-width="auto"
        :model="props.modelValue"
        :content-width="props.contentWidth"
    >
        <el-form-item
            v-bind="formItemProps(item)"
            v-for="item in formConfig"
            :key="item.key"
        >
            <component
                v-bind="formItemCompProps(item)"
                :is="item.render ?? formTypes(item.type)"
            >
                <template
                    v-for="[name, slot] in Object.entries(item.slots ?? {})"
                    :key="name"
                    #[name]
                >
                    <component :is="slot" />
                </template>
            </component>
        </el-form-item>
    </el-form>
</template>

<script lang="jsx" setup>
import { get, set } from 'lodash-es'
import formTypes from './r-form-types.jsx'
import getPresetConfig from './r-form-presets/index.js'

const props = defineProps({
    modelValue: {
        type: Object,
        default: () => ({})
    },
    config: {
        type: Array,
        default: () => []
    },
    contentWidth: {
        type: String,
        default: '300px'
    }
})

// 配置信息二次处理
const formConfig = computedAsync(async () => {
    for (const cfg of props.config) {
        if (cfg.hide) continue

        if (cfg.preset) {
            const res = await getPresetConfig(cfg)
            if (res instanceof Error) console.error(res)
        }

        // 必填项默认提示
        cfg.rules?.forEach(rule => {
            if (rule.required) {
                rule.message ??= `${cfg.label}不能为空`
            }
        })
    }

    return props.config.filter(cfg => !cfg.hide)
}, [])

// 另一种写法
// const formConfig = computedAsync(async () => {
//     return props.config.reduce(async (promiseList, cfg) => {
//         const list = await promiseList

//         if (cfg.hide) return list
//         if (cfg.preset) {
//             const res = await getPresetConfig(cfg)
//             if (res instanceof Error) console.error(res)
//         }

//         // 必填项默认提示
//         cfg.rules?.forEach(rule => {
//             if (rule.required) {
//                 rule.message ??= `${cfg.label}不能为空`
//             }
//         })

//         list.push(cfg)

//         return list
//     }, Promise.resolve([]))
// }, [])

function formItemProps (item) {
    return {
        prop: item.key,
        label: item.label,
        rules: item.rules,
        style: {
            '--content-width': item.contentWidth ?? props.contentWidth
        }
    }
}

// 异步组件属性
function formItemCompProps (item) {
    return {
        modelValue: get(props.modelValue, item.key),
        'onUpdate:modelValue': val => {
            set(props.modelValue, item.key, val)
        },
        ...item.props
    }
}

const $form = ref(null)

defineExpose({
    validate: (...args) => $form.value.validate(...args),
    validateField: (...args) => $form.value.validateField(...args),
    resetFields: (...args) => $form.value.resetFields(...args),
    scrollToField: (...args) => $form.value.scrollToField(...args),
    clearValidate: (...args) => $form.value.clearValidate(...args)
})

</script>

<style lang="scss" scoped>
:deep() {
    .el-form-item__label {
        &::after {
            content: "：";
        }
    }

    .el-form-item__content {
        max-width: var(--content-width);

        > .el-date-editor {
            width: 100%;
        }
    }
}
</style>
