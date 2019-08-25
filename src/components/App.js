import React from 'react';
import ToDoCreate from './ToDoCreate';
import ToDoList from './ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    }
  }

  handleCreate = (todo) => {
    let todoItems = [...this.state.todoItems];
    let newTodo = {};

    if (todoItems.length === 0) {
      newTodo = { id: 1, text: todo, status: 'active' };
    } else {
      const lastTodo = todoItems[todoItems.length - 1];
      newTodo = { id: lastTodo.id + 1, text: todo, status: 'active' };
    }

    this.setState({ todoItems: [...todoItems, newTodo] });
  }

  handleClick = (id) => {
    const todoItems = [...this.state.todoItems];
    let todo = todoItems.find(el => el.id === id);
    todo.status = todo.status === 'active' ? 'done' : 'active';
    const updatedTodoItems = todoItems.map(el => el.id === id ? todo : el);
    this.setState({ todoItems: updatedTodoItems });
  }

  render() {
    return(
      <div className='container'>
        <h1 className='app-header'>TODO APP</h1>
        <div className='row justify-content-center todo-form'>
          <div className='col-6'>
            <ToDoCreate onCreate={this.handleCreate} />
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <ToDoList todoItems={this.state.todoItems} handleOnClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
