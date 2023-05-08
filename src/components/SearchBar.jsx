import desktopBgImage from "../images/hero-banner-desktop.jpg";

const SearchBar = () => {
    return (
        <div
            className="h-96 flex flex-wrap items-center justify-center bg-cover"
            style={{ backgroundImage: `url(${desktopBgImage})` }}
        >
            <div className="w-full mt-24 flex justify-center gap-32 text-white font-semibold">
                <span className="w-12">Best Match</span>
                <span className="w-12">Highest Rated</span>
                <span className="w-12">Most Reviewed</span>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-5/12 border-b-2 border-white"></div>
            </div>
            <form action="#" method="get" className="justify-center my-12">
                <div className="grid grid-cols-2 gap-12">
                    <input
                        type="text"
                        placeholder="Search Businesses"
                        name="terms"
                        id="terms"
                        className="w-96 h-10 pl-4 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Where?"
                        name="location"
                        id="location"
                        className="w-96 h-10 pl-4 rounded-md"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <input
                        className="w-32 mt-10 py-2 px-5 rounded-md bg-yellow-500 text-white font-semibold"
                        type="submit"
                        value="Let's Go"
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
