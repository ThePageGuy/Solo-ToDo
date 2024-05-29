import React, { useState } from 'react';
import styles from './TodoApp.module.css';

const TodoItem = ({ todo, removeTodo, index, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    updateTodo(index, editValue);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditValue(todo);
  };

  const [isCompleted, setIsCompleted] = useState(false);

  const toggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <li className={styles.item}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleUpdateClick} className={styles.button}>
            Update
          </button>
          <button onClick={handleCancelClick} className={styles.button}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={toggleComplete}
            className={styles.checkbox}
          />
          <span
            style={{
              textDecoration: isCompleted ? 'line-through' : 'none',
            }}
          >
            {todo}
          </span>
          <button onClick={handleEditClick} className={styles.button}>
            Edit
          </button>
          <button
            onClick={() => removeTodo(index)}
            className={styles.removeButton}
          >
            Remove
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;