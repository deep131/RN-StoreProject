import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../NewRedux/ProductSlice';
import CountReducer from '../NewRedux/CalculationSlice'
import MyCartReducer from '../NewRedux/MyCartSlice'
import SelectedTodo from '../NewRedux/EditSlice'
export const mystore=configureStore({
    reducer:{
         countTest:CountReducer,
        product: productReducer,
        products:MyCartReducer,
        selectedTodo:SelectedTodo,
   
    },
})