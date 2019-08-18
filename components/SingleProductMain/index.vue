<template>
  <div>
    <div class="shop-area pt-60 pb-20">
      <div class="container">
        <div v-if="loading">
          <img src="https://i.imgur.com/JfPpwOA.gif">
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
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="product-details-content product-sticky">
            <h2 class="product-details-name">{{singleProducts.name}}</h2>
            <div class="product-details-price">
              <span>{{singleProducts.price.localized}}</span>
            </div>
            <p class="product-details-description">
              {{singleProducts.description}}
            </p>
            <b-dropdown variant="outline-dark" id="product-type" text="Select type" class="m-md-2 product-type">
              <b-dropdown-item>Orange</b-dropdown-item>
              <b-dropdown-item>Apple</b-dropdown-item>
              <b-dropdown-item>Banana</b-dropdown-item>
            </b-dropdown>

            <div class="pro-details-quality">
              <b-button class="product-addtocart hvr-grow" href="#">Add to Cart</b-button>
            </div>
            <div class="social-share">
              <social-sharing url="https://store.mercuriemart.com" title="Product Name"
                description="Product Description" quote="Product Description" hashtags="shop,store,mercuriemart"
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
                  <network network="pinterest" class="hvr-grow">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </network>
                </div>
              </social-sharing>
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
        loading: false,
        loadStatus: false,
      }
    },

    async mounted() {
      this.loading = true,
        this.$store.dispatch('fetchSingleProducts', {
          apollo: this.$apollo,
          product_id: this.$route.params.id
        })
        .then(async () => {
          this.loading = false;
          this.loadStatus = true
        });
    }
  };

</script>

<style lang="scss" scoped>
  @import "./_index.scss";

</style>
