import React from 'react';
import styles from './TodoApp.module.css';

const TodoItem = ({ todo, removeTodo, index }) => {
  return (
    <li className={styles.item}>
      {todo}
      <button
        onClick={() => removeTodo(index)}
        className={styles.removeButton}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;