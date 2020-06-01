// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default function TodoList({ data, completedHandler, clearHandler }) {

    return (
        <div>
            <button onClick={clearHandler}>Clear Completed Tasks</button>
            {data.map(item => {
                return (
                    <Todo itemData={item} key={item.id} completedHandler={completedHandler}/>
                )
            })}
        </div>
    )
}