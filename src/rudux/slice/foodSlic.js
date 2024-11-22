import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action return promis
    export const fetchfoods = createAsyncThunk("recipes/fetchfoods",async ()=>{
    const result = await axios.get("https://dummyjson.com/recipes")
    // console.log(result.data.recipes);
    sessionStorage.setItem("allRecipies",JSON.stringify(result.data.recipes))
   
 
    return result.data.recipes


   
})
  const foodSlice = createSlice({
    name:'recipes',
    initialState:{
        allRecipies :[],
        dummyALlfoods :[],
        loading:false,
        errMessage :""
    },
    reducers:{
        searchfoods : (state,actionbyHeader)=>{
            state.allRecipies = state.dummyALlfoods.filter(item=>item.cuisine.toLowerCase().includes(actionbyHeader.payload))
        }

    },
    extraReducers :(builder)=>{
        builder.addCase(fetchfoods.fulfilled,(state,apiResult)=>{
            state.allRecipies = apiResult.payload
            state.dummyALlfoods = apiResult.payload
            state.loading = false
            state.errorMsg = ""
        })
        builder.addCase(fetchfoods.pending,(state)=>{
            state.allRecipies = []
            state.dummyALlfoods = []
            state.loading = true
            state.errorMsg = ""
        })
        builder.addCase(fetchfoods.rejected,(state)=>{
            state.allRecipies = []
            state.dummyALlfoods = []
            state.loading = false
            state.errorMsg = "API called failed"
        })


    }
})
export const {searchfoods} = foodSlice.actions
export default foodSlice.reducer
