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
<style lang="scss" scoped>