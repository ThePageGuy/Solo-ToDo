import React, { useState } from 'react';
import styles from './TodoApp.module.css';

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new todo"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;