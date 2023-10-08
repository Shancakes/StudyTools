import React, { useState } from 'react';
import './App.css';

function EditTodoItem({ todo, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);
  const [isChecked, setIsChecked] = useState(false);

  const handleUpdateText = () => {
    onUpdate(todo.id, updatedText);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`editTodoItem ${isEditing ? 'editing' : ''}`}>
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      {isEditing ? (
        <div className="editContainer">
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            autoFocus
          />
          <button onClick={handleUpdateText}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <div className="text">{todo.text}</div>
      )}
      <div className="buttons">
        <button onClick={() => onDelete(todo.id)}>Delete</button>
        <button onClick={handleEditClick}>Edit</button>
      </div>
    </div>
  );
}

export default EditTodoItem;
