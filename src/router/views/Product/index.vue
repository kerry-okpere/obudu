<template>
    <Layout>
        <section class="product">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <ProductBreadcrumb />
                        <ProductImage />
                        <ProductShare />
                    </div>
                    <div class="col">
                        <ProductInfo />
                    </div>
                </div>
            </div>
            <ProductBottom />
        </section>
    </Layout>
</template>

<script>
import Layout from '@/router/layouts/Product.vue'
import ProductImage from '@/components/ProductImage'
import ProductInfo from '@/components/ProductInfo'
import ProductShare from '@/components/ProductShare'
import ProductBottom from '@/components/ProductBottom'
import ProductBreadcrumb from '@/components/ProductBreadcrumb'

export default {
    components: {
        Layout,
        ProductImage,
        ProductInfo,
        ProductShare,
        ProductBottom,
        ProductBreadcrumb,
    },
}
</script>

<style lang="scss" scoped>
.product {
    padding: 25px 0;
}
</style>