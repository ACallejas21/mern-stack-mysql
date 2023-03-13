import { useEffect} from "react";
import TaskCard from "../components/TaskCard";
import { useTask } from "../context/TaskProvider";

function TaskPage() {

  const {task, LoadTask} = useTask()

  useEffect(() => {
    LoadTask()
  }, []);

  function renderMain(){

    if (task.length === 0 ) {
      return <h1>NOT TASK YET</h1>
    }

    return task.map(task => (
      <TaskCard task={task} key={task.id}></TaskCard>
    ))
  }

  return (<div>
    <h1>Tasks</h1>
    {renderMain()}
  </div>);
}

export default TaskPage;
