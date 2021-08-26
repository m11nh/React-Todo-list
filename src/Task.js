import React from 'react'; 

class Task extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      checked:this.props.checked, 
      name: this.props.name,
      id: this.props.id
    };
  }

  handleCheckoffClick(e) {
    return this.props.handleCheckoffClick(e);
  }

  handleDeleteClick(e) {
    return this.props.handleDeleteClick(e); 
  }

  render() {
    if (this.state.checked) {
      return ( 
        <div>
          <span><s>{this.state.name}</s></span>
          <input type="checkbox" checked={this.state.checked}/>
          <input type="button" value="delete" onClick={() => this.handleDeleteClick()}/>
        </div>
      )
    } else {
      return (
        <div>
          <span>{this.state.name}</span>
          <input type="checkbox" onClick={()=>this.handleCheckoffClick(this.state.id)} checked={this.state.checked}/>
        </div>
      )
    }
  }
}

export default Task; 