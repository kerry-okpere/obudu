<template>
  <div>
    <div class="shop-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-7 col-md-12">
            <div class="product-details-img mr-20 product-details-tab">
              <div class="zoompro-wrap zoompro-2 pr-20">
                <div class="zoompro-border zoompro-span">
                  <img
                    class="zoompro"
                    src="@/assets/img/products/sa-prod1.png"
                    data-zoom-image="@/assets/img/products/sa-prod1.png"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-lg-5 col-md-12">
            <div class="product-details-content">
              <h2 class="product-details-name">Organic Apple Cidar</h2>
              <div class="product-details-price">
                <span>$18.00</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et
                dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco
              </p>

              <div class="pro-details-quality">
                <b-button class="product-addtocart  hvr-grow" href="#"><ion-icon name="ios-cart" style="margin: 5px 10px 0px 5px"></ion-icon>Add to Cart</b-button>
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