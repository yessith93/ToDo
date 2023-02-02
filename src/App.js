import React from "react";
import ToDoCounter from "./components/ToDocounter";
import ToDoSearch from "./components/ToDoSearcch";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import './styles/todocounter.css';
//import './App.css';
const Dtodos = [
  { text: "tarminar este curso", completed: true },
  { text: "terminar la seccion del curso de udemy", completed: false },
  { text: "subir a github ", completed: false },
];


function App(props) {
  const [valueSearch,setValueSearch] = React.useState('');
  const [todos,setTodos] = React.useState(Dtodos);

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
            setTodos={setTodos}
            />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
