<template>
  <section v-show="cartShow" class="cart" :class="[navFont]">
    <div class="cart__overlay">
      <div class="cart__main" :class="{animated: setCartShow, slideInRight: setCartShow}">
        <div class="container">
          <div class="cart__main-empty" v-if="!cartFull">
            <img src="@/assets/img/cart.png" alt="Empty Cart" />
            <h3>Your cart is empty</h3>
            <p>Looks like you haven't added any items to your cart yet, continue shopping to fill it up.</p>
            <a-button type="primary" block @click="setCartShow()">Continue Shopping</a-button>
          </div>
          <div class="cart__main-full" v-else>
            <div class="header">
              <h1>Cart</h1>
              <a-button type="link" @click="setCartShow()">
                <v-icon name="times" />
              </a-button>
            </div>
            <div class="item">
              <div class="row" v-for="(cartItem,index) in getCartItems" :key="index">
                <div class="col-3">
                  <img class="responsive" :src="cartItem.image" alt />
                </div>
                <div class="col-7">
                  <div class="item-details">
                    <h1>{{cartItem.name}} ({{cartItem.variantValues}})</h1>
                    <h3>{{cartItem.price}}</h3>
                    <p>{{cartItem.quantity}}</p>
                  </div>
                </div>
                <div class="col-2">
                  <v-icon name="trash" @click="deleteCartItem(index)" />
                </div>
              </div>
              <a-divider />
            </div>
            <div class="footer">
              <div class="total">
                <h3>Total</h3>
                <h1>NGN {{ formatTotal }}</h1>
              </div>
              <a-button type="primary" block @click="checkout()">Checkout</a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    cartFull: () => {
      return this.getCartCount == 0 ? false : true;
    }
  }),

  computed: {
    getCartCount() {
      return this.$store.getters["products/getCartQuantity"];
    },
    getCartTotal() {
      return this.$store.getters["products/getCartTotal"];
    },
    getCartItems() {
      return this.$store.getters["products/getCartItems"];
    },
    formatTotal() {
      if (this.getCartCount > 0) {
        return new Intl.NumberFormat("en-IN", {
          maximumSignificantDigits: 3
        }).format(this.getCartTotal);
      } else {
        return 0;
      }
    },
    getProducts() {
      return this.$store.getters["products/getProducts"];
    },
    getCartShow(){
        return this.$store.getters["cartShow"];
    },
    ...mapGetters(["cartShow", "navFont"])
  },
  methods: {
    setCartShow() {
      this.$store.commit("setCartShow", false);
    },
    checkout() {
      this.cartShow = false;
      this.$router.push("/checkout");
    },
    deleteCartItem(index) {
      this.$store.dispatch("products/deleteCartItem", index);
    }
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