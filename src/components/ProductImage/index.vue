<template>
  <div class="product__image">
    <SfGallery :images="images"></SfGallery>
  </div>
</template>

<script>
import { SfGallery } from "@storefront-ui/vue"

export default {
    components: {
        SfGallery
    },
    data: () => ({
        images: []
    }),

    computed: {
        singleProdGetter(){
            return this.$store.getters["products/getProduct"];
        }
    },

    async created(){
        this.images = this.makeImageArr(this.singleProdGetter.images);
    },

    methods: {
        makeImageArr(image){
            let imgArr = [];
            image.map( (img) => {
                let newObj = {
                    small: {
                        url: img.url,
                        alt: `${img.ref}`
                    },
                    big: {
                        url: img.url,
                        alt: `${img.ref}`
                    }
                }
                imgArr.push(newObj);
            });
            return imgArr;
        }
    }
}
</script>

<style lang="scss" scoped>
@import './_index';
</style>