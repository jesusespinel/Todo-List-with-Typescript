import { useState } from 'react'
import { Todos } from './components/Todos'
const mockTodos = [
  {
    id: '2',
    title: 'todo2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]
const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)
  return (
  <Todos todos={todos} />
  )
}
export default App
