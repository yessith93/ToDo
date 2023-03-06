import React from "react";

const ToDoSearch = ({ valueSearch, setValueSearch, loading }) => {
  // se traen los datos del contexto
  const value_change = (event) => {
    setValueSearch(event.target.value);
  };

  return (
    <input
      className={`TodoSearch ${!!loading && "loading"}`}
      onChange={value_change}
      placeholder="que tienes que hacer"
      value={valueSearch}
      disabled={loading}
    />
  );
};

export default ToDoSearch;
