import TodoListItems from "./TodoListItems";


export default function TodoList({todos,deleteTodo,toggleTodoStatus,editTodoTitle}) {
  return (
    <>
        <ul className="space-y-4">

            {
                todos.map((todo,index)=> <TodoListItems key={index} todo={todo} deleteTodo={deleteTodo} toggleTodoStatus={toggleTodoStatus} editTodoTitle={editTodoTitle}/> )
            }



        </ul>
    </>
  )
}
