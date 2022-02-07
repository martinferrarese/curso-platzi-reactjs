import './TodoCounter.css';

function TodoCounter({completedTodos, totalTodos}) {
    return (
        <h2 className="TodoCounter">
            Completaste {completedTodos} de {totalTodos} tareas
        </h2>
    );
}

export { TodoCounter };