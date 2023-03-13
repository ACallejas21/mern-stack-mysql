import { useContext, useState } from "react";
import { GetTaskRequest , deleteTaskRequest} from "../api/task.api";
import { TaskContext } from "./TaskContext";

export const useTask = () => {
    const  context = useContext(TaskContext)
    if (!context) {
        throw new Error("el contexto deberia estadentro de un provider")
    }
    return context
}

export const TaskContextProvider = ({ children }) => {

  const [task, setTask] = useState([])
//*-----------LOAD FROM CONTEXT-----------------
  async function LoadTask() {
    const response = await GetTaskRequest();
    console.log(response);
    setTask(response.data);
  }
//*-----------DETELE FROM CONTEXT-----------------
  const DeleteTask = async (id) =>{
    try {
    const response = await deleteTaskRequest(id)
    setTask(task.filter(task => task.id !== id))
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}



  return(
    <TaskContext.Provider value={{task, LoadTask, DeleteTask}}>
        {children}
    </TaskContext.Provider>
  )
};
