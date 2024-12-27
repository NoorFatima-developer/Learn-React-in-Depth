import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './features/todo/todoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        // add other reducers here...
    }
})


// 01------Isk andr mera store hai...