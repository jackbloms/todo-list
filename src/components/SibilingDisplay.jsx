//rafce
import React from 'react'

const SibilingDisplay = (props) => {
    
    return (
        <fieldset>
            <legend>SiblingDisplay.jsx</legend>
            {
                props.todoList.map((eachTodo, i)=>{
                    return(
                        <pre key={i}>
                            {eachTodo.toDo}
                            <input type="checkbox" checked={eachTodo.isComplete}
                            onChange={(e)=>handleUpdate(i)}/>
                            <button onClick={(e)=>handleDelete(e, i)}>Delete</button>
                        </pre>
                    )
                })
            }
        </fieldset>
    )
}

export default SibilingDisplay