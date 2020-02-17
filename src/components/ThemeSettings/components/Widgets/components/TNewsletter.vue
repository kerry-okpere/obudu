<template>
  <div class="settings__item">
    <div class="settings__switch">
        <h3>Show</h3>
        <a-switch :defaultChecked="newsletterShow" @change="setNewsletterShow" size="small" />
    </div>
    <h3>Newsletter Layout</h3>
    <a-radio-group @change="setNewsletterLayout($event.target.value)" :defaultValue="newsletterLayout">
        <a-radio :style="radioStyle" :value="1">Layout One</a-radio>
        <a-radio :style="radioStyle" :value="2">Layout Two</a-radio>
        <a-radio :style="radioStyle" :value="3">Layout Three</a-radio>
    </a-radio-group>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>