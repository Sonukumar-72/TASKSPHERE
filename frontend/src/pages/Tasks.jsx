import React, { useEffect, useState } from "react";
import axios from "axios";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error(error);
      alert("⚠️ Failed to fetch tasks.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">🗂️ All Tasks</h2>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks found.</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={task._id}
                className="bg-gray-50 px-4 py-3 border border-gray-200 rounded-md shadow-sm hover:bg-indigo-50 transition"
              >
                <span className="text-gray-800">{task.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Tasks;
