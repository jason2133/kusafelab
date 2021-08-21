import React, { useState, useCallback } from 'react'
import Bar from '../components/Bar'
import DetailCheck from './detail/DetailCheck'
import CheckList from './check/CheckList'
import Footer from '../components/Footer'

function Check() {
    // Let's go
    // start
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '1번',
            checked: true
        },
        {
            id: 2,
            text: '2번',
            checked: false
        },
        {
            id: 3,
            text: '3번',
            checked: false
        },
        {
            id: 4,
            text: '4번',
            checked: false
        },
        {
            id: 5,
            text: '5번',
            checked: false
        },
        {
            id: 6,
            text: '6번',
            checked: false
        },
        {
            id: 7,
            text: '7번',
            checked: false
        },
        {
            id: 8,
            text: '8번',
            checked: false
        },
        {
            id: 9,
            text: '9번',
            checked: false
        },
        {
            id: 10,
            text: '10번',
            checked: false
        },                                                   
    ])

    const onToggle = useCallback(
        id => {
          setTodos(
            todos.map(todo =>
              todo.id === id ? { ...todo, checked: !todo.checked } : todo,
            ),
          );
        },
        [todos],
      );

    return (
        <>
        <Bar/>
        <DetailCheck/>
        <CheckList todos={todos} onToggle={onToggle}/>
        <Footer/>
        </>
    )
}

export default Check
