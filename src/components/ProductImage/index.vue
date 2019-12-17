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
        images: [
            {
                small: {
                    url: "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
                    alt: "alt"
                    },
                normal: {
                    url: "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
                    alt: "alt"
                },
                big: {
                    url: "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
                    alt: "alt"
                }
            },
            {
                small: {
                    url: "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
                    alt: "alt"
                    },
                normal: {
                    url: "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
                    alt: "alt"
                },
                big: {
                    url: "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
                    alt: "alt"
                }
            },
            {
                small: {
                    url: "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
                    alt: "alt"
                    },
                normal: {
                    url: "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
                    alt: "alt"
                },
                big: {
                    url: "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
                    alt: "alt"
                }
            }
        ]
    })
}
</script>

<style lang="scss" scoped>
@import './_index';
</style>