const actions = {
    addProductToCart({commit, state}, product){
        let selectedProd = {...product};
        let totalProdQty = selectedProd.quantity;
        // let totalProdQty = product.quantity; product.quantity = 0;
    
        let prodbj = state.products.singleProduct
        selectedProd.image  = prodbj.images[0].url;
    
    
        if(totalProdQty > 0){
    
          let cartItem = !state.cart ? undefined : state.cart.find(item => item.index == selectedProd.index);
          
          if(cartItem == undefined){
            let priceSplit = selectedProd.price.split("NGN"); selectedProd.price = parseFloat(priceSplit[1].trim().replace(",", ""));
            selectedProd.quantity = selectedProd.selectedQuantity; delete selectedProd.selectedQuantity;
            commit("PUSH_PROUDCT_TO_CART", selectedProd)
          } else {
            let cartIndex = state.cart.map( (item,indx) => {
              if(item.index == cartItem.index){
                return indx;
              } 
            });
            cartIndex = cartIndex[0];
            cartItem.quantity += selectedProd.selectedQuantity;
            commit("INCREMENT_CART_ITEM_QUANTITY", {cartItem, cartIndex})
          }
    
        }
    
      },
    
      deleteCartItem({state, commit}, cartIndex){
        let newCart = state.cart.find( (item, index) => index === cartIndex );
        if(newCart){
          commit('UPDATE_CART_ON_ITEM_DELETE', cartIndex);
        }
      }
    
}

export default actions;