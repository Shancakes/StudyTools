import React, { useState } from 'react';

function Todo({ todo, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(todo.text);

    const handleUpdateText = () => {
        onUpdate(todo.id, updatedText);
        setIsEditing(false);
    };

    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
            {isEditing && (
                <>
                    <input
                        type="text"
                        value={updatedText}
                        onChange={(e) => setUpdatedText(e.target.value)}
                    />
                    <button onClick={handleUpdateText}>Update</button>
                </>
            )}
        </div>
    );
}

export default Todo;
