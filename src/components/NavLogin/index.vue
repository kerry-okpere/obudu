<template>
    <section class="login">
        <a-tabs defaultActiveKey="1" @change="callback">
            <a-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</a-tab-pane>
            <a-tab-pane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
    </section>
</template>

<script>
export default {
    methods: {
        callback(key) {
            console.log(key);
        }
    }
};
</script>

<style lang="scss" scoped>
@import './_index';
</style>