import React, { useState } from "react";
import { sendEmailConfirmation } from "./Sendemailconfirm";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  // const [phone, setPhone] = useState("");
  const form = React.useRef();

  const sendEmail = async (e) => {
    try {
      const isSendComplete = await sendEmailConfirmation(email, name, subject);
      console.log(email, name, subject);
      if (isSendComplete) return console.log(isSendComplete);
      throw new Error("send error");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    // <section
    //   class="relative overflow-hidden bg-stone-400 py-12 md:py-12"
    //   id="contactUs"
    // >
    //   <div class="container relative mx-auto px-4">
    //     <div class="absolute left-0 top-0 h-full w-full px-4">
    //       <div class="bg-radial-dark-green rounded-3xl px-8 pt-96">
    //         <img
    //           class="mx-auto block"
    //           src="aurora-assets/contact/lines-background-green.png"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //     <div class="relative md:flex px-10 py-16">
    //       <div class=" font-serif text-center m-auto max-w-auto">
    //         <h1 class="font-heading mb-10 text-4xl md:text-6xl font-bold tracking-tight text-gray-700 sm:text-5xl">
    //           CONTACT US
    //         </h1>
    //         {/* <p class="text-lg mb-2 text-gray-600 md:text-2xl">
    //           Fill out the form and we will be in touch with you shortly.
    //         </p> */}
    //         <p class="text-lg mb-2 text-gray-600 md:text-2xl">
    //           Reach out to us by clicking on our phone number or email.
    //         </p>
    //         <p class="text-xl mb-4  md:text-2xl text-blue-500">
    //           Tel:<a href="tel:647-233-2991">647-233-2991</a>
    //         </p>
    //         <a href="mailto:royalassociates.legal@gmail.com">
    //           <span className=" text-medium md:text-2xl italic mb-4 text-gray-600 hover:underline">
    //             royalassociates.legal@gmail.com
    //           </span>
    //         </a>
    //       </div>
    //     {/* <div class="mx-auto md:flex-1 md:max-w-[700px] mt-4 rounded-xl border border-gray-700 bg-stone-500 p-8">
    //         {/* <form action="">
    //           <div class="mb-4">
    //             <label class="mb-1 block text-sm font-medium text-white" for="">
    //               Name
    //             </label>
    //             <input
    //               class="focus:border-yellowGreen-800 focus:ring-yellowGreen-800 h-11 w-full rounded-md border border-gray-700 bg-gray-100 px-4 py-2 text-gray-500 placeholder-gray-500 outline-none ring ring-transparent"
    //               type="text"
    //               onChange={(e) => setName(e.target.value)}
    //               placeholder="Your name"
    //             />
    //           </div>
    //           <div class="mb-4">
    //             <label class="mb-1 block text-sm font-medium text-white" for="">
    //               Email
    //             </label>
    //             <input
    //               class="focus:border-yellowGreen-800 focus:ring-yellowGreen-800 h-11 w-full rounded-md border border-gray-700 bg-gray-100 px-4 py-2 text-gray-500 placeholder-gray-500 outline-none ring ring-transparent"
    //               type="email"
    //               placeholder="john@email.com"
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>
    //           {/* <div class="mb-4">
    //             <label class="mb-1 block text-sm font-medium text-white" for="">
    //               Phone
    //             </label>
    //             <input
    //               class="focus:border-yellowGreen-800 focus:ring-yellowGreen-800 h-11 w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-gray-500 placeholder-gray-500 outline-none ring ring-transparent"
    //               type="phone"
    //               placeholder="+1 123 456 7890"
    //               onChange={(e) => setPhone(e.target.value)}
    //             />
    //           </div> */}
    //           {/* <div class="mb-4">
    //             <label class="mb-1 block text-sm font-medium text-white" for="">
    //               Subject
    //             </label>
    //             <input
    //               class="focus:border-yellowGreen-800 focus:ring-yellowGreen-800 h-11 w-full rounded-md border border-gray-700 bg-gray-100 px-4 py-2 text-gray-600 placeholder-gray-500 outline-none ring ring-transparent"
    //               type="text"
    //               onChange={(e) => setSubject(e.target.value)}
    //               placeholder="Subject"
    //             />
    //           </div>
    //           <div class="mb-8">
    //             <label class="mb-1 block text-sm font-medium text-white" for="">
    //               Message
    //             </label>
    //             <textarea
    //               class="focus:border-yellowGreen-800 focus:ring-yellowGreen-800 block h-32 w-full resize-none rounded-md border border-gray-00 bg-gray-100 px-4 py-2 text-gray-500 placeholder-gray-500 outline-none ring ring-transparent"
    //               placeholder="Enter your message"
    //             ></textarea>
    //           </div>
    //           <button
    //             class="xs:flex-shrink-0 xs:inline-flex bg-stone-700 group relative flex h-14 w-full items-center justify-center rounded-lg p-px px-4 font-bold text-white transition-all duration-300 focus:outline-none"
    //             type="submit"
    //             onClick={(e) => {
    //               sendEmail();
    //             }}
    //           >
    //             <div class="ring-yellowGreen-900 absolute left-0 top-0 h-full w-full animate-pulse rounded-lg ring transition duration-300 group-hover:ring-0"></div>
    //             <span>Submit</span>
    //           </button> */}
    //         {/* </form> */} 
    //     {/* </div>  */} 
    //     </div>
    //     <iframe
    //       className="w-full h-96 rounded-3xl pb-4"
    //       src="https://maps.google.com/maps?q=Royal Associates Head Office, Main Street, East York,
    //                   Toronto, ON M4C 4X3&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
    //     ></iframe>
    //     <p className="text-sm md:text-base pb-1 font-serif italic mb-4 text-gray-600 hover:underline">
    //       ​​​​Copyright © 2024 Santosh Bohara.{" "}
    //     </p>
    //     <p className="text-sm md:text-base font-serif italic mb-4 text-gray-600 hover:underline">
    //       The information provided on this website is for information purposes
    //       only and does not <br></br> constitute legal advice.
    //     </p>
    //   </div>


    // </section>
    
<section class="relative py-20 md:py-32 bg-gray-800 overflow-hidden">
  {/* <img class="absolute top-0 left-0 md:mt-24" src="saturn-assets/images/contact/dots-side-1.svg" alt=""> */}
  {/* <img class="absolute bottom-0 right-0 mb-8 lg:mb-24" src="saturn-assets/images/contact/dots-side-2.svg" alt=""> */}
  <div class="relative container bg-gray-500 p-4 mx-auto rounded-3xl">
    <div class="max-w-2xl mx-auto mb-18 text-center">
      <span class="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">AT YOUR SERVICE</span>
      <h1 class="font-heading text-5xl xs:text-6xl font-bold text-white mb-4">
        <span>Please! Feel Free to connect </span>
        <span class="font-serif italic">with us</span>
        <span>?</span>
      </h1>
      <p class="text-xl text-gray-300 pb-2 font-semibold">Relax, we are ready to support 24/7 for you</p>
    </div>
    <div class="flex flex-wrap justify-center -mx-4">
      <div class="w-full md:w-1/2 lg:w-auto px-4 xl:px-10 mb-10 md:mb-0">
        <div class="max-w-sm mx-auto h-full py-8 px-6 bg-orange-500 border border-gray-200 rounded-3xl">
          <div class="max-w-2xs mx-auto text-center">
            {/* <img class="block mx-auto mb-3" src="saturn-assets/images/contact/icon-orange-email.svg" alt=""> */}
            <h5 class="text-2xl font-bold text-red-900 mb-3">Contact Us</h5>
            <p class="text-white mb-3">Contact us to seek help from us, we will help you as soon as possible</p>
            <span class="block text-sm text-orange-900 mb-8">santosharawn7@gmail.com</span>
            <a class="relative group inline-block py-4 px-6 text-white font-semibold bg-orange-900 rounded-full overflow-hidden" href="#">
              <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <div class="relative flex items-center justify-center">
                <span class="mr-4">Contact</span>
                <span>
                  <svg width="8" height="12" viewbox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z" fill="#FAFBFC"></path>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-auto px-4 xl:px-10">
        <div class="max-w-sm mx-auto h-full py-8 px-6 bg-orange-500 border border-gray-200 rounded-3xl">
          <div class="max-w-2xs mx-auto text-center">
            {/* <img class="block mx-auto mb-3" src="saturn-assets/images/contact/icon-orange-headphones.svg" alt=""> */}
            <h5 class="text-2xl font-bold text-red-900 mb-3">Call us on phone</h5>
            <p class="text-white mb-3">Contact us to seek help from us, we will help you as soon as possible</p>
            <span class="block text-sm text-orange-900 mb-8">+1 (647) 994-9601</span>
            <a class="relative group inline-block py-4 px-6 text-white font-semibold bg-orange-900 rounded-full overflow-hidden" href="#">
              <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <div class="relative flex items-center justify-center">
                <span class="mr-4">Call Now</span>
                <span>
                  <svg width="21" height="20" viewbox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.94 11C17.72 11 17.49 10.93 17.27 10.88C16.8245 10.7818 16.3867 10.6515 15.96 10.49C15.4961 10.3212 14.9861 10.33 14.5283 10.5146C14.0705 10.6992 13.6971 11.0466 13.48 11.49L13.26 11.94C12.286 11.3982 11.391 10.7252 10.6 9.93999C9.81476 9.14901 9.14182 8.25399 8.59999 7.27999L9.01999 6.99999C9.46336 6.78291 9.81078 6.40952 9.99539 5.95168C10.18 5.49384 10.1888 4.9839 10.02 4.51999C9.86122 4.09241 9.73093 3.65479 9.62999 3.20999C9.57999 2.98999 9.53999 2.75999 9.50999 2.52999C9.38856 1.82561 9.01962 1.18773 8.46962 0.731229C7.91961 0.274727 7.22469 0.029599 6.50999 0.0399902H3.50999C3.07903 0.0359436 2.65224 0.124804 2.2587 0.300521C1.86516 0.476238 1.5141 0.734686 1.22942 1.05827C0.944745 1.38186 0.733129 1.76298 0.608982 2.1757C0.484835 2.58842 0.451073 3.02305 0.509994 3.44999C1.04273 7.63937 2.95602 11.5319 5.94765 14.5126C8.93927 17.4934 12.8387 19.3925 17.03 19.91H17.41C18.1474 19.9111 18.8594 19.6405 19.41 19.15C19.7264 18.867 19.9791 18.5202 20.1515 18.1323C20.3238 17.7444 20.412 17.3244 20.41 16.9V13.9C20.3977 13.2054 20.1448 12.5365 19.6943 12.0077C19.2439 11.4788 18.6238 11.1226 17.94 11V11ZM18.44 17C18.4398 17.142 18.4094 17.2823 18.3508 17.4116C18.2922 17.5409 18.2067 17.6563 18.1 17.75C17.9904 17.8498 17.86 17.9241 17.7181 17.9673C17.5763 18.0106 17.4267 18.0217 17.28 18C13.5349 17.5198 10.0562 15.8065 7.39271 13.1303C4.72919 10.4541 3.0324 6.96733 2.56999 3.21999C2.55408 3.07351 2.56803 2.92532 2.611 2.78438C2.65397 2.64344 2.72506 2.51268 2.81999 2.39999C2.9137 2.29332 3.02906 2.20783 3.15837 2.14921C3.28769 2.09058 3.42801 2.06017 3.56999 2.05999H6.56999C6.80254 2.05482 7.02962 2.13087 7.21214 2.27506C7.39466 2.41925 7.5212 2.62256 7.56999 2.84999C7.60999 3.12332 7.65999 3.39332 7.71999 3.65999C7.83551 4.18713 7.98925 4.70517 8.17999 5.20999L6.77999 5.85999C6.66029 5.91491 6.55262 5.99294 6.46315 6.08959C6.37369 6.18624 6.30419 6.2996 6.25867 6.42318C6.21314 6.54677 6.19247 6.67812 6.19784 6.80971C6.20322 6.9413 6.23453 7.07054 6.28999 7.18999C7.72919 10.2727 10.2072 12.7508 13.29 14.19C13.5335 14.29 13.8065 14.29 14.05 14.19C14.1747 14.1454 14.2893 14.0764 14.3872 13.9872C14.485 13.8979 14.5642 13.7901 14.62 13.67L15.24 12.27C15.757 12.4549 16.2846 12.6085 16.82 12.73C17.0867 12.79 17.3567 12.84 17.63 12.88C17.8574 12.9288 18.0607 13.0553 18.2049 13.2378C18.3491 13.4204 18.4252 13.6474 18.42 13.88L18.44 17ZM17.5 7.99999C17.7652 7.99999 18.0196 7.89463 18.2071 7.7071C18.3946 7.51956 18.5 7.26521 18.5 6.99999V2.99999C18.5 2.73477 18.3946 2.48042 18.2071 2.29288C18.0196 2.10535 17.7652 1.99999 17.5 1.99999C17.2348 1.99999 16.9804 2.10535 16.7929 2.29288C16.6054 2.48042 16.5 2.73477 16.5 2.99999V6.99999C16.5 7.26521 16.6054 7.51956 16.7929 7.7071C16.9804 7.89463 17.2348 7.99999 17.5 7.99999ZM13.5 7.99999C13.7652 7.99999 14.0196 7.89463 14.2071 7.7071C14.3946 7.51956 14.5 7.26521 14.5 6.99999V2.99999C14.5 2.73477 14.3946 2.48042 14.2071 2.29288C14.0196 2.10535 13.7652 1.99999 13.5 1.99999C13.2348 1.99999 12.9804 2.10535 12.7929 2.29288C12.6054 2.48042 12.5 2.73477 12.5 2.99999V6.99999C12.5 7.26521 12.6054 7.51956 12.7929 7.7071C12.9804 7.89463 13.2348 7.99999 13.5 7.99999Z" fill="currentColor"></path>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};
export default Contact;
