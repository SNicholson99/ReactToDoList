import React, {Component} from 'react'
import List from './List.js'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      term : '',
      todos: []
    }
  }

  onChange = event => {
    this.setState({term : event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      term : '',
      todos : [...this.state.todos, this.state.term]
    })
  }

  render(){
    return (
      <div>

      <form onSubmit={this.handleSubmit}>
        <input value={this.state.term} onChange={this.onChange} />
        <button >Doooo IT  !!!</button>
      </form>
      <List todos={this.state.todos}/>
    </div>
    )
  };
}

export default App;
