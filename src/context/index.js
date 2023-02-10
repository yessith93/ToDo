import React from "react";
import { useLocalStorage } from "../helpers/localStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  // se destrcutura el valores del objecto
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
  //const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [valueSearch, setValueSearch] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

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

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        searchedTodos,
        todos,
        saveTodos,
        setValueSearch,
        completedTodos,
        totalTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
