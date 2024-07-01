import React, { useState } from 'react';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  console.log("todos", todos)

  return (
    <div className='App'>
      <div className='todo-container'>

        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} />

      </div>
    </div>
  );
}

export default App;
