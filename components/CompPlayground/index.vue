<template>
  <SfGallery
:sliderOptions="{ autoplay, rewind }"
v-model="current"
:images="images" />
</template>

<script>
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

      }
  },

  methods: {
      function() {
          let images =
           [ 
              { small: { url, alt }, big: { url, alt }, 
                zoom: { url, alt }
              } 
            ]
     }
  }
}
</script>

<style>

</style>