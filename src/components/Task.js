import React from 'react'

const Task = (props)=> {
  const {text, task, deleteTask, changeTaskStatus, data, finishDate, active} = props

  return (
    <div>
      <p>
        <strong>{text}</strong> - <span>{finishDate}</span>
      </p>
      <button onClick={()=> changeTaskStatus(task.id)}>Zostało zrobione</button>
      <button onClick={()=> deleteTask(task.id)}>X</button>
    </div>
  )
}

export default Task