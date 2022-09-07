import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import React, { useState } from 'react';
import Modal from '../Modal';
import TodoForm from '../TodoForm';
import TodoLoader from '../TodoLoader';
import TodoHeader from '../TodoHeader';
import { useLocalStorage } from './useLocalStorage';

const todosDefault = [
  { text: 'Aprender React', completed: false },
  { text: 'Leer el libro', completed: true },
  { text: 'Ver un curso de finanzas', completed: true }
];

function App() {

  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage('TODOS', todosDefault);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const [searchValue, setSearchValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
          completed: false,
          text
      });
      setTodos(newTodos);
  }
  
  return (
    //React.Fragment sirve para poner todo dentro de una etiqueta "vacía". Sirve para evitar poner todo en un div
    <React.Fragment>
      {loading && 
          <TodoLoader/>
      }
      {!loading &&
          <>
              <TodoHeader>
                  <TodoCounter>
                      Completaste {completedTodos} de {totalTodos} tareas
                  </TodoCounter>
                  <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue} />
              </TodoHeader>
              <TodoList>
                  {error && 
                      <p>Se rompió todo, maestro...</p>
                  }
                  {(!loading && searchValue.length > 0 && !searchedTodos.length) && 
                      <div><p>No hubo resultados con esa búsqueda.</p></div>
                  }
                  {(!loading && searchValue.length === 0 && !searchedTodos.length) && 
                      <div><p>Nada por aquí... Agregá algún TODO!</p></div>
                  }
                  {!loading && 
                      searchedTodos.map(todo => (
                          <TodoItem 
                              key={todo.text} 
                              text={todo.text} 
                              completed={todo.completed} 
                              onComplete={() => completeTodo(todo.text)}
                              onDelete={() => deleteTodo(todo.text)}
                          />
                  ))}
              </TodoList>
              {!loading &&
                  <CreateTodoButton setIsModalVisible={setIsModalVisible} />
              }
          </>
      }
      {!!isModalVisible && 
          <Modal setIsModalVisible={setIsModalVisible}>
              <TodoForm setIsModalVisible={setIsModalVisible} addTodo={addTodo} />
          </Modal>
      }
    </React.Fragment>
  );

}

export { App };
