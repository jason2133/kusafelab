import React from 'react'
import CheckItem from './CheckItem'
import './CheckList.scss'

const CheckList = ({ todos, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <CheckItem todo={todo} key={todo.id} onToggle={onToggle} />
            ))}
            {/* <CheckItem />
            <CheckItem />
            <CheckItem /> */}
        </div>
    )
}

export default CheckList
