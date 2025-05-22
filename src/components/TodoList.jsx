import TodoListItems from "./TodoListItems";


export default function TodoList({todos,deleteTodo,toggleTodoStaus,editTodoTitle}) {
  return (
    <>
        <ul className="space-y-4">

            {
                todos.map((todo,index)=> <TodoListItems key={index} todo={todo} deleteTodo={deleteTodo} toggleTodoStaus={toggleTodoStaus} editTodoTitle={editTodoTitle}/> )
            }



        </ul>
    </>
  )
}
