import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import Menu from '../Home/Menus/Menu';

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu" subTitle="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <Menu></Menu>
        </div>
    );
};

export default OurMenu;