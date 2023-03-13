import React from 'react'
import { useTask } from '../context/TaskProvider.jsx'

function TaskCard({task}) {

    const {DeleteTask} = useTask()


  return (
    <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done == 1 ? '✅' : '❌'}</span>
        <span>{task.createAt}</span>
        <button onClick={() => DeleteTask(task.id)}>DELETE</button>
        <button>UPDATE</button>
      </div>
  )
}

export default TaskCard