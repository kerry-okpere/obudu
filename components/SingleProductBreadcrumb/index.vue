<template>
  <div class="section-hero__section" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <div class="section-hero__overlay"></div>
    <div class="section-hero__container w-container">
      <div class="row">
        <div class="col">
            <!-- <div v-if="loading" class="d-flex justify-content-center mb-3">
                <b-spinner type="grow" variant="primary" label="Loading..."></b-spinner>
            </div> -->
          <div class="text-center">
            <h2>{{singleProducts.name}}</h2>
            <b-breadcrumb :items="links"></b-breadcrumb>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProductBreadcrumb",
  computed: {
    singleProducts() {
      return this.$store.getters.getSingleProduct;
    },
    links(){
      return this.$store.getters.getSingleProductsBreadcrumbs
    }
  },

  data() {
  return {
    loading: false,    
    bgImage: "https://res.cloudinary.com/mercurie/image/upload/v1564579537/mercuriemart/image-5.jpg"

  }
  
  },

  async created(){
    // this.loading = true
    // const sleep = m => new Promise(r => setTimeout(r, m));
    // await sleep(3000);
    // this.loading = false;
  }
};
</script>

<style type="scss" scoped>
</style>