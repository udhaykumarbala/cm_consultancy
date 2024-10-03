import { Fragment } from "react";
import memojiImage1 from "../assets/memoji-smile.png";
import memojiImage2 from "../assets/memoji-avatar-4.png";

const cardData = [
   {
      userImage: memojiImage1,
      userName: "Ryan O'Donnell,",
      userTitle: "CEO",
      userDescription:
         "Working with CM Data Services has been a fantastic experience. They’ve taken the hassle out of data entry and data extraction, allowing us to focus on what we do best. The team feels like an extension of our own, always ready to adapt to our needs and deliver results that we can count on. I couldn’t recommend them more highly!",
   },
   {
      userImage: memojiImage2,
      userName: "Julie Scarlet,",
      userTitle: "CEO",
      userDescription:
         "Working with CM Data Services has been a fantastic experience. They’ve taken the hassle out of data entry and data extraction, allowing us to focus on what we do best. The team feels like an extension of our own, always ready to adapt to our needs and deliver results that we can count on. I couldn’t recommend them more highly!",
   },
];
const TestimonialCard = () => {
   return (
      <div className='-m-4 mt-10 flex overflow-x-clip py-3 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] '>
         <div className='animate-move-left flex flex-none gap-8 pr-8 [animation-duration:20s] hover:[animation-play-state:paused]'>
            {[...new Array(2)].fill(0).map((_, i) => (
               <Fragment key={i}>
                  {cardData?.map((card, index) => (
                     <Fragment key={index}>
                        <div className='relative  overflow-hidden bg-blue-600 lg:mt-0 transition duration-300  rounded-3xl hover:-rotate-3 max-w-md'>
                           <div className='absolute bottom-0 right-0 -mb-72 -mr-24 border-[6px] opacity-20 border-white rounded-full w-96 h-96'></div>

                           <div className='relative p-6 sm:px-8 sm:py-9'>
                              <div className='flex items-center'>
                                 {[...Array(5)].map((_, i) => (
                                    <svg
                                       key={i}
                                       className='w-6 h-6 text-yellow-300'
                                       xmlns='http://www.w3.org/2000/svg'
                                       viewBox='0 0 20 20'
                                       fill='currentColor'
                                    >
                                       <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                    </svg>
                                 ))}
                              </div>
                              <blockquote className='mt-8 max-w-md'>
                                 <p className='text-base font-normal text-white'>
                                    {card.userDescription}
                                 </p>
                              </blockquote>
                              <div className='flex items-center mt-6'>
                                 <img
                                    className='object-cover rounded-full size-12 bg-gray-50/80'
                                    src={card.userImage}
                                    alt='User'
                                 />
                                 <div className='ml-4'>
                                    <p className='text-base font-semibold text-white'>
                                       {card.userName}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Fragment>
                  ))}
               </Fragment>
            ))}
         </div>
      </div>
   );
};

export default TestimonialCard;
