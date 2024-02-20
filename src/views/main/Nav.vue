<template>
    <div class="nav-container">
        <div class="logo">
            Logo
        </div>

        <el-menu
            router
            unique-opened
            :default-active="route.fullPath"
        >
            <el-sub-menu
                v-for="routeItem in routes"
                :key="routeItem.path"
                :index="routeItem.path"
            >
                <template #title>
                    {{ routeItem.meta.title }}
                </template>

                <component
                    v-for="item in getMenuItems(routeItem, routeItem.children)"
                    :key="item.path"
                    :is="item"
                />
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script lang="jsx" setup>
import routes from '@/router/routes.js'

const route = useRoute()

function getMenuItems (parent, children = []) {
    return children.map(child => {
        if (child.children) {
            return (
                <el-sub-menu
                    key={ child.path }
                    index={ child.path }
                    v-slots={{
                        title: () => child.meta.title
                    }}
                >
                    { getMenuItems(child, child.children) }
                </el-sub-menu>
            )
        } else {
            child.fullPath = `${parent.fullPath || parent.path}/${child.path}`

            return (
                <el-menu-item
                    key={ child.path }
                    index={ child.fullPath }
                >
                    { child.meta.title }
                </el-menu-item>
            )
        }
    })
}

</script>

<style lang="scss" scoped>
@import "./variables.scss";

.nav-container {
    .logo {
        width: 100%;
        height: $header-height;
        font-size: 20px;
        text-align: center;
        line-height: $header-height;
        background-color: #21252b;
        color: #528bff;
    }

    > .el-menu {
        height: calc(100vh - #{$header-height});
        overflow-y: auto;
    }
}
</style>
