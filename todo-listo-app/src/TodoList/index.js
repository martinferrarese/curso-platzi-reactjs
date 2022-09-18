import './TodoList.css';

function TodoList({searchedTodos, render, error, onError, emptySearchResult, onEmptySearchResult, emptyState, onEmptyState, children}) {
    return (
        <section>
            {error && 
                onError()
            }
            {emptySearchResult &&
                onEmptySearchResult()                
            }
            {emptyState &&
                onEmptyState()                
            }
            {!error && !emptySearchResult && !emptyState &&
                <ul className="TodoList">
                    {searchedTodos.map(render())}
                </ul>
            }
        </section>
    );
}

export {TodoList};