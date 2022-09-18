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
        addTodo,
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
                    <TodoList
                        error={error}
                        onError={() => <p>Se rompió todo, maestro...</p>}
                        emptySearchResult={(searchValue.length > 0 && !searchedTodos.length)}
                        onEmptySearchResult={() => <div><p>No hubo resultados con esa búsqueda.</p></div>}
                        emptyState={(searchValue.length === 0 && totalTodos === 0)}
                        onEmptyState={() => <div><p>Nada por aquí... Agregá algún TODO!</p></div>}
                        render={() => 
                            (todo => (
                                    <TodoItem 
                                        key={todo.text} 
                                        text={todo.text} 
                                        completed={todo.completed} 
                                        onComplete={() => completeTodo(todo.text)}
                                        onDelete={() => deleteTodo(todo.text)}
                                    />
                                ))
                            
                        }
                        searchedTodos={searchedTodos}
                    >
                    </TodoList>
                    {!loading &&
                        <CreateTodoButton setIsModalVisible={setIsModalVisible} />
                    }
                    <div style={{position: "fixed", bottom: 24, right: 0, left: 0}}>
                        <p style={{fontSize: 10, textAlign: "center"}}><b>Última edición a las 08/09/2022 - 01:58 hs</b></p>
                    </div>
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
