import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType, type FilterValue, type TodoTitle } from './types'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'
import { Header } from './components/Header'
const mockTodos = [
  {
    id: '1',
    title: 'Aprender React con Typescript',
    completed: false
  },
  {
    id: '2',
    title: 'Aprender y dominar CSS',
    completed: false
  },
  {
    id: '3',
    title: 'Meditar',
    completed: true
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed

        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  const handleFilterChanged = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }
  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo}/>
   <Todos
   todos={filteredTodos}
   onRemove={handleRemove}
   onToggleCompletedTodo={handleCompleted}
   />
   <Footer
   activeCount={activeCount}
   filterSelected={filterSelected}
   handleFilterChanged={handleFilterChanged}
   completedCount={completedCount}
   onClearCompleted={handleRemoveAllCompleted}
   />
    </div>

  )
}
export default App
