import AddTask from './components/AddTask/AddTask';
import FilterBar from './components/FilterBar/FilterBar';
import TaskList from './components/TaskList/TaskList';
import SearchBox from './components/SearchBox/SearchBox';
import './main.scss'
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function App() {

  const [todoList, setTodoList] = useState([])
  const [currentFilter, setCurrentFilter] = useState('all')

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')

    if (savedTodos) {
      setTodoList(JSON.parse(savedTodos))
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])


  const createNewTodo = (newTodoName) => {
    let newTodo = {
      todoTitle: newTodoName,
      todoStatus: 'todo',
      isMarked: false,
      id: uuidv4()
    }

    setTodoList(prev => { return [...prev, newTodo] })
  }

  const changeTodoStatus = (radioID, taskID) => {
    setTodoList(prev =>
      prev.map(todo => {
        if (todo.id === taskID && radioID !== todo.todoStatus) {
          return { ...todo, todoStatus: radioID }
        }
        return todo
      })
    )
  }

  const deleteTodo = (taskID) => {
    const newTodos = todoList.filter(todo => todo.id !== taskID)

    setTodoList(newTodos)
  }

  const getFilteredTodos = () => {
    let result = todoList

    if (currentFilter !== 'all') {
      result = result.filter(todo => todo.todoStatus === currentFilter)
    }

    return result
  }
  const filteredTodos = getFilteredTodos()

  const handleStatusSearch = (value) => {
    setCurrentFilter(value.trim())
  }

  const handleTitleSearch = (value, isSearched) => {

    setTodoList(prev => prev.map(todo => {
      if (todo.todoTitle.toLowerCase().startsWith(value.trim().toLowerCase()) && !isSearched) {
        return { ...todo, isMarked: true }
      }

      if (isSearched) {
        return { ...todo, isMarked: false }
      }

      return todo
    }))
  }


  return (
    <>
      <div className="container">

        <header className='header'>

          <h1 className='heading-1'>To-Do List</h1>
          <SearchBox onSearch={handleTitleSearch} />
          <FilterBar onFilter={handleStatusSearch} />

        </header>

        <main className="main">

          <AddTask onCreateTodo={createNewTodo} />

          <div className='task-list'>
            {
              filteredTodos.map(task => (
                <TaskList key={task.id} task={task} onChangeTodoStatus={changeTodoStatus} onDeleteTodo={deleteTodo} />
              ))
            }
          </div>

        </main>

      </div>
    </>
  );
}