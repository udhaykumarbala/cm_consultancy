import React from 'react';

const services = [
    {
        title: "Data Entry Services",
        description: "Accurate and efficient data entry services to help you manage your data.",
        image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/3/summer-men-collection.png",
    },
    {
        title: "Data Extraction",
        description: "Reliable data extraction services to collect data from various sources.",
        image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/3/fitness-collection.png",
    },
    {
        title: "Data Analytics",
        description: "In-depth data analysis to help you make informed decisions.",
        image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/3/summer-men-collection.png",
    },
    {
        title: "Machine Learning",
        description: "Advanced machine learning solutions to automate your processes.",
        image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/3/fitness-collection.png",
    },
    {
        title: "Business Intelligence",
        description: "Comprehensive BI services to transform your data into actionable insights.",
    },
    {
        title: "Data Visualization",
        description: "Clear and concise data visualization to make your data easy to understand.",
        image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/3/fitness-collection.png",
    },
    {
        title: "Web Development",
        description: "Professional web development services to build your online presence.",
    },
];

const OurServicesSection = () => {
    const defaultImage = "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/3/summer-men-collection.png";
    
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20" id="service">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Our Services</h2>
                </div>
                <div className="grid grid-cols-1 gap-5 text-center md:grid-cols-2 sm:text-left mt-12">
                    {services.map((service, index) => (
                        <div key={index} className="relative overflow-hidden group">
                            <div className="absolute inset-0">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 group-hover:rotate-3" src={service.image || defaultImage} alt={service.title} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="relative aspect-w-3 aspect-h-4 lg:aspect-w-1 lg:aspect-h-1">
                                <div className="flex items-end justify-center">
                                    <div className="px-4 py-8 sm:px-6 lg:px-10">
                                        <h3 className="text-2xl font-bold text-white lg:text-3xl">{service.title}</h3>
                                        <p className="mt-4 text-base font-normal text-white">{service.description}</p>
                                        <div className="mt-8">
                                            <a href="#" title="" className="inline-flex items-center text-base font-bold text-white" role="button">
                                                Explore Now
                                                <svg className="w-6 h-6 ml-2 transition-all duration-200 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurServicesSection;
