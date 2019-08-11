import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  render() {
    const items = this.props.items;
    return( 
	  <div className="card">
        <ul>
          {
          items.map((item) => {
            return <ToDo item={item} itemStatus={this.props.status.bind(this, item)} />
          })
          }
        </ul>
      </div>
    );
  }
}


export default ToDoList;
