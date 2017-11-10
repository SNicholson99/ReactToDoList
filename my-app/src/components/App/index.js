import React, {Component} from 'react';
import List from '../List';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      title : '',
      todos: []
    }
  };

  // doFetch = (url,body,method) => {
  //   fetch(url,{
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: method,
  //     body: body
  //   })
  // }

  componentDidMount(){
    fetch('/todos')
    .then(res => res.json())
    .then(value => this.setState({
      todos: [...value.payload]
    }))
    .catch(err => console.log(err));
  }

  onChange = event => {
    this.setState({title : event.target.value})
  };


  handleSubmit = event => {
    event.preventDefault();

    fetch('/todos',{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        title: this.state.title,
        isComplete: false
      })
    })
    .then(res => res.json())
    .then(value =>  this.setState({
          title : '',
          todos : [...this.state.todos, value.payload]
        })
    )
    .catch(err => console.log(err));
  }

  onComplete = i => {
    // this is an optimistic update
    let currentState = this.state.todos;
    this.setState((prevState) =>({
      todos: [...prevState.todos.slice(0,i),
        {title: prevState.todos[i].title,
        isComplete: !prevState.todos[i].isComplete},
        ...prevState.todos.slice(i+1)
      ]
    }));

    fetch('/todos',{
      headers:{
        'Content-Type':'application/json'
      },
      method:'put',
      body:JSON.stringify({
        _id: this.state.todos[i]._id,
        title: this.state.todos[i].title,
        isComplete: !this.state.todos[i].isComplete
      })
    }).then(res => res.json())
    .then(value => value.error == 'nope'? this.setState({todos:currentState}) : console.log('no error'))


    // fetch('/todos',{
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   method:'put',
    //   body:JSON.stringify({
    //     _id: this.state.todos[i]._id,
    //     title: this.state.todos[i].title,
    //     isComplete: !this.state.todos[i].isComplete
    //   })
    // })
    // .then(res => res.json())
    // .then(value =>     this.setState((prevState) =>({
    //       todos: [...prevState.todos.slice(0,i),
    //         value.payload,
    //         ...prevState.todos.slice(i+1)
    //       ]
    //     }))
    // )
  }

  onDelete = i => {
    this.setState((prevState) =>({
      todos: [...prevState.todos.slice(0,i),...prevState.todos.slice(i+1)
      ]
    }));
    fetch('/todos',{
      headers:{
        'Content-Type':'application/json'
      },
      method:'delete',
      body:JSON.stringify({
        _id: this.state.todos[i]._id
      })
    })
  }

  render(){
    return (
      <div >
        <AppBar  title="Title" />
        <form onSubmit={this.handleSubmit}>
        <TextField value={this.state.title} onChange={this.onChange} floatingLabelText="Enter item to do" />
        <RaisedButton label="DOOOO IT!!!!" primary={true} type='submit' />
      </form>
      <List  todos={this.state.todos} onComplete={this.onComplete} onDelete={this.onDelete}/>
    </div>
    )
  };
};

export default App;
