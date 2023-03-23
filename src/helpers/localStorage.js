import React from "react";

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
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
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
      } catch (error) {
        // En caso de un error lo guardamos en el estado
        setError(error);
      } finally {
        // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
        setLoading(false);
        setSincronizedItem(true);
      }
    }, 1500);
  }, [sincronizedItem]);
  const sincronize = () => {
    setLoading(true);
    setSincronizedItem(false);
  };
  const saveItem = (newItem) => {
    // Manejamos la tarea dentro de un try/catch por si ocurre algún error
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      // En caso de algún error lo guardamos en el estado
      setError(error);
    }
  };
  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {
    item,
    saveItem,
    loading,
    error,
    sincronize,
  };
}

export { useLocalStorage };
