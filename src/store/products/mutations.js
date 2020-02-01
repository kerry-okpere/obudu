const mutations = {
    setProducts(state, products){
        state.products = products;
    },

    setProduct(state, product){
        state.singleProduct = product;
    },

    PUSH_PROUDCT_TO_CART(state, cartObj){
        cartObj["quantity"] = 1;
        state.cart.push(cartObj);
    },

    INCREMENT_CART_ITEM_QUANTITY(state, cartItem){
        cartItem.quantity++;   
    }


};

export default mutations;