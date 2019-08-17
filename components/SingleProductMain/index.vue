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
<!--               <div id="gallery" class="product-dec-slider-2">
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
              <h2>Organic Apple Cidar</h2>
              <div class="product-details-price">
                <span>$18.00</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et
                dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco
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
export default {
  name: "SingleProductMain"
};
</script>

<style lang="scss" scoped>
@import "./_index.scss";
</style>