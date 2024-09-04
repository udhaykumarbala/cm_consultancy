import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JoinUsSection = () => {
   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [message, setMessage] = useState("");

   const buttonRef = useRef(null);

   const isValidateEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   };

   const submitForm = (e) => {
      e.preventDefault();

      if (!fullName || !email || !phone || !message) {
         toast.error("Please fill in all fields");
         return;
      }

      if (!isValidateEmail(email)) {
         toast.error("Please enter a valid email address");
         return;
      }

      const googleFormUrl =
         "https://docs.google.com/forms/d/e/1FAIpQLScHW4M5BIUDhKhG_Clgy5CjcvK33IJSCE8tivTFPgDWSFSslQ/formResponse";

      const postData = new URLSearchParams();
      postData.append("entry.184311619", fullName);
      postData.append("entry.698779333", email);
      postData.append("entry.1573086575", phone);
      postData.append("entry.423126541", message);

      buttonRef.current.disabled = true;

      fetch(googleFormUrl, {
         mode: "no-cors",
         method: "POST",
         body: postData,
      })
         .then((response) => {
            console.log("Form submitted", response);
            setFullName("");
            setEmail("");
            setPhone("");
            setMessage("");
            buttonRef.current.disabled = false;
            toast.success("Your message has been sent successfully!");
         })
         .catch((error) => {
            console.error("Form submission error", error);
            buttonRef.current.disabled = false;
            toast.error(
               "There was an error submitting your message. Please try again."
            );
         });
   };

   return (
      <section
         className='py-12 bg-gray-50 sm:pt-16 lg:pt-20 xl:pt-24'
         style={{ paddingBottom: "0" }}
         id='ContactUs'
      >
         <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-32'>
               <div className='flex flex-col self-stretch justify-between gap-y-6'>
                  <div className='flex-1'>
                     <h2 className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl'>
                        Love to hear from you, Get in touch 👋
                     </h2>
                     <p className='mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8'>
                        At CM Consultancy and Data Services, we believe in the
                        power of communication. We're always here to listen to
                        your needs and provide the best solutions to help your
                        business thrive.
                     </p>
                  </div>

                  <div className='relative mt-10 overflow-hidden bg-blue-600 lg:mt-0 rounded-3xl -rotate-3'>
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
                        <blockquote className='mt-8'>
                           <p className='text-xl font-normal text-white'>
                              "Working with CM Data Services has been a
                              fantastic experience. They’ve taken the hassle out
                              of data entry and data extraction, allowing us to
                              focus on what we do best. The team feels like an
                              extension of our own, always ready to adapt to our
                              needs and deliver results that we can count on. I
                              couldn’t recommend them more highly!"
                           </p>
                        </blockquote>
                        <div className='flex items-center mt-6'>
                           <img
                              className='object-cover rounded-full w-11 h-11 shrink-0'
                              src='https://t3.ftcdn.net/jpg/06/99/82/40/360_F_699824038_otxAffbfoxHIQ1pWY2mkFVFs6gcKf7ii.jpg'
                              alt='User'
                           />
                           <div className='ml-4'>
                              <p className='text-base font-semibold text-white'>
                                 {" "}
                                 Ryan O'Donnell,
                              </p>
                              <p className='text-sm font-normal text-gray-300'>
                                 CEO, yyy
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='bg-white shadow-xl rounded-2xl'>
                  <div className='p-6 sm:p-10'>
                     <h3 className='text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl'>
                        Send us a message
                     </h3>
                     <form onSubmit={submitForm} className='mt-8 space-y-6'>
                        <div>
                           <label htmlFor='fullName' className='sr-only'>
                              Your name
                           </label>
                           <div>
                              <input
                                 type='text'
                                 name='fullName'
                                 id='fullName'
                                 value={fullName}
                                 onChange={(e) => setFullName(e.target.value)}
                                 placeholder='Your name'
                                 className='block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0'
                                 required
                              />
                           </div>
                        </div>

                        <div>
                           <label htmlFor='email' className='sr-only'>
                              Email address
                           </label>
                           <div>
                              <input
                                 type='email'
                                 name='email'
                                 id='email'
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 placeholder='Email address'
                                 className='block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0'
                                 required
                              />
                           </div>
                        </div>

                        <div>
                           <label htmlFor='phone' className='sr-only'>
                              Phone
                           </label>
                           <div>
                              <input
                                 type='tel'
                                 name='phone'
                                 id='phone'
                                 value={phone}
                                 onChange={(e) => setPhone(e.target.value)}
                                 placeholder='Phone Number'
                                 className='block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0'
                                 required
                              />
                           </div>
                        </div>

                        <div>
                           <label htmlFor='message' className='sr-only'>
                              Write your message
                           </label>
                           <div>
                              <textarea
                                 name='message'
                                 id='message'
                                 value={message}
                                 onChange={(e) => setMessage(e.target.value)}
                                 placeholder='Write your message'
                                 rows='4'
                                 className='block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0'
                                 required
                              ></textarea>
                           </div>
                        </div>

                        <button
                           type='submit'
                           className='inline-flex items-center justify-center w-full px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700'
                           ref={buttonRef}
                        >
                           Send message
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <ToastContainer />
      </section>
   );
};

export default JoinUsSection;
