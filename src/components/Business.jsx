const Business = (props) => {
    return (
        <div className="max-w-xs mb-8">
            <div className="h-72 flex flex-col justify-center overflow-hidden">
                <img
                    className="w-full"
                    src={props.data.img}
                    alt={props.data.name}
                />
            </div>
            <div className="mt-4 mb-4">
                <h3 className="text-xl font-bold">{props.data.name}</h3>
                <div className="grid grid-cols-2">
                    <div>
                        <p>{props.data.address}</p>
                        <p>{props.data.city}</p>
                        <p>
                            {props.data.state} {props.data.zipcode}
                        </p>
                    </div>
                    <div className="text-right">
                        <p>{props.data.category}</p>
                        <p>{props.data.rating} stars</p>
                        <p>{props.data.review_count} reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;
