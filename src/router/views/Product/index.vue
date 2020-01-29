<template>
    <Layout>
        <section class="product">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-xl-6">
                        <ProductImage />
                    </div>
                    <div class="col-12 col-xl-6">
                        <ProductBreadcrumb />
                        <ProductInfo />
                        <ProductShare />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-xl-12">
                        <ProductInfoBottom />
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
import ProductImage from '@/components/ProductImage'
import ProductInfo from '@/components/ProductInfo'
import ProductInfoBottom from '@/components/ProductInfoBottom'
import ProductShare from '@/components/ProductShare'
import ProductBreadcrumb from '@/components/ProductBreadcrumb'

export default {
    components: {
        ProductImage,
        ProductInfo,
        ProductInfoBottom,
        ProductShare,
        ProductBreadcrumb,
    },
}
</script>

<style lang="scss" scoped>
.product {
    padding: 25px 0;
}
</style>