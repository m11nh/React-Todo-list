import React from 'react'; 

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

export default InputForm