import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import Modal from '../Modal';
import TodoForm from '../TodoForm';
import TodoLoader from '../TodoLoader';

function AppUI() {
    const { error, loading, searchedTodos, completeTodo, deleteTodo, searchValue, isModalVisible, setIsModalVisible, completedTodos, totalTodos, setSearchValue, addTodo } = useContext(TodoContext);
    return (
        //React.Fragment sirve para poner todo dentro de una etiqueta "vacía". Sirve para evitar poner todo en un div
        <React.Fragment>
            {loading && 
                <TodoLoader/>
            }
            {!loading &&
                <>
                    <TodoCounter>
                        Completaste {completedTodos} de {totalTodos} tareas
                    </TodoCounter>
                    <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue} />
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

export {AppUI}