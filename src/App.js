import React from 'react';
import ToDoCreate from './ToDoCreate';
import ToDoList from './ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{text: "Jhumur", key: Date.now(), status: 'active'}] };
    this.changeState = this.changeState.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeState(listItem) {
    if (listItem !== "") {
      var newItem = {
        text: listItem,
        key: Date.now(),
        status: 'active',
      };
      
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
    }

    else {
      return
    }
  }

  changeStatus(item){
    this.setState((prevState) => {
      prevState.items.map((i) => {return i.key === item.key ? i.status = 'done' : "" });
    })
  }

  render() {
    return(
      <div className="container">
        <ToDoCreate change={this.changeState.bind(this)} />
        <ToDoList items={this.state.items} status={this.changeStatus.bind(this)} />
            {console.log(this.state.items)}
      </div>
    );
  }
}

export default App;
