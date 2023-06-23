import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
    cartItems : cartItems,
    amount : 10,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {}
})

export default cartSlice.reducer