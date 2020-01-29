<template>
  <div class="product__image">
    <a-skeleton :loading="loading" :disabled="loading" active>
      <ProductZoomer :base-images="image" :base-zoomer-options="zoomerOptions" />
    </a-skeleton>
  </div>
</template>

<script>

export default {
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
      // zoomer_pane_position: "right"
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

    this.image = this.makeImageArr(product.images);
  },

  methods: {
    makeImageArr(image) {
      let counter = 1;
      let thumbs = [];
      image.map( (img, index) => {
          let tempObj = { 
            id:  index, url: img.url ,
          }
          thumbs.push(tempObj);
      });
      
      let imgArr = {
        thumbs: [...thumbs], normal_size: [...thumbs], large_size: [...thumbs]
      }
      this.loading = false;
      return imgArr;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./_index";
</style>