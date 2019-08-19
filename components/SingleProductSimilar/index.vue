<template>
<div class="product-area pb-60">
    <div class="w-container">
                <div class="row">
                    <div v-if="loading">
                            <img src="https://i.imgur.com/JfPpwOA.gif">
                    </div>
                    <div v-for="similarProduct in similarProducts" :key="similarProduct.node.id"   class="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-6">
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
            }).then( (data) => console.log(data));
            // this.$store.dispatch('fetchSimilarProducts', {
            //     apollo: this.$apollo,
            //     category_id: this.getProds
            // }).then( (data) => console.log(data));
        }

    },

    // async created() {

        // this.loading = true;
        // let singleProduct = 
        //wait for states to load
        // const sleep = m => new Promise(r => setTimeout(r, m));
        // await sleep(3000);

        // let id = this.singleProduct.category.id;
        // const {id}  = this.singleProduct.category;
        // console.log(id);

        // let prods = this.getProductCategoryMethod()
        // .then((data) => this.getIdRecursively(data))
        // .then((data) => this.runDispatch(data))
        
        // .then((data) => this.runDispatch(data) );
    // },
    async created() {

        const sleep = m => new Promise(r => setTimeout(r, m));
        await sleep(3000);

        // console.log(this.getProds);
        this.getSimilarProducts
        // let check = await this.fetchSimilarProducts(this.getProds);
        // await sleep(3000);
        // let similar_prod = check.data.category.products.edges;
        // similar_prod.shift();        
        // this.$store.commit("setSimilarProducts", similar_prod);

        // this.$store.state.similarProducts.push(similar_prod);
        // console.log();
        // console.log(this.getSingleProduct);
        // console.log(this.$wait.store.getters.getSingleProduct)
        // this.loading = true;
        // const sleep = m => new Promise(r => setTimeout(r, m));
        // await sleep(3000);

        // let id = this.singleProduct.category.id;
        // const {id}  = this.singleProduct.category;


        // await this.runDispatch(id);
        // let prods = this.getProductCategoryMethod()
        // .then((data) => this.getIdRecursively(data))
        // .then((data) => this.runDispatch(data))
    },

    methods: {
        async getProductCategoryMethod(){
            // return this.$store.getters.getProductsCategory
            return this.$store.state.singleProduct
        },

        async getIdRecursively(category){

            // const {category} = category;
            if( typeof category.category == undefined){
                // console.log(category.category.id);
                await this.getIdRecursively(category)
            } else{
                console.log("success ",category.category);
                return category
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