import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  todos: [{id:1, text: "Hello world"}]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    // ab jb hum context api k andr hum function bananty thy tu hum tb funciton ki definiiton ni likhty thy lkin isk andr mai definiiton b likhogi...
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                // payload apny apmai 1 object hai tu hum iss kk andr sy kuch b access krskty hain dot laga k...
                text: action.payload.text
            }
            // acess state...
            state.todos.push(todo);
        },

        // state k andr current state or action k andr jo b data milta hai wo...
        removeTodo: (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo}  = todoSlice.actions
export default todoSlice.reducer;