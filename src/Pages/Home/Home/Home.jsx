import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import Features from "../Features/Features";
import Menu from "../Menus/Menu";
import RecommendsFood from "../RecommendsFood/RecommendsFood";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <CallUs></CallUs>
            <RecommendsFood></RecommendsFood>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;