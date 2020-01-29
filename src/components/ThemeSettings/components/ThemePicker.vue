<template>
  <section class="themes">
    <div class="row text-center">
      <div class="col-6 col-xl-4">
        <a-card hoverable :style="custom">
          <img src="@/assets/img/preview/sample-1.jpg" slot="cover"/>
          <a-card-meta title="Jupiter">
            <template slot="description">Minimalist theme for your store</template>
          </a-card-meta>
          <a-button block>Select</a-button>
        </a-card>
      </div>
      <div class="col-6 col-xl-4">
        <a-card hoverable :style="custom">
          <img src="@/assets/img/preview/sample-3.jpg" slot="cover"/>
          <a-card-meta title="Venus">
            <template slot="description">Modern theme for your store</template>
          </a-card-meta>
          <a-button block>Select</a-button>
        </a-card>
      </div>
      <div class="col-6 col-xl-4">
        <a-card hoverable :style="custom">
          <img src="@/assets/img/preview/sample-3.jpg" slot="cover"/>
          <a-card-meta title="Mars">
            <template slot="description">Clean theme for your store</template>
          </a-card-meta>
          <a-button block>Select</a-button>
        </a-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    custom: 'width: 250px'
  })
}
</script>

<style lang="scss" scoped>
.themes {
  button {
    margin: 20px 0 0;
  }
}
</style>