import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import Features from "../Features/Features";
import Menu from "../Menus/Menu";
import RecommendsFood from "../RecommendsFood/RecommendsFood";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            
        </div>
    );
};

export default Home;