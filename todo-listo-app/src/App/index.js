import { useEffect, useState } from 'react';
import { AppUI } from './AppUI';

const todosDefault = [
  { text: 'Aprender React', completed: false },
  { text: 'Leer el libro', completed: true },
  { text: 'Ver un curso de finanzas', completed: true }
]

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      try {
        let localStorageItem;
        let parsedItem;
  
        localStorageItem = localStorage.getItem(itemName);
        if(!localStorageItem) {
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        saveItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1500);
    
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

function App() {
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage('TODO', []);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const [searchValue, setSearchValue] = useState('');

  let searchedTodos = [];
  
  if(searchValue.length <= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  const completeTodo = (text) => {
    const updatedTodos = [...todos];
    const indexTodoToComplete = updatedTodos.findIndex(todo => todo.text === text);
    updatedTodos[indexTodoToComplete].completed = true;
    setTodos(updatedTodos);
  }

  const deleteTodo = (text) => {
    const updatedTodos = [...todos];
    const indexTodoToDelete = updatedTodos.findIndex(todo => todo.text === text);
    updatedTodos.splice(indexTodoToDelete, 1);
    setTodos(updatedTodos);
  }

  return (
    <AppUI
      error={error} 
      loading={loading}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export {App};
