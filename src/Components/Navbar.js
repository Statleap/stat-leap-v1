import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  const resourcesRef = useRef(null);
  const supportRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
    setSupportOpen(false);
  };

  const toggleSupport = () => {
    setSupportOpen(!supportOpen);
    setResourcesOpen(false);
  };

  const closeSubmenus = () => {
    setResourcesOpen(false);
    setSupportOpen(false);
    setNav(false); 
  };

  return (
    <nav className="fixed top-0 w-full z-40 transition-colors duration-300 bg-black">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#25d366]">
          <Link to="/" onClick={closeSubmenus}>Stat<span className="navbar-span transition-colors duration-300 text-white">Leap</span></Link>
        </h1>
        <ul className="hidden md:flex font-semibold text-[20px] cursor-pointer text-white">
          <li className="p-4 hover:text-[#25d366] whitespace-nowrap">
            <NavLink to="/tools" onClick={closeSubmenus}>ML kits</NavLink>
          </li>
          <li className="p-4 hover:text-[#25d366] whitespace-nowrap">
            <NavLink to="/case-studies" onClick={closeSubmenus}>Blogs</NavLink>
          </li>
          <li className="p-4 hover:text-[#25d366]">
            <NavLink to="/plans" onClick={closeSubmenus}>Pricing</NavLink>
          </li>
          <li ref={resourcesRef} className="relative p-4 hover:text-[#25d366]">
            <button onClick={toggleResources} className="whitespace-nowrap">
              Resources
            </button>
            {resourcesOpen && (
              <ul className="absolute mt-2 w-40 bg-white text-black shadow-lg rounded">
                <li className="p-2 hover:bg-gray-200">
                  <Link to="/resources" onClick={closeSubmenus}>Resources</Link>
                </li>
                <li className="p-2 hover:bg-gray-200">
                  <Link to="#demo-videos" onClick={closeSubmenus}>Demo Videos</Link>
                </li>
              </ul>
            )}
          </li>
          <li ref={supportRef} className="relative p-4 hover:text-[#25d366]">
            <button onClick={toggleSupport} className="whitespace-nowrap">Support</button>
            {supportOpen && (
              <ul className="absolute mt-2 w-40 bg-white text-black shadow-lg rounded">
                <li className="p-2 hover:bg-gray-200">
                  <Link to="/faq" onClick={closeSubmenus}>FAQs</Link>
                </li>
                <li className="p-2 hover:bg-gray-200">
                  <Link to="/support" onClick={closeSubmenus}>Support</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {!nav ? <AiOutlineMenu size={24} color="#25d366" /> : <AiOutlineClose size={24} color="#25d366" />}
        </div>
        <div className={nav ? 'fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]  ease-in-out duration-500'}>
          <h1 className="w-full text-3xl mt-4 p-4 font-bold text-[#25d366]">
            <Link to="/" onClick={closeSubmenus}>Stat<span className="navbar-span transition-colors duration-300 text-white">Leap</span></Link>
          </h1>
          <ul className="p-2 text-white font-semibold">
            <li className="p-4 border-b border-b-gray-600">
              <Link to="/tools" onClick={closeSubmenus}>ML kits</Link>
            </li>
            <li className="p-4 border-b border-b-gray-600">
              <Link to="/case-studies" onClick={closeSubmenus}>Blogs</Link>
            </li>
            <li className="p-4 border-b border-b-gray-600">
              <Link to="/plans" onClick={closeSubmenus}>Pricing</Link>
            </li>
            <li ref={resourcesRef} className="relative p-4 border-b border-b-gray-600">
              <button onClick={toggleResources} className="whitespace-nowrap">
                Resources
              </button>
              {resourcesOpen && (
                <ul className="absolute mt-1 w-full bg-white text-black">
                  <li className="p-2 hover:bg-gray-200">
                    <Link to="/resources" onClick={closeSubmenus}>Resources</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200">
                    <Link to="#demo-videos" onClick={closeSubmenus}>Demo Videos</Link>
                  </li>
                </ul>
              )}
            </li>
            <li ref={supportRef} className="relative p-4 border-b border-b-gray-600">
              <button onClick={toggleSupport} className="whitespace-nowrap">
                Support
              </button>
              {supportOpen && (
                <ul className="absolute mt-2 w-40 bg-white text-black shadow-lg rounded">
                  <li className="p-2 hover:bg-gray-200">
                    <Link to="/faq" onClick={closeSubmenus}>FAQs</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200">
                    <Link to="/support" onClick={closeSubmenus}>Support</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
