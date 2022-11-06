import './TodoSearch.css';

function TodoSearch({ setSearchValue, searchValue, loading }) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input
            value={searchValue}
            className="TodoSearch"
            placeholder="libro"
            onChange={onSearchValueChange}
            disabled={loading}
        />
    );
}

export { TodoSearch };