import React from 'react';
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    inputHandler = event => {
        this.setState({
            task: event.target.value
        });

    }

    render() {
        const submitHandler = event => {
            event.preventDefault();
            this.props.addTask(this.state.task);
            this.setState({
                task: ''
            });
        }

        return (
            <form action="" onSubmit={submitHandler}>
                <input type="text" value={this.state.task} onChange={this.inputHandler}/>
                <input type="submit"/>
                <button onClick={this.props.clearHandler}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;