import { useState } from "react";
import DeleteBtn from "./ui/DeleteBtn";
import EditBtn from "./ui/EditBtn";

export default function TodoListItems({todo,deleteTodo,toggleTodoStatus,editTodoTitle}) {

   const [editMode,setEditMode]=useState(false)

   const editTodoHandler=(event)=>{
    if (event.key==='Enter') {
      editTodoTitle(todo,event.target.value)
      setEditMode(false)
    }

   }

  return (
    <>
        <li className="flex justify-between items-center px-2 py-6 border-b pb-2">

              {
                editMode?
                   <div className="w-full flex justify-center items-center max-w-md px-6 py-8 bg-white shadow-lg rounded-lg">
                      <input type="text" defaultValue={todo?.title} className="w-full px-4 py-2 text-black border border-gray-300 rounded outline-none" onChange={()=>{}} onKeyDown={editTodoHandler} />
                      <DeleteBtn className="ml-2" onClick={()=>setEditMode(false)} />
                </div>
                :
                 (
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input type="checkbox" checked={todo?.status ? true:false} onChange={()=>toggleTodoStatus(todo)} />
                      <p className={`ml-3 text-gray-700  ${todo?.status ?'line-through':''}`}>{todo?.title}</p>
                    </div>
                    <div className="flex space-x-2">
                      <EditBtn onClick={()=>setEditMode(true)}/>
                      <DeleteBtn onClick={()=>deleteTodo(todo)} />
                    </div>
                  </div>
                 )
              }

          </li>
    </>
  )
}
