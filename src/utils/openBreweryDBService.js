const testFetch = async () => {
    let response = await fetch(
        "https://api.openbrewerydb.org/v1/breweries?by_name=ale&per_page=10"
    );

    let jsonResponse = await response.json();

    return jsonResponse;
};

export default testFetch;
