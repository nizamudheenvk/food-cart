import { configureStore } from "@reduxjs/toolkit";
import foodSlice from './slice/foodSlic'

const foodStore = configureStore({
    reducer : {
    foodReducer : foodSlice
    }
})

export default foodStore