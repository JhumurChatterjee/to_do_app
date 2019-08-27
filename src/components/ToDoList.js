import React from 'react';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filter: 'all'
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  filterItem = () => {
    const { searchTerm, filter } = this.state;
    let todoItems = [];

    if (filter === 'all') {
      todoItems = [...this.props.todoItems]
    } else {
      todoItems = [...this.props.todoItems].filter(el => el.status === filter)
    }

    if (searchTerm.trim().length > 0) {
      return todoItems.filter(el => el.text.toLowerCase().includes(searchTerm.trim().toLowerCase()));
    } else {
      return todoItems;
    }
  }

  handleFilterClick = (filter) => {
    this.setState({ filter });
  }

  render() {
    const todoItems = this.filterItem();
    const { filter } = this.state;

    return (
      <div className='card'>
        <div className='card-header'>
          <span className='d-inline-block mr-5'><strong>TODO List ({todoItems.length})</strong></span>
          <span className={filter === 'all' ? 'active-link' : 'filter-link'} onClick={this.handleFilterClick.bind(null, 'all')}>All</span>
            <span className={filter === 'active' ? 'active-link' : 'filter-link'} onClick={this.handleFilterClick.bind(null, 'active')}>Active</span>
            <span className={filter === 'done' ? 'active-link' : 'filter-link'} onClick={this.handleFilterClick.bind(null, 'done')}>Done</span>

          <input
            type='text'
            onChange={this.onChange}
            name='searchTerm'
            autoComplete='off'
            className='form-control w-25 float-right'
            placeholder='Search todo here...'
          />
        </div>

        <div className='card-body'>
          <ul className='list-group'>
            {
              todoItems.map((todo, index) => {
                const className = todo.status === 'active' ? 'todo-text' : 'todo-text done'

                return (
                  <li key={index} className='todo-item'>
                    <span className={className} onClick={this.props.handleOnClick.bind(null, todo.id)}>
                      {index + 1}. {todo.text}
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}


export default ToDoList;
