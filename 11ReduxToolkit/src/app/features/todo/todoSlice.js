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
        },

        removeTodo: (state, action) => {

        }
    }
})