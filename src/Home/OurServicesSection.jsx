import React from 'react';

const services = [
    {
        title: "Data Entry Services",
        description: "Accurate and efficient data entry services to help you manage your data.",
        image: "https://www.offshoreindiadataentry.com/blog/wp-content/uploads/2018/08/Advantages-of-Product-Data-Entry-Service-in-eCommerce-Websites.jpg",
    },
    {
        title: "Data Extraction",
        description: "Reliable data extraction services to collect data from various sources.",
        image: "https://www.mhcautomation.com/wp-content/uploads/2021/07/What-Is-Data-Extraction-Banner-02-.png",
    },
    {
        title: "Data Analytics",
        description: "In-depth data analysis to help you make informed decisions.",
        image: "https://img.pikbest.com/wp/202346/data-analytics-web-banner-and-business-chart-mockup-featuring-a-3d-rendered-seo-user-interface_9621529.jpg!w700wp",
    },
    {
        title: "Machine Learning",
        description: "Advanced machine learning solutions to automate your processes.",
        image: "https://img.freepik.com/premium-photo/virtual-neural-networks-artificial-intelligence-machine-learning-banner-wallpaper-made-with-generative-ai_155027-3423.jpg",
    },
    {
        title: "Business Intelligence",
        description: "Comprehensive BI services to transform your data into actionable insights.",
        image:"https://t4.ftcdn.net/jpg/02/86/04/23/360_F_286042362_shTRGf8RYV4KYgXShtp6dpFIlFd5ckvL.jpg"
    },
    {
        title: "Data Visualization",
        description: "Clear and concise data visualization to make your data easy to understand.",
        image: "https://media.licdn.com/dms/image/C5612AQF54ISFHO-sbA/article-cover_image-shrink_720_1280/0/1575413859195?e=2147483647&v=beta&t=JCrxU-af-shd8O26nv58V-IhulrCxOhIt-WL1b86auM",
    },
    {
        title: "Web Development",
        description: "Professional web development services to build your online presence.",
        image: "https://cdn.vectorstock.com/i/500p/23/07/web-blue-banner-software-ui-and-development-vector-42172307.jpg"
    },
    {
        title: "Artificial Intelligence",
        description: "Innovative AI solutions to enhance your business processes and decision-making.",
        image: "https://www.bu.edu/hic/files/2021/04/ai-top-banner.jpeg",
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
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={service.image || defaultImage} alt={service.title} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="relative aspect-w-3 aspect-h-4 lg:aspect-w-1 lg:aspect-h-1">
                                <div className="flex items-end justify-center">
                                    <div className="px-4 py-8 sm:px-6 lg:px-10" style={{background: 'rgba(0, 0, 0, 0.65)', width:"100%"}}>
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
