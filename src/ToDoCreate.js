import React from 'react';

class ToDoCreate extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    this.props.change(e.target.toDo.value);
    e.preventDefault();
  }

  render() {
    return(
			<div className="container">
        <form onSubmit={ this.addItem }>
          <label>
          Tell us what you want to do: </label>
          <input type="text" name="toDo" placeholder = "Enter Item" />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}


export default ToDoCreate;
