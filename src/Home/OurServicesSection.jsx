import React from 'react';

const services = [
    {
        title: "Data Entry Services",
        description: "Accurate and efficient data entry services to help you manage your data.",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/data-entry-5734399-4799753.png?f=webp",
    },
    {
        title: "Data Extraction",
        description: "Reliable data extraction services to collect data from various sources.",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/data-extraction-with-rpa-8086564-6506948.png?f=webp",
    },
    {
        title: "Data Analytics",
        description: "In-depth data analysis to help you make informed decisions.",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/data-analytics-3488374-2922369.png?f=webp",
    },
    {
        title: "Machine Learning",
        description: "Advanced machine learning solutions to automate your processes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5hUdfUxqVlwfgUk16Mgb3sYB5-qRQ4f7YQ&s",
    },
    {
        title: "Business Intelligence",
        description: "Comprehensive BI services to transform your data into actionable insights.",
        image:"https://www.advanceecomsolutions.com/wp-content/uploads/2022/06/seo-for-online-retailer-img.jpg"
    },
    {
        title: "Data Visualization",
        description: "Clear and concise data visualization to make your data easy to understand.",
        image: "https://cdn.thenewstack.io/media/2023/01/285d68dd-charts-1024x581.jpg",
    },
    {
        title: "Web Development",
        description: "Professional web development services to build your online presence.",
        image: "https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg"
    },
    {
        title: "Artificial Intelligence",
        description: "Innovative AI solutions to enhance your business processes and decision-making.",
        image: "https://us.123rf.com/450wm/sn333g/sn333g1710/sn333g171000075/87887609-artificial-intelligence-round-vector-colorful-linear-illustration-or-sign-on-dark-background.jpg?ver=6",
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
                                    <div className="px-4 py-8 sm:px-6 lg:px-10" style={{background: 'rgba(0, 0, 0, 0.65)'}}>
                                        <h3 className="text-2xl font-bold text-white lg:text-3xl">{service.title}</h3>
                                        <p className="mt-4 text-base font-normal text-white">{service.description}</p>
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
