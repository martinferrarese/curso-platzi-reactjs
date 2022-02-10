import { useState } from 'react';
import { AppUI } from './AppUI';

const todosDefault = [
  { text: 'Aprender React', completed: false },
  { text: 'Leer el libro', completed: true },
  { text: 'Ver un curso de finanzas', completed: true }
]

function App() {
  const [todos, setTodos] = useState(todosDefault);
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
