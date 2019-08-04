import React from 'react';
import ToDoCreate from './ToDoCreate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{text: "Jhumur", status: 'active'}] };
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
      console.log(this.state.items);
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


