import { createSlice } from "@reduxjs/toolkit";

 export const MyCartSlice=createSlice({
    name:'products',
    initialState:[],
    reducers:{
        addProducttoCart(state,action){
        state.push(action.payload)
        }
    }
 })

 export const {addProducttoCart}=MyCartSlice.actions;
 export default MyCartSlice.reducer;