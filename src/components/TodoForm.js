import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: ''
        }
    }

    inputHandler = event => {
        this.setState({
            taskName: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addTask(this.state.taskName)
        this.setState({
            taskName: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" value={this.state.taskName} onChange={this.inputHandler} />
                <br/>
                <button>Confirm Task</button>
            </form>
        )
    }
}

export default TodoForm