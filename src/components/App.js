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
        important: true, 
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
    console.log("delete "+id)
  }

  changeTaskStatus = (id) => {
    console.log("change w komponencie App " + id)
  }

  render(){
    return (
      <div className="App">
        ToDoApp
        <AddTask/>
        <TaskList changeTaskStatus={this.changeTaskStatus} tasks={this.state.tasks} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;