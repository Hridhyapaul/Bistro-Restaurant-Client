import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import orderFoodImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import RecommendsFood from "../Home/RecommendsFood/RecommendsFood";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const OrderFoods = () => {
    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks']
    const { category } = useParams();
    console.log(category)
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = useMenu();
    const dessertProducts = menus.filter(item => item.category === 'dessert');
    const saladProducts = menus.filter(item => item.category === 'salad');
    const drinksProducts = menus.filter(item => item.category === 'drinks');
    const soupProducts = menus.filter(item => item.category === 'soup');
    const pizzaProducts = menus.filter(item => item.category === 'pizza');
    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <Cover img={orderFoodImg} title="Order our Food" subTitle="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <div className="mt-10 lg:mt-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel className="">
                        <RecommendsFood items={saladProducts}></RecommendsFood>
                    </TabPanel>
                    <TabPanel className="">
                        <RecommendsFood items={pizzaProducts}></RecommendsFood>
                    </TabPanel>
                    <TabPanel className="">
                        <RecommendsFood items={soupProducts}></RecommendsFood>
                    </TabPanel>
                    <TabPanel className="">
                        <RecommendsFood items={dessertProducts}></RecommendsFood>
                    </TabPanel>
                    <TabPanel className="">
                        <RecommendsFood items={drinksProducts}></RecommendsFood>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFoods;