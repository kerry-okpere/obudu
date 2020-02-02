<template>
<div class="product__details">
    <a-collapse accordion defaultActiveKey="1">
        <template v-slot:expandIcon="props">
            <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
        </template>
        <a-collapse-panel header="Product Details" key="1" :style="customStyle">
            <p>{{singleProd.description}}</p>
        </a-collapse-panel>
        <!-- <a-collapse-panel header="Customer Reviews" key="2" :style="customStyle">

        </a-collapse-panel> -->
    </a-collapse>
</div>
</template>

<script>
export default {
    data: () => ({
        customStyle:
        'fontSize: 16px; fontWeight: 500;',
    }),

    computed: {
        singleProd() {
            return this.$store.getters["products/getProduct"];
        }

    }
}
</script>

<style lang="scss" scoped>
.product__details {
    padding: 40px 0 20px;
    p {
        font-size: 14px;
    }
}
</style>