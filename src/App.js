import logo from './logo.svg';
import './App.css';
import React from 'react';
import reactDom from 'react-dom';

class InputForm extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event)}>
        <label>
          <input type="text" value={this.props.value} onChange={(event) => this.props.handleChange(event)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Task extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      checked:this.props.checked, 
      name: this.props.name,
      id: this.props.id
    };
  }

  handleClick(e) {
    return this.props.handleClick(e);
  }

  render() {
    return (
      <div>
        <span>{this.state.name}</span>
        <input type="checkbox" onClick={()=>this.handleClick(this.state.id)} checked={this.state.checked}/>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      tasks: [],
      value: '', 
    }
  }

  handleSubmit(event) {
    // alert('A name was submitted' + this.state.value);
    let new_tasks = this.state.tasks; 
    let len = this.state.tasks.length; 
    new_tasks.push({id: len, value: this.state.value, checked: false});
    this.setState({
      tasks: new_tasks,
      value: ''
    })
    event.preventDefault(); 
  }

  handleTaskClick(taskId) {
    let new_tasks = this.state.tasks;
    new_tasks[taskId].checked = true; 
    this.setState({
      tasks: new_tasks, 
      value: this.state.value
    })
  }

  handleChange(event) {
    this.setState({
      tasks: this.state.tasks,
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
          {this.state.tasks.map((e) => {
            if (e.checked === false) {
              return <Task id={e.id} name={e.value} checked={e.checked} handleClick={(event) => this.handleTaskClick(event)}/>
            }
          })}
        </div>
        {/* <h1>Complete Tasks</h1>
        <div>
          {this.state.completedTasks.map((element) => {
            return <Task name={element}/>
          })}
        </div> */}
      </div>
    );
  }
}
function addTask() {

}

export default App;
