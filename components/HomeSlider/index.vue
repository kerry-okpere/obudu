<template>
  <div class="section">
            <div data-delay="10000" data-animation="slide" data-autoplay="1" data-hide-arrows="1" data-autoplay-limit="4" data-duration="500" class="slider w-slider">
                <div class="w-slider-mask">
                    <div class="w-slide">
                        <div class="div-block">
                            <h1 class="heading">Bounce Back in Style</h1>
                            <p class="paragraph">with the hottest trends this summer</p>
                            <a href="#" class="button w-button">SHOP NOW</a>
                        </div>
                    <img src="@/assets/img/slider/image-4.png" sizes="(max-width: 1920px) 100vw, 1920px" alt=""/>
                    </div>
                    <div class="w-slide">
                        <div class="div-block">
                            <h1 class="heading slide-content__white">
                                Enjoy up to 40% OFF<br/>this summer!
                            </h1>
                            <a href="#" class="button w-button">SHOP NOW</a>
                        </div>
                        <img src="@/assets/img/slider/image-3.jpg" sizes="(max-width: 1920px) 100vw, 1920px" alt=""/>
                    </div>
                </div>
                <div class="left-arrow w-slider-arrow-left">
                    <div class="icon w-icon-slider-left"></div>
                </div>
                <div class="right-arrow w-slider-arrow-right">
                    <div class="icon-2 w-icon-slider-right"></div>
                </div>
                <div class="w-slider-nav w-round"></div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'HomeSlider'
};
</script>
<style>
@import "./_index.scss";
</style>
