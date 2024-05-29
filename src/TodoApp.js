import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import styles from './TodoApp.module.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (index, newValue) => {
    setTodos(todos.map((todo, i) => (i === index ? newValue : todo)));
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default TodoApp;