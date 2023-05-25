const MenuItems = ({ menu }) => {
    const { image, name, price, recipe } = menu;
    return (
        <div className="flex justify-start items-center gap-x-4">
            <div>
                <img className="w-[200px] h-[120px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] object-cover" src={image} alt="" />
            </div>
            <div className="space-y-2">
                <h1 className="text-xl font-semibold">{name}</h1>
                <p>{recipe}</p>
                <p className="font-semibold text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItems;