import './App.css';
import React from 'react';
import Task from './Task';
import InputForm from './InputForm';
import CompletedTasks from './CompletedTasks';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      tasks: [],
      completedTasks: [], 
      value: '', 
      showCompleted: false
    }
  }

  handleSubmit(event) {
    if (this.state.value != '') {
      let new_tasks = this.state.tasks; 
      let len = this.state.tasks.length; 
      new_tasks.push({id: len, value: this.state.value, checked: false});
      this.setState({
        tasks: new_tasks,
        completedTasks: this.state.completedTasks, 
        value: '',
        showCompleted: this.state.showCompleted
      })
    }
    event.preventDefault(); 
  }

  handleDeleteClick(taskId) {
    let new_tasks = this.state.completedTasks.filter((task) => task.id != taskId); 
    this.setState({
      tasks: new_tasks, 
      completedTasks: this.state.completedTasks, 
      value: this.state.value, 
      showCompleted: this.state.showCompleted
    })

  }

  handleCheckoffClick(taskId) {
    let new_tasks = this.state.tasks;
    new_tasks.map((task) => {
      if (task.id === taskId) {
        task.checked = true; 
      } 
      return task; 
    })
    this.setState({
      tasks: new_tasks, 
      completedTasks: new_tasks,
      value: this.state.value,
      showCompleted: this.state.showCompleted
    })
  }

  handleChange(event) {
    this.setState({
      tasks: this.state.tasks,
      completedTasks: this.state.completedTasks,
      value : event.target.value,
      showCompleted: this.state.showCompleted
    })
  }

  handleShowCompletedClick() {
    this.setState({
      tasks: this.state.tasks, 
      completedTasks: this.state.completedTasks,  
      value : this.state.value, 
      showCompleted : this.state.showCompleted ? false : true  
    })
  }

  render() {
    return (
      <div>
        <div>
          <InputForm value={this.state.value} handleChange={(event) => this.handleChange(event)} handleSubmit={(event) => this.handleSubmit(event)}/>
        </div>
        <h1>Tasks</h1>
        <div>
          <CompletedTasks 
            tasks={this.state.tasks}
            handleCheckoffClick={(e) => this.handleCheckoffClick(e)}
          />
        </div>
        <button onClick={()=>this.handleShowCompletedClick()}>
          Show Completed Tasks
        </button>
        {/* <div>
          {this.state.tasks.map((e) => {
            if (e.checked === false) {
              return <Task id={e.id} name={e.value} checked={e.checked} handleCheckoffClick={(event) => this.handleCheckoffClick(event)} handleDeleteClick={(e) => this.handleDeleteClick(e)}/>
            }
          })}
        </div> */}
        {/* <div>
          <button onClick={()=>this.handleShowCompletedClick()}>Show Completed Tasks</button>
          {this.state.showCompleted &&
            <div>
              <h1> Completed Tasks </h1>
              {this.state.tasks.map((e) => {
                if (e.checked === true) {
                  return <Task id ={e.id} name={e.value} checked={e.checked} handleDeleteClick={() => this.handleDeleteClick(e.id)} />
                }
              })}
            </div>
          }
        </div> */}
      </div>
    );
  }
}

export default App;
