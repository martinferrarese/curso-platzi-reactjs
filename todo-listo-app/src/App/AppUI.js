import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';

function AppUI() {
    const { error, loading, searchedTodos, completeTodo, deleteTodo, searchValue } = useContext(TodoContext);
    return (
        //React.Fragment sirve para poner todo dentro de una etiqueta "vacía". Sirve para evitar poner todo en un div
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {error && <p>Se rompió todo, maestro...</p>}
                {loading && <p>Tranqui que está cargando!</p>}
                {(!loading && searchValue.length > 0 && !searchedTodos.length) && <div><p>No hubo resultados con esa búsqueda.</p></div>}
                {(!loading && searchValue.length === 0 && !searchedTodos.length) && <div><p>Nada por aquí... Agrega algún TODO!</p></div>}
                {!loading && searchedTodos.map(todo => (
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