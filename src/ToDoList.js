import ToDo from "./ToDo";


const ToDoList = ( {toDoList, handleToggle, handleFilter} ) => {
  return (
    <div>
        {toDoList.map((todo) => {
            return(
                <ToDo todo={todo} handleToggle={handleToggle} />
            )
        })}
        <button onClick={handleFilter}>
            Delete Completed
        </button>
    </div>
  )
}

export default ToDoList