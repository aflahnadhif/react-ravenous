import Business from "./Business";

const BusinessList = (props) => {
    const businesses = props.data.map((businessData, index) => {
        return <Business data={businessData} key={index} />;
    });

    return (
        <div className="grid grid-cols-3 place-items-center my-12">
            {businesses}
        </div>
    );
};

export default BusinessList;
