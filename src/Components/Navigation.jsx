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

  const isClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="space-y-10">
          <nav className="flex justify-between items-center py-2 px-4 bg-gray-100 shadow-md shadow-gray-200 fixed top-0 left-0 right-0 z-20">
            <div className="md:flex md:items-center space-x-10">
                <h3 className="text-lg font-bold tracking-widest uppercase">
                  Shopping Cart
                </h3>
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
              <div className="animate-open-menu h-screen text-lg font-medium flex flex-col gap-20 justify-center items-center bg-white fixed top-0 left-0 right-0 md:hidden">
                <Link onClick={isClose} className="hover:text-gray-500" to="/">
                  Home
                </Link>
                <Link onClick={isClose} className="hover:text-gray-500" to="/shop">
                  Shop
                </Link>
                <Link onClick={isClose} className="hover:text-gray-500" to="/cart">
                  Cart
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
      <Outlet />
      </div>
    </>
  );
};
export default Navigation;
