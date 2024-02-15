import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem:(state, action) => {
            //mutates state
            state.items.push(action.payload)
        },
        removeItem:(state) => {
            state.items.pop()
        },
        clearCart:(state) => {
            state.items.length = 0 //[]
        }
    }
})

export const {addItem, clearCart, removeItem} = cartSlice.actions;

export default cartSlice.reducer;