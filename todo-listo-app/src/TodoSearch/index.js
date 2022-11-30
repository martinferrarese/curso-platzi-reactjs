import './TodoSearch.css';

function TodoSearch({ setSearchValue, searchValue, loading }) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className='TodoSearch-div'>
            <input
                value={searchValue}
                className="TodoSearch"
                placeholder="libro"
                onChange={onSearchValueChange}
                disabled={loading}
            />
        </div>
    );
}

export { TodoSearch };