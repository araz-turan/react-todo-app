import React from 'react';

export default function TaskList({ task, onChangeTodoStatus, onDeleteTodo }) {

  const changeStatus = (radioID, taskID) => {
    onChangeTodoStatus(radioID, taskID)
  }

  const deleteTodo = (taskID) => {
    onDeleteTodo(taskID)
  }

  return (
    <>
      <ul className="task">
        <li className="task__li" id={task.id}>
          <div className="task__header">
            <h3 className="heading-3 task__header-name">{task.isMarked ? (<mark>{task.todoTitle}</mark>) : task.todoTitle}</h3>
            <button className='btn task__header-btn' onClick={() => deleteTodo(task.id)}>
              <i className="fa-solid fa-delete-left"></i>
            </button>
          </div>
          <div className="task__statuses">
            <input type="radio" name={task.id} className='task__statuses-box' id='todo' checked={task.todoStatus === 'todo'} onChange={(event) => changeStatus(event.target.id, task.id)} />
            <label className='task__statuses-name' htmlFor="to-do">To-Do</label>
            <input type="radio" name={task.id} className='task__statuses-box' id='doing' checked={task.todoStatus === 'doing'} onChange={(event) => changeStatus(event.target.id, task.id)} />
            <label className='task__statuses-name' htmlFor="doing">Doing</label>
            <input type="radio" name={task.id} className='task__statuses-box' id='done' checked={task.todoStatus === 'done'} onChange={(event) => changeStatus(event.target.id, task.id)} />
            <label className='task__statuses-name' htmlFor="done">Done</label>
            <input type="radio" name={task.id} className='task__statuses-box' id='canceled' checked={task.todoStatus === 'canceled'} onChange={(event) => changeStatus(event.target.id, task.id)} />
            <label className='task__statuses-name' htmlFor="canceled">Canceled</label>
          </div>
        </li>
      </ul>
    </>
  );
}