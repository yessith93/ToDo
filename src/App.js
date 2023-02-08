import React from "react";
import ToDoCounter from "./components/ToDocounter";
import ToDoSearch from "./components/ToDoSearcch";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import './styles/todocounter.css';
//import './App.css';
// const Dtodos = [
//   { text: "tarminar este curso", completed: true },
//   { text: "terminar la seccion del curso de udemy", completed: false },
//   { text: "subir a github ", completed: false },
// ];
function useLocalStorage(itemName, initialValue) {
  // busca los datos en localStorage con el nombre del itemName
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
    // si no existen los declara 
  // else los asigna
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);
// Creamos la función en la que actualizaremos nuestro localStorage
  const saveItem = (newItem) => {
    // Convertimos a string nuestros TODOs
    const stringifiedItem = JSON.stringify(newItem);
    // Los guardamos en el localStorage
    localStorage.setItem(itemName, stringifiedItem);
    // Actualizamos nuestro estado
    setItem(newItem);
  };
  return [
    item,
    saveItem,
  ];
}

function App(props) {
  
  // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [valueSearch,setValueSearch] = React.useState('');

  const completedTodos=todos.filter((todo) => todo.completed).length
  const totalTodos = todos.length;

  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];

  // Lógica para filtrar
  if (!valueSearch.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = valueSearch.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  return (
    <React.Fragment>
      <ToDoCounter 
        completed={completedTodos}
        total={totalTodos}
      />
      <ToDoSearch 
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
      />
      <ToDoList>
        {searchedTodos.map((todo) => (
          <ToDoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            todos={todos}
            saveTodos={saveTodos}

            />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
