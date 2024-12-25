import { createContext, useContext } from "react"


// 01--CreateContext
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false,
        }
    ],

    // ab mai just func bnanaogi define app.jsx mai hi krogi...

    addTodo: (todo)=> {},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// 02--UseContext 
// useContext hmesha apny andr function leta hai jesy TodoContext and meny osko oper bannaya hai..
export const useTodo = () => {
    return useContext(TodoContext)
}

// 03--Provider

export const TodoProvider = TodoContext.Provider