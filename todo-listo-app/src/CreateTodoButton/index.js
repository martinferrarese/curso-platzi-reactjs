import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {
    const { setIsModalVisible } = useContext(TodoContext);
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