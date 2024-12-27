import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo, setInputValue, setUpdatingTodoId } from '../app/features/todo/todoSlice';
    // <>
    // <div>Todos</div>
    // {/* ab todos k andr list of items show hongy islye loop laga deti o */}
    // {todos.map((todo) => (
    //     <li key={todo.id}>
    //         {todo.text}
    //         {/* jb b hmy koi method ya parameters pass krny hon tu hum callback firekrskty hain ku k hmy function ka reference dena hai na k call krna hai
    //         essy dispatch() */}
    //         {/* ku k hum chahty hain koi click kry tb wo function execute o na k khudsy e islye hum refrence dety hain.. */}
    //         <button onClick={() => dispatch(removeTodo(todo.id))}></button>
    //     </li>
    // ))}
    // </>


    // Ab meny yahan nichy oper wali hi chez ko facy bana k likhdea hai that's it nithing else...
    

function Todos() {
  const todos = useSelector(state => state.todo.todos);
  const inputValue = useSelector(state => state.todo.inputValue);
  const updatingTodoId = useSelector(state => state.todo.updatingTodoId);
  const dispatch = useDispatch();

  const handleEdit = (todo) => {
    dispatch(setUpdatingTodoId(todo.id)); // Set the todo ID to be updated
    dispatch(setInputValue(todo.text)); // Set input value to todo's current text
  };

  const handleUpdate = () => {
    if (inputValue.trim()) {
      dispatch(updateTodo({
        id: updatingTodoId,
        text: inputValue
      }));
      dispatch(setInputValue('')); // Clear input field after update
      dispatch(setUpdatingTodoId(null)); // Clear updatingTodoId after update
    }
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* Display todo text if not in editing mode */}
            {updatingTodoId !== todo.id ? (
              <div className="text-white">{todo.text}</div>
            ) : (
              // Display input field if todo is being edited
              <input
                type="text"
                className="text-black p-2 rounded"
                value={inputValue}
                onChange={(e) => dispatch(setInputValue(e.target.value))}
              />
            )}

            <div className="flex space-x-2">
              {/* Remove button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>

              {/* Edit button */}
              <button
                onClick={() => handleEdit(todo)} // Set todo text for editing
                className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Display Update button if a todo is being edited */}
      {updatingTodoId && (
        <button
          onClick={handleUpdate} // Update the todo
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
        >
          Update
        </button>
      )}
    </>
  );
}

export default Todos;
