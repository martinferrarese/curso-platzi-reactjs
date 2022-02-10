import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import React from 'react';

function AppUI(
    {
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