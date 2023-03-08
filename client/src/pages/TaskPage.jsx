import { useEffect, useState} from "react";
import { GetTaskRequest } from "../api/task.api";
import TaskCard from "../components/TaskCard";

function TaskPage() {

  const [task, setTask] = useState([])

  useEffect(() => {
    async function LoadTask() {
      const response = await GetTaskRequest();
      console.log(response);
      setTask(response.data);
    }
    LoadTask()
  }, []);

  return (<div>
    <h1>Tasks</h1>
    {task.map(task => (
      <TaskCard task={task} key={task.id}></TaskCard>
    ))}
  </div>);
}

export default TaskPage;
