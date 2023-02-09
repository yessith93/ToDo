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
  /*const localStorageItem = localStorage.getItem(itemName);
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
  ];*/

  // Creamos el estado inicial para nuestros errores y carga
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    // Simulamos un segundo de delay de carga 
    setTimeout(() => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
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

        setItem(parsedItem);
      } catch(error) {
      // En caso de un error lo guardamos en el estado
        setError(error);
      } finally {
        // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
        setLoading(false);
      }
    }, 1000);
  });
  const saveItem = (newItem) => {
    // Manejamos la tarea dentro de un try/catch por si ocurre algún error
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      // En caso de algún error lo guardamos en el estado
      setError(error);
    }
  }
  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {
    item,
    saveItem,
    loading,
    error,
  };
}


function App(props) {
  // se destrcutura el valores del objecto
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
  //const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

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
        {/* si hay error */}
      {error && <p>Failed to load</p>}
      {/* si esta cargando */}
      {loading && <p>Loading...</p>}
      {/* si no esta cargando y no hay todos  */}
      {(!loading && !searchedTodos.length) && <p>Create a TODO!</p>}
      {/* si no esta cargando y no hay error carga los todos  */}
      {(!loading && !error) &&
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
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
