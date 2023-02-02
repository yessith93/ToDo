import React from "react";

const ToDoSearch = ({valueSearch,setValueSearch}) => {
    
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
