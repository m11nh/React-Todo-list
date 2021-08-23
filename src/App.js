import logo from './logo.svg';
import './App.css';

function Task(props) {
  return (
    <div>
      <span>{props.name}</span>
      <input type="checkbox"/>
    </div>
  )
}

function App() {
  let incompleteTasks = [] 
  let completedTasks = []; 
  return (
    <div>
      <div>
        <form>
          <input type="text"/>
          <button onclick={addTask}> Add Task </button>
        </form>
      </div>
      <h1>Incomplete Tasks</h1>
      <div>
        {incompleteTasks.map((element) => {
          return <Task name={element}/>
        })}
      </div>
      <h1>Complete Tasks</h1>
      <div>
        {completedTasks.map((element) => {
          return <Task name={element}/>
        })}
      </div>
    </div>
  );
}
function addTask() {

}

export default App;
