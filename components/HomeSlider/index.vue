<template>
  <div class="section">
            <div data-delay="10000" data-animation="slide" data-autoplay="1" data-hide-arrows="1" data-autoplay-limit="4" data-duration="500" class="slider w-slider">
                <div class="w-slider-mask">
                    <div class="slide w-slide">
                        <div class="div-block">
                            <h1 class="heading">Bounce Back in Style</h1>
                            <p class="paragraph">with the hottest trends this summer</p>
                            <a href="#" class="button w-button">SHOP NOW</a>
                        </div>
                    </div>
                    <div class="w-slide">
                        <div class="div-block">
                            <h1 class="heading slide-content__white">
                                Enjoy up to 40% OFF<br/>this summer!
                            </h1>
                            <a href="#" class="button w-button">SHOP NOW</a>
                        </div>
                        <img src="https://uploads-ssl.webflow.com/5d2ca9e22be6bac201dbab3a/5d3ee6994401a5a7f3eeff2f_bags-blue-bag-cardboard-1038000.jpg" srcset="https://uploads-ssl.webflow.com/5d2ca9e22be6bac201dbab3a/5d3ee6994401a5a7f3eeff2f_bags-blue-bag-cardboard-1038000-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5d2ca9e22be6bac201dbab3a/5d3ee6994401a5a7f3eeff2f_bags-blue-bag-cardboard-1038000-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5d2ca9e22be6bac201dbab3a/5d3ee6994401a5a7f3eeff2f_bags-blue-bag-cardboard-1038000.jpg 1920w" sizes="(max-width: 1920px) 100vw, 1920px" alt=""/>
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
