import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import React, { useState } from 'react';

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
    //React.Fragment sirve para poner todo dentro de una etiqueta "vacía". Sirve para evitar poner todo en un div
    <React.Fragment>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
      <TodoSearch value={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
