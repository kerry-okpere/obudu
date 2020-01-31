<template>
  <div class="product__image">
    <a-skeleton :loading="loading" :disabled="loading" active>
      <!-- <SfGallery :images="image"></SfGallery> -->
      <!-- <ProductZoomer :base-images="image" :base-zoomer-options="zoomerOptions" /> -->
      <carousel :per-page="1" :mouse-drag="true" autoplay="true" :autoplayTimeout="4000" :autoplayHoverPause="false" :navigationEnabled="false" :paginationEnabled="false">
        <!-- <slide v-for="(images, index) in images" :key="index"> -->
        <slide>
          <img :src="image" alt="Product Name">
        </slide>
      </carousel>
    </a-skeleton>
  </div>
</template>

<script>
import { SfGallery } from "@storefront-ui/vue";

export default {
  components: {
    SfGallery
  },
  data: () => ({
    image: '',
    loading: true,
    zoomerOptions: {
      zoomFactor: 2,
      pane: "container",
      hoverDelay: 300,
      namespace: "zoomer-bottom",
      move_by_click: true,
      scroll_items: 3,
      choosed_thumb_border_color: "#dd2c00",
      scroller_position: "bottom"
    }
  }),

  computed: {
    singleProdGetter() {
      return this.$store.getters["products/getProduct"];
    }
  },

  async created() {
    let slug = this.$route.params.slug;

    let product = await this.$store.dispatch("products/fetchSingleProducts", {
      prodId: slug
    });

    this.image = this.makeImageArr(product);

    // this.image = this.makeImageArr(product.images);
  },

  methods: {
    makeImageArr(productObj) {
      // let counter = 1;
      // let thumbs = [];
      // image.map( (img, index) => {
      //     let tempObj = { 
      //       id:  index, url: img.url ,
      //     }
      //     thumbs.push(tempObj);
      // });
      
      // let imgArr = {
      //   thumbs: [...thumbs], normal_size: [...thumbs], large_size: [...thumbs]
      // }
      let imageUrl = productObj.images[0].url;
      this.loading = false;
      return imageUrl;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./_index";
</style>