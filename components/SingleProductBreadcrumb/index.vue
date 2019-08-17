<template>
  <div class="section-hero__section" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <div class="section-hero__overlay"></div>
    <div class="section-hero__container w-container">
      <div class="row">
        <div class="col">
          <div class="text-center">
            <h2>Organic Apple Cider</h2>
            <b-breadcrumb :items="links"></b-breadcrumb>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProductBreadcrumb",

  data() {
    return {
      links: [
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Groceries",
          href: "/groceries/"
        },
        {
          text: "Organic Apple Cider",
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