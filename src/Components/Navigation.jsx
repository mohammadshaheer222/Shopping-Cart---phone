import { useState } from "react";
import { Link, Outlet  } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div>
          <nav className="flex justify-between items-center py-2 px-4 bg-gray-100 shadow-md shadow-gray-200 fixed top-0 left-0 right-0 z-10">
            <div className="md:flex md:items-center space-x-10">
              <div className="flex items-center gap-2">
                <FaApple />
                <h3 className="text-lg font-bold tracking-widest uppercase">
                  Apple
                </h3>
              </div>
              <div className="hidden md:block md:space-x-5 md:font-medium md:text-sm">
                <Link className="hover:text-gray-500 px-3" to="/">
                  Home
                </Link>
                <Link className="hover:text-gray-500 px-3" to="/shop">
                  Shop
                </Link>
                <Link className="hover:text-gray-500 px-3" to="/cart">
                  Cart
                </Link>
              </div>
            </div>
            <div className="flex space-x-5">
              <FiShoppingCart className="cursor-pointer md:text-xl" />
              <Link to="/login"><FaRegUser className="cursor-pointer md:text-xl" /></Link>
              <button
                onClick={openMenu}
                className="block focus:outline-none md:hidden"
              >
                {isOpen ? <IoClose /> : <AiOutlineMenu />}
              </button>
            </div>
          </nav>
          {isOpen ? (
            <div>
              <div className="h-screen text-lg font-medium flex flex-col gap-20 justify-center items-center bg-white fixed top-0 left-0 right-0 md:hidden">
                {/* <div className={`${isOpen ? 'h-screen' : 'h-0 overflow-hidden'} transition-all duration-500 ease-out`}> */}
                <Link className="hover:text-gray-500" to="/">
                  Home
                </Link>
                <Link className="hover:text-gray-500" to="/shop">
                  Shop
                </Link>
                <Link className="hover:text-gray-500" to="/cart">
                  Cart
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
