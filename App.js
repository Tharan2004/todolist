import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  // State for the list of to-dos
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Function to add new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  // Function to toggle completion status
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1 className="todo-heading">Todo List</h1>
      
      <div className="input-group-container">
        <input
          className="input-field"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button className="add-button" onClick={addTodo}>Add</button>
      </div>

      <div className="list-group-container">
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="list-item" style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
              <span onClick={() => toggleTodo(index)}>{todo.text}</span>
              <div className="list-item-buttons">
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;


