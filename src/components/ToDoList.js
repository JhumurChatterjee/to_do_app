import React from 'react';

class ToDoList extends React.Component {
  render() {
    const todoItems = this.props.todoItems

    return(
      <div className='card'>
        <div className='card-header'>
          <strong>TODO List ({todoItems.length})</strong>
        </div>

        <div className='card-body'>
          <ul className='list-group'>
            {todoItems.map((todo, index) => {
              const className = todo.status === 'active' ? 'todo-text' : 'todo-text done'

              return (
                <li key={index} className='todo-item'>
                  <span className={className} onClick={this.props.handleOnClick.bind(null, todo.id)}>
                  {index + 1}. {todo.text}
                  </span>
                </li>
              )})}
          </ul>
        </div>
      </div>
    );
  }
}


export default ToDoList;
