import React from "react";

const Todo = ({todos, setTodos, seteditTodos}) => {
    //update the task
    const onEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)
        seteditTodos(findTodo)
    }

    //delete the task
    const onDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return ( 
        <div className="todo-list">
            {
                todos.map((todo) => (
                    <li className="todo-li" key = {todo.id}>
                        <div className="main-todo">
                        <input className="todo-input" value={todo.title}/>
                        <input className="todo-input" value={todo.taskName}/>
                           <div className="task-button">
                           <button className="edit-button" onClick = {() => onEdit(todo)}><i class="fa-solid fa-pen-to-square"></i></button>
                            <button className="delete-button" onClick = {() => onDelete(todo)}><i class="fa-solid fa-trash"></i></button>
                           </div>
                        </div>
                    </li>
                ))
            }
        </div>
     );
}
 
export default Todo;