import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionTitle/SectionHeader";
import FoodCard from "./FoodCard";

const RecommendsFood = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const saladFoods = data.filter(item => item.category === "salad")
                console.log(saladFoods)
                setFoods(saladFoods)
            })
    }, [])
    return (
        <div className="mt-16 lg:mt-28">
            <SectionHeader heading="CHEF RECOMMENDS" subHeading="Should try"></SectionHeader>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-4 mt-10 lg:mt-20 mx-4 lg:mx-0">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default RecommendsFood;