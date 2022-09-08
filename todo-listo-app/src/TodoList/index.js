import './TodoList.css';

function TodoList({render, error, onError, emptySearchResult, onEmptySearchResult, emptyState, onEmptyState}) {
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
                    {render()}
                </ul>
            }
        </section>
    );
}

export {TodoList};