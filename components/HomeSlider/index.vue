<template>
  <div class="home-slider__container">
    <b-carousel class="animated fadeIn"
      id="carousel-1"
      v-model="slide"
      :interval="10000"
      controls
      background="#ababab"
      img-width="1440"
      img-height="300"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide img-src="https://res.cloudinary.com/mercurie/image/upload/v1564223934/mercuriemart/7_1920x993.png">
          <div class="home-slider__title">
              <h1 class="heading animated fadeInUp delay-1s">Bounce Back in Style</h1>
              <p class="paragraph animated fadeInUp delay-3s">with the hottest trends this summer</p>
            <b-button href="/shop/" class="home-slider__button animated fadeInUp delay-5s">Shop Now</b-button>
        </div>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://res.cloudinary.com/mercurie/image/upload/v1564224743/mercuriemart/bags-blue-bag-cardboard-1038000.jpg">
          <div class="home-slider__title-2">
              <h1 class="heading animated fadeInUp delay-1s">Bounce Back in Style</h1>
              <p class="paragraph animated fadeInUp delay-3s">with the hottest trends this summer</p>
            <b-button href="/shop/" class="home-slider__button animated fadeInUp delay-5s">Shop Now</b-button>
        </div>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "HomeSlider",

  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./_index.scss";
</style>
