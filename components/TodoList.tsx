import Todo from './Todo'
import { Todo as TodoType } from '@prisma/client'

type Props = {
  todos: TodoType[]
}

const TodoList = ({ todos }: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
