<template>
    <section class="order-summary">
        <a-table :columns="columns" :dataSource="data">
            <span slot="image">
                <img src="https://via.placeholder.com/50" :alt="name">
            </span>
        </a-table>
    </section>
</template>

<script>
  const columns = [
    {
      title: 'Product Image',
      scopedSlots: { customRender: 'image' },
      dataIndex: 'image',
      key: 'image',
    },
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
  ];

  const data = [
    {
      key: '1',
      image: "https://via.placeholder.com/50",
      name: "Product Name",
      quantity: "Quantity",
      price: "Price"

    },

  ];

  export default {
    data() {
      return {
        data,
        columns,
      };
    },
  };
</script>

<style lang="scss" scoped>
@import './index';
</style>