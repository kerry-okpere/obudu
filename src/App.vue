<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    watch: {
        '$route':{
        handler: (to, from) => {
            document.title = to.meta.title 
        },
        immediate: true
        }
    },
}
</script>
