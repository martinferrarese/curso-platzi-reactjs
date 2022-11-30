import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import Modal from '../Modal';
import TodoForm from '../TodoForm';
import TodoLoader from '../TodoLoader';
import TodoHeader from '../TodoHeader';
import { useTodoActions } from './useTodoActions';
import { RefreshAlertWithStorageListener } from '../RefreshAlert';
import { useState } from 'react';

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
        sincronizeStorage,
    } = useTodoActions();

    const [refreshNeeded, setRefreshNeeded] = useState(false);

    return (
        <>
            <TodoHeader loading={loading}>
                <TodoCounter>
                    Completaste {completedTodos} de {totalTodos} tareas
                </TodoCounter>
                <TodoSearch
                    setSearchValue={setSearchValue}
                    searchValue={searchValue}
                />
                <RefreshAlertWithStorageListener 
                    refreshAction={sincronizeStorage} 
                    disableActions={setRefreshNeeded} 
                />
            </TodoHeader>
            {loading &&
                <TodoLoader />
            }
            {!loading && (
                <>
                    <TodoList
                        error={error}
                        onError={() => 
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <p>Se rompió todo, maestro...</p>
                                </div>
                        }
                        emptySearchResult={(searchValue.length > 0 && !searchedTodos.length)}
                        onEmptySearchResult={() => 
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <p>No hubo resultados con esa búsqueda</p>
                            </div>
                        }
                        emptyState={(searchValue.length === 0 && totalTodos === 0)}
                        onEmptyState={() => 
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <p>Nada por aquí... Agregá algún TODO!</p>
                            </div>
                        }
                        render={() =>
                        (todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                                refreshNeeded={refreshNeeded}
                            />
                        ))

                        }
                        searchedTodos={searchedTodos}
                    >
                    </TodoList>
                    <CreateTodoButton 
                        setIsModalVisible={setIsModalVisible} 
                        refreshNeeded={refreshNeeded} 
                    />
                </>
            )}

            <div style={{ position: "fixed", bottom: 24, right: 0, left: 0 }}>
                <p style={{ fontSize: 10, textAlign: "center" }}>
                    <b>Última edición a las 30/11/2022 - 02:12 hs</b>
                </p>
            </div>

            {!!isModalVisible &&
                <Modal setIsModalVisible={setIsModalVisible}>
                    <TodoForm setIsModalVisible={setIsModalVisible} addTodo={addTodo} />
                </Modal>
            }
        </>
    );
}

export { App };
