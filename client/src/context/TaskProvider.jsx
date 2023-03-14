import { useContext, useState } from "react";
import {
  GetTaskRequest,
  deleteTaskRequest,
  GetOneTaskRequest,
  updateTaskRequest,
  toggleTaskRequest
} from "../api/task.api";
import { TaskContext } from "./TaskContext";

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("el contexto deberia estadentro de un provider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  //*-----------LOAD FROM CONTEXT-----------------
  async function LoadTask() {
    const response = await GetTaskRequest();
    console.log(response);
    setTask(response.data);
  }
  //*-----------DETELE FROM CONTEXT-----------------
  const DeleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTask(task.filter((task) => task.id !== id));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  //*-----------GET TASK FROM CONTEXT-----------------
  const getTask = async (id) => {
    try {
      const response = await GetOneTaskRequest(id);
      return response.data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  //*-----------UPDATE TASK FROM CONTEXT-----------------
  const updateTask = async (id, newfields) => {
    try {
      const response = await updateTaskRequest(id, newfields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

    //*-----------Toggle TASK FROM CONTEXT-----------------
    const toggleTaskDone = async (id ) => {
      try {
        const taskfound = task.find((task) => task.id === id)
       await toggleTaskRequest(id, taskfound.done === 0 ? true : false);
       setTask(task.map((task) => task.id === id ? {...task, done : !task.done} : task))
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <TaskContext.Provider value={{ task, LoadTask, DeleteTask, getTask, updateTask, toggleTaskDone}}>
      {children}
    </TaskContext.Provider>
  );
};
