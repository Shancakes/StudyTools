import React, { useState } from 'react';
import TodoItem from './TodoItem'; // Import the renamed component

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (id, updatedText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: updatedText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        {todos.map((todo) => (
          <TodoItem // Change this to TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onUpdate={handleUpdateTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
