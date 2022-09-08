import './TodoList.css';

function TodoList({render, error, onError}) {
    return (
        <section>
            {error && 
                onError()
            }
            {!error &&
                <ul className="TodoList">
                    {render()}
                </ul>
            }
        </section>
    );
}

export {TodoList};