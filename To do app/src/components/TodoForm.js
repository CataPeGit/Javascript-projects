import React, {useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');

    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>

        { props.edit ? 
        (
        <>
            <input ref={inputRef} onChange={handleChange} type="text" placeholder = "Create task" value = {input} name="text" className='todo-input edit' />
            <button className='todo-button edit'>Update todo</button>
        </>            
        ) : (
        <>
            <input ref={inputRef} onChange={handleChange} type="text" placeholder = "Create task" value = {input} name="text" className='todo-input' />
            <button className='todo-button'>Create todo</button>
        </>
        )
        }

        </form>
    )
}

export default TodoForm;