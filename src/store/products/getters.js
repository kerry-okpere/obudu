const getters = {
    getProducts: state => state.products,
    getProduct: state => state.singleProduct,
    getCartQuantity: state => {
        let storeState = JSON.parse(window.localStorage.getItem(process.env.VUE_APP_STORENAME));
        if(storeState.cart !== undefined){
            return state.cart.reduce((totalCount, item) => totalCount += item.quantity, 0);
        } else {
            return 0;
        }
    }, 
    getCartItems: state => state.cart,
    getCartTotal: (state) => {
        let cartItem = state.cart;
        let tempPrice = 0;
        let multiPrice = 0;
        for (let i = 0; i < cartItem.length; i++) {
            if (cartItem[i].quantity == 1) {
                tempPrice += cartItem[i].price;
            } else {
                multiPrice = cartItem[i].quantity * cartItem[i].price;
                tempPrice += multiPrice;
            }
        }
        return tempPrice;
    }
};

export default getters;