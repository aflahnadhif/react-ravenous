import Business from "./Business";

const BusinessList = (props) => {
    const businesses = props.data.map((businessData) => {
        return <Business data={businessData} />;
    });

    return (
        <div className="grid grid-cols-3 place-items-center my-12">
            {businesses}
        </div>
    );
};

export default BusinessList;
