import { useState } from 'react';

export default function AddTask({ onCreateTodo }) {

    const [newTodoName, setNewTodoName] = useState('')
    

    const createNewTodo = (newTodoName) => {
        if (newTodoName.trim() !== '') {
            onCreateTodo(newTodoName)
        }
        setNewTodoName('')
    }

    return (
        <>
            <div className="add-task">
                <input type="text" className='add-task__box' placeholder='Add Your Task' value={newTodoName} onChange={event => setNewTodoName(event.target.value)} />
                <button className="btn add-task__success" onClick={() => createNewTodo(newTodoName)}>Confirm</button>
                <button className="btn add-task__danger" onClick={() => setNewTodoName('')}>Cancel</button>
            </div>
        </>
    );
}