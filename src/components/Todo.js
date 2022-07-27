import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { TiEdit } from "react-icons/ti";
import { TiDeleteOutline } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  // Edit State
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  // Submit update function
  function submitUpdate(value) {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  }

//   if the edit has an id exists return the edit that is defined on the UI and run submit Update on submit
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
    // class name is either todo-row or todo-row complete
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <TiDeleteOutline
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
    
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
