import React from "react";

const ToDoSearch = ({valueSearch,setValueSearch}) => {
    // se traen los datos del contexto
    const value_change = event => {
        setValueSearch(event.target.value)
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
