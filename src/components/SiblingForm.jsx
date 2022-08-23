import React, {useState} from 'react'

const SiblingForm = (props) => {
    const [toDo, setToDo] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.onNewTodo({toDo, completed:false})
        setToDo("")
    }

    return (
        <fieldset>
            <legend>SiblingForm.jsx</legend>
            <h3>To-Do List</h3>
            <form onSubmit={handleSubmit}>
                <label>Add To-Do:</label>
                <input type="text" name="toDo" value={toDo}
                onChange={e=>setToDo(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </fieldset>
    )
}

export default SiblingForm