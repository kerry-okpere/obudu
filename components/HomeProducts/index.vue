<template>
  <div class="home-products__section w-container">
            <h1 class="home-section-title">NEW ARRIVALS</h1>
            <div class="w-layout-grid grid-2">                
                <div v-for="product in products" :key="product.node.id"  class="home-products__single">
                    <div>
                        <img :src="`${product.node.images[0].url}`" class="loading" data-was-processed="true">
                    </div>
                    <h1 class="home-products__name">
                        <nuxt-link :to="`/product/${product.node.id}`">{{product.node.name}}</nuxt-link>
                    </h1>
                    <p class="home-products__price">${{product.node.price.amount}}</p>
                </div>

            </div>
        </div>
</template>

<script>
import { GET_PRODUCTS } from "../../queries/productQueries";

export default {
    name: "HomeProducts",

    data() {
        return {
            products: [],
        }
    },

    async mounted() {
        let prods = await this.getProducts();
        this.products = prods;
        // this.image = prods.images[0].url
        console.log(this.products);
    },
    
    methods: {
    async getProducts() {
        let response = await this.$apollo.query({
            query: GET_PRODUCTS
        });

        return response.data.products.edges;
    }
}

};
</script>

<style>
@import "./_index.scss";
</style>
