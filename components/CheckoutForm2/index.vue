<template>
  <section class="checkout">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-16 cold-sm-12">
          <div class="checkout__left">

            <!-- Billing Details Form -->

            <h3>Billing Details</h3>
            <b-form @submit="onSubmit" v-if="show">

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
            </b-form>


              <!-- Shipping Details Checkbox -->
                <!-- <b-form>
                <b-form-checkbox @change="toggleShipping" v-model="shippingDetails" value="notsameShipping" unchecked-value="sameShipping" id="shipping">
                Ship to a different address?</b-form-checkbox>
                </b-form> -->

              <!-- Shipping Details Form -->
            
            <b-form v-if="shippingVisible">

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
            </b-form>

            <!-- Order Notes -->
            <p>Order Notes (Optional)</p>
            <b-form-textarea id="textarea" type="text" placeholder="Notes about your order e.g. special notes for delivery" rows="3" max-rows="6">
            </b-form-textarea>
          
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
                  <tr class="cart-item">
                    <td class="product left">
                      Apple Juice <strong class="product-quantity">× 1</strong>
                    </td>
                    <td class="product right">
                      <span class="product-price">$69.00</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="cart-subtotal">
                    <th class="left">Subtotal</th>
                    <td class="right"><span class="product-price">$69.00</span></td>
                  </tr>

                  <tr class="cart-shipping">
                    <th>Shipping</th>
                    <td data-title="Shipping">
                      <b-form-group>
                        <b-form-radio-group v-model="shippingSelected" id="shipping-Selected" name="shipping-method">
                            <b-form-radio value="lagos">Lagos</b-form-radio>
                            <b-form-radio value="otherStates">Outside Lagos</b-form-radio>
                        </b-form-radio-group>
                      </b-form-group>
                    </td>
                  </tr>

                  <tr class="cart-total">
                    <th class="left">Total</th>
                    <td class="right"><span class="product-price">$69.00</span></td>
                  </tr>
                </tfoot>
              </table>

              <div class="payment-method">
                <b-form-group>
                  <b-form-radio-group v-model="paymentSelected" id="payment-Selected" name="payment-method" stacked>
                    <b-form-radio value="delivery">Pay on Delivery</b-form-radio>
                    <b-form-radio value="paystack">Pay with Paystack</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </div>

              <b-button size="lg" variant="primary">Proceed to payment</b-button>

            </div>
          </div>
        </div>

        <div>

        </div>
      </div>
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
            email: null,
            phone: null,
            address: null
        },
        selected: null,
        shippingVisible: false,
        shippingDetails: 'sameShipping',
        shippingSelected: 'lagos',
        paymentSelected: 'paystack',
        countryOptions: [
          { value: 'nigeria', text: 'Nigeria' },
          { value: 'ghana', text: 'Ghana' },
          { value: 'kenya', text: 'Kenya' }
        ],
        stateOptions: [
          { value: 'lagos', text: 'Lagos' },
          { value: 'kano', text: 'Kano' },
          { value: 'abia', text: 'Abia' }
        ]
      }
    },
    methods: {
      toggleShipping(checked) {
        this.shippingVisible = true
      },

      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      
    }
  }

</script>

<style>

</style>
