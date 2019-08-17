<template>
  <div class="home-products__section w-container">
            <h1 class="home-section-title">NEW ARRIVALS</h1>
            <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
            <div v-else class="w-layout-grid grid-2">                
                <div v-for="homeProduct in homeProducts" :key="homeProduct.node.id"  class="home-products__single">
                <!-- <div v-for="product in products" :key="product.node.id"  class="home-products__single"> -->
                    <div>
                        <nuxt-link :to="`/product/${homeProduct.node.id}`">
                            <img :src="`${homeProduct.node.images[0].url}`" class="loading" data-was-processed="true">
                        </nuxt-link>
                    </div>
                    <h1 class="home-products__name">
                        <nuxt-link :to="`/product/${homeProduct.node.id}`">{{homeProduct.node.name}}</nuxt-link>
                    </h1>
                    <p class="home-products__price">${{homeProduct.node.price.amount}}</p>
                    <!-- <p class="home-products__price">${{product.node.price.amount}}</p> -->
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
            loading: false,
        }
    },

    computed: {
        homeProducts(){
            return this.$store.getters.getHomeProducts
        }
    },

    async created() {
        this.loading = true
        this.$store.dispatch('fetchProducts', {apollo: this.$apollo})
        .then( () => { this.loading = false });
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
