import './CreateTodoButton.css';

function CreateTodoButton({setIsModalVisible}) {
    return (
        <button 
            className="CreateTodoButton"
            onClick={() => setIsModalVisible(true)}
        >
            +
        </button>
    );
}

export {CreateTodoButton};