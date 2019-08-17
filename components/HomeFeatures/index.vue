<template>
  <div>
    <div class="columns home-features has-text-centered">
      <div class="column animated zoomIn">
        <span>
            <img width="50px" height="50px" src="../../assets/img/home/truck.svg" />
            <h3>Free Shipping</h3>
            <p>Enjoy free shipping on all orders above N30,000</p>
        </span>
      </div>
      <div class="column animated zoomIn">
        <span>
          <img width="50px" height="50px" src="../../assets/img/home/cards.svg" />
          <h3>Secure Payment</h3>
          <p>100% secure payment guaranteed at checkout</p>
        </span>
      </div>
      <div class="column animated zoomIn">
        <span>
          <img width="50px" height="50px" src="../../assets/img/home/support.svg" />
          <h3>Customer Support</h3>
          <p>Our support team is always here for you</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFeatures"
};
</script>

<style lang="scss" scoped>
@import "./_index.scss";
</style>
