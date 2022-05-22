import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const { setSearchValue, searchValue } = useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input
            value={searchValue}
            className="TodoSearch" 
            placeholder="libro"
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };