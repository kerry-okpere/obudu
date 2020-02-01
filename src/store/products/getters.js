const getters = {
    getProducts: state => state.products,
    getProduct: state => state.singleProduct,
    getCartQuantity: state => state.cart.reduce( (totalCount, item) => totalCount += item.quantity, 0),
    getCartItems: state => state.cart
};

export default getters;