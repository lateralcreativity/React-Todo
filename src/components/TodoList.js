// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.list.map(item => {
                    return (
                        <Todo item={item} key={item.id} completedHandler={this.props.completedHandler}/>
                    )
                })}
            </div>
        )
    }
}

export default TodoList;