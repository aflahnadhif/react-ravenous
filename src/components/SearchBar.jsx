const SearchBar = () => {
    return (
        <div className="h-96 flex items-center justify-center bg-gray-600">
            <form action="#" method="get" className="justify-center">
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
                        className="w-32 mt-10 py-2 px-5 rounded-sm bg-yellow-500 text-white font-semibold"
                        type="submit"
                        value="Let's Go"
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
