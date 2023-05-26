import SectionHeader from "../../../Components/SectionTitle/SectionHeader";
import useMenu from "../../../Hooks/useMenu";
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
    const [menus] = useMenu();
    const recommendedFood = menus.filter(item => item.category === 'salad')
    console.log(recommendedFood)
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService
                title="The Chef-Service Experience at Bistro Restaurant"
                subTitle="At Bistro Restaurant, we also take pride in our chef's ability to cater to various dietary preferences and restrictions. Our chefs are well-versed in creating vegetarian, vegan, gluten-free, and other specialized dishes without compromising on taste or quality. Just let our staff know about your dietary requirements, and our chefs will ensure you have a delightful dining experience tailored to your needs."
            ></ChefService>
            <Menu></Menu>
            <CallUs></CallUs>
            <div className="mt-16 lg:mt-28">
                <SectionHeader heading="CHEF RECOMMENDS" subHeading="Should try"></SectionHeader>
            </div>
            <RecommendsFood items={recommendedFood}></RecommendsFood>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;