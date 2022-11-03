import React, {useEffect} from "react";
import {v4 as uuidv4} from "uuid";

const Form = ({ name, setName, values, onFieldChange, task, setTask, todos, setTodos, editTodos, seteditTodos }) => {
    //update the task 
    const onChangeParent = (event, attribute) => {
      onFieldChange(event, attribute)
    }
    const updateTodo = (title, taskName, id) => {
      const newTodo = todos.map((todo) => 
        todo.id === id ? {title, taskName, id} : todo
      );
      setTodos(newTodo);
      seteditTodos("");
    };
    useEffect(() => {
      if(editTodos) {
        setName(editTodos.title);
        setTask(editTodos.taskName)
      } else {
        setName("");
        setTask("");
      }
    }, [setName,setTask, editTodos]);

    //add the task
    const onInputChange = (event) => {
      setName(event.target.value);
    }

    const onTaskInputChange = (event) => {
      setTask(event.target.value);
    }
    
    //on form submit
    const onFormSubmit = () => {
        if(!editTodos) {
          setTodos([...todos, {id: uuidv4(), title: name, taskName: task}]);
          setName("")
          setTask("")
        } else {
          updateTodo(name, task, editTodos.id)
        }
        
    }

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input 
        type="text" 
        placeholder="Enter your name" 
        className="task-input"
        value={name}
        required
        onChange={onInputChange} 
    />
    <input 
        type="text" 
        placeholder="Enter your name 2" 
        className="task-input"
        value={values?.firstPerson?.value}
        required
        onChange={(event) => onChangeParent(event, 'firstPerson')} 
    />
    <br/>
     <input 
        type="text" 
        placeholder="Enter your task" 
        className="task-input"
        value={task}
        required
        onChange={onTaskInputChange} 
    />
    <br/>
      <button type="submit" className="add-button">
        {editTodos ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default Form;
