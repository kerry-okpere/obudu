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
              <div class="dec-img-wrap zoompro-span mb-30">
                <img class="zoompro" :src="`${singleProducts.images[0].url}`" alt />
              </div>
            </div>
          </div>
        <div class="col-lg-6 col-md-6">
          <div class="product-details-content product-sticky">
            <h2 class="product-details-name">{{singleProducts.name}}</h2>
            <p class="product-details-description">
              {{singleProducts.description}}
            </p>
              <b-form-select v-model="selected" :options="options">
                <template slot="first">
                <option :value="null" disabled> Select variant </option>
                </template>
                <option v-for="variants in singleProducts.variants" :key="variants.id"> {{variants.name}} </option>
              </b-form-select>

<!--             <b-dropdown variant="outline-dark" id="product-type" text="Select type" class="m-md-2 product-type">
              <b-dropdown-item v-for="variants in singleProducts.variants" :key="variants.id" > {{variants.name}} </b-dropdown-item>
            </b-dropdown> -->

            <div class="pro-details-quality">
              <b-button class="product-addtocart hvr-grow" href="#">Add to Cart</b-button>
            </div>
            <div class="social-share">
              <social-sharing :url="storeUrl" :title="singleProducts.name"
                :description="singleProducts.description" quote="Hey checkout" hashtags="shop,store,mercuriemart"
                inline-template>
                <div>
                  <network network="facebook" class="hvr-grow">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </network>
                  <network network="twitter" class="hvr-grow">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </network>
                  <network network="whatsapp" class="hvr-grow">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </network>
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
        loading: false,
        loadStatus: false,
        storeUrl: ''
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
  }

  };

</script>

<style lang="scss" scoped>
  @import "./_index.scss";

</style>
