 <template>
  <div class="checkout-area pt-95 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="checkout-form">
                          <h3 class="pb-20">Billing Information</h3>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">

              <b-form-group id="first-name" label="First Name *" label-for="first-name">
                <b-form-input id="first-name" v-model="form.firstName" required placeholder="Your first name"></b-form-input>
              </b-form-group>

                            <b-form-group id="last-name" label="Last Name *" label-for="last-name">
                <b-form-input id="last-name" v-model="form.lastName" required placeholder="Your last name"></b-form-input>
              </b-form-group>

                            <b-form-group id="email"
                            label="Email *"
                            label-for="email">
                <b-form-input id="email"
                              v-model="form.email"
                              type="email"
                              required
                              placeholder="Your email address"></b-form-input>
              </b-form-group>

                                          <b-form-group id="phone" label="Phone *" label-for="phone">
                <b-form-input id="phone" v-model="form.phone" required placeholder="Your phone number"></b-form-input>
              </b-form-group>

                                                        <b-form-group id="country" label="State *" label-for="country">
                <b-form-input id="country" v-model="form.country" required placeholder="Country"></b-form-input>
              </b-form-group>

                                                        <b-form-group id="address" label="Address *" label-for="address">
                <b-form-input id="address" v-model="form.street" required placeholder="Your street address"></b-form-input>
              </b-form-group>



              <b-form-group id="input-group-4" class="pb-50">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                  <b-form-checkbox value="me">Create an account?</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
            </b-form>
          </div>
        </div>
        <div class="col-lg-5">
                        <h3 class="pb-20">Your order</h3>
          <div class="your-order-area">
            <div class="your-order-wrap gray-bg-4">
              <div class="your-order-product-info">
                <div class="your-order-top">
                  <ul>
                    <li>Product</li>
                    <li>Total</li>
                  </ul>
                </div>
                <div class="your-order-middle">
                  <ul>
                    <li v-for="cartItem in getCartItems" :key="cartItem.prodId" >
                      <span class="order-middle-left">{{cartItem.prodName}} X {{cartItem.quantity}}</span>
                      <span class="order-price">{{getCurrency.currency}} {{cartItem.price * cartItem.quantity }}</span>
                    </li>
                  </ul>
                </div>
                <div class="your-order-bottom">
                  <ul>
                    <li class="your-order-shipping">Shipping</li>
                    <li>Free shipping</li>
                  </ul>
                </div>
                <div class="your-order-total">
                  <ul>
                    <li class="order-total">Total</li>
                    <li>{{getCurrency.currency}} {{ grandTotal }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="Place-order mt-25">
              <a class="btn-hover" href="#">Place Order</a>
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
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  computed: {
    getCartItems(){
        return this.$store.getters.getCartItems;
    },
    grandTotal(){
        return this.$store.getters.cartTotalPrice
    },
    getCurrency(){
        return this.$store.getters.getStoreCurrency
    }

  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.email = "";
      this.form.phone = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./_index.scss";
</style>