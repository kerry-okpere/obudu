<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Oops... We can't find this page</h1>
    <h1 v-else>Hmmm... An error occurred</h1>
        <div>
    <nuxt-link to="/">Go back home</nuxt-link>
    </div>
    <img src="https://res.cloudinary.com/mercurie/image/upload/v1567275546/mercuriemart/404.png" alt="404 page not found" width="500">
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' 
}
</script>

<style lang="scss" scoped>
.container {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;

}
</style>