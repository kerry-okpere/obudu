<template>
  <div>
    <div class="shop-area pt-60 pb-20">
      <div class="container">
            <div v-if="loading" class="d-flex justify-content-center mb-3">
                <b-spinner type="grow" variant="primary" label="Loading..."></b-spinner>
            </div>
        <div v-else-if="loadStatus" class="row">
          <div class="col-lg-6 col-md-6">
            <div class="product-details-gallery">
              <div class="dec-img-wrap zoompro-span mb-30">
                <img class="zoompro" :src="`${singleProducts.images[0].url}`" alt />
              </div>
              <!-- <div class="dec-img-wrap zoompro-span mb-30">
                <img class="zoompro" :src="`${singleProducts.images[0].url}`" alt />
              </div> -->
            </div>
          </div>
        <div class="col-lg-6 col-md-6">
          <div class="product-details-content product-sticky">
            <h2 class="product-details-name">{{singleProducts.name}}</h2>
            <h3 v-if="price" id="price" ref="price" class="product-details-price">{{price}}</h3>
            <h3 v-else-if="noPrice" id="price" ref="price" class="product-details-price">{{singleProducts.price.localized}}</h3>
            <p class="product-details-description">
              {{singleProducts.seoDescription}}
            </p>
              <b-form-select @change="onChange($event)" v-model="selected" :options="options">
                <template slot="first">
                  <option ref="cart" :value="null" disabled> Select {{singleProducts.variants[0].attributes[0].attribute.name}} </option>
                </template>
                <option v-for="(variants, index) in singleProducts.variants" :value="variants.name" :key="index"> {{variants.name}} </option>
              </b-form-select>
            <div v-if="formError">
              <b-alert show variant="danger"><a href="#" class="alert-link">Please select a variant</a></b-alert>
            </div>

            <div class="pro-details-quality" v-if="isAvailable">
              <b-button ref="addCartBtn" class="product-addtocart hvr-grow" @click.prevent="getFormValues(singleProducts)" >Add to Cart</b-button>
            </div>
            <div class="pro-details-quality" v-else>
              <b-button ref="addCartBtn" class="product-addtocart hvr-grow" disabled>Add to Cart</b-button>
            </div>
            
            <div class="social-share">
              <social-sharing :url="storeUrl" :title="singleProducts.name"
                :description="singleProducts.seoDescription" quote="Hey checkout" hashtags="shop,store,mercuriemart"
                inline-template>
                <div>
                  <div class="social-share">
                    <p>Share</p>
                  <network network="facebook" class="hvr-grow">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </network>
                  <network network="twitter" class="hvr-grow">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </network>
                  <network network="whatsapp" class="hvr-grow">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </network>
                  </div>
                  <!-- <network network="pinterest" class="hvr-grow">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </network> -->
                </div>
              </social-sharing>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import {
    GET_SINGLE_PRODUCTS
  } from "../../queries/productQueries";
  import store from '@/store/index';

  export default {
    name: "SingleProductMain",
    computed: {
      singleProducts() {
        return this.$store.getters.getSingleProduct;
      }
    },
    data() {
      return {
        selected: null,
        isAvailable: true,
        loading: false,
        loadStatus: false,
        formError: false,
        storeUrl: '',
        price: false,
        noPrice: true
      }
    },

  async created () {
      this.loading = true,
      this.$store.dispatch('fetchSingleProducts', {
        apollo: this.$apollo,
        product_id: this.$route.params.id
      })
      .then(async () => {
        this.loading = false;
        this.loadStatus = true


      });
      if(process.browser){
        this.storeUrl = window.location.href;
      }

        // const sleep = m => new Promise(r => setTimeout(r, m));
        // await sleep(3000);
    
  },

  methods: {
    addProductToCart(product){
      this.$store.dispatch('addProductsToCart', product);
    },

    getFormValues(singleProducts){
      if(this.selected !== null){
        this.formError = false;
        let product = this.singleProducts;
        product['selected'] = this.selected;
        this.addProductToCart(product);
      } else{
        this.formError = true;
        return;
      }
    },

    onChange(event){
      let getSelectedVariantDetails = this.singleProducts.variants.find( (variant) => variant.name == event );
      this.price = getSelectedVariantDetails.price.localized;
      
      if(event !== null){
        this.formError = false;
      }
      if(getSelectedVariantDetails.stockQuantity <= 0){
        this.isAvailable = false
      } else {
        this.isAvailable = true        
      }

    }

  }

  };

</script>

<style lang="scss" scoped>
  @import "./_index.scss";

</style>
