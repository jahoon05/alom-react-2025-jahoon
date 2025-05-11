import React from "react";
import'./style/ToDoInput.css';

function TodoInput({ toDo, onChange, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default TodoInput;
