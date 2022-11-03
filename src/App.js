import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { useState, useEffect } from "react";

//usestate: useState Hook allows us to track state in a function component

//useeffect: useEffect Hook allows you to perform side effects in your components like fetching data, updating the DOM and timers

const App = () => {
  //get todo lists after page refresh
  const initialState = JSON.parse(localStorage.getItem("Todo Lists")) || [];
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodos, seteditTodos] = useState(null);
  const [nameList, setNameList] = useState({
    firstPerson: {
      value: "",
    },
  });

  //save todo lists in local storage
  useEffect(() => {
    localStorage.setItem("Todo Lists", JSON.stringify(todos));
  }, [todos]);

  const onChangeField = (event, attribute) => {
    let tempnames = {...nameList};
    tempnames[attribute]['value'] = event.target.value;
    setNameList(tempnames);
    // console.log("event =>>", event.target.value, attribute);
  };

  useEffect(() => {
    console.log('nameList', nameList)
  }, [nameList])

  return (
    <div className="App">
      <Header />
      <div className="form-todo">
        <Form
          name={name}
          setName={setName}
          task={task}
          setTask={setTask}
          todos={todos}
          setTodos={setTodos}
          editTodos={editTodos}
          seteditTodos={seteditTodos}
          onFieldChange={(event, attribute) => onChangeField(event, attribute)}
          values={nameList}
        />
        <div>
          <Todo todos={todos} setTodos={setTodos} seteditTodos={seteditTodos} />
        </div>
      </div>
    </div>
  );
};

export default App;
