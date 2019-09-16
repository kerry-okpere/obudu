<template>
    <div class="d-flex justify-content-center" v-if="loading">
        <b-spinner type="grow" variant="primary" label="Loading..."></b-spinner>
    </div>
</template>

<script>
export default {
    name: 'HomePreloader',
    data: () => ({
      loading: false 
    }),
      
    methods: {
        start () {
            this.loading = true
        },
        finish () {
            this.loading = false
        }
    }
}

</script>

<style type="scss" scoped>
@import "./_index.scss";
</style>