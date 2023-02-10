import React from 'react'

const ViewTodos = ({ todos }) => {
    return (
        <div>

            <ul>
                {todos.map((item) => (
                    <li> {item.title} </li>
                ))}
            </ul>
        </div>
    )
}

export default ViewTodos