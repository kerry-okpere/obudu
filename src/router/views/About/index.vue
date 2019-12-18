<template>
  <Layout>
    <div class="container">
    <theme-picker></theme-picker>
    <br />
    <ThemedButton :color="$store.getters['themeColor']">Some Button</ThemedButton>
    </div>
  </Layout>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'
import ThemedButton from '@/components/styled-components/ThemedButton.js'

export default {
  metaInfo: {
    title: 'About us'
  },

  components: {
    ThemePicker,
    ThemedButton
  }
}
</script>
