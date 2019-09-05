    <template>
      <div>
        <footer>
          <div class="container">
            <div class="footer__main">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12">
                  <p class="menu-label">Categories</p>
                  <ul class="menu-list">
                    <li><a>Clothing</a></li>
                    <li><a>Accessories</a></li>
                    <li><a>Footwear</a></li>
                    <li><a>Bags</a></li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12">
                  <p class="menu-label">Account</p>
                  <ul class="menu-list">
                    <li><a>Sign in</a></li>
                    <li><a>Register</a></li>
                    <li><a>Orders</a></li>
                    <li><a>Wishlist</a></li>
                  </ul>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <p class="menu-label">Newsletter</p>
                  <b-form>
                    <b-form-group
                      id="newsletter-group"
                    >
                      <b-form-input
                        size="sm"
                        id="newsletter"
                        v-model="form.newsletterEmail"
                        type="email"
                        required
                        placeholder="Enter email"
                      ></b-form-input>
                    </b-form-group>
                  </b-form>
                  <p class="newsletter">Subscribe for updates on new products and more!</p>
                  <span class="contact-social">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div class="container">
          <div class=" footer__sub">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <p>© Copyright, Your Store. All Rights Reserved</p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="payment-logos">
                  <img src="../../assets/img/footer/paystack.svg" alt="Paystack Logo" width="100">
                  <img src="../../assets/img/footer/flutterwave.svg" alt="Flutterwave Logo" width="100">
                  <img src="../../assets/img/footer/quickteller.svg" alt="Quickteller Logo" width="100">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>


    <script>
      export default {
        data() {
          return {
            form: {
              newsletterEmail: null
            }
          }
        }
      };

    </script>

    <style lang="scss" scoped>
      @import "./_index.scss";

    </style>
