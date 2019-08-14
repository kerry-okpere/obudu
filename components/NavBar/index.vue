<template>
<header class="header-area header-padding-1 sticky-bar header-res-padding clearfix">
    <div class="container">
        <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-6 col-4">
                <div class="logo">
                    <a href="index.html">
                        <img src="@/assets/img/logo.png" width="150" alt="" class="header-logo"/>
                    </a>
                </div>
            </div>
            <div class="col-xl-8 col-lg-8 d-none d-lg-block">
                <div class="main-menu">
                    <nav>
                        <ul>
                            <li><a href="/">Shop</a>
                            <li><a href="/category/groceries">Groceries</a></li>
                            <li><a href="/category/sale">Sale</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-6 col-8">
                   <div class="header-right-wrap">
                    <div class="same-style header-search">
                        <a class="search-active" href="#"><img src="@/assets/img/search.svg" width="15" alt="" class="image"/><p class="menu-item">Search</p></a>
                        <div class="search-content">
                            <form action="#">
                                <input type="text" placeholder="Search" />
                                <button class="button-search"><img src="@/assets/img/search.svg" width="15" alt="" class="image"/></button>
                            </form>
                        </div> 
                    </div>
                    <div class="same-style cart-wrap">
                        <button class="icon-cart">
                            <img src="@/assets/img/cart.svg" width="15" alt="" class="image"/>
                            <span class="count-style">2</span>
                        </button>
                        <div class="shopping-cart-content">
                            <ul>
                                <li class="single-shopping-cart">
                                    <div class="shopping-cart-img">
                                        <a href="#"><img src="@/assets/img/cart.svg" width="15" alt="" class="image"/>Cart</a>
                                    </div>
                                    <div class="shopping-cart-title">
                                        <h4><a href="#">T- Shart & Jeans </a></h4>
                                        <h6>Qty: 02</h6>
                                        <span>$260.00</span>
                                    </div>
                                    <div class="shopping-cart-delete">
                                        <a href="#"><i class="fa fa-times-circle"></i></a>
                                    </div>
                                </li>
                                <li class="single-shopping-cart">
                                    <div class="shopping-cart-img">
                                        <a href="#"><img alt="" src="assets/img/cart/cart-2.png"></a>
                                    </div>
                                    <div class="shopping-cart-title">
                                        <h4><a href="#">T- Shart & Jeans </a></h4>
                                        <h6>Qty: 02</h6>
                                        <span>$260.00</span>
                                    </div>
                                    <div class="shopping-cart-delete">
                                        <a href="#"><i class="fa fa-times-circle"></i></a>
                                    </div>
                                </li>
                            </ul>
                            <div class="shopping-cart-total">
                                <h4>Shipping : <span>$20.00</span></h4>
                                <h4>Total : <span class="shop-total">$260.00</span></h4>
                            </div>
                            <div class="shopping-cart-btn btn-hover text-center">
                                <a class="default-btn" href="cart-page.html">view cart</a>
                                <a class="default-btn" href="checkout.html">checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-menu-area">
            <div class="mobile-menu">
                <nav id="mobile-menu-active">
                    <ul class="menu-overflow">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
@import "./_index.scss";
</style>
