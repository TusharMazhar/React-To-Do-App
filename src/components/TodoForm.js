import React,{useState} from 'react'

const TodoForm = () => {
    const [input,setInput]=useState('')
    return (
        <form className="todo-form">
            <input 
            type="text" 
            value={input} 
            placeholder="Add Items" 
            name="text"
            className="todo-input"
            
            />
            <button type="button" className="todo-button">Add</button>
        </form>
    )
}

export default TodoForm
