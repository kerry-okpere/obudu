<template>
  <section class="checkout">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="checkout__steps">
            <md-steppers :md-active-step.sync="active" md-vertical md-linear>
              <md-step
                id="first"
                md-label="Shipping Details"
                md-description="Please enter your shipping details"
                :md-editable="true"
                :md-done.sync="first"
              >
                <a-form :form="form" @submit="setDone('first', 'second')" layout="inline">
                  <a-form-item :wrapper-col="wrapperCol">
                    <a-input
                      v-decorator="['firstName', { rules: [{ required: true, message: 'Please enter a valid first name' }] }]"
                      placeholder="First Name"
                      style="width: 250px; height: 40px;"
                      type="text"
                      name="firstname"
                    />
                  </a-form-item>
                  <a-form-item :wrapper-col="wrapperCol">
                    <a-input
                      v-decorator="['lastName', { rules: [{ required: true, message: 'Please enter a valid last name' }] }]"
                      placeholder="Last Name"
                      style="width: 250px; height: 40px;"
                      type="text"
                      name="lastname"
                    />
                  </a-form-item>
                  <a-form-item :wrapper-col="wrapperCol">
                    <a-input
                      v-decorator="['email', { rules: [{ required: true, message: 'Please enter a valid email address' }] }]"
                      placeholder="Email"
                      style="width: 250px; height: 40px;"
                      type="email"
                    />
                  </a-form-item>
                  <a-form-item :wrapper-col="wrapperCol">
                    <a-input
                      v-decorator="['phone', { rules: [{ required: true, message: 'Please enter a valid phone number' }] }]"
                      placeholder="Phone"
                      style="width: 250px; height: 40px;"
                      type="tel"
                    />
                  </a-form-item>
                  <a-form-item :wrapper-col="wrapperCol">
                    <a-input
                      v-decorator="['address', { rules: [{ required: true, message: 'Please enter a valid address' }] }]"
                      placeholder="Address"
                      style="width: 518px; height: 40px;"
                      class="adInput"
                      type="text"
                      name="address"
                    />
                  </a-form-item>
                  <a-form-item :wrapper-col="wrapperCol">
                    <a-input
                      v-decorator="['state', { rules: [{ required: true, message: 'Please enter a valid state' }] }]"
                      placeholder="State"
                      style="width: 250px; height: 40px;"
                    />
                  </a-form-item>
                  <a-form-item :wrapper-col="wrapperCol">
                    <a-select
                      showSearch
                      placeholder="Country"
                      optionFilterProp="children"
                      v-decorator="['country', { rules: [{ required: true, message: 'Please choose a country' }] }]"
                      style="width: 250px; height: 40px;"
                      @change="handleChange"
                      :filterOption="filterOption"
                    >
                      <a-select-option value="nigeria">Nigeria</a-select-option>
                      <a-select-option value="ghana">Ghana</a-select-option>
                      <a-select-option value="kenya">Kenya</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-form>
                <a-button
                  type="primary"
                  class="mt-3"
                  html-type="submit"
                  @click="setDone('first', 'second')"
                >Continue</a-button>
              </md-step>
              <md-step
                id="second"
                md-label="Shipping Method"
                md-description="Please choose your shipping method"
                :md-error="secondStepError"
                :md-editable="true"
                :md-done.sync="second"
              >
                <div class="checkout__steps-shipping">
                  <a-radio-group v-model="shippingMethod">
                    <a-radio :style="radioStyle" :value="1">
                      <span>Standard Shipping - N1,000</span>
                      <p>Delivery: 3-5 days</p>
                    </a-radio>
                    <a-radio :style="radioStyle" :value="2">
                      <span>Expedited Shipping - N3,500</span>
                      <p>Delivery: 2 days</p>
                    </a-radio>
                  </a-radio-group>
                </div>
                <a-button type="primary" class="mt-1" @click="setDone('second', 'third')">Continue</a-button>
                <!-- <a-button type="primary" @click="setError()">Set error!</a-button> -->
              </md-step>
              <md-step
                id="third"
                md-label="Payment Method"
                md-description="Please choose your payment method"
                :md-editable="true"
                :md-done.sync="third"
              >
                <div class="checkout__steps-shipping">
                  <a-radio-group v-model="paymentMethod">
                    <a-radio :style="radioStyle" :value="1">
                      <span>Pay on Delivery</span>
                      <p>Pay cash after you recieve items</p>
                    </a-radio>
                    <a-radio :style="radioStyle" :value="2">
                      <span>Pay Now</span>
                      <p>Pay online using your Visa/Mastercard</p>
                      <div>
                        <img src="../../assets/img/footer/paystack.svg" alt="Paystack" />
                      </div>
                    </a-radio>
                  </a-radio-group>
                </div>
                <a-button type="primary" @click="setDone('third')">Continue</a-button>
              </md-step>
            </md-steppers>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="checkout__summary" style="width: 350px">
            <a-card title="Order Summary" hoverable>
              <div class="checkout__summary-single">
                <div v-for="(cartItem, index) in getCartItems" class="row" :key="index">
                  <div class="col-lg-3 col-sm-3">
                    <img src="https://via.placeholder.com/100" alt="Product Name" />
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <h3 class="name">{{cartItem.name}} ({{cartItem.variantValues}})</h3>
                    <h3 class="variant">{{cartItem.variantValues}}</h3>
                    <h3 class="variant">{{cartItem.quantity}}</h3>
                  </div>
                  <div class="col-lg-3">
                    <h3 class="price">Price</h3>
                  </div>
                </div>
              </div>
              <div class="checkout__summary-total">
                <div class="row">
                  <div class="col">
                    <p>
                      Subtotal:
                      <span class="amount">Amount</span>
                    </p>
                    <p>
                      Shipping:
                      <span class="amount">Amount</span>
                    </p>
                    <p>
                      Total:
                      <span class="amount">Amount</span>
                    </p>
                  </div>
                </div>
              </div>
            </a-card>
            <div v-if="getCartCount > 0">
              <a-button v-if="paymentMethod === 1" type="primary" block>Checkout</a-button>
              <a-button v-else type="primary" block>Proceed to Payment</a-button>
            </div>
            <div v-else>
              <a-button v-if="paymentMethod === 1" type="primary" block disabled>Checkout</a-button>
              <a-button v-else type="primary" block disabled>Proceed to Payment</a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    active: "first",
    first: false,
    second: false,
    third: false,
    secondStepError: null,
    shippingMethod: 1,
    paymentMethod: 1,
    radioStyle: {
      display: "block",
      height: "70px",
      lineHeight: "30px"
    },
    wrapperCol: {
      xs: { span: 12 },
      sm: { span: 12 }
    }
  }),

  computed: {
    getCartCount() {
      return this.$store.getters["products/getCartQuantity"];
    },
    getCartItems() {
      return this.$store.getters["products/getCartItems"];
    }
  },

  //Form
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "shippingDetails" });
  },

  methods: {
    setDone(id, index) {
      this[id] = true;

      this.secondStepError = null;

      if (index) {
        this.active = index;
      }
    },
    setError() {
      this.secondStepError = "This is an error!";
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    async makePayment(key, email, amount, ref, checkout_id, callbackFunc) {
      let handler = PaystackPop.setup({
        key: key,
        email: email,
        amount: amount,
        currency: "NGN",
        ref: ref,
        metadata: {
          custom_fields: [{}]
        },
        callback: function(response) {
          if (response) {
            callbackFunc(checkout_id, response);
          } else {
            alert("payment failed");
          }
        },
        onClose: function() {
          alert("Do you want to close this window?");
        }
      });
      handler.openIframe();
    }

    // setShippingDetails(e) {
    //     e.preventDefault();
    //     this.form.validateFields((err, values) => {
    //         if (!err) {
    //             setDone('first', 'second');
    //         }
    //     });
    // },
  }
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>