import React, { useState, useEffect } from "react";
import logo from "../assets/light-Theme.svg";
import "../css/header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HeaderSection = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1023);

   useEffect(() => {
      const handleResize = () => {
         setIsScreenSmall(window.innerWidth < 1023);
      };

      const handleScroll = () => {
         if (isMenuOpen) {
            setIsMenuOpen(false);
         }
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("resize", handleResize);
         window.removeEventListener("scroll", handleScroll);
      };
   }, [isMenuOpen]);

   return (
      <header className='fixed w-full top-0 z-50 py-4 md:py-4 bg-white bg-opacity-30 backdrop-blur-md shadow-md'>
         <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between'>
               <div className='flex'>
                  <img
                     src={logo}
                     alt='logo'
                     className=' w-40 p-0 object-cover'
                  />
               </div>
               {/* <div className="flex-shrink-0 z-[999]">
                        <a href="#" title="Logo" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                            <h1 style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Material Symbols Outlined' }}>CM <span style={{ fontSize: '15px', fontWeight: 'bold', color: 'rgb(10, 89, 162)', marginLeft: '-16px', fontFamily: 'Material Symbols Outlined' }}>Consultancy</span></h1>
                        </a>
                    </div> */}

               {isScreenSmall ? (
                  <div className='flex lg:hidden'>
                     <button
                        type='button'
                        className='text-gray-900 focus:outline-none'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                     >
                        <svg
                           className={`w-7 h-7 ${
                              isMenuOpen ? "hidden" : "block"
                           }`}
                           xmlns='http://www.w3.org/2000/svg'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                           style={{
                              position: "fixed",
                              top: "26%",
                              right: "5%",
                              zIndex: 100,
                           }}
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='1.5'
                              d='M4 6h16M4 12h16M4 18h16'
                           ></path>
                        </svg>
                        <i
                           className={`fas fa-times w-7 h-7 ${
                              isMenuOpen ? "block" : "hidden"
                           }`}
                           style={{
                              position: "fixed",
                              top: "26%",
                              right: "5%",
                              zIndex: 100,
                              fontSize: "28px",
                           }}
                        ></i>
                     </button>
                  </div>
               ) : null}

               <div
                  className={`lg:flex lg:items-center lg:justify-end lg:space-x-10 ${
                     isScreenSmall && !isMenuOpen ? "hidden" : "block"
                  } w-full lg:w-auto lg:flex-grow`}
               >
                  <nav
                     className={`flex flex-col lg:flex-row items-center lg:space-x-10 ${
                        isScreenSmall && isMenuOpen
                           ? "menu-open-animation"
                           : "menu-close-animation"
                     }`}
                     style={{
                        position: isScreenSmall ? "fixed" : "relative",
                        zIndex: isScreenSmall ? 99 : "auto",
                        width: "100%",
                        left: isScreenSmall ? "0" : "auto",
                        top: isScreenSmall ? "0%" : "auto",
                        background: isScreenSmall
                           ? "rgb(255 255 255 / 94%)"
                           : "transparent",
                        backdropFilter: isScreenSmall ? "blur(10px)" : "none",
                        padding: isScreenSmall ? "18% 0% 0% 0%" : "0",
                        borderRadius: isScreenSmall ? "10px" : "0",
                        boxShadow: isScreenSmall
                           ? "rgb(198, 198, 198) 0px 0px 20px 0px"
                           : "none",
                        display: isScreenSmall ? "flex" : "contents",
                        height: "100vh",
                        justifyContent: "flex-start",
                     }}
                  >
                     <a
                        href='#service'
                        title='Services'
                        className='block text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 py-2 lg:py-0'
                     >
                        Our Services{" "}
                     </a>
                     <a
                        href='#ContactUs'
                        title='Contact Us'
                        className='block px-5 py-2 mt-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl lg:mt-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white'
                        role='button'
                     >
                        Contact Us
                     </a>
                  </nav>
               </div>
            </div>
         </div>
      </header>
   );
};

export default HeaderSection;
