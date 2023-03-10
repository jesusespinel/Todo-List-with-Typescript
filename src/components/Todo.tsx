import { type Todo as TodoType, type TodoId } from '../types'

interface Props extends TodoType {
  onRemove: ({ id }: TodoId) => void
  onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemove, onToggleCompletedTodo }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompletedTodo({
      id,
      completed: event.target.checked
    }
    )
  }
  return (
    <div className="view">
     <input
     className="toggle"
     type="checkbox"
     checked={completed}
     onChange={handleChangeCheckbox}
     />
     <label>{title}</label>
     <button
     className='destroy'
     onClick={() => { onRemove({ id }) }}
     />
    </div>
  )
}
