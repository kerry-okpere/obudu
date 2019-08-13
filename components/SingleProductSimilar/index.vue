<template>
     <div class="single-product__similar-container w-container">
            <div class="w-layout-grid similar-products__grid">
                <div data-w-id="701162c2-b0b8-5b50-bccb-d02f533e7483" class="home-products__single">
                    <div class="home-products__image">
                        <a href="#" class="button-2 w-button">ADD TO CART</a>
                    </div>
                    <h1 class="home-products__name">Pink Pattern Dress</h1>
                    <p class="home-products__price">₦15,000.00</p>
                </div>

                <!-- <div v-for="product in products" :key="product.node.id"  class="home-products__single">
                    <div>
                        <img :src="`${product.node.images[0].url}`" class="loading" data-was-processed="true">
                    </div>
                    <h1 class="home-products__name">
                        <nuxt-link :to="`/product/${product.node.id}`">{{product.node.name}}</nuxt-link>
                    </h1>
                    <p class="home-products__price">${{product.node.price.amount}}</p>
                </div> -->


            </div>
        </div>
</template>

<script>

import { GET_SIMILAR_PRODUCTS } from "../../queries/productQueries";
import store from '@/store/index';

export default {
    name: 'SingleProductSimilar',
    data(){
        return  {
            id: '',
        }
    },

    computed: {
        getProdCategory() {
            return store.getters.getProductsCategory
        }
    },


    async mounted() {
        // let cat = await this.getCatId(this.getProdCategory)
        // console.log(cat);
    },

    methods: {
        async getSimilarProducts(id) {
            let response = await this.$apollo.query({
                query: GET_SIMILAR_PRODUCTS,
                variables: { "id": id }
            });

            return response.data.category.products;

        }
    }

}

</script>
<style>

</style>
