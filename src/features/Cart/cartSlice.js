import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    breadName: '',
    price: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{}
})


export default cartSlice.reducer;