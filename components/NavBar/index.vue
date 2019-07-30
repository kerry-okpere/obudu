<template>
   <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar w-nav">
            <div class="w-container">
                <div class="nav-container div-block-5">
                    <a href="#" class="brand w-nav-brand">
                        <img src="https://uploads-ssl.webflow.com/5d2ca9e22be6bac201dbab3a/5d3ec80973102c4cf2c71eff_logo.png" width="150" alt="" class="heder-logo"/>
                    </a>
                    <div class="nav__middle">
                        <a href="#" class="nav-link w-nav-link">Shop</a>
                        <a href="#" class="nav-link w-nav-link">Collections</a>
                        <a href="#" class="nav-link w-nav-link">Sale</a>
                    </div>
                    <nav role="navigation" class="nav__right w-nav-menu">
                        <img src="https://uploads-ssl.webflow.com/5d2ca9e22be6bac201dbab3a/5d3ec80873102c28fbc71efe_search.svg" width="15" alt="" class="image"/>
                        <a href="#" class="nav-link nav-link__right w-nav-link">Search</a>
                        <img src="https://uploads-ssl.webflow.com/5d2ca9e22be6bac201dbab3a/5d3ec809cb7dfd5295f7d654_cart.svg" width="15" alt="" class="image-2"/>
                        <a href="#" class="nav-link nav-link__right w-nav-link">Cart</a>
                    </nav>
                    <div class="menu-button w-nav-button">
                        <div class="w-icon-nav-menu"></div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
@import "./_index.scss";
</style>
