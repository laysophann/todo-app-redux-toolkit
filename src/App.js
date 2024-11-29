import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, ToggleComplete, deleteTodo } from "./feature/todo/todoSlicec";

export default function App() {
  const [text, setText] = useState("first");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(ToggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <input type="text" value={text} onChange={handleInputChange} />
      <button className="add" onClick={handleAddTodo}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.text}
            <div>
              <button
                className="toggle"
                onClick={() => handleToggleComplete(todo.id)}
              >
                {todo.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button
                className="delete"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
