import React, { Component } from 'react'
import './App.css'
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends Component {

  state = {
    tasks: [
      {
        id: 0, 
        text: "Zagrać w wiedzimna 3",
        date: "2022-02-15",
        important: false, 
        active: true, 
        finishDate: null
      },
      {
        id: 1, 
        text: "Zagrać w wiedzimna 3",
        date: "2021-08-15",
        important: true, 
        active: true, 
        finishDate: null
      },
      {
        id: 3, 
        text: "Zagrać w wiedzimna 3",
        date: "2021-09-15",
        important: true, 
        active: true, 
        finishDate: null
      }
    ]
  }  

  deleteTask = (id) => {
    const tasks = [...this.state.tasks]
    const newTasks = tasks.filter(task => task.id!==id)
    this.setState({
      tasks: newTasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks]
    const changedStatusTasks = tasks.map(task=> {
      if(task.id===id) {
        task.active = false
        task.finishDate = new Date().getTime()
      } 
      return task
    })
    this.setState({
      tasks: changedStatusTasks
    })
  }
  
  render(){
    console.log(this.state.tasks)
    return (
      <div className="App">
        <p>ToDoApp</p>
        <AddTask/>
        <TaskList changeTaskStatus={this.changeTaskStatus} tasks={this.state.tasks} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;