import React from 'react'
import {useSelector} from 'react-redux'

function TodoList() {
const state = useSelector(state => state.todolist)
    return (
        <div>
           {state.map((todo)=>(
           <div key={todo.id}>{todo.title}</div>
               
    ))} 
        </div>
    )
}

export default TodoList

