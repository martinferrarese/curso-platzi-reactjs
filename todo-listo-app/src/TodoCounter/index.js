import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const { completedTodos, totalTodos } = useContext(TodoContext);
    return (
        <h2 className="TodoCounter">
            Completaste {completedTodos} de {totalTodos} tareas
        </h2>
    );
}

export { TodoCounter };