import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,
        title:"Post name",
        content:"Post content",
        status:true
    },
    {
        id:2,
        title:"Post 2",
        content:"Post content 2",
        status:true
    }
]

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{

    }
})

export default postSlice.reducer;