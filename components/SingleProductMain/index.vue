<template>
  <div>
    <div class="shop-area pt-60 pb-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="product-details-gallery">
              <div class="dec-img-wrap zoompro-span mb-30">
                <img src="@/assets/img/products/sa-prod1.png" alt />
              </div>
              <div class="dec-img-wrap mb-30">
                <img src="@/assets/img/products/sa-prod2.png" alt />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="product-details-content product-sticky">
              <h2 class="product-details-name">Organic Apple Cidar</h2>
              <div class="product-details-price">
                <span>$18.00</span>
              </div>
              <p class="product-details-description">
                Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et
                dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco
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
                <social-sharing
                  url="https://store.mercuriemart.com"
                  title="Product Name"
                  description="Product Description"
                  quote="Product Description"
                  hashtags="shop,store,mercuriemart"
                  inline-template
                >
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
  </div>
</template>

<script>
export default {
  name: "SingleProductMain"
};
</script>

<style lang="scss" scoped>
@import "./_index.scss";
</style>