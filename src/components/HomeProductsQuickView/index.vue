<template>
  <section class="products__view">
    <div class="row">
      <div class="col-12 col-xl-6">
        <ProductImage />
      </div>
      <div class="col-12 col-xl-6">
        <ProductBreadcrumb />
        <ProductInfo />
      </div>  
    </div>
  </section>
</template>

<script>
import ProductImage from '@/components/ProductImage';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import ProductInfo from '@/components/ProductInfo';

export default {
  data: () => ({
    singleProd: {}
  }),
  components: {
    ProductImage,
    ProductBreadcrumb,
    ProductInfo
  },
  async created() {
    let slug = this.$route.params.slug;
    console.log(slug);
    this.singleProd = await this.$store.dispatch(
      "products/fetchSingleProducts",
      {
        prodId: slug
      }
    );
  },
}
</script>

<style lang="scss" scoped>
@import './index';
</style>