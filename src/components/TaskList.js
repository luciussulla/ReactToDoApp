import './TaskList.css'
import React from 'react'
import Task from './Task'

const TaskList = (props)=> {
  const activeTasks = []
  const doneTasks = []

  props.tasks.map(task=>{
     const processedTask = <Task changeTaskStatus={props.changeTaskStatus} deleteTask={props.deleteTask} key={task.id} task={task} /> 
     task.active ? activeTasks.push(processedTask) : doneTasks.push(processedTask)
  })

  return ( 
    <>
    <div className="active">
      <h2>Zadania do zrobienia ({activeTasks.length})</h2>
      {activeTasks.length > 0 ? activeTasks : <p>Brak zadań - lucky you</p>}
      {console.log(activeTasks)}
      {console.log(doneTasks)}
    </div>

    <hr/>

    <div className="done">
      <h3>Zadania zrobine ({doneTasks.length})</h3>
      {doneTasks.length > 5 && <span style={{fontSize: 10}}>Wyświetlonych jest jedynie 5 ostatnich elementów</span>}
      {doneTasks.length > 0 ? doneTasks.slice(0,5) : <p>Brak zkończonych zadań</p>}
    </div>
    </>
  )
}

export default TaskList;