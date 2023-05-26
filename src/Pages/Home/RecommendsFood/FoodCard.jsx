
const FoodCard = ({food}) => {
    const {image, name, recipe, price} = food;
    return (
        <div className="card card-compact max-w-sm lg:max-w-[305px] bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute bg-blue-950 text-white right-0 mt-5 mr-5 px-2 py-1 rounded">${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center ">
                    <button className="bg-[#E8E8E8] hover:bg-[#1F2937] border-b-2 border-[#1F2937] px-3 py-2 font-semibold rounded hover:text-yellow-500 text-[#1F2937] hover:transition hover:duration-500 hover:ease-in-out">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;