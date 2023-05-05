import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="container mx-auto max-w-screen-xl">
            <SearchBar />
            <BusinessList />
        </div>
    );
}

export default App;
