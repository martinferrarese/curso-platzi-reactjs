import './TodoSearch.css';

function TodoSearch({setSearchValue}) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="libro"
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };