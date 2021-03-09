import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  addTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      list: [...this.state.list, newTask]
    })
  }

  completedHandler = id => {
    this.setState({
      list: this.state.list.map(task => {
        if(task.id === id) {
          return {...task, completed: !task.completed}
        } else {
          return task
        }
      })
    })
  }

  clearHandler = () => {
    this.setState({
      list: this.state.list.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm list={this.state.list} addTask={this.addTask} clearHandler={this.clearHandler}/>
        <TodoList list={this.state.list} completedHandler={this.completedHandler} />
      </div>
    );
  }
}

export default App;
