<template>
  <section v-show="cartShow" class="cart" :class="[navFont]">
    <div class="cart__overlay">
      <div class="cart__main" :class="{animated: setCartShow, slideInRight: setCartShow}">
        <div class="container">
          <div class="cart__main-empty" v-if="cartEmpty">
            <img src="@/assets/img/cart.png" alt="Empty Cart">
            <h3>Your cart is empty</h3>
            <p>Looks like you haven't added any items to your cart yet, continue shopping to fill it up.</p>
            <a-button type="primary" block @click="setCartShow">Continue Shopping</a-button>
          </div>
          <div class="cart__main-full" v-else>
            <div class="header">
              <h1>Cart</h1>
              <a-button type="link" @click="setCartShow">
                <v-icon name="times" />
              </a-button>
            </div>
            <div class="item">
              <div class="row" v-for="(cartItem,index) in getCartItems" :key="index">
                <div class="col-3">
                  <img src="https://via.placeholder.com/80" alt="">
                </div>
                <div class="col-7">
                  <div class="item-details">
                    <h1>Product Name</h1>
                    <h3>NGN Price</h3>
                    <p>Quantity</p>
                  </div>
                </div>
                <div class="col-2">
                  <v-icon name="trash" />
                </div>
              </div>
              <a-divider />
            </div>
            <div class="footer">
              <div class="total">
                <h3>Total</h3>
                <h1>NGN Total</h1>
              </div>
              <a-button type="primary" block @click="checkout">Checkout</a-button>
            </div>
          </div>
        </div>
        <div class="col-2">
          <v-icon name="trash" />
        </div>
      </div>
      <a-divider />
    </div>
    <div class="footer">
      <div class="total">
        <h3>Total</h3>
        <h1>NGN Total</h1>
      </div>
      <a-button type="primary" block @click="checkout">Checkout</a-button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    cartEmpty: false
  }),
  methods: {
    setCartShow(e) {
        this.$store.state.styles.cartShow = false;
    },
    checkout() {
        this.$store.state.styles.cartShow = false;
        this.$router.push("/checkout");
    },
    findProduct(){
        // let newProdObj = {}
        // this.getProducts.map(item => {
        //     item.variants.finc(item.)
        // })
    }
  },
  computed: {
    getCartCount() {
      return this.$store.getters["products/getCartQuantity"];
    },

    getCartItems() {
      return this.$store.getters["products/getCartItems"];
    },

    getProducts() {
        return this.$store.getters["products/getProducts"]
    },

    ...mapGetters([
      "cartShow",
      "navFont"
      ])
  },

  beforeCreated() {

    // console.log(this.getCartCount)
    // this.cartEmpty = this.getCartCount !== 0 ? false : true
  }
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>