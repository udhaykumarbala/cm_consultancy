import { useState, useRef } from "react";
import memojiImage from "../assets/memoji-smile.png";

import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/joinUsSection.css";
import TestimonialCard from "../components/TestimonialCard";

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
         "https://docs.google.com/forms/d/e/1FAIpQLSd4AdnBjek-O35A_ayg7ajE59osZPcoGjPyKgFdnH_y5EhvUA/formResponse";

      const postData = new URLSearchParams();

      postData.append("entry.1756337814", fullName);
      postData.append("entry.1170316929", email);
      postData.append("entry.1900101983", phone);
      postData.append("entry.1999821102", message);

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
                        At CM Data Services, we believe in the power of
                        communication. We're always here to listen to your needs
                        and provide the best solutions to help your business
                        thrive.
                     </p>
                  </div>

                  <TestimonialCard />
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
                              <PhoneInput
                                 type='tel'
                                 name='phone'
                                 id='phone'
                                 country={"us"}
                                 preferredCountries={[
                                    "us",
                                    "ca",
                                    "sg",
                                    "gb",
                                    "ch",
                                    "in",
                                    "ae",
                                 ]}
                                 inputProps={{ required: true }}
                                 value={phone}
                                 onChange={(value) => setPhone(value)}
                                 placeholder='Phone Number'
                                 className='w-full flex px-px py-2 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0'
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
