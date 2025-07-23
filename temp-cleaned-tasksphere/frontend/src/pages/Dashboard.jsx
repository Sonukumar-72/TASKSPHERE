import React, { useEffect, useState } from "react";
import { getTasks, createTask } from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchUserTasks();
  }, []);

  const fetchUserTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      alert("⚠️ Failed to fetch tasks. Please log in again.");
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    try {
      await createTask({ title: newTask, completed: false });
      setNewTask("");
      fetchUserTasks();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to create task");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-600">📋 Your Tasks</h2>
          <button
            onClick={handleLogout}
            className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-md hover:bg-red-200 transition"
          >
            🚪 Logout
          </button>
        </div>

        <form onSubmit={handleCreateTask} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
          >
            Add
          </button>
        </form>

        {tasks.length === 0 ? (
          <p className="text-gray-600">No tasks found</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={task._id}
                className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-md border border-gray-200 shadow-sm"
              >
                <span className="text-gray-800">{task.title}</span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    task.completed
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {task.completed ? "✅ Done" : "⏳ Pending"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
