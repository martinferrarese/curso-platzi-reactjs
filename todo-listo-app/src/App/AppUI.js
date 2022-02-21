import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import React from 'react';

function AppUI(
    {
        error,
        loading,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo
    }
) {
    return (
        //React.Fragment sirve para poner todo dentro de una etiqueta "vacía". Sirve para evitar poner todo en un div
        <React.Fragment>
        <TodoCounter 
            completedTodos={completedTodos}
            totalTodos={totalTodos}
        />
        <TodoSearch
            value={searchValue}
            setSearchValue={setSearchValue}
        />
        <TodoList>
            {error && <p>Se rompió todo, maestro...</p>}
            {loading && <p>Tranqui que está cargando!</p>}
            {(!loading && !searchedTodos.length) && <p>Agrega algún TODO!</p>}
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

export {AppUI}