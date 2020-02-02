const mutations = {
    setProducts(state, products){
        state.products = products;
    },

    setProduct(state, product){
        state.singleProduct = product;
    },

    PUSH_PROUDCT_TO_CART(state, cartObj){
        // cartObj["quantity"] = 1;
        state.cart.push(cartObj);
    },

    INCREMENT_CART_ITEM_QUANTITY(state, {cartItem, cartIndex}){
        state.cart[cartIndex].quantity = cartItem.quantity
    },
    UPDATE_CART_ON_ITEM_DELETE(state, cartIndex){
        state.cart = state.cart.filter( (item, index) => index !== cartIndex );
    }


};

export default mutations;