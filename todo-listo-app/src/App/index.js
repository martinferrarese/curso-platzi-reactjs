import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import React from 'react';
import Modal from '../Modal';
import TodoForm from '../TodoForm';
import TodoLoader from '../TodoLoader';
import TodoHeader from '../TodoHeader';
import { useTodoActions } from './useTodoActions';

function App() {

    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo, 
        searchValue, 
        isModalVisible, 
        setIsModalVisible, 
        completedTodos, 
        totalTodos, 
        setSearchValue, 
        addTodo 
    } = useTodoActions();

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
                        {(searchValue.length > 0 && !searchedTodos.length) && 
                            <div><p>No hubo resultados con esa búsqueda.</p></div>
                        }
                        {(searchValue.length === 0 && !searchedTodos.length) && 
                            <div><p>Nada por aquí... Agregá algún TODO!</p></div>
                        }
                        {!error && 
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
