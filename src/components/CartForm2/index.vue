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
              <tr v-for="(getCartItem, index) in getCartItems" :key="index">
                <td class="product-thumbnail">
                  <a href="#"><img :src="`${getCartItem.imgUrl}`" alt="" width="100"></a>
                </td>
                <td class="product-name"><a href="#">{{getCartItem.prodName}} - {{getCartItem.name}}</a></td>
                <td class="product-price">{{getCurrency}} {{getCartItem.price}}</td>
                <td class="product-quantity">
                  <span class="quantity">
                    <number-input inline controls :min="1" :max="10" size="small" @change="onQtyChange(`${getCartItem.prodId}`, $event )" :value="`${getCartItem.quantity}`"></number-input>
                  </span>
                </td>
                <td class="product-subtotal" v-on: :value="`${getCartItem.quantity * getCartItem.price}`">{{getCurrency}} {{ getCartItem.quantity * getCartItem.price }}</td>
                <td class="product-remove">
                  <a @click="deleteCartItem(index)" href="#"> 
                    <ion-icon name="trash"></ion-icon> 
                  </a>
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
        onQtyChange(...args){
            // console.log(typeof args[1])

            this.$store.dispatch('incrementCartQuantity',{
              productId: args[0],
              quantity: args[1]
            });
        },

        deleteCartItem(cartIndex){
          this.$store.dispatch('deleteCartItem', cartIndex);
          // console.log(cartIndex)
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
