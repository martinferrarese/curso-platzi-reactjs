import './TodoCounter.css';

function TodoCounter({ children, loading }) {
    return (
        <>
            {loading && (
                <h2 className="TodoCounter">
                    Cargando
                </h2>
            )}
            {!loading && (
                <h2 className="TodoCounter">
                    {children}
                </h2>
            )}
        </>
    );
}

export { TodoCounter };