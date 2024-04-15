import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    totalAmount: 0,
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const addProductExists = state.items.findIndex((item)=>item.id === action.payload.id)
            if(addProductExists){
                state.items[addProductExists].amount += action.payload.amount
            }
            else{
                state.items.push(action.payload);
                // check later
                // state.items.push({
                //     ...action.payload,
                //     amount: parseInt(action.payload.amount),
                // })
            }
            state.totalAmount = state.totalAmount + parseInt(action.payload.amount)
        },
        removefromCart:(state,action)=>{

            const productToRemove = state.items.find(
                (item) => item.id === action.payload
              );
              if(productToRemove){
                const existingItem = state.items[productToRemove];
            state.totalAmount -= existingItem.price * existingItem.amount;
            if (existingItem.amount === 1) {
            state.items.splice(productToRemove,1);
            } else {
            state.items[productToRemove].amount--;
            }
              }
            // state.totalAmount = state.totalAmount - productToRemove.quantity;
            // const index = state.items.findIndex(
            // (product) => product.id === action.payload
            // );
            // state.items.splice(index, 1);
        },
        incrementInCart: (state, action) => {
            const itemInc = state.items.find((item) => item.id === action.payload);
            if (itemInc.amount >= 1) {
              itemInc.amount = itemInc.amount + 1;
            }
            state.totalAmount = state.totalAmount + 1;
        },
        decrementInCart: (state, action) => {
        const itemDec = state.items.find((item) => item.id === action.payload);
        if (itemDec.amount === 1) {
            const index = state.items.findIndex(
            (item) => item.id === action.payload
            );
            state.items.splice(index, 1);
        } else {
            itemDec.amount--;
        }
        state.totalAmount = state.totalAmount - 1;
        },
    },
})

export const { addToCart, removefromCart, incrementInCart, decrementInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
