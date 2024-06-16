 import { nanoid,createSlice } from "@reduxjs/toolkit";

 const initialState={
    todos:[{
        id:nanoid(),
        todo:"hello kai"
    }]
 }

//  createSlice contains a default key called name that must be used
 export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        //here you add all methods and props that you need to manage and edit state
        addTodo:(state,action)=>{
                //state gets you the info about the prev initialState
                //actions gets you the individual data of current todo
            //create the new todo
            const todo={
                id:nanoid(),
                text:action.payload
            } 
                state.todos.push(todo)
        },
        
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
        // updateTodo:(state,action)=>{
        //     state.todos.map((todo)=>(todo.id==action.payload?todo=action.payload:todo))
        // }

    }
 })

 export const {addTodo,removeTodo,updateTodo} =todoSlice.actions
 export default todoSlice.reducer