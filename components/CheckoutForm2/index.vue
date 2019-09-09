<template>
  <section class="checkout">
    <div class="container">
      <b-form v-if="show" @submit="checkout" validate>
        <div class="row">
          <div class="col-lg-6 col-md-16 cold-sm-12">
            <div class="checkout__left">

              <!-- Billing Details Form -->

              <h3>Billing Details</h3>

              <b-form-group id="first-name" label="First Name" label-for="first-name">
                <b-form-input type="text" id="first-name" v-model="form.firstName" required
                  placeholder="Your first name">
                </b-form-input>
              </b-form-group>

              <b-form-group id="last-name" label="Last Name" label-for="last-name">
                <b-form-input type="text" id="last-name" v-model="form.lastName" required placeholder="Your last name">
                </b-form-input>
              </b-form-group>

              <b-form-group id="company-name" label="Company Name" label-for="company-name">
                <b-form-input type="text" id="company-name" v-model="form.companyName" required
                  placeholder="Your company name">
                </b-form-input>
              </b-form-group>

              <b-form-group id="email" label="Email" label-for="email">
                <b-form-input type="email" id="email" v-model="form.email" required placeholder="Your email address">
                </b-form-input>
              </b-form-group>

              <b-form-group id="phone" label="Phone" label-for="phone">
                <b-form-input type="tel" id="phone" v-model="form.phone" required placeholder="Your phone number">
                </b-form-input>
              </b-form-group>

              <b-form-group id="country" label="Country" label-for="country">
                <b-form-select v-model="countrySelected" :options="countryOptions" size="sm" required></b-form-select>
              </b-form-group>

              <b-form-group id="state" label="State" label-for="state">
                <b-form-select v-model="stateSelected" :options="stateOptions" size="sm" required></b-form-select>
              </b-form-group>

              <b-form-group id="postal" label="Postal Code" label-for="postal">
                <b-form-input type="text" id="postal" v-model="form.postal" required placeholder="Your postal code">
                </b-form-input>
              </b-form-group>

              <b-form-group id="address" label="Address" label-for="address">
                <b-form-input type="text" id="address" v-model="form.street" required placeholder="Your street address">
                </b-form-input>
              </b-form-group>



              <!-- Shipping Details Checkbox -->
              <!-- <b-form>
                <b-form-checkbox @change="toggleShipping" v-model="shippingDetails" id="shipping">
                Ship to a different address?</b-form-checkbox>
                </b-form> -->

              <!-- Shipping Details Form -->

              <!-- <b-form v-if="shippingVisible" validated="true">

              <b-form-group id="first-name" label="First Name" label-for="first-name">
                <b-form-input type="text" id="first-name" v-model="form.firstName" required placeholder="Your first name">
                </b-form-input>
              </b-form-group>

              <b-form-group id="last-name" label="Last Name" label-for="last-name">
                <b-form-input type="text" id="last-name" v-model="form.lastName" required placeholder="Your last name">
                </b-form-input>
              </b-form-group>

              <b-form-group id="email" label="Email" label-for="email">
                <b-form-input type="email" id="email" v-model="form.email" required placeholder="Your email address">
                </b-form-input>
              </b-form-group>

              <b-form-group id="phone" label="Phone" label-for="phone">
                <b-form-input type="tel" id="phone" v-model="form.phone" required placeholder="Your phone number"></b-form-input>
              </b-form-group>

              <b-form-group id="country" label="Country" label-for="country">
                <b-form-select v-model="selected" :options="countryOptions" size="sm"></b-form-select>
              </b-form-group>

              <b-form-group id="state" label="State" label-for="state">
                <b-form-select v-model="selected" :options="stateOptions" size="sm"></b-form-select>
              </b-form-group>

              <b-form-group id="address" label="Address" label-for="address">
                <b-form-input type="text" id="address" v-model="form.street" required placeholder="Your street address">
                </b-form-input>
              </b-form-group>
            </b-form> -->

              <!-- Order Notes -->
              <!-- <p>Order Notes (Optional)</p>
            <b-form-textarea id="textarea" type="text" placeholder="Notes about your order e.g. special notes for delivery" rows="3" max-rows="6">
            </b-form-textarea> -->

            </div>
          </div>


          <div class="col-lg-6 col-md-16 cold-sm-12">
            <div class="checkout__right">
              <h3>Your Order</h3>

              <div class="checkout__right-card">

                <table>
                  <thead>
                    <tr class="cart-top">
                      <th class="left">Product</th>
                      <th class="right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="cartItem in getCartItems" :key="cartItem.prodId" class="cart-item">
                      <td class="product left">
                        {{cartItem.prodName}} <strong class="product-quantity">× {{cartItem.quantity}}</strong>
                      </td>
                      <td class="product right">
                        <span class="product-price">{{getCurrency}} {{cartItem.price * cartItem.quantity }}</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr class="cart-subtotal">
                      <th class="left">Subtotal</th>
                      <td class="right"><span class="product-price">{{getCurrency}} {{ grandTotal }}</span></td>
                    </tr>

                    <!-- <tr class="cart-shipping">
                    <th>Shipping</th>
                    <td data-title="Shipping">
                      <b-form-group>
                        <b-form-radio-group v-model="shippingSelected" id="shipping-Selected" name="shipping-method">
                            <b-form-radio value="lagos">Lagos</b-form-radio>
                            <b-form-radio value="otherStates">Outside Lagos</b-form-radio>
                        </b-form-radio-group>
                      </b-form-group>
                    </td>
                  </tr> -->

                    <tr class="cart-total">
                      <th class="left">Total</th>
                      <td class="right"><span class="product-price">{{getCurrency}} {{ grandTotal }}</span></td>
                    </tr>
                  </tfoot>
                </table>

                <!-- <div class="payment-method">
                <b-form-group>
                  <b-form-radio-group v-model="paymentSelected" id="payment-Selected" name="payment-method" stacked>
                    <b-form-radio value="delivery">Pay on Delivery</b-form-radio>
                    <b-form-radio value="paystack">Pay with Paystack</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div> -->

                <b-button size="lg" variant="primary" type="submit">Proceed to payment</b-button>

              </div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </b-form>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        form: {
          firstName: null,
          lastName: null,
          companyName: null,
          email: null,
          phone: null,
          postal: null,
          address: null
        },
        selected: null,
        countrySelected: 'nigeria',
        stateSelected: null,
        shippingVisible: false,
        shippingDetails: 'sameShipping',
        shippingSelected: 'lagos',
        paymentSelected: 'paystack',
        countryOptions: [{
          value: 'nigeria',
          text: 'Nigeria'
        }],
        stateOptions: [{
            value: 'abia',
            text: 'Abia'
          },
          {
            value: 'adamawa',
            text: 'Adamawa'
          },
          {
            value: 'akwa-ibom',
            text: 'Akwa Ibom'
          },
          {
            value: 'anambra',
            text: 'Anambra'
          },
          {
            value: 'bauchi',
            text: 'Bauchi'
          },
          {
            value: 'bayelsa',
            text: 'Bayelsa'
          },
          {
            value: 'benue',
            text: 'Benue'
          },
          {
            value: 'borno',
            text: 'Borno'
          },
          {
            value: 'cross-river',
            text: 'Cross River'
          },
          {
            value: 'delta',
            text: 'Delta'
          },
          {
            value: 'ebonyi',
            text: 'Ebonyi'
          },
          {
            value: 'edo',
            text: 'Edo'
          },
          {
            value: 'ekiti',
            text: 'Ekiti'
          },
          {
            value: 'enugu',
            text: 'Enugu'
          },
          {
            value: 'fct',
            text: 'FCT'
          },
          {
            value: 'gombe',
            text: 'Gombe'
          },
          {
            value: 'imo',
            text: 'Imo'
          },
          {
            value: 'jigawa',
            text: 'Jigawa'
          },
          {
            value: 'kaduna',
            text: 'Kaduna'
          },
          {
            value: 'kano',
            text: 'Kano'
          },
          {
            value: 'katsina',
            text: 'Katsina'
          },
          {
            value: 'kebbi',
            text: 'Kebbi'
          },
          {
            value: 'kogi',
            text: 'Kogi'
          },
          {
            value: 'kwara',
            text: 'Kwara'
          },
          {
            value: 'lagos',
            text: 'Lagos'
          },
          {
            value: 'nasarawa',
            text: 'Nasarawa'
          },
          {
            value: 'niger',
            text: 'Niger'
          },
          {
            value: 'ogun',
            text: 'Ogun'
          },
          {
            value: 'ondo',
            text: 'Ondo'
          },
          {
            value: 'osun',
            text: 'Osun'
          },
          {
            value: 'oyo',
            text: 'Oyo'
          },
          {
            value: 'plateau',
            text: 'Plateau'
          },
          {
            value: 'rivers',
            text: 'Rivers'
          },
          {
            value: 'sokoto',
            text: 'Sokoto'
          },
          {
            value: 'taraba',
            text: 'Taraba'
          },
          {
            value: 'yobe',
            text: 'Yobe'
          },
          {
            value: 'zamfara',
            text: 'Zamfara'
          }

        ]
      }
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
      toggleShipping(checked) {
        this.shippingVisible = true
      },

      createCheckout(chkInput){
        return  this.$store.dispatch("createCart", {
          apollo: this.$apollo,
          checkoutInput: chkInput
        })
      },

      saveCheckout() {
        let newLines = this.getCartItems
        let newCart = [];
        for(let i=0; i<newLines.length; i++){
          newCart[i] = {
            variantId: newLines[i].variantId,
            quantity: newLines[i].quantity,
          }
        }

        let checkoutInput = {
          email: this.form.email,
          shippingAddress:{
            city: this.stateOptions[0].value,
            companyName: this.form.companyName,
            country: this.countryOptions[0].value,
            countryArea: this.stateOptions[0].value,
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            phone: this.form.phone,
            postalCode: this.form.postal,
            streetAddress: this.address
          },
          lines: newCart
        };
        return checkoutInput;
      },

      async checkout(evt) {
        evt.preventDefault();
        let check = this.saveCheckout();
        let res = await this.createCheckout(check);
        console.log(res);

        alert("Redirecting to Paystack")
      }

    }
  }

</script>

<style lang="scss" scoped>
  @import "./_index.scss";

</style>
