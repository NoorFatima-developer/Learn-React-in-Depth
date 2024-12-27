import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id:1, text: "Hello world"}],
  inputValue: "",
  updatingTodoId: null, // hum tb hua ki which todo ko update krna hai...
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
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
              if (todo.id === action.payload.id) {
                return { ...todo, text: action.payload.text }; // update the todo text
              }
              return todo;
            });
            state.inputValue = ""; // reset the input value after update
            state.updatingTodoId = null; // reset the updating ID
          },
      
          // Action for handling input value change
          setInputValue: (state, action) => {
            state.inputValue = action.payload;
          },
      
          // Action for setting the todo ID to be updated
          setUpdatingTodoId: (state, action) => {
            state.updatingTodoId = action.payload;
          },
        },
      });

export const {addTodo, removeTodo, updateTodo, setInputValue, setUpdatingTodoId}  = todoSlice.actions
export default todoSlice.reducer;



// 02-----------Isk andr reducers mai wo sb kuch hai jo meny add krna hai...