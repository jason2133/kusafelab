import React from 'react'
import CheckItem from './CheckItem'
import './CheckList.scss'

const CheckList = ({ todos }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <CheckItem todo={todo} key={todo.id} />
            ))}
            {/* <CheckItem />
            <CheckItem />
            <CheckItem /> */}
        </div>
    )
}

export default CheckList
