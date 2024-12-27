import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from '../features/todo/todoSlice';


function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    {/* ab todos k andr list of items show hongy islye loop laga deti o */}
    {todos.map((todo) => (
        <li key={todo.id}>
            {todo.text}
            {/* jb b hmy koi method ya parameters pass krny hon tu hum callback firekrskty hain ku k hmy function ka reference dena hai na k call krna hai
            essy dispatch() */}
            <button onClick={}></button>
        </li>
    ))}
    </>
  )
}

export default Todos
