<template>
  <header class="header-area sticky-bar clearfix">
    <div class="container">
      <div class="row">
        <div class="col-xl-2 col-lg-2 col-md-6 col-4">
          <div class="logo">
            <a href="/">
              <img src="@/assets/img/logo.png" width="150" alt="" class="header-logo" />
            </a>
          </div>
        </div>
        <div class="col-xl-8 col-lg-8 d-none d-lg-block">
          <div class="main-menu">
            <nav>
              <ul>
                <li><a href="/shop/">Shop</a>
                <li><a href="/collection/groceries/">Groceries</a></li>
                <li><a href="/collection/sale/">Sale</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-6 col-8">
          <div class="header-right-wrap">


            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"><img src="@/assets/img/search.svg" width="13" alt="" class="image" /></b-button>
            </b-nav-form>


            <!-- <div id="search" class="same-style header-search">
              <a @click="searchVisible = !searchVisible" class="search-active" href="#">
                <img src="@/assets/img/search.svg" width="13" alt="" class="image" />
                <p class="menu-item">Search</p>
              </a>
              <div v-if="searchVisible" class="search-content" style="display: block;">
                <form id="search" action="/search">
                  <input type="text" placeholder="Search">
                  <button class="button-search"><ion-icon name="ios-search"></ion-icon></button>
                </form>
              </div>
            </div> -->
            <div class="same-style cart-wrap">
              <button @click="cartVisible = !cartVisible" class="icon-cart">
                <img src="@/assets/img/cart.svg" width="15" alt="" class="image" />
                <p class="menu-item">Cart</p>
                <span v-if="getCartCount" class="count-style">{{getCartCount}}</span>
              </button>
              <div v-if="cartVisible" class="shopping-cart-content cart-visible">
                <ul>
                  <li v-for="getCartItem in getCartItems" :key="getCartItem.prodId" class="single-shopping-cart">
                    <div class="shopping-cart-img">
                      <a href="#"><img alt="" :src="`${getCartItem.imgUrl}`" width="60"></a>
                    </div>
                    <div class="shopping-cart-title">
                      <h4><a href="#">{{getCartItem.name}}</a></h4>
                      <h6>Quantity: {{getCartItem.quantity}}</h6>
                      <span>${{getCartItem.price}}</span>
                    </div>
                    <div class="shopping-cart-delete">
                      <a href="#">
                        <ion-icon name="trash"></ion-icon>
                      </a>
                    </div>
                  </li>
                </ul>
                <div class="shopping-cart-total">
                  <h4>Total <span class="shop-total">$ {{getCartTotalPrice}}</span></h4>
                </div>
                <div class="shopping-cart-btn text-center">
                  <a class="default-btn hvr-grow" href="/cart/">View Cart</a>
                  <a class="default-btn hvr-grow" href="/checkout/">Checkout</a>
                </div>
              </div>
            </div>
            <!-- <div class="mobile-menu-area">
                <div class="mobile-menu">
                  <nav id="mobile-menu-active">
                    <ul class="menu-overflow">
                      <li><a href="/">Home</a></li>
                      <li><a href="/shop/">Shop</a></li>
                      <li><a href="/collection/groceries/">Groceries</a></li>
                      <li><a href="/collection/sale">Sale</a></li>
                    </ul>
                  </nav>
                </div>
              </div> -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "NavBar",
    computed: {
      getCartCount() {
        return this.$store.getters.getCartQuantity;
      },
      getCartItems() {
        return this.$store.getters.getCartItems;
      },
      getCartTotalPrice() {
        return this.$store.getters.getCartTotal;
      }
    },
    data() {
      return {
        searchVisible: false,
        cartVisible: false
      }
    },


  };

</script>

<style lang="scss" scoped>
  @import "./_index.scss";

</style>
