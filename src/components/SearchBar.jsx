import { useState } from "react";

import desktopBgImage from "../images/hero-banner-desktop.jpg";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [sorting, setSorting] = useState("");

    const onClickSortingHandler = (event) => {
        setSorting(event.target.value);
    };

    const onChangeSearchHandler = (event) => {
        setSearch(event.target.value);
    };

    const onChangeLocationHandler = (event) => {
        setLocation(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log(
            `Searching Yelp with ${search}, ${location}, and ${sorting}`
        );
    };

    return (
        <div
            className="h-96 flex flex-wrap items-center justify-center bg-cover"
            style={{ backgroundImage: `url(${desktopBgImage})` }}
        >
            <div className="w-full mt-24 flex justify-center gap-32 text-white font-bold">
                <button
                    className={
                        "w-12 " +
                        (sorting === "best_match" ? "text-yellow-500" : "")
                    }
                    onClick={onClickSortingHandler}
                    value={"best_match"}
                >
                    Best Match
                </button>
                <button
                    className={
                        "w-12 " +
                        (sorting === "highest_rated" ? "text-yellow-500" : "")
                    }
                    onClick={onClickSortingHandler}
                    value={"highest_rated"}
                >
                    Highest Rated
                </button>
                <button
                    className={
                        "w-12 " +
                        (sorting === "most_reviewed" ? "text-yellow-500" : "")
                    }
                    onClick={onClickSortingHandler}
                    value={"most_reviewed"}
                >
                    Most Reviewed
                </button>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-5/12 border-b-2 border-white"></div>
            </div>
            <form
                action="#"
                method="get"
                className="justify-center my-12"
                onSubmit={onSubmitHandler}
            >
                <div className="grid grid-cols-2 gap-12">
                    <input
                        type="text"
                        placeholder="Search Businesses"
                        name="terms"
                        id="terms"
                        className="w-96 h-10 pl-4 rounded-md"
                        onChange={onChangeSearchHandler}
                    />
                    <input
                        type="text"
                        placeholder="Where?"
                        name="location"
                        id="location"
                        className="w-96 h-10 pl-4 rounded-md"
                        onChange={onChangeLocationHandler}
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
