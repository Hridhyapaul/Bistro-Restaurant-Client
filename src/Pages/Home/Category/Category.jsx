import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CategorySlider from "./CategorySlider";


const Category = () => {
    return (
        <div className="mt-16">
            {/* <h1>From 11:00am to 10:00pm</h1> */}
            <SectionTitle></SectionTitle>
            <div className="mt-10 lg:mt-20 mx-4 lg:mx-0">
                <CategorySlider></CategorySlider>
            </div>
        </div>
    );
};

export default Category;