import React from "react";

const ToDoSearch = ({ valueSearch, setValueSearch, loading }) => {
  // se traen los datos del contexto
  const value_change = (event) => {
    setValueSearch(event.target.value);
  };

  return (
    <div className="containerSearch">
      <label htmlFor="search">Buscar: </label>
      <input
        className={`TodoSearch ${!!loading && "loading"}`}
        onChange={value_change}
        placeholder="quieres buscar algo?"
        value={valueSearch}
        disabled={loading}
        name="search"
      />
    </div>
  );
};

export default ToDoSearch;
