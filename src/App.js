import React from "react";
import ToDoCounter from "./components/ToDocounter";
import ToDoSearch from "./components/ToDoSearcch";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import "./styles/todocounter.css";
import { Modal } from "./components/modal";
import Todoform from "./components/Todoform";
import EmptyTodos from "./components/EmptyTodos";
import TodosError from "./components/TodosError";
import TodosLoading from "./components/TodosLoading";
import { useLocalStorage } from "./helpers/localStorage";
import ToDoHeader  from "./components/ToDoHeader";

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  //----------------counter
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  //----------------search
  const [valueSearch, setValueSearch] = React.useState("");
  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];
  // Lógica para filtrar
  if (!valueSearch.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = valueSearch.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  //----------------modal
  //modal
  const [openModal, setOpenModal] = React.useState(false);
  // Función para añadir un nuevo TODO
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };
  return (
    <React.Fragment>
      <ToDoHeader>
        <ToDoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <ToDoSearch setValueSearch={setValueSearch} valueSearch={valueSearch} />
      </ToDoHeader>
      <ToDoList>
        {/* si hay error */}
        {error && <TodosError error={error} />}
        {/* si esta cargando */}
        {loading && <TodosLoading />}
        {/* si no esta cargando y no hay todos  */}
        {!loading && !searchedTodos.length && <EmptyTodos />}
        {/* si no esta cargando y no hay error carga los todos  */}
        {!loading &&
          !error &&
          searchedTodos.map((todo) => (
            <ToDoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              todos={todos}
              saveTodos={saveTodos}
            />
          ))}
      </ToDoList>
      {!!openModal && (
        <Modal>
          <Todoform addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateToDoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
