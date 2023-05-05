const data = {
    img: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "Nanamia Pizzeria",
    address: "Mozes Gatotkaca",
    city: "Yogyakarta",
    state: "DIY",
    zipcode: "55281",
    category: "Italian",
    rating: 4.5,
    review_count: 90,
};

const Business = () => {
    return (
        <div className="max-w-xs mb-8">
            <div className="h-72 flex flex-col justify-center overflow-hidden">
                <img className="w-full" src={data.img} alt={data.name} />
            </div>
            <div className="mt-4 mb-4">
                <h3 className="text-xl font-bold">{data.name}</h3>
                <div className="grid grid-cols-2">
                    <div>
                        <p>{data.address}</p>
                        <p>{data.city}</p>
                        <p>
                            {data.state} {data.zipcode}
                        </p>
                    </div>
                    <div className="text-right">
                        <p>{data.category}</p>
                        <p>{data.rating} stars</p>
                        <p>{data.review_count} reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;
