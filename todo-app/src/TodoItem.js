import React, { useState } from 'react';
import './App.css';

function TodoItem({ todo, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(todo.text);

    const handleUpdateText = () => {
        onUpdate(todo.id, updatedText);
        setIsEditing(false);
    };

    return (
        <div className={`todo-item ${isEditing ? 'editing' : ''}`}>
            { }
            <input
                type="checkbox"
                id={`checkbox-${todo.id}`}
                checked={false}
                onChange={() => {

                }}
            />
            { }
            <label htmlFor={`checkbox-${todo.id}`} />
            <div className="todo-content">
                {isEditing ? (
                    <div className="editContainer">
                        <input
                            type="text"
                            value={updatedText}
                            onChange={(e) => setUpdatedText(e.target.value)}
                            autoFocus
                        />
                        <button onClick={handleUpdateText}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                ) : (
                    <div className="text">{todo.text}</div>
                )}
                <div className="buttons">
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                    <button onClick={() => setIsEditing(!isEditing)}>Edit</button>

                </div>
            </div>
        </div>
    );
}

export default TodoItem;
