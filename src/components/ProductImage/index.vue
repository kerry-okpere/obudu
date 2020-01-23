<template>
  <div class="product__image">
    <a-skeleton :loading="loading" :disabled="loading" active>
      <!-- <SfGallery :images="images"></SfGallery> -->
      <ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions"/>
    </a-skeleton>
  </div>
</template>

<script>
// import { SfGallery } from "@storefront-ui/vue";

export default {
  // components: {
  //   SfGallery
  // },
  data: () => ({
    image: [],
    loading: false,
    images: {
      thumbs: [
        {id: 1, url: "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/1.jpeg"},
        {id: 2, url: "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/2.jpeg"}
      ],
      normal_size: [
        {id: 1, url: "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/1.jpeg"},
        {id: 2, url: "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/2.jpeg"}
      ],
      large_size: [
        {id: 1, url: "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/1.jpeg"},
        {id: 2, url: "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/2.jpeg"}
      ]
    },
    zoomerOptions: {
      zoomFactor: 2,
      pane: "container",
      hoverDelay: 300,
      namespace: "zoomer-bottom",
      move_by_click: true,
      scroll_items: 3,
      choosed_thumb_border_color: "#dd2c00",
      scroller_position: "bottom",
      // zoomer_pane_position: "right"
    }
  }),

  // computed: {
  //   singleProdGetter() {
  //     return this.$store.getters["products/getProduct"];
  //   }
  // },

  // async created() {
  //   let slug = this.$route.params.slug;

  //   let product = await this.$store.dispatch("products/fetchSingleProducts", {
  //     prodId: slug
  //   });

  //   this.images = this.makeImageArr(product.images);
  // },

  // methods: {
  //   makeImageArr(image) {
  //     let imgArr = [];
  //     image.map(img => {
  //       let newObj = {
  //         small: {
  //           url: img.url,
  //           alt: `${img.ref}`
  //         },
  //         normal: {
  //           url: img.url,
  //           alt: `${img.ref}`
  //         },
  //         big: {
  //           url: img.url,
  //           alt: `${img.ref}`
  //         }
  //       };
  //       imgArr.push(newObj);
  //     });
  //     this.loading = false;
  //     return imgArr;
  //   }
  // }
};
</script>

<style lang="scss" scoped>
@import "./_index";
</style>