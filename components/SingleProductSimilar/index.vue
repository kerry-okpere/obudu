<template>
<div class="product-area pb-60">
    <div class="container">
                <div v-if="loading" class="d-flex justify-content-center mb-3">
                <b-spinner type="grow" variant="primary" label="Loading..."></b-spinner>
            </div>
                <div class="row">
                    <div v-for="(similarProduct, index) in similarProducts" :key="index" class="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-6">
                        <div v-if="similarProduct.node" class="product-wrap-2 mb-25 text-center hvr-grow-shadow">
                            <div class="product-img">
                                <nuxt-link :to="`/product/${similarProduct.node.id}`">
                                    <img class="default-img" :src="`${similarProduct.node.images[0].url}`" alt="">
                                    <img v-if="similarProduct.node.images[1]" class="hover-img" :src="`${similarProduct.node.images[1].url}`" alt="">
                                    <img v-else class="hover-img" :src="`${similarProduct.node.images[0].url}`" alt="">                            
                                </nuxt-link>                        
                                <div class="product-action-2">
                                    <nuxt-link :to="`/product/${similarProduct.node.id}`">
                                        <ion-icon name="ios-cart"></ion-icon><h4>Add to Cart</h4>
                                    </nuxt-link>                        
                                    <!-- <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><ion-icon name="ios-eye"></ion-icon>
                                    <h4>Quick View</h4></a> -->
                                </div>
                            </div>

                            <div class="product-content-2">
                                <div class="title-price-wrap-2">
                                    <h3>
                                        <nuxt-link :to="`/product/${similarProduct.node.id}`">
                                            {{similarProduct.node.name}}
                                        </nuxt-link>
                                    </h3>
                                    <p class="home-product_cat"><a href="#">{{similarProduct.node.category.name}}</a></p>
                                    <div class="price-2">
                                        <span>{{similarProduct.node.price.localized}}</span>
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

import { GET_SIMILAR_PRODUCTS } from "../../queries/productQueries";
import { mapState } from "vuex";

export default {
    name: 'SingleProductSimilar',
    data(){
        return  {
            loading: false,
            loadStatus: false,
            catId: ''
        }
    },

    computed: {
        getProdCategory() {
            return this.$store.getters.getSingleProduct;
        },
        getProds(){
            return this.$store.getters.getCategoryId
        },
        similarProducts() {
            return this.$store.getters.getSimilarProducts;
        },

        getSimilarProducts(){
            this.$store.dispatch('fetchProducts', {
                apollo: this.$apollo,
            }).then( () => console.log("Products fetched successfully"));
        }

    },

    async created() {
        await this.getSimilarProducts;
    },

    methods: {
        async getProductCategoryMethod(){
            return this.$store.state.singleProduct
        },

        async getIdRecursively(category){

            if( typeof category.category == undefined){
                await this.getIdRecursively(category);
            } else{
                console.log("success ",category.category);
                return category;
            }
        },

        async fetchSimilarProducts(category){
            let response = await this.$apollo.query({
                query: GET_SIMILAR_PRODUCTS,
                variables: { "id": category }
            })

            return response;
        },

        async runDispatch(category) {
            this.$store.dispatch('fetchSimilarProducts', {
                apollo: this.$apollo,
                category_id: category
            }).then( () => {    
                this.loading = false,
                this.loadStatus = true
            });
        }

    }

}

</script>
<style lang="scss" scoped>

</style>