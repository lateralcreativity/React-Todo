import React from 'react';
class Todo extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.completedHandler(this.props.item.id)}>
                {this.props.item.completed ? <p style={{textDecoration: 'line-through'}}>{this.props.item.task}</p> : <p>{this.props.item.task}</p>}
            </div>
        )
    }
}

export default Todo;