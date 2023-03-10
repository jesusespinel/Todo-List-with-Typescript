import { type ListOfTodos, type TodoId, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemove: ({ id }: TodoId) => void
  onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemove, onToggleCompletedTodo }) => {
  return (
    <ul className='todo-list'>
        {todos.map(todo => (
            <li
            key={todo.id}
            className={`${todo.completed ? 'completed' : ''}`}>
                <Todo
                key={todo.id}
                id ={todo.id}
                title={todo.title}
                completed={todo.completed}
                onRemove={onRemove}
                onToggleCompletedTodo={onToggleCompletedTodo}
                />
            </li>
        ))}
    </ul>
  )
}
