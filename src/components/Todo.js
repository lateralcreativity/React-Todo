import React from 'react';

export default function Todo({ itemData, completedHandler }) {
    return (
        <div onClick={() => completedHandler(itemData.id)}>
            {itemData.completed ? <p style={{textDecoration: 'line-through'}}>{itemData.task}</p> : <p>{itemData.task}</p>}
        </div>
    )
}