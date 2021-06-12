import './AddTask.css'
import React, {Component} from 'react'

class AddTask extends Component {
   state = {
     text: '', 
     checked: false,
     finishDate: null, 
     important: false, 
   }
   
   universalHandler = (e)=> {
      console.log(e.target.type)
      const type = e.target.type
      if (type==="text") {
        this.setState({
          text: e.target.value
        })
      } else if (type==="date") {
        this.setState({
          finishDate: new Date().getTime()
        })
      } else if (type==="checkbox") {
        this.setState({
          checked: !this.state.checked
        })
      }
   }

    render() {
     return ( 
      <>
        <div>Dodaj task</div>
        <form className="form">
          <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.universalHandler} value={this.state.text}/>
          <input type="checkbox" id="important" checked={this.state.checked} onChange={this.universalHandler}/>
          <label htmlFor="important">Priorytet</label>
          <input type="date" onChange={this.universalHandler} />
        </form>
      </>
     )
   }
}

export default AddTask;