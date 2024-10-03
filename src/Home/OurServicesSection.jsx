const services = [
   {
      title: "Data Entry Services",
      description:
         "Streamline your data management with our precise and reliable data entry services, ensuring your information is organized and accessible when you need it.",
      image: "https://www.offshoreindiadataentry.com/blog/wp-content/uploads/2018/08/Advantages-of-Product-Data-Entry-Service-in-eCommerce-Websites.jpg",
   },

   {
      title: "Advanced Automation Services",
      description:
         "Save time and reduce errors by automating repetitive tasks like data entry and extraction. Our automation solutions help you focus on what matters most.",
      //   image: "https://www.klippa.com/wp-content/uploads/2024/02/data-extraction-header.png",
      image: "https://as1.ftcdn.net/v2/jpg/08/96/87/46/1000_F_896874670_N8NSz1Uq6Z6vu14YDNCS0v1acGMdDYG4.jpg",
   },
   {
      title: "Data Analytics",
      description:
         "Make data-driven decisions with our comprehensive analytics services. We turn raw data into meaningful insights that drive your business forward.",
      image: "https://img.pikbest.com/wp/202346/data-analytics-web-banner-and-business-chart-mockup-featuring-a-3d-rendered-seo-user-interface_9621529.jpg!w700wp",
   },
   {
      title: "Machine Learning",
      description:
         "Automate complex processes with our machine learning services. Enhance accuracy and efficiency across your operations with intelligent, adaptive systems.",
      image: "https://img.freepik.com/premium-photo/virtual-neural-networks-artificial-intelligence-machine-learning-banner-wallpaper-made-with-generative-ai_155027-3423.jpg",
   },
   {
      title: "Artificial Intelligence",
      description:
         "Innovative AI solutions to enhance your business processes and decision-making.",
      image: "https://www.bu.edu/hic/files/2021/04/ai-top-banner.jpeg",
   },
   // {
   //     title: "Business Intelligence",
   //     description: "Comprehensive BI services to transform your data into actionable insights.",
   //     image:"https://t4.ftcdn.net/jpg/02/86/04/23/360_F_286042362_shTRGf8RYV4KYgXShtp6dpFIlFd5ckvL.jpg"
   // },
   {
      title: "Data Extraction",
      description:
         "Efficiently gather vital information from various sources with our automated data extraction services, providing you with accurate and actionable data.",
      image: "https://www.klippa.com/wp-content/uploads/2024/02/data-extraction-header.png",
   },
   {
      title: "Data Visualization",
      description:
         "Transform complex data into easy-to-understand visuals. Our data visualization services help you make sense of your data at a glance.",
      image: "https://as2.ftcdn.net/v2/jpg/08/35/67/75/1000_F_835677544_KHQzeYj4DkBWIZZgIJcsN7XiPi1BSoDg.jpg",
   },
   {
      title: "Web Development",
      description:
         "Build a strong online presence with our custom web development services. We create responsive, user-friendly websites that reflect your brand.",
      image: "https://cdn.vectorstock.com/i/500p/23/07/web-blue-banner-software-ui-and-development-vector-42172307.jpg",
   },
   {
      title: "Remote Staffing and Consultancy",
      description:
         "Access top-tier talent from India remotely. Our staffing solutions provide you with skilled professionals who seamlessly integrate into your team.",
      //   image: "https://as1.ftcdn.net/v2/jpg/01/83/06/62/1000_F_183066223_YVJ3OW3drrefVdFmrkLaWG0GYpwiS67r.jpg",
      image: "https://www.bu.edu/hic/files/2021/04/ai-top-banner.jpeg",
   },
   {
      title: "Comprehensive (BPO)",
      description:
         "Focus on your core business by outsourcing routine tasks to us. We handle the manual work, so you can concentrate on growth and innovation.",
      image: "https://t4.ftcdn.net/jpg/02/86/04/23/360_F_286042362_shTRGf8RYV4KYgXShtp6dpFIlFd5ckvL.jpg",
   },
];

const OurServicesSection = () => {
   const defaultImage =
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/3/summer-men-collection.png";

   return (
      <section className='py-12 bg-white sm:py-16 lg:py-20' id='service'>
         <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
            <div className='text-center'>
               <h2 className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl'>
                  Our Services
               </h2>
            </div>
            <div className='grid grid-cols-1 gap-5 text-center md:grid-cols-2 sm:text-left mt-12'>
               {services.map((service, index) => (
                  <div key={index} className='relative overflow-hidden group'>
                     <div className='absolute inset-0'>
                        <img
                           className='object-cover w-full h-full transition-all duration-300 group-hover:scale-125'
                           src={service.image || defaultImage}
                           alt={service.title}
                        />
                     </div>
                     <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
                     <div
                        className='relative aspect-w-3 aspect-h-4 lg:aspect-w-1 lg:aspect-h-1 h-full'
                        style={{ height: "100%" }}
                     >
                        <div
                           className='flex items-end justify-center'
                           style={{ height: "100%" }}
                        >
                           <div
                              className='px-4 py-8 sm:px-6 lg:px-10'
                              style={{
                                 background: "rgba(0, 0, 0, 0.65)",
                                 width: "100%",
                                 height: "100%",
                              }}
                           >
                              <h3 className='text-2xl font-bold text-white lg:text-3xl'>
                                 {service.title}
                              </h3>
                              <p className='mt-4 text-base font-normal text-white'>
                                 {service.description}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default OurServicesSection;
