import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    bread_name: '',
    price: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{}
})


export default cartSlice.reducer;