import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  // demonstrate how loading state working
  // await new Promise((resolve) => setTimeout(() => resolve(''), 2000))

  // demonstrate how error state working
  // await new Promise((resolve, reject) => setTimeout(() => reject(''), 2000))
  const todos = await db.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <h1>Todo List:</h1>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
