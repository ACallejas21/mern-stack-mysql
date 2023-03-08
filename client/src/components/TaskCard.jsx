import React from 'react'

function TaskCard({task}) {
  return (
    <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done == 1 ? '✅' : '❌'}</span>
        <span>{task.createAt}</span>
        <button>DELETE</button>
        <button>UPDATE</button>
      </div>
  )
}

export default TaskCard