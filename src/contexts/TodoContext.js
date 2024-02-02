import React, { createContext, useContext } from 'react'

export const TodoContext = createContext({
        todos:[
            {
                id:1,
                todo:"Todo msg",
                completed:false
            },
            {
                id:2,
                todo:"Message 2",
                completed:true
            }
        ],

        addTodo:(todo)=>{},
        updatedTodo: (id, todo) => {},
        deleteTodo: (id)=>{},
        toggleComplete:(id)=>{}
})

export const useTodo =  () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider