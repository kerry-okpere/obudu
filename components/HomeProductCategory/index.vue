<template>
  <div class="container pt-50">
    <div class="row">
      <div v-for="category in categories" :key="category.node.id" class="col-md-4 animated slideInUp">
        <div class="single-banner mb-30 scroll-zoom" data-sr-id="2">
          <a href="/product/">
            <span class="home-category__title">{{category.node.name}}</span>
            <span class="home-category__overlay"></span>
            <img class="animated home-category-image" :src="category.node.backgroundImage.url" alt="">
          </a>
        </div>
      </div>
       
       <!-- <div class="col-md-4 animated slideInUp">
        <div class="single-banner mb-30 scroll-zoom" data-sr-id="2">
          <a href="/product/">
            <span class="home-category__title">Clothing</span>
            <span class="home-category__overlay"></span>
            <img class="animated" src="@/assets/img/collections/image-2.jpg" alt="">
          </a>
        </div>
        </div> -->

      </div>
  </div>
</template>

<script>
  import {
    GET_HOMEPAGE_CATEGORIES
  } from "../../queries/productQueries";

  export default {
    name: "HomeProductCategory",

    data() {
      return {
        categories: [],
      }
    },

    async mounted() {
      let categories = await this.getCategories();
      this.categories = categories;
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
