import React from 'react';
import './ToDo.css'

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.statusChange = this.statusChange.bind(this);
  }

  statusChange(e) {
    this.props.itemStatus(e.target.value);
    e.preventDefault();
  }

  render() {
    const listItem = this.props.item;
    console.log(listItem);
    
    return(
      <li key={listItem.key} onClick={this.statusChange} className={listItem.status === 'done' ? 'done-item' : ''}>{listItem.text}</li>
    );
  }
}


export default ToDo;
