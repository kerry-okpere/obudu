<template>
     <div class="single-product__similar-container w-container">
            <div class="w-layout-grid similar-products__grid">
                <div v-for="category in categories" :key="category.node.id" data-w-id="701162c2-b0b8-5b50-bccb-d02f533e7483" class="home-products__single">
                    <div>
                        <nuxt-link :to="`/product/${category.node.id}`">
                            <img :src="`${category.node.images[0].url}`" class="loading" data-was-processed="true">
                        </nuxt-link>
                        <!-- <a href="#" class="button-2 w-button">ADD TO CART</a> -->
                    </div>
                    <!-- <div class="home-products__image">
                        <a href="#" class="button-2 w-button">ADD TO CART</a>
                    </div> -->
                    <h1 class="home-products__name">
                        <nuxt-link :to="`/product/${category.node.id}`">{{category.node.name}}</nuxt-link>
                    </h1>
                    <p class="home-products__price">${{category.node.price.amount}}</p>
                </div>

            </div>
        </div>
</template>

<script>

import { GET_SIMILAR_PRODUCTS } from "../../queries/productQueries";

export default {
    name: 'SingleProductSimilar',
    data(){
        return  {
            categories: []
        }
    },

    computed: {
        async getProdCategory() {
            return this.$store.getters.getProductsCategory;
        }
    },

    async created() {
        const sleep = m => new Promise(r => setTimeout(r, m));
        let category  = await this.getProdCategory;
        await sleep(1000);
        let similar_prods = await this.getSimilarProducts(category.category.id);

        // remove first element in the array because that's first element but solution is not scalable
        similar_prods.shift();        
        this.categories = similar_prods;
    },

    methods: {
        async getSimilarProducts(id) {
            let response = await this.$apollo.query({
                query: GET_SIMILAR_PRODUCTS,
                variables: { "id": id }
            });
            return response.data.category.products.edges;
        }
    }

}

</script>
<style>

</style>
