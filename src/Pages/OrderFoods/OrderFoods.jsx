import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import orderFoodImg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import RecommendsFood from "../Home/RecommendsFood/RecommendsFood";


const OrderFoods = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menus] = useMenu();
    const dessertProducts = menus.filter(item => item.category === 'dessert');
    const saladProducts = menus.filter(item => item.category === 'salad');
    const drinksProducts = menus.filter(item => item.category === 'drinks');
    const soupProducts = menus.filter(item => item.category === 'soup');
    const pizzaProducts = menus.filter(item => item.category === 'pizza');
    return (
        <div>
            <Cover img={orderFoodImg} title="Order our Food" subTitle="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <div className="mt-10 lg:mt-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-center border-gray-300 gap-x-1 lg:gap-x-2">
                        <Tab className={`text-sm lg:text-lg text-gray-600 px-3 py-1 lg:px-4 lg:py-2 hover:text-yellow-500 font-semibold cursor-pointer hover:bg-[#1F2937] focus:outline-none focus:text-yellow-500 focus:bg-[#1F2937] focus:rounded-md hover:rounded-md rounded-md  ${tabIndex === 0 ? 'text-yellow-500 bg-[#1F2937] font-semibold rounded-md' : ''
                            }`}>Salad</Tab>
                        <Tab className={`text-sm lg:text-lg text-gray-600 px-3 py-1 lg:px-4 lg:py-2 hover:text-yellow-500 font-semibold cursor-pointer hover:bg-[#1F2937] focus:outline-none focus:text-yellow-500 focus:bg-[#1F2937] focus:rounded-md hover:rounded-md rounded-md ${tabIndex === 1 ? 'text-yellow-500 bg-[#1F2937] font-semibold rounded-md' : ''
                            }`}>Pizza</Tab>
                        < Tab className={`text-sm lg:text-lg text-gray-600 px-3 py-1 lg:px-4 lg:py-2 hover:text-yellow-500 font-semibold cursor-pointer hover:bg-[#1F2937] focus:outline-none focus:text-yellow-500 focus:bg-[#1F2937] focus:rounded-md hover:rounded-md rounded-md ${tabIndex === 2 ? 'text-yellow-500 bg-[#1F2937] font-semibold rounded-md' : ''
                            }`}>Soups</Tab>
                        < Tab className={`text-sm lg:text-lg text-gray-600 px-3 py-1 lg:px-4 lg:py-2 hover:text-yellow-500 font-semibold cursor-pointer hover:bg-[#1F2937] focus:outline-none focus:text-yellow-500 focus:bg-[#1F2937] focus:rounded-md hover:rounded-md rounded-md ${tabIndex === 3 ? 'text-yellow-500 bg-[#1F2937] font-semibold rounded-md' : ''
                            }`}>Desserts</Tab>
                        < Tab className={`text-sm lg:text-lg text-gray-600 px-3 py-1 lg:px-4 lg:py-2 hover:text-yellow-500 font-semibold cursor-pointer hover:bg-[#1F2937] focus:outline-none focus:text-yellow-500 focus:bg-[#1F2937] focus:rounded-md hover:rounded-md rounded-md ${tabIndex === 4 ? 'text-yellow-500 bg-[#1F2937] font-semibold rounded-md' : ''
                            }`}>Drinks</Tab>
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