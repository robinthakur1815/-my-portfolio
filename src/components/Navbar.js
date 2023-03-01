import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import logo from '../assets/logo.png';
import { Transition } from "@headlessui/react";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <div>
        <nav className="bg-white-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
        <div className="h-10 w-20 self-center mr-2">
        <NavLink
            to="/"
          >
            <img 
          href="/" src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="hidden sm:flex sm:items-center">
        <NavLink
            to="/"
            className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
          >
            Home
          </NavLink>
        <NavLink
            to="/post"
            className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
          >
            About Me!
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
          >
            Contact Me!
          </NavLink>
        </div>

        <div className="hidden sm:flex sm:items-center">
        <SocialIcon
            url="https://www.facebook.com/profile.php?id=100007315725489"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
           <SocialIcon
            url="https://github.com/robinthakur1815"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/robin-thakur-09a798190/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
           <SocialIcon
             url="https://twitter.com/robinth70657415"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      
    
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                    href="/"
                    className=" text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="/post"
                    className=" text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Blog Posts
                  </a>
  
                  <a
                    href="/project"
                    className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Projects
                  </a>
  
                  <a
                    href="/about"
                    className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                     About Me!
                  </a>
                  <a
                    href="/Contact"
                    className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                     Contact Me!
                  </a>
  
                  {/* <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Reports
                  </a> */}
                </div>
              </div>
            )}
          </Transition>
        </nav>
  
        {/* <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header> */}
      </div>
  );
}