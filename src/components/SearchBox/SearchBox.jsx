import React, { useState } from 'react';

export default function SearchBox({ onSearch }) {

  const [destTask, setDestTask] = useState('')
  const [isSearched, setIsSearched] = useState(false)

  const searchTask = (value, isSearched) => {
    onSearch(value, isSearched)
    setIsSearched(!isSearched)
    if (isSearched) {
      setDestTask('')
    }
  }

  return (
    <>
      <div className="search">
        <input type="text" className="search__text-box" placeholder='Search your task' value={destTask} onChange={event => setDestTask(event.target.value)} />
        <button className='btn search__btn' onClick={() => searchTask(destTask, isSearched)}>
          {
            !isSearched ? (<i className="fa-solid fa-magnifying-glass"></i>) : (
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            )
          }
        </button>
      </div>
    </>
  );
}