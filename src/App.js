import React from "react";
import ToDoCounter from "./components/ToDocounter";
import ToDoSearch from "./components/ToDoSearcch";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
//import './App.css';
const todos = [
  { text: "tarminar este curso", completed: "false" },
  { text: "terminar la seccion del curso de udemy", completed: "false" },
  { text: "subir a github ", completed: "false" },
];

function App(props) {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {todos.map((todo) => (
          <ToDoItem key={todo.text} text={todo.text} />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
