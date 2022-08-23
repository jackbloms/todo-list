import React, {useState} from 'react'
import SibilingDisplay from './SibilingDisplay'
import SiblingForm from './SiblingForm'

const ParentComponent = () => {
    const [todoList, setTodoList] = useState([])

    const receiveNewTodo =(newTodo)=>{
        setTodoList([...todoList, newTodo])
    }

    const updateList=(updatedList)=>{
        setTodoList(updatedList)
    }

    const handleUpdate=(e, idx)=>{
        const arrCopy = [...props.todoList]
        arrCopy[idx].isComplete = e.target.checked
        props.onListUpdate(arrCopy)
    }

    const handleDelete=(arrIdx)=>{
        const filteredList = props.toDo.filter((element, i)=>{
            return i !== arrIdx
        })
        props.onListUpdate(filteredList)
    }

    return (
        <fieldset>
            <legend>ParentComponent.jsx</legend>
            <SiblingForm onNewTodo={receiveNewTodo}/>
            <SibilingDisplay todoList={todoList} onListUpdate={updateList}/>
        </fieldset>
    )
}

export default ParentComponent