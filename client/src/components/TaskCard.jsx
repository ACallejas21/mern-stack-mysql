import React from "react";
import { useTask } from "../context/TaskProvider.jsx";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const navigate = useNavigate();

  const { DeleteTask, toggleTaskDone } = useTask();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-slate-800 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "✅" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>
      <div className="flex gap-x-1">
        <button className="bg-red-500 text-white px-1 py-1 rounded-md" onClick={() => DeleteTask(task.id)}>DELETE</button>
        <button className="bg-slate-800 text-white px-1 py-1 rounded-md" onClick={() => navigate(`/edit/${task.id}`)}>EDIT</button>
        <button
        className="bg-green-500 text-white px-1 py-1 rounded-md"
          onClick={() => {
            handleDone();
          }}
        >
          TOOTGLE TASK
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
