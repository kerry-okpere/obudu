<template>
    <section class="order-summary">
        <a-table :columns="columns" :dataSource="data">
            <!-- <span v-for="(product, index) in orders" slot="image" :key="index">
                <img :src="product.image" :alt="product.name" >
            </span> -->
        </a-table>
    </section>
</template>

<script>
  export default {
    data() {
      return {
        data: [],
        orders: [],
        columns: [
          // {
          //   title: 'Product Image',
          //   scopedSlots: { customRender: 'image' },
          //   dataIndex: 'image',
          //   key: 'image',
          // },
          {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
          },
          {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          },
        ],
      };
    },

    async created(){
      let slug = this.$route.params.slug;
      let tempArr = [];
      let tempObj =  {};
      let ordersRes = await this.$store.dispatch("fetchOrderById",{ orderId: slug });
      this.orders = ordersRes.products 
      ordersRes.products.map( (item, index) => {
        const { name, quantity, price} = item
        tempObj.key = index;
        tempObj = { name , quantity, price};
        tempArr.push(tempObj);
      });
      this.data = tempArr;
      // console.log(tempArr);
    }
  };
</script>

<style lang="scss" scoped>
@import './index';
</style>