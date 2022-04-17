import React, { useState,  useEffect}  from "react";
import sanityClient from "../client.js";
import { Link } from 'react-router-dom';
import email from '../assets/email.png';
import mobile from '../assets/mobile.png';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const { username, email, message } = formData;
  
    const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = () => {
      setLoading(true);
  
      const contact = {
        _type: 'contact',
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };
  
      // client.create(contact)
      //   .then(() => {
      //     setLoading(false);
      //     setIsFormSubmitted(true);
      //   })
      //   .catch((err) => console.log(err));
    };
    return (
        // <>
        //   <h2 className="head-text">Take a coffee & chat with me</h2>
    
        //   <div className="app__footer-cards">
        //     <div className="app__footer-card ">
        //       <img src={email} alt="email" />
        //       <a href="mailto:thakurrobin344@gmail.com" className="p-text">thakurrobin344@gmail.com</a>
        //     </div>
        //     <div className="app__footer-card">
        //       <img src={mobile} alt="phone" />
        //       <a href="tel:+91 8076911984 " className="p-text">+91 8076911984 </a>
        //       <br></br>
        //       <a href="tel:+91 7053631758 " className="p-text">+91 7053631758 </a>
        //     </div>
        //   </div>
        //   {!isFormSubmitted ? (
        //     <div className="app__footer-form app__flex">
        //       <div className="app__flex">
        //         <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
        //       </div>
        //       <div className="app__flex">
        //         <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        //       </div>
        //       <div>
        //         <textarea
        //           className="p-text"
        //           placeholder="Your Message"
        //           value={message}
        //           name="message"
        //           onChange={handleChangeInput}
        //         />
        //       </div>
        //       <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        //     </div>
        //   ) : (
        //     <div>
        //       <h3 className="head-text">
        //         Thank you for getting in touch!
        //       </h3>
        //     </div>
        //   )}
        // </>


<div class="h-screen md:flex">
	<div
		class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
		<div>
			<h1 class="text-white font-bold text-4xl font-sans">Contact ME</h1>
			{/* <p class="text-white mt-1">The most popular peer to peer lending at SEA</p> */}
			{/* <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button> */}
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form class="bg-white">
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Hello!</h1>
			{/* <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p> */}
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" />
      </div>
				<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
					<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="phone" />
      </div>
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							{/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg> */}
							<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="comment" />
      </div>
							<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">submit</button>
							{/* <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span> */}
		</form>
	</div>
</div>  
      );
};