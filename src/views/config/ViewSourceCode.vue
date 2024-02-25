<template>
    <div class="page-container">
        <div class="btn-group">
            <el-button
                type="primary"
                @click="copySourceCode"
            >
                复制源码
            </el-button>
        </div>

        <highlightjs
            language="lua"
            :code="sourceCode"
        />
    </div>
</template>

<script lang="jsx" setup>
import { unref } from 'vue'
import clipboard from 'clipboardy'
import useSourceCode from '@/hooks/sourceCode'
import message from '@/utils/message'

const { sourceCode } = useSourceCode()

function copySourceCode () {
    clipboard.write(unref(sourceCode))
    message.success('源码已复制到剪贴板')
}

</script>

<style lang="scss" scoped>
// css
</style>
