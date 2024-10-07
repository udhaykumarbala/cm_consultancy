import logo from "../assets/CM-Light-Theme.svg";

const FooterSection = () => {
   return (
      <footer className='py-12 bg-white sm:pt-16' style={{ paddingTop: "0" }}>
         <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div
               className='flex flex-col lg:flex-row items-center lg:justify-between mt-14 lg:mt-24'
               style={{ marginTop: "50px" }}
            >
               <div className='flex'>
                  <img
                     src={logo}
                     alt='logo'
                     className=' w-60 h-12 p-0 object-cover'
                  />
               </div>
               {/* <div>
                        <h1 style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Material Symbols Outlined', textAlign: 'center' }}>CM <span style={{fontFamily: 'Material Symbols Outlined', fontSize: '15px', fontWeight: 'bold', color: 'rgb(10, 89, 162)', marginLeft: '-16px' }}>Consultancy</span></h1>
                    </div> */}

               {/* <ul className="flex items-center justify-center mt-8 space-x-6 sm:mt-12 sm:space-x-16 lg:mt-0">
                        <li>
                                        <a
                                href="#AboutUs"
                                title="About"
                                className="text-lg font-medium text-gray-900 transition-all duration-200 font-pj hover:text-gray-600"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#service"
                                title="Services"
                                className="text-lg font-medium text-gray-900 transition-all duration-200 font-pj hover:text-gray-600"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#QualityAssurance"
                                title="QualityAssurance"
                                className="text-lg font-medium text-gray-900 transition-all duration-200 font-pj hover:text-gray-600"
                            >
                                Assurance
                            </a>
                        </li>
                        <li>
                            <a
                                href="#OurCommitment"
                                title="Commitment"
                                className="text-lg font-medium text-gray-900 transition-all duration-200 font-pj hover:text-gray-600"
                            >
                                Commitment
                            </a>
                        </li>
                    </ul> */}

               <ul className='flex items-center justify-center mt-8 space-x-3 sm:mt-12 lg:justify-end lg:mt-0'>
                  <li>
                     <a
                        href='#'
                        target='_blank'
                        title='Twitter'
                        className='inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
                        rel='noopener'
                     >
                        <svg
                           className='w-6 h-6'
                           xmlns='http://www.w3.org/2000/svg'
                           viewBox='0 0 24 24'
                           fill='currentColor'
                        >
                           <path d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z'></path>
                        </svg>
                     </a>
                  </li>
                  <li>
                     <a
                        href='#'
                        target='_blank'
                        title='Facebook'
                        className='inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
                        rel='noopener'
                     >
                        <svg
                           className='w-6 h-6'
                           xmlns='http://www.w3.org/2000/svg'
                           viewBox='0 0 24 24'
                           fill='currentColor'
                        >
                           <path d='M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z'></path>
                        </svg>
                     </a>
                  </li>
                  <li>
                     <a
                        href='#'
                        target='_blank'
                        title='LinkedIn'
                        className='inline-flex items-center justify-center w-14 h-14 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
                        rel='noopener'
                     >
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           width='17'
                           height='17'
                           fill='currentColor'
                           className='bi bi-linkedin'
                           viewBox='0 0 16 16'
                        >
                           <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z' />
                        </svg>
                     </a>
                  </li>
                  <li>
                     <a
                        href='#'
                        target='_blank'
                        title='GitHub'
                        className='inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
                        rel='noopener'
                     >
                        <svg
                           className='w-6 h-6'
                           xmlns='http://www.w3.org/2000/svg'
                           viewBox='0 0 24 24'
                           fill='currentColor'
                        >
                           <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
                           ></path>
                        </svg>
                     </a>
                  </li>
               </ul>
            </div>

            <hr className='mt-10 border-gray-300' />

            <div
               className='mt-10 flex items-center w-full'
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               {/* <ul className="flex items-center justify-center space-x-6 md:order-2 md:justify-end">
                        <li>
                            <a
                                href="#"
                                title="Privacy Policy"
                                className="text-base font-normal text-gray-600 transition-all duration-200 font-pj hover:text-gray-900"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                title="Terms & Conditions"
                                className="text-base font-normal text-gray-600 transition-all duration-200 font-pj hover:text-gray-900"
                            >
                                Terms & Conditions
                            </a>
                        </li>
                    </ul> */}

               <p className='mt-8 text-base font-normal text-center text-gray-600 md:text-left md:mt-0 md:order-1 font-pj'>
                  © Copyright 2024, All Rights Reserved
               </p>
            </div>
         </div>
      </footer>
   );
};

export default FooterSection;
