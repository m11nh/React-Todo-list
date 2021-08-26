import React from 'react'; 
import Task from './Task';

class CompletedTasks extends React.Component {
    render() {
        return (
            <div>
            {this.state.tasks.map((e) => {
                if (e.checked === false) {
                return <Task id={e.id} name={e.value} checked={e.checked} handleCheckoffClick={(event) => this.handleCheckoffClick(event)} handleDeleteClick={(e) => this.handleDeleteClick(e)}/>
                }
            })}
            </div>
        )
    }
}