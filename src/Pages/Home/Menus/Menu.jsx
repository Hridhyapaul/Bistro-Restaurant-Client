import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionTitle/SectionHeader";
import MenuItems from "../../../Shared/MenuItems/MenuItems";

const Menu = () => {
    const [menus, setMenus] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularProducts = data.filter(item => item.category === 'popular');
                setMenus(popularProducts)
                console.log(popularProducts)
            })
    }, [])
    return (
        <section className="mt-16 lg:mt-28">
            <SectionHeader heading="From our Menu" subHeading="Check it Out"></SectionHeader>
            <div className="mt-10 lg:mt-20 mx-4 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
                { 
                  menus.map(menu => <MenuItems key={menu._id} menu={menu}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default Menu;