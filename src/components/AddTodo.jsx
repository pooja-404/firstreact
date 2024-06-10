// src/AddTodo.js
import React, { useState } from "react";
const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

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

  const handleAddTodo = () => {
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
        completed: false,
      };
      addTodo(newTodo);
      setTitle("");
      setDescription("");
      setStartTime("");
      setEndTime("");
    }
  };

  return (
    <div className="max-w-[500px] bg-black rounded-lg mt-24 py-4 px-3 mx-auto">
      <h1 className="text-xl font-bold mb-4 text-white">Add Todo</h1>
      <div className="mb-4">
        <label className="block text-white text-start">Title:</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-start">Description:</label>
        <textarea
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter description"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-start">Start Time:</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          type="datetime-local"
          value={startTime}
          onChange={handleStartTimeChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-start">End Time:</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          type="datetime-local"
          value={endTime}
          onChange={handleEndTimeChange}
        />
      </div>
      <button
        className="bg-[#8ff3f3] text-black text-lg font-medium px-4 py-2 rounded hover:bg-[#58cbcb]"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
