import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id) => {
    const editedText = prompt('Edit todo:', todos.find(todo => todo.id === id).text);
    if (editedText !== null) {
      setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: editedText } : todo)));
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;