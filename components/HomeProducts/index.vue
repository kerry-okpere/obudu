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
                    <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-6">
                        <div class="product-wrap-2 mb-25 text-center hvr-grow-shadow">
                            <div class="product-img">
                                <a href="/product">
                                    <img class="default-img" src="@/assets/img/products/sa-prod1.png" alt="">
                                    <img class="hover-img" src="@/assets/img/products/sa-prod2.png" alt="">
                                </a>
                                <div class="product-action-2">
                                    <a title="Add To Cart" href="#"><ion-icon name="ios-cart"></ion-icon><h4>Add to Cart</h4></a>
                                    <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><ion-icon name="ios-eye"></ion-icon>
                                    <h4>Quick View</h4></a>
                                </div>
                            </div>
                            <div class="product-content-2">
                                <div class="title-price-wrap-2">
                                    <h3><a href="/product">Organic Apple Cidar</a></h3>
                                    <p class="home-product_cat"><a href="#">Groceries</a></p>
                                    <div class="price-2">
                                        <span>$ 60.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-6">
                        <div class="product-wrap-2 mb-25 text-center hvr-grow-shadow">
                            <div class="product-img">
                                <a href="/product">
                                    <img class="default-img" src="@/assets/img/products/sa-prod1.png" alt="">
                                    <img class="hover-img" src="@/assets/img/products/sa-prod2.png" alt="">
                                </a>
                                <div class="product-action-2">
                                    <a title="Add To Cart" href="#"><ion-icon name="ios-cart"></ion-icon><h4>Add to Cart</h4></a>
                                    <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><ion-icon name="ios-eye"></ion-icon>
                                    <h4>Quick View</h4></a>
                                </div>
                            </div>
                            <div class="product-content-2">
                                <div class="title-price-wrap-2">
                                    <h3><a href="/product">T- Shirt And Jeans</a></h3>
                                    <p class="home-product_cat"><a href="#">Groceries</a></p>
                                    <div class="price-2">
                                        <span>$ 60.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                     <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-6">
                        <div class="product-wrap-2 mb-25 text-center hvr-grow-shadow">
                            <div class="product-img">
                                <a href="/product">
                                    <img class="default-img" src="@/assets/img/products/sa-prod1.png" alt="">
                                    <img class="hover-img" src="@/assets/img/products/sa-prod2.png" alt="">
                                </a>
                                <div class="product-action-2">
                                    <a title="Add To Cart" href="#"><ion-icon name="ios-cart"></ion-icon><h4>Add to Cart</h4></a>
                                    <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><ion-icon name="ios-eye"></ion-icon>
                                    <h4>Quick View</h4></a>
                                </div>
                            </div>
                            <div class="product-content-2">
                                <div class="title-price-wrap-2">
                                    <h3><a href="/product">Organic Apple Juice</a></h3>
                                    <p class="home-product_cat"><a href="#">Groceries</a></p>
                                    <div class="price-2">
                                        <span>$ 60.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                     <div class="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-6">
                        <div class="product-wrap-2 mb-25 text-center hvr-grow-shadow">
                            <div class="product-img">
                                <a href="/product">
                                    <img class="default-img" src="@/assets/img/products/sa-prod1.png" alt="">
                                    <img class="hover-img" src="@/assets/img/products/sa-prod2.png" alt="">
                                </a>
                                <div class="product-action-2">
                                    <a title="Add To Cart" href="#"><ion-icon name="ios-cart"></ion-icon><h4>Add to Cart</h4></a>
                                    <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><ion-icon name="ios-eye"></ion-icon>
                                    <h4>Quick View</h4></a>
                                </div>
                            </div>
                            <div class="product-content-2">
                                <div class="title-price-wrap-2">
                                    <h3><a href="/product">Organic Orange Juice</a></h3>
                                    <p class="home-product_cat"><a href="#">Groceries</a></p>
                                    <div class="price-2">
                                        <span>$ 60.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>         
                </div>
            </div>
        </div>

  <!-- <div class="home-products__section w-container">
            <h1 class="home-section-title">NEW ARRIVALS</h1>
            <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
            <div v-else class="w-layout-grid grid-2">                
                <div v-for="homeProduct in homeProducts" :key="homeProduct.node.id"  class="home-products__single">
                    <div>
                        <nuxt-link :to="`/product/${homeProduct.node.id}`">
                            <img :src="`${homeProduct.node.images[0].url}`" class="loading" data-was-processed="true">
                        </nuxt-link>
                    </div>
                    <h1 class="home-products__name">
                        <nuxt-link :to="`/product/${homeProduct.node.id}`">{{homeProduct.node.name}}</nuxt-link>
                    </h1>
                    <p class="home-products__price">${{homeProduct.node.price.amount}}</p>
                </div>
            </div>
        </div> -->

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

<style lang="scss" scoped>
@import "./_index.scss";
</style>
