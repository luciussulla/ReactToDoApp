import React from 'react'

const Task = (props)=> {
  const {deleteTask, changeTaskStatus, task} = props

  return (
    <div>
      <p>
        <strong>{task.text}</strong> - <span>{task.date}</span>
      </p>
      <button onClick={()=> changeTaskStatus(task.id)}>Zostało zrobione</button>
      <button onClick={()=> deleteTask(task.id)}>X</button>
    </div>
  )
}

export default Task