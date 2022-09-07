import './TodoCounter.css';

function TodoCounter({children}) {
    return (
        <h2 className="TodoCounter">
            {children}
        </h2>
    );
}

export { TodoCounter };