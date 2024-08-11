
const OurCommitmentSection = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20" id="OurCommitment">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Our Commitment</h2>
                    <div className="mt-12 grid max-w-lg grid-cols-1 mx-auto gap-y-12 gap-x-14 lg:grid-cols-3 lg:max-w-none text-left">
                        <div className="flex items-start">
                            <span className="material-symbols-outlined" style={{  fontSize: '34px',  position: 'relative'}}>
                                engineering
                            </span>
                            <div className="ml-6">
                                <h3 className="text-lg font-bold text-gray-900">Ethical Practices</h3>
                                <p className="mt-3 text-base font-normal text-gray-900">Hiring and firing ethically to maintain the integrity and quality of our work.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <span className="material-symbols-outlined" style={{  fontSize: '34px',  position: 'relative'}}> 
                                attach_money
                            </span>
                            <div className="ml-6">
                                <h3 className="text-lg font-bold text-gray-900">Cost Efficiency</h3>
                                <p className="mt-3 text-base font-normal text-gray-900">Leveraging cost-effective resources without compromising on quality.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <span className="material-symbols-outlined" style={{  fontSize: '34px',  position: 'relative'}}>
                                lightbulb_circle
                            </span>
                            <div className="ml-6">
                                <h3 className="text-lg font-bold text-gray-900">Innovation</h3>
                                <p className="mt-3 text-base font-normal text-gray-900">Continuously improving our processes with cutting-edge technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCommitmentSection;
