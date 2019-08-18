<template>
<div class="product-area pb-60">
    <div class="w-container" data-aos="fade-up"
    data-aos-offset="150"
    data-aos-delay="20"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-bottom">
                <div class="row">
                    <div v-if="loading">
                            <img src="https://i.imgur.com/JfPpwOA.gif">
                    </div>
                    <div v-for="similarProduct in similarProducts" class="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-6">
                        <div v-if="similarProduct.node" class="product-wrap-2 mb-25 text-center hvr-grow-shadow">
                            <div class="product-img">
                                <nuxt-link :to="`/product/${similarProduct.node.id}`">
                                    <img class="default-img" :src="`${similarProduct.node.images[0].url}`" alt="">
                                    <img v-if="similarProduct.node.images[1]" class="hover-img" :src="`${similarProduct.node.images[1].url}`" alt="">
                                    <img v-else class="hover-img" :src="`${similarProduct.node.images[0].url}`" alt="">                            
                                </nuxt-link>                        
                                <div class="product-action-2">
                                    <a title="Add To Cart" href="#"><ion-icon name="ios-cart"></ion-icon><h4>Add to Cart</h4></a>
                                    <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><ion-icon name="ios-eye"></ion-icon>
                                    <h4>Quick View</h4></a>
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
            loadStatus: false
        }
    },

    computed: {
        getProdCategory() {
            return this.$store.getters.getSingleProduct;
        },
        async getProds(){
            return this.$store.getters.getProductsCategory
        },
        similarProducts() {
            return this.$store.getters.getSimilarProducts;
        },
        ...mapState(['singleProduct'])
    },

    async created() {

        this.loading = true;
        // let singleProduct = 
        //wait for states to load
        const sleep = m => new Promise(r => setTimeout(r, m));
        await sleep(3000);

        // let id = this.singleProduct.category.id;

        let prods = this.getProductCategoryMethod()
        .then((data) => this.runDispatch(data) );
    },

    methods: {
        async getProductCategoryMethod(){
            // return this.$store.getters.getProductsCategory
            return this.$store.state.singleProduct
        },

        async runDispatch(product) {
            this.$store.dispatch('fetchSimilarProducts', {
                apollo: this.$apollo,
                category_id: product.category.id
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