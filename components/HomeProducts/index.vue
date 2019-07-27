<template>
  <div class="container">
    <div class="columns home-products">
      <div class="column home-products__single">
        <div class="product__image">
          <img src="../../assets/img/products/item-1.png" alt="Product">
        </div>
        <div class="product__title">
          <h3><a href="#" >Double Duffle Bag</a></h3>
        </div>
        <div class="product__hover">
          <ul class="product__action">
              <li><a href="#"><i class="icon ion-md-heart"></i></a></li>

              <li><a href="#"><i class="icon ion-md-briefcase"></i></a></li>

              <li><a href="#"><i class="icon ion-md-shuffle"></i></a></li>
          </ul>
      </div>
        <div class="product__price">
          <p> ₦5,000.00</p>
        </div>
      </div>
      <div class="column home-products__single">
        <div class="product__image">
          <img src="../../assets/img/products/item-2.png" alt="Product">
        </div>
        <div class="product__title">
          <h3><a href="#" >Pattern Ankara Shirt</a></h3>
        </div>
        <div class="product__price">
          <p> ₦4,300.00</p>
        </div>
      </div>
      <div class="column home-products__single">
        <div class="product__image">
          <img src="../../assets/img/products/item-3.png" alt="Product">
        </div>
        <div class="product__title">
          <h3><a href="#" >White Collar Shirt</a></h3>
        </div>
        <div class="product__price">
          <p> ₦4,000.00</p>
        </div>
      </div>
      <div class="column home-products__single">
        <div class="product__image">
          <img src="../../assets/img/products/item-4.png" alt="Product">
        </div>
        <div class="product__title">
          <h3><a href="#" >Geneva Gold Watch</a></h3>
        </div>
        <div class="product__price">
          <p> ₦3,500.00</p>
        </div>
      </div>
    </div>
    <br><br>
  </div>
</template>

<script>
export default {
  name: "HomeProducts"
};
</script>

<style>
@import "./_index.scss";
</style>
