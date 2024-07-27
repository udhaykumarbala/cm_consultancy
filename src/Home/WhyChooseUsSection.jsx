import React from 'react';

const WhyChooseUsSection = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-20" style={{paddingTop:"3%"}} id="AboutUs">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-20 xl:gap-x-40">
                    <div>
                        <img className="object-cover w-full rounded-2xl" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/how-it-works/1/girl-with-laptop.png" alt="Girl with laptop" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Why Choose Us</h2>
                        {/* <p>Our unique, cost-effective ideas set us apart. We hire talented individuals from tier 2 and tier 3 cities, reducing resource costs by 10% while maintaining high standards of quality and ethics. Our innovative QC tool, developed using machine learning and analytics, catches human errors, ensuring maximum accuracy and reliability. This tool exemplifies our commitment to quality and innovation.</p> */}
                        <div className="flow-root mt-12 xl:mt-20">
                            <ul className="-my-8 divide-y divide-gray-200 xl:-my-10">
                                <li className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start">
                                    <span className="text-4xl font-medium text-gray-300"> 01. </span>
                                    <p className="mt-6 text-[18px] text-justify font-normal text-gray-900 sm:mt-0 sm:ml-9">
                                        <span className="font-semibold">Quality:</span> We ensure top-quality in every project, leveraging our innovative QC tool that achieved a 95% accuracy rate within the first three months of our startup.
                                    </p>
                                </li>

                                <li className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start">
                                    <span className="text-4xl font-medium text-gray-300"> 02. </span>
                                    <p className="mt-6 text-[18px] text-justify font-normal text-gray-900 sm:mt-0 sm:ml-9">
                                        <span className="font-semibold">Cost-Effective:</span> By hiring skilled professionals from tier 2 and tier 3 cities, we reduce resource costs by 10% while maintaining the highest standards of ethics and quality.
                                    </p>
                                </li>

                                <li className="flex flex-col py-8 xl:py-10 sm:flex-row sm:items-start">
                                    <span className="text-4xl font-medium text-gray-300"> 03. </span>
                                    <p className="mt-6 text-[18px] text-justify font-normal text-gray-900 sm:mt-0 sm:ml-9">
                                        <span className="font-semibold">Reliability:</span> Our dependable and accurate data solutions are designed to catch human errors and enhance the reliability of your operations, proven by our successful track record across diverse industries.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUsSection;
