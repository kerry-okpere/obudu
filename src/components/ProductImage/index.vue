<template>
  <div class="product__image">
    <a-skeleton :loading="loading" :disabled="loading" active>
      <SfGallery :images="images"></SfGallery>
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
    images: [],
    loading: true
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

    this.images = this.makeImageArr(product.images);
  },

  methods: {
    makeImageArr(image) {
      let imgArr = [];
      image.map(img => {
        let newObj = {
          small: {
            url: img.url,
            alt: `${img.ref}`
          },
          normal: {
            url: img.url,
            alt: `${img.ref}`
          },
          big: {
            url: img.url,
            alt: `${img.ref}`
          }
        };
        imgArr.push(newObj);
      });
      this.loading = false;
      return imgArr;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./_index";
</style>