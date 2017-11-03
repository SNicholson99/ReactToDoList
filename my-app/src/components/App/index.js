import React, {Component} from 'react';
import List from '../List';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      term : '',
      todos: []
    }
  };

  onChange = event => {
    this.setState({term : event.target.value})
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      term : '',
      todos : [...this.state.todos, {todo:this.state.term,isComplete:false}]
    })
  };

  onComplete = i => {
    this.setState((prevState) =>({
      todos: [...prevState.todos.slice(0,i),
        {todo: prevState.todos[i].todo,
        isComplete: !prevState.todos[i].isComplete},
        ...prevState.todos.slice(i+1)
      ]
    }));
  }

  render(){
    return (
      <div>

      <form onSubmit={this.handleSubmit}>
        <input value={this.state.term} onChange={this.onChange} />
        <button >Doooo IT  !!!</button>
      </form>
      <List todos={this.state.todos} onComplete={this.onComplete}/>
    </div>
    )
  };
};

export default App;
