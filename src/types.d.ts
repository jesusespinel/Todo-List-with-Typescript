export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[]
export type TodoTitle = Pick<Todo, 'title'>
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'completed'>
