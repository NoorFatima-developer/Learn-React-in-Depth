import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos: [{id:1, text: "Hello world"}]
};




export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    // ab jb hum context api k andr hum function bananty thy tu hum tb funciton ki definiiton ni likhty thy lkin isk andr mai definiiton b likhogi...
    reducers: {
        addTodo: (state, action) => {

        },

        removeTodo: (state, action) => {

        }
    }
})