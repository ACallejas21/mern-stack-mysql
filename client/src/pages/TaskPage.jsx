import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTask } from "../context/TaskProvider";

function TaskPage() {
  const { task, LoadTask } = useTask();

  useEffect(() => {
    LoadTask();
  }, []);

  function renderMain() {
    if (task.length === 0) {
      return <h1 className="text-5xl text-white font-bold text-center">NOT TASK YET</h1>;
    }

    return task.map((task) => <TaskCard task={task} key={task.id}></TaskCard>);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TaskPage;
