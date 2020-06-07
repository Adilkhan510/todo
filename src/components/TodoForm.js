import React, { Component } from 'react';
class TodoForm extends Component {

  render () {
    return (
      <div>
        <form>
          <input
          onChange={this.props.handleChange}
          value={this.props.newTodo} />
          <button onSubmit={this.props.handleSubmit}>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
