import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import OurMenuCategory from '../../Shared/OurMenuCategory/OurMenuCategory';
import SectionHeader from '../../Components/SectionTitle/SectionHeader';

const OurMenu = () => {
    const [menus] = useMenu();
    const offeredProducts = menus.filter(item => item.category === 'offered');
    const dessertProducts = menus.filter(item => item.category === 'dessert');
    const saladProducts = menus.filter(item => item.category === 'salad');
    const drinksProducts = menus.filter(item => item.category === 'drinks');
    const soupProducts = menus.filter(item => item.category === 'soup');
    const pizzaProducts = menus.filter(item => item.category === 'pizza');
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu" subTitle="WOULD YOU LIKE TO TRY A DISH?"></Cover>

            {/* Offer Foods */}

            <div className="mt-16 lg:mt-28">
                <SectionHeader heading="TODAY'S OFFER" subHeading="Don't miss"></SectionHeader>
            </div>
            <OurMenuCategory items={offeredProducts}></OurMenuCategory>

            {/* Desserts Foods */}

            <div className='mt-10 lg:mt-20'>
                <Cover img={dessertImg} title="DESSERTS" subTitle="Desserts are not only enjoyed for their delightful taste but also for the joy and pleasure they bring. They are often associated with celebrations, special occasions, and festive gatherings. Desserts can be homemade or bought from bakeries, patisseries, or dessert shops, offering a wide range of options to satisfy different cravings."></Cover>
            </div>
            <OurMenuCategory items={dessertProducts}></OurMenuCategory>

            {/* Pizza Foods */}

            <div className='mt-10 lg:mt-20'>
                <Cover img={pizzaImg} title="PIZZA" subTitle="Pizza is a popular and beloved food worldwide, known for its delicious combination of flavors and versatility. It originated in Italy but has become a global culinary icon, enjoyed by people of all ages and cultures."></Cover>
            </div>
            <OurMenuCategory items={pizzaProducts}></OurMenuCategory>

            {/* Salad */}

            <div className='mt-10 lg:mt-20'>
                <Cover img={saladImg} title="SALAD" subTitle="Salad is a versatile and nutritious dish consisting of a mixture of vegetables, fruits, herbs, and often other ingredients, such as proteins, grains, or dressings. It is commonly served cold or at room temperature and can be enjoyed as a side dish or as a main course."></Cover>
            </div>
            <OurMenuCategory items={saladProducts}></OurMenuCategory>

            {/* Soup Foods */}

            <div className='mt-10 lg:mt-20'>
                <Cover img={soupImg} title="SOUP" subTitle="Soup is a versatile and comforting dish that has been enjoyed by cultures around the world for centuries. It typically consists of a liquid base, such as broth or stock, combined with various ingredients like vegetables, meat, poultry, seafood, legumes, grains, or herbs and spices."></Cover>
            </div>
            <OurMenuCategory items={soupProducts}></OurMenuCategory>

            {/* Drinks */}

            <div className='mt-10 lg:mt-20'>
                <Cover img={soupImg} title="DRINK" subTitle="Drinks play a significant role in our daily lives and have been enjoyed by humans for centuries. They serve as a source of hydration, refreshment, and pleasure, and come in a wide range of flavors, compositions, and cultural significance."></Cover>
            </div>
            <OurMenuCategory items={drinksProducts}></OurMenuCategory>
        </div>
    );
};

export default OurMenu;