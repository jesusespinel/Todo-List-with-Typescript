import { type FilterValue } from '../types'
import { Filters } from './Filters'
interface Props {
  filterSelected: FilterValue
  onClearCompleted: () => void
  completedCount: number
  activeCount: number
  handleFilterChanged: (filter: FilterValue) => void
}
export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  onClearCompleted,
  handleFilterChanged,
  filterSelected
}) => {
  return (
        <footer className="footer">
        <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
        </span>
        <Filters
        filterSelected={ filterSelected }
        onFilterChange={handleFilterChanged}
        />
        {
          completedCount > 0 && (
            <button
            className='clear-completed'
            onClick={onClearCompleted}
            >
              Borrar Completadas
              </button>
          )
        }
          </footer>
  )
}
