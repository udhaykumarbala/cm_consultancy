import React, { useState, useEffect } from 'react';
import '../css/header.css';

const HeaderSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1023);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenSmall(window.innerWidth < 1023);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="fixed w-full top-0 z-50 py-4 md:py-6 bg-white bg-opacity-30 backdrop-blur-md shadow-md">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <a href="#" title="Logo" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                            <img className="w-auto h-8" src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg" alt="Logo" />
                        </a>
                    </div>

                    {isScreenSmall ? (
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="text-gray-900 focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{
                                    position: 'fixed',
                                    top: '26%',
                                    right: '5%',
                                    zIndex: 100,
                                }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    ) : null}

                    <div className={`lg:flex lg:items-center lg:justify-end lg:space-x-10 ${isScreenSmall && !isMenuOpen ? 'hidden' : 'block'} w-full lg:w-auto lg:flex-grow`}>
                        <nav className={`flex flex-col lg:flex-row items-center lg:space-x-10 ${isScreenSmall && isMenuOpen ? 'menu-open-animation' : 'menu-close-animation'}`} style={{
                            position: isScreenSmall ? 'fixed' : 'relative',
                            zIndex: isScreenSmall ? 99 : 'auto',
                            right: isScreenSmall ? '3%' : 'auto',
                            top: isScreenSmall ? '8%' : 'auto',
                            background: isScreenSmall ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                            backdropFilter: isScreenSmall ? 'blur(10px)' : 'none',
                            padding: isScreenSmall ? '26px' : '0',
                            borderRadius: isScreenSmall ? '10px' : '0',
                            boxShadow: isScreenSmall ? '0px 0px 20px 0px #c6c6c6' : 'none',
                            display: isScreenSmall ? 'block' : 'contents'
                        }}>
                            <a href="#" title="Home" className="block text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 py-2 lg:py-0"> Home </a>
                            <a href="#AboutUs" title="About Us" className="block text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 py-2 lg:py-0"> About Us </a>
                            <a href="#service" title="Services" className="block text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 py-2 lg:py-0"> Services </a>
                            <a href="#QualityAssurance" title="Quality Assurance" className="block text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 py-2 lg:py-0"> Quality Assurance </a>
                            <a href="#OurCommitment" title="Our Commitment" className="block text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 py-2 lg:py-0"> Our Commitment </a>
                            <a
                                href="#"
                                title="Contact Us"
                                className="block px-5 py-2 mt-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl lg:mt-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                                role="button"
                            >
                                Contact Us
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderSection;
