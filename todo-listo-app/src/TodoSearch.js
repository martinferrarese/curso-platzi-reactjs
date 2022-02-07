import './TodoSearch.css';

function TodoSearch() {
    const onSearchValueChange = (e) => {
        console.log(`Texto en el input: ${e.target.value}`);
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