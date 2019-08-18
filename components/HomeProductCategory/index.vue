<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 animated slideInUp">
          <div class="single-banner mb-30 scroll-zoom" data-sr-id="2">
            <a href="/product/">
            <span class="home-category__title">Clothing</span>
            <span class="home-category__overlay"></span>
            <img class="animated" src="@/assets/img/collections/image-2.jpg" alt="">
            </a>
        </div>
      <div class="col-md-4 animated slideInUp">
          <div class="single-banner mb-30 scroll-zoom" data-sr-id="2">
            <a href="/product/">
              <span class="home-category__title">Accessories</span>
                           <span class="home-category__overlay"></span>
              <img class="animated" src="@/assets/img/collections/image-3.jpg" alt="">
            </a>
          </div>
        </div>
      <div class="col-md-4 animated slideInUp">
          <div class="single-banner mb-30 scroll-zoom" data-sr-id="2">
            <a href="/product/">
              <span class="home-category__title">Accessories</span>
                           <span class="home-category__overlay"></span>
              <img class="animated" src="@/assets/img/collections/image-2.jpg" alt="">
            </a>
          </div>
        </div>
            </div>
      
<!-- >> -->
  <!-- <div class="featured-category__section w-container">
    <div class="w-layout-grid grid">
      <div v-for="category in categories" :key="category.node.id" id="w-node-995953f3b94f-3cdbab3b" class="featured-category__box">
          <div class="featured-category__gridbox">
          <a href="/collection" class="featured-category__image">
          <span class="featured-category__title">{{category.node.name}}</span>
            <span class="featured-category__bg" :style='{ backgroundImage: `url(${category.node.backgroundImage.url})` }'></span>
          </a>
          </div>
      </div> -->
      <!-- <div id="w-node-32c54463ef60-3cdbab3b" class="featured-category__box">
          <div class="featured-category__gridbox">
          <a href="/collection" class="featured-category__image">
          <span class="featured-category__title">Clothing</span>
            <span class="featured-category__bg" style="background-image:url('_nuxt/assets/img/collections/image-2.jpg')"></span>
          </a>
          </div>
      </div>
      <div id="w-node-4981e826d649-3cdbab3b" class="featured-category__box">
          <div class="featured-category__gridbox">
          <a href="/collection" class="featured-category__image">
          <span class="featured-category__title">Footwear</span>
            <span class="featured-category__bg" style="background-image:url('_nuxt/assets/img/collections/image-3.jpg')"></span>
          </a>
          </div>
      </div> -->
    <!-- </div>
    >>> -->
  </div>
</template>

<script>
import { GET_HOMEPAGE_CATEGORIES } from "../../queries/productQueries";

  export default {
    name: "HomeProductCategory",

    data() {
      return {
        categories: [],
      }
    },

    async mounted(){
      let categories = await this.getCategories();
      categories.pop();
      this.categories = categories;
      // console.log(cats);
    },

    methods: {
      async getCategories() {
        let response = await this.$apollo.query({
            query: GET_HOMEPAGE_CATEGORIES
        });

        return response.data.categories.edges;
        
      }
    }

  }


</script>

<style lang="scss" scoped>
  @import "./_index.scss";
</style>
