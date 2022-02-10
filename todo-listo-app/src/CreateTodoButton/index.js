import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <button 
            className="CreateTodoButton"
            onClick={() => console.log('Click')}
        >
            +
        </button>
    );
}

export {CreateTodoButton};