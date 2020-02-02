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
  components: {
    ProductImage,
    ProductBreadcrumb,
    ProductInfo
  }
}
</script>

<style lang="scss" scoped>
@import './index';
</style>