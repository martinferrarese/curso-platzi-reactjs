import { createContext, useState } from "react"
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

const todosDefault = [
    { text: 'Aprender React', completed: false },
    { text: 'Leer el libro', completed: true },
    { text: 'Ver un curso de finanzas', completed: true }
 ];

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: setTodos,
        loading,
        error,
    } = useLocalStorage('TODOS', todosDefault);
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const [searchValue, setSearchValue] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    let searchedTodos = [];
    
    if(searchValue.length <= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            return todo.text.toLowerCase().includes(searchValue.toLowerCase());
        });
    }

    const completeTodo = (text) => {
        const updatedTodos = [...todos];
        const indexTodoToComplete = updatedTodos.findIndex(todo => todo.text === text);
        updatedTodos[indexTodoToComplete].completed = true;
        setTodos(updatedTodos);
    }

    const deleteTodo = (text) => {
        const updatedTodos = [...todos];
        const indexTodoToDelete = updatedTodos.findIndex(todo => todo.text === text);
        updatedTodos.splice(indexTodoToDelete, 1);
        setTodos(updatedTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text
        });
        setTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            isModalVisible,
            setIsModalVisible,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoProvider, TodoContext };