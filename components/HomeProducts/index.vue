<template>
  <div class="home-products__section w-container">
            <h1 class="home-section-title">NEW ARRIVALS</h1>
            <div class="w-layout-grid grid-2">
                <div v-for="product in products" :key="product.node.id" class="home-products__single">
                    <div class="home-products__image">
                        <a href="#" class="button-2 w-button">ADD TO CART</a>
                    </div>
                    <!-- <h1 class="home-products__name"><a href="/product">Pink Pattern Dress</a></h1> -->
                    <!-- <h2 class="home-products__name"><a href="/product/:id?">{{product.node.name}}</a></h2> -->
                    <nuxt-link :to="`/product/${product.node.id}`" class="home-products__name">{{product.node.name}}</nuxt-link>
                    <!-- <h2 class="home-products__name"><a href="/product/:id?">{{product.node.name}}</a></h2> -->
                    <p class="home-products__price">USD {{product.node.price.amount}}</p>
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
            products: []
        }
    },

    async mounted() {
        let prods = await this.getProducts();
        this.products = prods;
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
