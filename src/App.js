import React, { Component } from 'react';
import { uuid } from 'uuidv4'
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

class App extends Component {
  state = {
    newTodo: '',
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = e=>{
    e.preventDefault();
    console.log(e.target.value)
  }
  render () {
    return (
      <div className="App">
        <h1>Redux TODOS!</h1>
        <TodoForm newTodo = {this.state.newTodo} submitHandler={this.handleSubmit} handleChange={this.handleChange}/>
        <Todos newTodo ={this.state.newTodo} />
      </div>
    );
  }
}

export default App;
