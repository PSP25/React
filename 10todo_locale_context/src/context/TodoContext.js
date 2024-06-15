import {createContext,useContext} from 'react'

export const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"todo msg",
        changed:false
    }],
    updateTodo:(id,todo)=>{},
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})
export const TodoContextProvider=TodoContext.Provider
export const useTodo=()=>{
    return useContext(TodoContext)
}