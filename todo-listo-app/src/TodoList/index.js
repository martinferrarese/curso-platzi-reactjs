import './TodoList.css';

function TodoList({children}) {
    return (
        <section>
            <ul className="TodoList">
                {children}
            </ul>
        </section>
    );
}

export {TodoList};