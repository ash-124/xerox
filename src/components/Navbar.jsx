import { FaSearch, FaRegUserCircle, FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    const { pathname } = useLocation();
    console.log('location', pathname)
    const links =
        <>

            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/add-product'}>Add Product</Link></li>
            <li><Link to={'/all-products'}>All Products</Link></li>
            <li><Link to={'/add-product'}>Add Product</Link></li>

        </>
    return (
        <div className={`navbar ${pathname === '/' ? "text-white absolute z-[200] top-0 bg-transparent" : "text-black bg-white"}   h-[85px]  px-10`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="navbar-icon">
                        <FaBars />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="navbar-icon"><FaSearch /></div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">XeroX</a>
            </div>
            <div className="navbar-end">
                <button className="navbar-icon">
                    <FaRegUserCircle />
                </button>
                <button className="navbar-icon">
                    <FaCartShopping />
                </button>
            </div>
        </div>
    );
};

export default Navbar;