import React from "react";
import ToDoCounter from "./components/ToDocounter";
import ToDoSearch from "./components/ToDoSearcch";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import {  TodoContext } from "./context";
import "./styles/todocounter.css";

function App() {
  const { error, loading, searchedTodos,  todos, saveTodos } =
    React.useContext(TodoContext);

  return (

      <React.Fragment>
        <ToDoCounter />
        <ToDoSearch
        />
        <ToDoList>
          {/* si hay error */}
          {error && <p>Failed to load</p>}
          {/* si esta cargando */}
          {loading && <p>Loading...</p>}
          {/* si no esta cargando y no hay todos  */}
          {!loading && !searchedTodos.length && <p>Create a TODO!</p>}
          {/* si no esta cargando y no hay error carga los todos  */}
          {!loading &&
            !error &&
            searchedTodos.map((todo) => (
              <ToDoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
        </ToDoList>
        <CreateToDoButton />
      </React.Fragment>
    
  );
}

export default App;
