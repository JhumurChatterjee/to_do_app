import React from 'react';

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
      {
        if(listItem.status === 'active') {
          <li key={listItem.key} onClick={this.statusChange}>{listItem.text}</li>
        }
        if(listItem.status === 'done') {
         <li key={listItem.key} onClick={this.statusChange} className="done-item">{listItem.text}</li>
        }
      }
    );
  }
}


export default ToDo;
