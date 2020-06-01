import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: [] // toDoList ends
    }
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }

    this.setState({
      toDoList: [...this.state.toDoList, newTask]
    })
  }

  completedHandler = taskId => {
    this.setState({
      toDoList: this.state.toDoList.map(task => {
        if(task.id === taskId) {
          return {...task, completed: !task.completed}
        } else {
          return task
        }
      })
    })
  }

  clearHandler = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <p>Type below to add a task.</p>
        <TodoForm addTask={this.addTask} />
        <TodoList data={this.state.toDoList} completedHandler={this.completedHandler} clearHandler={this.clearHandler} />
      </div>
    );
  }
}

export default App;
