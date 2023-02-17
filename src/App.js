import React from "react";
import ToDoCounter from "./components/ToDocounter";
import ToDoSearch from "./components/ToDoSearcch";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import { TodoContext } from "./context";
import "./styles/todocounter.css";
import { Modal } from "./components/modal";
import Todoform from "./components/Todoform";
import EmptyTodos from "./components/EmptyTodos";
import  TodosError  from "./components/TodosError";
import TodosLoading from "./components/TodosLoading";



function App() {
  const { error, loading, searchedTodos, openModal } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {/* si hay error */}
        {error && <TodosError error={error}/>}
        {/* si esta cargando */}
        {loading && <TodosLoading/>}
        {/* si no esta cargando y no hay todos  */}
        {!loading && !searchedTodos.length && <EmptyTodos/>}
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
      {!!openModal && (
        <Modal>
          <Todoform/>
        </Modal>
      )}
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
