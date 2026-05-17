import React, { useState } from 'react';

export default function FilterBar({ onFilter }) {

  const filterTodos = (value) => {
    onFilter(value)
  }

  return (
    <>
      <select name="filter" id="filter" className='filter' onClick={event => filterTodos(event.target.value)} >
        <option value="all">All</option>
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
        <option value="canceled">Canceled</option>
      </select>
    </>
  );
}