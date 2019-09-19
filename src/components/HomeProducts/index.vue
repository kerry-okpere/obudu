<template>
    <div class="product-area pt-50 pb-50">
        <div class="container">
            <div v-if="loading" class="d-flex justify-content-center mb-3">
                <b-spinner type="grow" variant="primary" label="Loading..."></b-spinner>
            </div>
        <div class="row">
                <!-- <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif"> -->
                <div v-for="homeProduct in homeProducts" :key="homeProduct.node.id" class="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-6">
                    
                    <div class="product-wrap-2 mb-25 text-center hvr-grow-shadow">
                        
                        <div class="product-img">
                            <nuxt-link :to="`/product/${homeProduct.node.id}`">
                                <img class="default-img" :src="`${homeProduct.node.images[0].url}`" alt="">
                                <img v-if="homeProduct.node.images[1]" class="hover-img" :src="`${homeProduct.node.images[1].url}`" alt="">
                                <img v-else class="hover-img" :src="`${homeProduct.node.images[0].url}`" alt="">                            
                            </nuxt-link>                        
                            <div class="product-action-2">
                                <nuxt-link :to="`/product/${homeProduct.node.id}`">
                                    <ion-icon name="ios-cart"></ion-icon><h4>Add to Cart</h4>
                                </nuxt-link>                        
                                <!-- <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><ion-icon name="ios-eye"></ion-icon>
                                <h4>Quick View</h4></a> -->
                            </div>
                        </div>

                        <div class="product-content-2">
                            
                            <div class="title-price-wrap-2">
                                <h3>
                                    <nuxt-link :to="`/product/${homeProduct.node.id}`">
                                        {{homeProduct.node.name}}
                                    </nuxt-link>
                                </h3>
                                <p class="home-product_cat"><a href="#">{{homeProduct.node.category.name}}</a></p>
                                <div class="price-2">
                                    <span>{{ homeProduct.node.price.localized}}</span>
                                </div>
                            </div>

                        </div> 

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
import { GET_PRODUCTS } from "@/queries/productQueries";

export default {
    name: "HomeProducts",

    data() {
        return {
            loading: false,
            imageCount: false,
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

<style lang="scss" scoped>
@import "./_index.scss";
</style>
