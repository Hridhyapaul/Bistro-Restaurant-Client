import SectionHeader from "../../../Components/SectionTitle/SectionHeader";
import MenuItems from "../../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";

const Menu = () => {
    const [menus] = useMenu();
    const popularProducts = menus.filter(item => item.category === 'popular');

    return (
        <section className="mt-16 lg:mt-28">
            <SectionHeader heading="From our Menu" subHeading="Check it Out"></SectionHeader>
            <div className="mt-10 lg:mt-20 mx-4 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
                {
                    popularProducts.map(menu => <MenuItems key={menu._id} menu={menu}></MenuItems>)
                }
            </div>
            <div className="flex justify-center mt-10">
                <button className=" hover:bg-[#1F2937] border-b-2 border-black hover:border-[#1F2937] px-3 py-2 font-semibold rounded hover:text-yellow-500 text-black hover:transition hover:duration-500 hover:ease-in-out">View Full Menu</button>
            </div>
        </section>
    );
};

export default Menu;