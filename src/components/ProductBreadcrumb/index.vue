<template>
    <div class="product__info-breadcrumb">
        <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">{{singleProd.categoryName}}</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">{{singleProd.name}}</a></a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script>
export default {
    data: () => ({
        singleProd: {}
    }),
    async created() {
        let slug = this.$route.params.slug;

        this.singleProd = await this.$store.dispatch(
        "products/fetchSingleProducts",
        {
            prodId: slug
        }
        );
    }
}
</script>

<style lang="scss" scoped>
@import './_index';
</style>