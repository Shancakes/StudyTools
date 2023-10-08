import React, { useState } from 'react';
import './App.css';

function Todo({ todo, onDelete, onUpdate }) {
    // Define state variables using the useState hook
    const [isEditing, setIsEditing] = useState(false); // Track whether the todo is in edit mode
    const [updatedText, setUpdatedText] = useState(todo.text); // Store the updated text for the todo

    // Function to handle updating the text of a todo
    const handleUpdateText = () => {
        // Call the onUpdate function with the todo's ID and the updated text
        onUpdate(todo.id, updatedText);
        // Exit the edit mode by setting isEditing to false
        setIsEditing(false);
    };

    return (
        <div>
            {/* Display the current text of the todo */}
            <span>{todo.text}</span>
            {/* Button to delete the todo, onClick calls the onDelete function with the todo's ID */}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
            {/* Button to toggle edit mode on and off */}
            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
            {/* Conditionally render edit input and update button when in edit mode */}
            {isEditing && (
                <>
                    {/* Input field to edit the todo text */}
                    <input
                        type="text"
                        value={updatedText}
                        // Update the updatedText state as the user types in the input field
                        onChange={(e) => setUpdatedText(e.target.value)}
                    />
                    {/* Button to confirm and update the todo text */}
                    <button onClick={handleUpdateText}>Update</button>
                </>
            )}
        </div>
    );
}

export default Todo;
