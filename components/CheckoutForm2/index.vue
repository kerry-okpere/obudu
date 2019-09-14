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
                <b-form-input type="tel" min="14" max="14" id="phone" v-model="form.phone" required placeholder="Your phone number">
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
                <b-form-input type="text" id="address" v-model="form.address" required placeholder="Your street address">
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
                <div v-if="cart">
                  <b-button size="lg" ref="paymentBtn" variant="primary" type="submit">Proceed to payment</b-button>
                </div>
                <div v-else>
                  <b-button size="lg" ref="paymentBtn" variant="primary" type="submit" disabled>Proceed to payment</b-button>
                </div>

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
        cart: false,
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

        ],      
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
      },
      getCheckoutId(){
        return this.$store.getters.getCheckoutId;
      },
      getEnv(){
        return this.$store.getters.getEnvVariables;
      }
    },

    async created(){
      await this.$apolloHelpers.onLogout();
      if(this.getCartItems.length > 0){
        this.cart = true;
      }

      let check = this.singleProducts;
      console.log(check);

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

      updateCheckoutShippingOptions(chkInput, shipping_id){
        return this.$store.dispatch("updateShipping", {
          apollo: this.$apollo,
          checkoutInput: chkInput,
          shippingId: shipping_id
        })
      },

      updateCheckoutBillingAddress(checkoutId){
        let billingAddress = {
          city: this.stateOptions[0].value,
          country: "NG",
          countryArea: this.stateOptions[0].value,
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          postalCode: this.form.postal,
          streetAddress1: this.form.address,
        }
        return this.$store.dispatch("updateBilling", {
          apollo: this.$apollo,
          billingAddress,
          checkoutId
        })
      },

      getPaymentToken(gateway_name){
        return this.$store.dispatch("getPaymentToken", {
          apollo: this.$apollo,
          gateway: gateway_name
        })
      },

      createPayment(checkoutId, amount, gateway){
        let billingAddress = {
          city: this.stateOptions[0].value,
          country: "NG",
          countryArea: this.stateOptions[0].value,
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          postalCode: this.form.postal,
          streetAddress1: this.form.address,
        }

        let input = {
          amount,
          billingAddress,
          gateway,
          token: "auth"
        }


        return this.$store.dispatch("createPayment", {
          apollo: this.$apollo,
          checkoutId,
          input
        })
      },

      completeCheckout(checkout_id){
        return this.$store.dispatch("completePayment", {
          apollo: this.$apollo,
          checkoutInput: checkout_id
        });
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
            country: "NG",
            countryArea: this.stateOptions[0].value,
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            phone: this.form.phone,
            postalCode: this.form.postal,
            streetAddress1: this.form.address
          },
          lines: newCart
        };
        return checkoutInput;
      },

      // The power house, all the shit happens in this function and other functions. Psych!! 
      async checkout(evt) {
        evt.preventDefault();
        let checkoutInpt = this.saveCheckout();
        let res = await this.createCheckout(checkoutInpt);
        // console.log(res);
        let err = res.checkoutCreate.errors;
        let paystack_key = this.getEnv.paystack.key;
        if(err.length >= 1){
          //TODO refactor error display
          let errMsg = err[0].message
          alert(errMsg);
        } else{
          let checkout_id = res.checkoutCreate.checkout.id;
          let shipping_mthd_id = res.checkoutCreate.checkout.availableShippingMethods[0].id;
          let updatedShippingOptions = await this.updateCheckoutShippingOptions(checkout_id, shipping_mthd_id);
          let totalPrice = updatedShippingOptions.checkoutShippingMethodUpdate.checkout.totalPrice.gross.amount
          await this.updateCheckoutBillingAddress(checkout_id);
          let gateway = "DUMMY";
          // let gateway = "PAYSTACK";
          let paymentRes = await this.getPaymentToken(gateway);
          let amtInKobo = totalPrice * 100;  //Convert Naira to Kobo
          await this.createPayment(checkout_id, totalPrice, gateway).catch( (error) => console.log(error));
          await this.makePayment(paystack_key, checkoutInpt.email, amtInKobo, paymentRes.paymentClientToken, checkout_id);

        }
        alert("Redirecting to Paystack")
      },

      async makePayment(key, email, amount, ref, checkout_id){
        let handler = PaystackPop.setup({
          key: key, 
          email: email,
          amount: amount,
          currency: "NGN",
          ref: ref,
          metadata: {
          custom_fields: [
            {}
          ]
          },
          callback: async (response) => {
            if(response){
              await this.completeCheckout(checkout_id);              
              alert("payment successful");
            } else {
              alert("payment failed");
            }
          },
          onClose: function(){
            alert('Do you want to close this window?');
          }
        });
        handler.openIframe();       
    }

    }
  }

</script>

<style lang="scss" scoped>
  @import "./_index.scss";

</style>
