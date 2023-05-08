import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";

import mockBusinessData from "./data/MockBusinessData";

function App() {
    return (
        <div className="container mx-auto max-w-screen-xl">
            <SearchBar />
            <BusinessList data={mockBusinessData} />
        </div>
    );
}

export default App;
