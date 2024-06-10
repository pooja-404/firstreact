// src/components/AllTodos.jsx
import React from "react";

const AllTodos = ({ todos, markAsCompleted }) => {
  return (
    <div className="max-w-[1320px] px-3 mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Todos</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-4 text-left border border-gray-400">Title</th>
              <th className="px-6 py-4 text-left border border-gray-400">Description</th>
              <th className="px-6 py-4 text-left border border-gray-400">Start Time</th>
              <th className="px-6 py-4 text-left border border-gray-400">End Time</th>
              <th className="px-6 py-4 text-left border border-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 border border-gray-400">{todo.title}</td>
                <td className="px-6 py-4 border border-gray-400">{todo.description}</td>
                <td className="px-6 py-4 border border-gray-400">{todo.startTime}</td>
                <td className="px-6 py-4 border border-gray-400">{todo.endTime}</td>
                <td className="px-6 py-4 border border-gray-400">
                  {!todo.completed && (
                    <button
                      className="bg-[#8ff3f3] text-black text-lg font-medium px-4 py-2 rounded hover:bg-[#58cbcb] transition duration-300"
                      onClick={() => markAsCompleted(index)}
                    >
                      Done
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTodos;
