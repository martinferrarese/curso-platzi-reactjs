import React, { useState } from 'react';

function TodoForm({ setIsModalVisible, addTodo }) {
    const [newTodoValue, setNewTodoValue] = useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setIsModalVisible(false);
    }

    const onCancel = () => {
        setIsModalVisible(false);
    }

    return (
        <form onSubmit={onAdd}>
            <label></label>
            <textarea onChange={onChange} name='New task' placeholder='Ej: Salir de este lugar'></textarea>
            <div>
                <button type='button' onClick={onCancel}>Cancelar</button>
                <button type='submit'>Añadir</button>
            </div>
        </form>
    )
}

export default TodoForm;