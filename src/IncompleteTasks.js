import React from 'react'; 
import Task from './Task';

class IncompleteTasks extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            tasks : props.tasks 
        }
    }

    handleCheckoffClick(e) {
        return this.props.handleCheckoffClick(e); 
    } 

    render() {
        return (
            <div>
            {this.state.tasks.map((e) => {
                if (e.checked === false) {
                    return <Task id={e.id} name={e.value} checked={e.checked} handleCheckoffClick={(event) => this.handleCheckoffClick(event)}/>
                }
            })}
            </div>
        )
    }
}

export default IncompleteTasks; 