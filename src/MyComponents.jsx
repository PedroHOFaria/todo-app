import React, { useState } from 'react';

const MyComponent = () => {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(''); 

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);  
      setNewTodo('');  
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos); 
  };

  return (
    <div className="todo-container">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={handleAddTodo}>Adicionar</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleDeleteTodo(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;