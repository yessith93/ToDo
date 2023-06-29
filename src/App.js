import React from "react";
import CreateToDoButton from "./components/CreateToDoButton";
import EmptyTodos from "./components/EmptyTodos";
import { Modal } from "./components/modal";
import ToDoCategory from "./components/ToDoCategory";
import ToDoChangeAlert from "./components/ToDoChangeAlert";
import ToDoCounter from "./components/ToDocounter";
import Todoform from "./components/Todoform";
import ToDoHeader from "./components/ToDoHeader";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";
import ToDoSearch from "./components/ToDoSearcch";
import TodosError from "./components/TodosError";
import TodosLoading from "./components/TodosLoading";
import { useLocalStorage } from "./helpers/localStorage";
import "./styles/todocounter.css";

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    setLoading,
    error,
    sincronize,
  } = useLocalStorage("TODOS_V1", []);
  //----------------counter
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  //----------------search
  const [valueSearch, setValueSearch] = React.useState("");

  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];

  if (!valueSearch.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = valueSearch.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  //-------------category

  const [categorySearch, setcategorySearch] = React.useState("");
  const changeCategory = function (event) {
    setcategorySearch(event.target.value);
  };
  if (categorySearch.length > 1) {
    searchedTodos = searchedTodos.filter((todo) => {
      const todoText = todo.category.toLowerCase();
      return todoText.includes(categorySearch);
    });
  }
  //----------------modal
  //modal
  const [openModal, setOpenModal] = React.useState(false);
  // Función para añadir un nuevo TODO
  const addTodo = (text, category) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      category,
    });
    saveTodos(newTodos);
  };
  return (
    <React.Fragment>
      <ToDoHeader loading={loading}>
        <ToDoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <ToDoCategory todos={searchedTodos} changeCategory={changeCategory} />
        <ToDoSearch setValueSearch={setValueSearch} valueSearch={valueSearch} />
      </ToDoHeader>
      <ToDoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={valueSearch}
        totalTodos={totalTodos}
        onError={() => <TodosError error={error} />}
        onLoading={() => <TodosLoading />}
        onEmptyToDo={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p> no hay resultados para este termino {searchText}</p>
        )}
        render={(todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            category={todo.category}
            completed={todo.completed}
            todos={todos}
            saveTodos={saveTodos}
          />
        )}
        ///>
      >
        {(todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            category={todo.category}
            completed={todo.completed}
            todos={todos}
            saveTodos={saveTodos}
          />
        )}
      </ToDoList>
      {!!openModal && (
        <Modal>
          <Todoform addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateToDoButton setOpenModal={setOpenModal} />
      <ToDoChangeAlert sincronize={sincronize} setLoading={setLoading} />
    </React.Fragment>
  );
}

export default App;
