export default function Search({ setCity }) {
    function handleSubmit(e) {
        e.preventDefault();
        let value = document.getElementById('search').value;
        setCity(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter city name" id='search' />
        </form>
    );
}