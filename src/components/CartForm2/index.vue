<template>
  <section class="cart">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="table-responsive">
          <table class="cart-table">
            <thead>
              <tr>
                <th>Products</th>
                <th></th>
                <th>Price</th>
                <th>Quantity</th>
                <th class="h-total">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="getCartItem in getCartItems" :key="`${getCartItem.prodId}`">
                <td class="product-thumbnail">
                  <a href="#"><img :src="`${getCartItem.imgUrl}`" alt="" width="100"></a>
                </td>
                <td class="product-name"><a href="#">{{getCartItem.prodName}} - {{getCartItem.name}}</a></td>
                <td class="product-price">{{getCurrency}} {{getCartItem.price}}</td>
                <td class="product-quantity">
                  <span class="quantity">
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-btn variant="outline-info" @click="num--">-</b-btn>
                      </b-input-group-prepend>

                      <b-form-input type="number" min="1" v-model="num" @change="onQtyChange(`${getCartItem.prodId}`)" ref="itemQty" :value="`${getCartItem.quantity}`"></b-form-input>

                      <b-input-group-append>
                        <b-btn variant="outline-secondary" @click="num++">+</b-btn>
                      </b-input-group-append>
                    </b-input-group>
                  </span>
                </td>
                <td class="product-subtotal" ref="totalPrice"v-on: :value="`${getCartItem.quantity * getCartItem.price}`">{{getCurrency}} {{ getCartItem.quantity * getCartItem.price }}</td>
                <td class="product-remove">
                  <ion-icon name="trash"></ion-icon>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12"></div>
        <div class="col-lg-4 col-md-4 col-sm-12 c-button">
          <b-button @click="checkout()" size="lg" variant="primary" type="submit">Proceed to checkout</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      num: 1
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
        onQtyChange(event){
            this.$store.dispatch('incrementCartQuantity', event);
        },

        checkout(){
          this.$router.push("checkout");
        }
        
    }
};
</script>

<style lang="scss" scoped>
@import "./_index.scss";
</style>
