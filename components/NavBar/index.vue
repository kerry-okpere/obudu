<template>
  <header class="header-area sticky-bar clearfix">
    <div class="w-container">
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
            <div id="search" class="same-style header-search">
              <a @click="searchVisible = !searchVvisible" class="search-active" href="#">
                <img src="@/assets/img/search.svg" width="13" alt="" class="image" />
                <p class="menu-item">Search</p>
              </a>
              <div v-if="searchVisible" class="search-content" style="display: block;">
                <form id="search" action="/search">
                  <input type="text" placeholder="Search">
                  <button class="button-search"><ion-icon name="ios-search"></ion-icon></button>
                </form>
              </div>
            </div>
            <div class="same-style cart-wrap">
              <button @click="cartVisible = !cartVisible" class="icon-cart">
                <img src="@/assets/img/cart.svg" width="15" alt="" class="image" />
                <p class="menu-item">Cart</p>
                <span class="count-style">2</span>
              </button>
              <div v-if="cartVisible" class="shopping-cart-content cart-visible">
                            <ul>
                                <li class="single-shopping-cart">
                                    <div class="shopping-cart-img">
                                        <a href="#"><img alt="" src="@/assets/img/products/sa-prod1.png" width="60"></a>
                                    </div>
                                    <div class="shopping-cart-title">
                                        <h4><a href="#">Organic Apple Cider</a></h4>
                                        <h6>Quantity: 2</h6>
                                        <span>$260</span>
                                    </div>
                                    <div class="shopping-cart-delete">
                                        <a href="#"><ion-icon name="trash"></ion-icon></a>
                                    </div>
                                </li>
                                <li class="single-shopping-cart">
                                    <div class="shopping-cart-img">
                                        <a href="#"><img alt="" src="@/assets/img/products/sa-prod1.png" width="60"></a>
                                    </div>
                                    <div class="shopping-cart-title">
                                        <h4><a href="#">Organic Apple Cider</a></h4>
                                        <h6>Quantity: 2</h6>
                                        <span>$260</span>
                                    </div>
                                    <div class="shopping-cart-delete">
                                        <a href="#"><ion-icon name="trash"></ion-icon></a>
                                    </div>
                                </li>
                            </ul>
                            <div class="shopping-cart-total">
                                <h4>Total <span class="shop-total">$260.00</span></h4>
                            </div>
                            <div class="shopping-cart-btn text-center">
                                <a class="default-btn hvr-grow" href="/cart/">View Cart</a>
                                <a class="default-btn hvr-grow" href="/checkout/">Checkout</a>
                            </div>
                        </div>
            </div>
              <div class="mobile-menu-area">
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
              </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "NavBar",
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
