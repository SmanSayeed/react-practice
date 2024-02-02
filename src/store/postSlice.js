import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id:nanoid(),
        title:"Post name",
        content:"Post content",
        status:true
    },
    {
        id:nanoid(),
        title:"Post 2",
        content:"Post content 2",
        status:true
    }
]

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        createPost:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare({title,content,status}){
                return {
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        status
                    }
                }
            }
        },
        // createPost(state,action){
        //     return [...state, action.payload];
        // },
        deletePost(state,action){
            return state.filter(post => post.id !== action.payload);
        }
    }
})

export default postSlice.reducer;
export const {createPost,deletePost}=postSlice.actions;