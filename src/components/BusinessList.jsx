import { useEffect } from "react";

import Business from "./Business";

import testFetch from "../utils/openBreweryDBService";

const BusinessList = (props) => {
    const businesses = props.data.then((result) => {
        return result.map((businessData, index) => {
            return <Business data={businessData} key={index} />;
        });
    });

    console.log(businesses);

    // const businesses = props.data.map((businessData, index) => {
    //     return <Business data={businessData} key={index} />;
    // });

    // useEffect(() => {
    //     testFetch();
    // }, []);

    return (
        <div className="grid grid-cols-3 place-items-center my-12">
            {/* {businesses} */}
        </div>
    );
};

export default BusinessList;
