import { useState } from 'react'
import { Todos } from './components/Todos'
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

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
   <Todos
   todos={todos}
   onRemove={handleRemove}
   />
    </div>

  )
}
export default App
