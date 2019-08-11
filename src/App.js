import React from 'react';
import ToDoCreate from './ToDoCreate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{text: "Jhumur", status: 'active'}] };
    this.changeState = this.changeState.bind(this);
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

  render() {
    return(
      <ToDoCreate change={this.changeState.bind(this)} />
    );
  }
}

export default App;
