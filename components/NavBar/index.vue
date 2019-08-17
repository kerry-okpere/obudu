<template>
<div>
   <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar w-nav">
            <div class="w-container">
                <div class="nav-container div-block-5">
                    <a href="/" class="brand w-nav-brand">
                        <img src="@/assets/img/logo.png" width="150" alt="" class="heder-logo"/>
                    </a>
                    <nav class="nav__middle">
                        <nuxt-link to="/" class="nav-link w-nav-link">Shop</nuxt-link>
                        <nuxt-link to="/" class="nav-link w-nav-link">Collections</nuxt-link>
                    </nav>
                    <nav class="nav__right">
                        <img src="@/assets/img/search.svg" width="15" alt="" class="image"/>
                        <a href="#" class="nav-link nav-link__right w-nav-link">Search</a>
                        <img src="@/assets/img/cart.svg" width="15" alt="" class="image-2"/>
                        <a href="#" class="nav-link nav-link__right w-nav-link">Cart (2)</a>
                    </nav> 
                    <div class="menu-button w-nav-button">
                    </div>
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
