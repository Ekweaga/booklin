import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        itemsList:[],
        totalQuantity:0

}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart(state,action){
            const newItem = action.payload;
            const existingItem = state.itemsList.find((item)=>item.id === newItem.id)

            if(existingItem){
                existingItem.quantity++
                existingItem.totalprice += newItem.price
            }
            else{
                state.itemsList.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalprice:newItem.price,
                    img:newItem.image

                })

                state.totalQuantity++;
            }
    },
    emptycart(state){
      state.itemsList = [];
      state.totalQuantity = 0
    }
  }
});

export const cartActions = cartSlice.actions

export default cartSlice