import './CreateTodoButton.css';

function CreateTodoButton({setIsModalVisible, refreshNeeded}) {
    return (
        <button 
            className="CreateTodoButton"
            onClick={() => setIsModalVisible(true)}
            disabled={refreshNeeded}
        >
            +
        </button>
    );
}

export {CreateTodoButton};