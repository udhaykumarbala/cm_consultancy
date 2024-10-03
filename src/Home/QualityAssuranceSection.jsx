"use client";

import AnimatedNumbers from "react-animated-numbers";

const QualityAssuranceSection = () => {
   return (
      <section
         className='py-12 bg-gray-50 sm:py-16 lg:py-20'
         id='QualityAssurance'
      >
         <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='text-center'>
               <h2 className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl'>
                  Quality Assurance
               </h2>
               <p className='mt-4 text-base leading-7 text-gray-600'>
                  Our Quality Control (QC) tool ensures the highest accuracy in
                  data management and processing. With a robust system and
                  state-of-the-art technology, we achieve accuracy rates
                  consistently. Below are some of our accuracy statistics over
                  the past six months
               </p>
            </div>
            <div className='grid grid-cols-1 gap-5 text-center md:grid-cols-3 gap-y-5 md:gap-x-8 mt-12'>
               <div className='overflow-hidden bg-white border border-gray-200 rounded-xl'>
                  <div className='px-4 py-5 sm:p-6'>
                     <div className='flex justify-center'>
                        <AnimatedNumbers
                           includeComma={true}
                           className='justify-center'
                           transitions={() => ({
                              type: "spring",
                              duration: 1.5,
                           })}
                           animateToNumber={99.8}
                           fontStyle={{
                              fontSize: "1.5rem",
                              lineHeight: "2rem",
                              fontWeight: "bold",
                              color: "black",
                           }}
                        />{" "}
                        <span className='self-center text-2xl font-bold text-gray-900'>
                           {" "}
                           &nbsp;%
                        </span>
                     </div>
                     <p className='mt-2 text-sm font-medium text-gray-500'>
                        Accuracy Rate
                     </p>
                  </div>
               </div>

               <div className='overflow-hidden bg-white border border-gray-200 rounded-xl'>
                  <div className='px-4 py-5 sm:p-6'>
                     <AnimatedNumbers
                        includeComma={true}
                        className='justify-center'
                        transitions={() => ({
                           type: "spring",
                           duration: 1.5,
                        })}
                        animateToNumber={200000}
                        fontStyle={{
                           fontSize: "1.5rem",
                           lineHeight: "2rem",
                           fontWeight: "bold",
                           color: "black",
                        }}
                     />
                     <p className='mt-2 text-sm font-medium text-gray-500'>
                        PDFs Processed This Year
                     </p>
                  </div>
               </div>

               <div className='overflow-hidden bg-white border border-gray-200 rounded-xl'>
                  <div className='px-4 py-5 sm:p-6'>
                     <p className='text-2xl font-bold text-gray-900'>
                        Custom QC Tool
                     </p>
                     <p className='mt-2 text-sm font-medium text-gray-500'>
                        For Each Client
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default QualityAssuranceSection;
