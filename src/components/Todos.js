import React, { Component } from 'react'

class Todos extends Component {
  state = {
    todos: [
      {
        id: 0,
        task: 'Test this Todo Page',
        completed: false
      },
      {
        id: 1,
        task: 'Learn Redux',
        completed: false
      },
      {
        id: 2,
        task: 'Learn React',
        completed: true
      },
    ],
  };

  handleAddTodo = (todo)=>{
    const newTodo ={
      id : 
    }
  }

  render () {
    return (
      <div>
        <ul>
          {this.props.newTodo.map(todo => (
            <li key={todo.id}>{todo.task}: {todo.completed.toString()}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
