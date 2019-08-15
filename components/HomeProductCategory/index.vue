<template>
  <div class="w-container">
    <div class="row">
      <div class="col-md-6 animated slideInUp">
          <div class="single-banner mb-30 scroll-zoom" data-sr-id="2">
            <a href="/product/">
             <span class="home-category__title">Clothing</span>
             <span class="home-category__overlay"></span>
             <img class="animated" src="@/assets/img/collections/image-2.jpg" alt="">
            </a>
          </div>
        </div>
      <div class="col-md-6 animated slideInUp">
          <div class="single-banner mb-30 scroll-zoom" data-sr-id="2">
            <a href="/product/">
              <span class="home-category__title">Accessories</span>
                           <span class="home-category__overlay"></span>
              <img class="animated" src="@/assets/img/collections/image-3.jpg" alt="">
            </a>
          </div>
        </div>
            </div>
      
  </div>
</template>

<script>

  export default {
    name: "HomeProductCategory",

  }

</script>

<style lang="scss" scoped>
  @import "./_index.scss";
</style>
