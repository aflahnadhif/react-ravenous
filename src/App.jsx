import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";

import mockBusinessData from "./data/MockBusinessData";

import testFetch from "./utils/openBreweryDBService";

function App() {
    const businessData = testFetch();

    return (
        <div className="container mx-auto max-w-screen-xl">
            <SearchBar />
            {/* <BusinessList data={mockBusinessData} /> */}
            <BusinessList data={businessData} />
        </div>
    );
}

export default App;
