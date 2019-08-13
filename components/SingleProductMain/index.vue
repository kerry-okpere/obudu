<template>
          <div class="single-product__container w-container">
            <h1 class="breadcrumbs">Breadcrumbs here</h1>
            <div class="w-row">
                <div class="column w-col w-col-7">
                    <a href="#" class="lightbox-link w-inline-block w-lightbox">
                        <div v-if="`${ this.products.image }` !== ''   ">
                            <img :src="`${ this.products.image }`" sizes="(max-width: 767px) 92vw, (max-width: 991px) 396.328125px, 520px" alt="" class="single-product__main-image"/>
                        </div>
                        <div v-else>
                            <!-- <img :src="`https://dummyimage.com/600x400/525969/fff.png&text=${this.name}`" sizes="(max-width: 767px) 92vw, (max-width: 991px) 396.328125px, 520px" alt="" class="single-product__main-image"/> -->
                        </div>
                    </a>
                </div>
                <div class="single-product__right w-col w-col-5">
                    <div>
                        <!-- <h1 class="single-product__title">{{ this.products.productDetails.name }}</h1> -->
                        <!-- <h1 class="single-product__title">{{ this.products.name }}</h1> -->
                        <h1 class="single-product__title">{{ this.products.name }}</h1>
                        <p class="single-product__description">
                            {{ this.products.description }}
                        </p>
                        <!-- <ul class="list single-product__description">
                            <li>10.5 × 7 × 2.5  in.</li>
                            <li>Strap Length: 46 in.</li>
                            <li>Strap Drop: 15 – 22.5 in.</li>
                            <li>Dyed, molded, and stitched by hand</li>
                            <li>Color may vary slightly</li>
                        </ul> -->
                        <p class="single-product__description">
                            <em>This item is made to order. Please allow 5 – 15 business days for delivery within the U.S. International orders may take longer to ship depending on location.</em>
                            <br/>
                        </p>
                        <!-- <div class="single-product__quantity">
                            <div class="quantity-label">Quantity</div>
                            <input class="quantity" size="4" max="9999" min="1" value="1" type="number" step="1">
                        </div> -->
                        <h1 class="single-product__price">{{this.products.price.currency}} {{this.products.price.amount}}</h1>
                        <a href="#" class="single-product__addtocart w-button">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

import { GET_SINGLE_PRODUCTS } from "../../queries/productQueries";
// import store from '@/store/index';

export default {
    name: "SingleProductMain",
    data(){
        return {
            products: {
                id: '',
                image: '',  
                price:{
                    currency: '',
                    amount: ''
                },
                name: '',
                description: ''
            },
        }
    },

    // computed: {
    //     products() {
    //         return store.state.products
    //     }
    // },

  async mounted () {
        // console.log(this.$route.params.id);
        this.products.id = this.$route.params.id;
        let singleProds = await this.getSingleProducts();
        // store.commit('setProductsName', singleProds.name);
        // store.commit('setProductsId', this.$route.params.id);
        // store.commit('setProductsCatId', singleProds.category.id);
        this.products.productDetails = singleProds;
        this.products.description = singleProds.description;
        this.products.name = singleProds.name;
        this.products.image = singleProds.images[0].url;
        this.products.price.currency = singleProds.price.currency;
        this.products.price.amount = singleProds.price.amount
        // console.log(singleProds.category.id);
  },

  methods: {
    async getSingleProducts() {
        
        let response = await this.$apollo.query({
            query: GET_SINGLE_PRODUCTS,
            variables: { "id": this.products.id }
        });

        return response.data.product;
    }
  }
};
</script>

<style>
</style>
