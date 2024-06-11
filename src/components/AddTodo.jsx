import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startTime: "",
    endTime: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTodo = () => {
    const { title, description, startTime, endTime } = formData;
    if (title && description && startTime && endTime) {
      addTodo({
        ...formData,
        completed: false
      });
      setFormData({ title: "", description: "", startTime: "", endTime: "" });
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
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-start">Description:</label>
        <textarea
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-start">Start Time:</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          type="datetime-local"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-start">End Time:</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
          type="datetime-local"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
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
