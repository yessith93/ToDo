import React from "react";
import { TodoContext } from "../context";

const ToDoSearch = () => {
    // se traen los datos del contexto
    const {valueSearch,setValueSearch} = React.useContext(TodoContext)
    const value_change = event => {
        setValueSearch(event.target.value)
        console.log(event.target.value)
    }

  return (
  <input 
    className="TodoSearch" 
    onChange={value_change}
    placeholder="que tienes que hacer"
    value={valueSearch} />
  )
};

export default ToDoSearch;
