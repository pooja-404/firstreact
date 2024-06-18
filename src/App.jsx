
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import AllTodos from './components/AllTodos';
import CompletedTodos from './components/CompletedTodos';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const markAsCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    const completedTodo = newTodos.splice(index, 1)[0];
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, completedTodo]);
  };

  const [completedTodos, setCompletedTodos] = useState([]);

  return (
    <Router>
      <div className="App">
        <nav className="flex justify-between  max-w-[1320px] my-3 rounded-lg px-3 mx-auto py-3 bg-[#bff1f8]">
          <Link className="text-2xl font-bold text-black hover:text-blue-800" to="/">Add Todo</Link>
          <Link className="text-2xl font-bold text-black hover:text-blue-800" to="/all-todos">All Todos</Link>
          <Link className="text-2xl font-bold text-black hover:text-blue-800" to="/completed-todos">Completed Todos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AddTodo addTodo={addTodo} />} />
          <Route path="/all-todos" element={<AllTodos todos={todos} markAsCompleted={markAsCompleted} />} />
          <Route path="/completed-todos" element={<CompletedTodos todos={completedTodos} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;