<template>
  <div>
    <div class="shop-area pt-100 pb-100">
      <div class="container">
        <div v-if="loading">
            <img src="https://i.imgur.com/JfPpwOA.gif">
        </div>
        <div v-else-if="loadStatus" class="row">
          <div class="col-xl-7 col-lg-7 col-md-12">
            <div class="product-details-img mr-20 product-details-tab">
              <div class="zoompro-wrap zoompro-2 pr-20">
                <div class="zoompro-border zoompro-span">
                  <img
                    class="zoompro"
                    :src="`${singleProducts.images[0].url}`"
                    alt
                  />
                  <!-- <img
                    class="zoompro"
                    :src="`${singleProducts.images[0].url}`"
                    data-zoom-image="@/assets/img/products/sa-prod1.png"
                    alt
                  /> -->
                </div>
              </div>
              <!-- <div id="gallery" class="product-dec-slider-2">
                <a
                  data-image="https://res.cloudinary.com/mercurie/image/upload/v1565670635/mercuriemart/sample-2.jpg"
                  data-zoom-image="https://res.cloudinary.com/mercurie/image/upload/v1565670635/mercuriemart/sample-2.jpg"
                >
                  <img
                    src="https://res.cloudinary.com/mercurie/image/upload/v1565670635/mercuriemart/sample-1.jpg"
                    alt
                  />
                </a>
                <a
                  data-image="https://res.cloudinary.com/mercurie/image/upload/v1565671069/mercuriemart/sample-2b.jpg"
                  data-zoom-image="https://res.cloudinary.com/mercurie/image/upload/v1565671069/mercuriemart/sample-2b.jpg"
                >
                  <img
                    src="https://res.cloudinary.com/mercurie/image/upload/v1565671066/mercuriemart/sample-2a.jpg"
                    alt
                  />
                </a>
                <a
                  data-image="https://res.cloudinary.com/mercurie/image/upload/v1565671069/mercuriemart/sample-2b.jpg"
                  data-zoom-image="https://res.cloudinary.com/mercurie/image/upload/v1565671069/mercuriemart/sample-2b.jpg"
                >
                  <img
                    src="https://res.cloudinary.com/mercurie/image/upload/v1565671066/mercuriemart/sample-2a.jpg"
                    alt
                  />
                </a>
              </div> -->
            </div>
          </div>
          <div class="col-lg-5 col-lg-5 col-md-12">
            <div class="product-details-content">
              <h2>{{singleProducts.name}}</h2>
              <div class="product-details-price">
                <span>{{singleProducts.price.localized}}</span>
              </div>
              <p>
                  {{singleProducts.description}}
              </p>

              <div class="pro-details-quality">
  <b-button variant ="dark" href="#">ADD TO CART</b-button>
              </div>
              <div class="pro-details-social">
                <ul>
                  <li>
                    <a href="#">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ion-icon name="logo-whatsapp"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ion-icon name="logo-pinterest"></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { GET_SINGLE_PRODUCTS } from "../../queries/productQueries";
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

  async mounted () {
        this.loading = true,
        this.$store.dispatch('fetchSingleProducts', {
            apollo: this.$apollo,
            product_id: this.$route.params.id
        })
        .then( async() => {
            this.loading = false;
            this.loadStatus = true
        });
  }
};
</script>

<style lang="scss" scoped>
@import "./_index.scss";
</style>