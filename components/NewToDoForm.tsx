import { newTodo } from '@/utils/actions'

const NewToDoForm = ({}) => {
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="todo" className="border border-black/25" />
        <button type="submit">new todo</button>
      </form>
    </div>
  )
}

export default NewToDoForm
