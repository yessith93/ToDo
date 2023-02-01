import React from "react";

const ToDoSearch = () => {
    const [valueSearch,setValueSearch] = React.useState('');
    const value_change = event => {
        setValueSearch(event.target.value)
    }

  return [
  <input 
    className="TodoSearch" 
    onChange={value_change}
    placeholder="que tienes que hacer"
    value={valueSearch} />,
    <p>{valueSearch}</p>
  ]
};

export default ToDoSearch;
