import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => {
            console.log(error.message)
        })
    }

    const navItems = <>
        <Link to="/"><li><a>Home</a></li></Link>
        <Link to="/menu"><li><a>Our Menu</a></li></Link>
        <Link to="/order/salad"><li><a>Order Food</a></li></Link>
        {
            user ?
                <>
                    <li><a onClick={handleLogOut}>Logout</a></li>
                </>
                :
                <>
                    <Link to="/login"><li><a>Login</a></li></Link>
                    <Link to="/register"><li><a>Register</a></li></Link>
                </>
        }
    </>
    return (
        <div className="navbar max-w-screen-xl fixed z-10 px-4 bg-opacity-25 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="normal-case text-2xl font-bold">Bistro-Restaurant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navigation;