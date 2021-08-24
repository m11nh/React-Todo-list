import logo from './logo.svg';
import './App.css';
import React from 'react';
import reactDom from 'react-dom';

class InputForm extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event)}>
        <label>
          Name: 
          <input type="text" value={this.props.value} onChange={(event) => this.props.handleChange(event)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function Task(props) {
  return (
    <div>
      <span>{props.name}</span>
      <input type="checkbox"/>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      incompleteTasks : ["gee", "lol"], 
      completedTasks : ["buddy"] ,
      value: ''
    }
  }

  handleSubmit(event) {
    // alert('A name was submitted' + this.state.value);
    let incompleteTasksNew = this.state.incompleteTasks; 
    incompleteTasksNew.push(this.state.value)
    this.setState({
      incompleteTasks : incompleteTasksNew, 
      completedTasks : this.state.completedTasks
    })
    event.preventDefault(); 
  }

  handleChange(event) {
    this.setState({
      incompleteTasks : this.state.incompleteTasks, 
      completedTasks : this.state.completedTasks, 
      value : event.target.value
    })
  }

  render() {
    return (
      <div>
        <div>
          <InputForm value={this.state.value} handleChange={(event) => this.handleChange(event)} handleSubmit={(event) => this.handleSubmit(event)}/>
        </div>
        <h1>Incomplete Tasks</h1>
        <div>
          {this.state.incompleteTasks.map((element) => {
            return <Task name={element}/>
          })}
        </div>
        <h1>Complete Tasks</h1>
        <div>
          {this.state.completedTasks.map((element) => {
            return <Task name={element}/>
          })}
        </div>
      </div>
    );
  }
}
function addTask() {

}

export default App;
