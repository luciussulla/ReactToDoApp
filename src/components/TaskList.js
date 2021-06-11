import './TaskList.css'
import React from 'react'
import Task from './Task'

const TaskList = (props)=> {
  const tasks = props.tasks.map(task=> <Task changeTaskStatus={props.changeTaskStatus} deleteTask={props.deleteTask} key={task.id}  task={task}/> )
  return ( 
    <>
  <div className="active">
    <div>Zadania do zrobienia</div>
    {tasks}
  </div>

  <hr/>

  <div className="done">
    <h3>Zadania zrobine</h3>
  </div>
  </>
  )
}

export default TaskList;