import './TodoSearch.css';

function TodoSearch({ setSearchValue, searchValue }) {
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