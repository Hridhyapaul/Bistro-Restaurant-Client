import FoodCard from "./FoodCard";

const RecommendsFood = ({items}) => {

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-4 mt-10 lg:mt-20 mx-4 lg:mx-0">
                {
                    items.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default RecommendsFood;