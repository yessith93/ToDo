import React from "react";
import { CompleteIcon } from "./TodoIcon/CompleteIcon";
import { DeleteIcon } from "./TodoIcon/DeleteIcon";

const ToDoItem = (props) => {
  //logica
  const tarea_completada = () => {
    const toDosActualizado = props.todos.map((todo) => {
      if (todo.text === props.text) {
        todo.completed = !todo.completed;
        if (todo.completed) {
          console.log(`terminaste la tarea ${props.text}`);
        } else {
          console.log(`aun no terminas la tarea ${props.text}`);
        }
        return todo;
      }
      return todo;
    });
    props.saveTodos(toDosActualizado);
  };
  //una forma de eliminar
  /*const findIndex = (text) => {
        return todos.findIndex(todo => todo.text === text)
      }
    const tarea_eliminada = ()=>{
        const newTodos = [...todos]
        newTodos.splice(findIndex(props.text), 1)
        saveTodos(newTodos)
        console.log(`eliminaste la tarea ${props.text}`)
    }*/
  //otra forma de eliminar todos
  const tarea_eliminada = () => {
    const newTodos = props.todos.filter((todo) => todo.text !== props.text);
    props.saveTodos(newTodos);
    console.log(`eliminaste la tarea ${props.text}`);
  };
  //vista
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={tarea_completada} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon
        onDelete={tarea_eliminada}
      />
    </li>
  );
};

export default ToDoItem;
