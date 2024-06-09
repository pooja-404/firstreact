
import React, { useState, useEffect } from "react";

const Add = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const addTodo = () => {
    if (
      title.trim() !== "" &&
      description.trim() !== "" &&
      startTime !== "" &&
      endTime !== ""
    ) {
      const newTodo = {
        title: title,
        description: description,
        startTime: startTime,
        endTime: endTime,
      };
      setTodos([...todos, newTodo]);
      setTitle("");
      setDescription("");
      setStartTime("");
      setEndTime("");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-gray-100 text-center rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-start">Title:</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-white"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-start">Description:</label>
        <textarea
          className="w-full border border-gray-300 rounded px-3 py-2 text-white"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter description"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-start">Start Time:</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-white"
          type="datetime-local"
          value={startTime}
          onChange={handleStartTimeChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-start">End Time:</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-white"
          type="datetime-local"
          value={endTime}
          onChange={handleEndTimeChange}
        />
      </div>
      <button
        className="bg-[#8ff3f3] text-black text-lg font-medium px-4 py-2 rounded hover:bg-[#58cbcb]"
        onClick={addTodo}
      >
        Add Todo
      </button>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="border-b border-gray-300 py-4">
            <h3 className="text-lg font-semibold">{todo.title}</h3>
            <p className="text-gray-700">Description: {todo.description}</p>
            <p className="text-gray-700">Start Time: {todo.startTime}</p>
            <p className="text-gray-700">End Time: {todo.endTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Add;
