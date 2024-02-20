<template>
    <div class="page-container">
        <r-form
            ref="$form"
            v-model="formData"
            :config="formConfig"
            :disabled="$formDisabled"
        />

        <el-button
            type="primary"
            @click="submit"
        >
            提交
        </el-button>

        <pre>formData: {{ formData }}</pre>
    </div>
</template>

<script lang="jsx" setup>
const formData = reactive({})
const formConfig = computed(() => [
    {
        label: '姓名',
        key: 'name',
        type: 'Input',
        rules: [
            { required: true }
        ]
    },
    {
        label: '性别',
        key: 'sex',
        type: 'Radio',
        props: {
            options: [
                { label: '男', value: 0 },
                { label: '女', value: 1 }
            ]
        },
        rules: [
            { required: true }
        ]
    },
    {
        label: '生日',
        key: 'birthday',
        type: 'DatePicker',
        rules: [
            { required: true }
        ]
    },
    {
        label: '班级',
        key: 'class',
        type: 'Input',
        slots: {
            append: () => '班'
        },
        rules: [
            { required: true }
        ]
    },
    {
        label: '班费',
        key: 'classFee',
        type: 'Input',
        preset: 'amount',
        rules: [
            { required: true }
        ]
    },
    {
        label: '测试render',
        render: () => <div>测试render</div>
    },
    {
        label: '是否团员',
        key: 'isLeagueMember',
        type: 'Switch'
    },
    {
        label: '入团时间',
        key: 'leagueTime',
        type: 'DatePicker',
        hide: formData.isLeagueMember !== true,
        rules: [
            { required: true }
        ]
    },
    {
        label: '一寸照',
        key: 'photo',
        type: 'Upload',
        rules: [
            { required: true }
        ]
    }
])

const $form = ref(null)
const $formDisabled = ref(false)

async function submit () {
    if ($formDisabled.value) return
    $formDisabled.value = true

    const isValid = await $form.value.validate().catch(err => {
        console.error(err)
        return false
    })

    if (isValid) {
        console.log('submit', formData)
    }

    $formDisabled.value = false
}

</script>

<style lang="scss" scoped>
// css
</style>
