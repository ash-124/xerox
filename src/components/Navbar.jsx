import { FaSearch, FaRegUserCircle,  FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div className="navbar bg-transparent h-[85px] shadow-sm px-10">
            <div className="navbar-start">
              <div className="navbar-icon"><FaBars/></div>
              <div className="navbar-icon"><FaSearch/></div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">XeroX</a>
            </div>
            <div className="navbar-end">
                <button className="navbar-icon">
                   <FaRegUserCircle/>
                </button>
                <button className="navbar-icon">
                   <FaCartShopping/>
                </button>
            </div>
        </div>
    );
};

export default Navbar;