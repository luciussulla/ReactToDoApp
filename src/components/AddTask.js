import './AddTask.css'
import React, {Component} from 'react'

class AddTask extends Component {

   minDate = new Date().toISOString().slice(0,10)
   state = {
     text: '', 
     finishDate: this.minDate,
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
      let maxDate = this.minDate.slice(0,4)*1 + 1
      console.log("initial max date "+maxDate)
      maxDate = maxDate+"-12-31"
     return ( 
      <>
        <div>Dodaj task</div>
        <form className="form">
          <input type="text" name="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.universalHandler} value={this.state.text}/>
          <input type="checkbox" name="important" id="important" checked={this.state.important} onChange={this.universalHandler}/>
          <label htmlFor="important">Priorytet</label>
          <br/>
          <label>Do kiedy zrobić:</label>
          <input type="date" min={this.minDate} max={maxDate} name="finishDate" onChange={this.universalHandler} value={this.state.finishDate} />
        </form>
      </>
     )
   }
}

export default AddTask;