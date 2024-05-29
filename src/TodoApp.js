import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Functions to add, remove, and update todos will go here

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoApp;