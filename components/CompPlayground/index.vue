<template>
  <SfGallery
:sliderOptions="{ autoplay, rewind }"
v-model="current"
:images="images" />
</template>

<script>

import "@storefrontui/vue/src/css/_all.scss";

import { SfGallery } from '@storefrontui/vue'

export default {
  components: {
    SfGallery
  },

  props: {
      images: Array,
  },

  data () {
      return {
        images: {
          data: [
            { small: { url: 'https://res.cloudinary.com/mercurie/image/upload/v1565670634/mercuriemart/sample-1.jpg', alt: 'Alt' }, 
              big: { url: 'https://res.cloudinary.com/mercurie/image/upload/v1565670635/mercuriemart/sample-2.jpg', alt: 'Alt' }, 
              zoom: { url: 'https://res.cloudinary.com/mercurie/image/upload/v1565670635/mercuriemart/sample-2.jpg', alt: 'Alt' } 
            }
          ]
         }
      }
  },

}
</script>

<style>

</style>