import React from 'react';

class ToDoCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { todo } = this.state;

    if (todo.trim().length > 0) {
      this.props.onCreate(todo.trim());
    } else {
      alert('Please add text for todo.');
    }

    this.setState({ todo: '' });
  }

  render() {
    return(
      <form className='form-inline justify-content-center'>
        <input
          type='text'
          value={this.state.todo}
          onChange={this.onChange}
          name='todo'
          autoComplete='off'
          autoFocus={true}
          className='form-control w-75 mr-2'
          placeholder='Write your todo here...'
        />

        <input
          type='submit'
          value='Add Todo'
          onClick={this.onSubmit}
          className='btn btn-primary'
        />
      </form>
    );
  }
}

export default ToDoCreate;
