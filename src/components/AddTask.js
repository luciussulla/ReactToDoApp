import './AddTask.css'
import React, {Component} from 'react'

class AddTask extends Component {
   state = {
     text: '', 
     finishDate: null, 
     important: false, 
   }
   
   universalHandler = (e)=> {
      console.log(e.target.type)
      const type = e.target.type
      if(type==="text" || type==="date") {
        this.setState({
          [e.target.name]: e.target.value
        })
      } else if (type==="checkbox") {
        this.setState({
          [e.target.name]: !this.state.important
        })
      }
      // switch(type) {
      //   case "date": 
      //     this.setState({
      //       finishDate: e.target.value
      //     })
      //     break;
      //   case "text": 
      //     this.setState({
      //       text: e.target.value
      //     })  
      //     break;
      //   case "checkbox": 
      //     this.setState({
      //       checked: !this.state.checked
      //     })  
      //     break;
      //   default: 
      //     console.log("choice not valid")
      // }
   }
    
    render() {
     return ( 
      <>
        <div>Dodaj task</div>
        <form className="form">
          <input type="text" name="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.universalHandler} value={this.state.text}/>
          <input type="checkbox" name="important" id="important" checked={this.state.important} onChange={this.universalHandler}/>
          <label htmlFor="important">Priorytet</label>
          <br/>
          <label>Do kiedy zrobić:</label>
          <input type="date" min="" max="" name="finishDate" onChange={this.universalHandler} />
        </form>
      </>
     )
   }
}

export default AddTask;