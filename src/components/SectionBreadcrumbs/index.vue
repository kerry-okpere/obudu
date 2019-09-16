<template>
  <div class="section-hero__section" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <div class="section-hero__overlay"></div>
    <div class="section-hero__container w-container">
      <div class="row">
        <div class="col">
          <div class="text-center">
            <h2>{{ pageTitle }}</h2>
            <b-breadcrumb :items="links"></b-breadcrumb>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        pageTitle: String
    },

  data() {
    return {
      links: [
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Checkout",
          active: true
        }
      ],

      bgImage: "https://res.cloudinary.com/mercurie/image/upload/v1564579537/mercuriemart/image-5.jpg"
      
    };
  }
};
</script>

<style type="scss" scoped>
</style>