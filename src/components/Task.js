import React from 'react'

const Task = (props)=> {
  const {deleteTask, changeTaskStatus, task} = props
  const {active, important, finishDate} = task
  const importantStyle = {color: 'red'}
  const dateToFinish = new Date(finishDate).toLocaleString()
  if(active) {
    return (
      <div>
        <p>
          <strong style={important ? importantStyle : null}>{task.text}</strong> - <span>{task.date}</span>
        </p>
        <button onClick={()=> changeTaskStatus(task.id)}>Zostało zrobione</button>
        <button onClick={()=> deleteTask(task.id)}>X</button>
      </div>
    )
  } else {
    return (
      <div>
        <p>
          <strong>{task.text}</strong><em>Zrobić do</em>-<span>{task.date}</span>
        </p>
        <p>Task zrealizowany dnia <span>{dateToFinish}</span></p>
        <button onClick={()=> deleteTask(task.id)}>X</button>
      </div>
    )
  }
  
}

export default Task