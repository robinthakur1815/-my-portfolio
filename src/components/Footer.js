
import React from "react";
import logo from '../assets/logo.png';

export default function Footer() {
  return (
<footer class="bg-gray-50 text-gray-600 px-6 lg:px-8 py-12">
  <div class="max-w-screen-xl mx-auto mb-12 lg:mb-16  ">
    {/* <img class="h-8" src="/images/pathway-logo.svg" alt="UptimeMate logo"> */}
  </div>
  <div class="max-w-screen-xl mx-auto ">
    <div class="grid grid-cols-8 md:grid-cols-9  lg:grid-cols-8  divide-gray-200 divide-y-2 md:divide-x-2 md:divide-y-0 md:-mx-8">
      <div class="col-span-8 md:col-span-3 lg:col-span-2 md:px-8 py-4 md:py-0">
      <img 
         href="/" src={logo} alt="logo" />
        <nav class="mt-4">
        </nav>
      </div>
      <div class="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0">
        <h5 class="text-xl font-semibold text-gray-700">Home</h5>
        <nav class="mt-4">
          <ul class="grid lg:grid-cols-2">
            <li class="mb-2">
              <a href="#" class="font-normal text-base hover:text-gray-400">About</a>
            </li>
            <li class="mb-2">
              <a href="#" class="font-normal text-base hover:text-gray-400">Contact</a>
            </li>
            <li class="mb-2">
              <a href="#" class="font-normal text-base hover:text-gray-400">Blogs</a>
            </li>
            <li class="mb-2">
              <a href="#" class="font-normal text-base hover:text-gray-400">Project</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0">
        <h5 class="text-xl font-semibold text-gray-700">Follow us</h5>
        <nav class="mt-4">
          <ul class="grid lg:grid-cols-2">
            <li class="mb-2">
              <a href="https://github.com/robinthakur1815" class="flex space-x-2 font-normal text-base hover:text-gray-400">
                            <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                <path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z'/>
                            </svg>
                <span>
                  github
                </span>
              </a>
            </li>
            <li class="mb-2">
              <a href="https://www.linkedin.com/in/robin-thakur-09a798190/" class="flex space-x-2  font-normal text-base hover:text-gray-400">
                <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
                <span>
                  Instagram
                </span>
              </a>
            </li>
            <li class="mb-2">
              <a href="https://www.facebook.com/profile.php?id=100007315725489" class="flex space-x-2  font-normal text-base hover:text-gray-400">
                <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
                <span>
                  linkedin
                </span>
              </a>
            </li>
            <li class="mb-2">
              <a href="https://www.facebook.com/profile.php?id=100007315725489" class="flex space-x-2  font-normal text-base hover:text-gray-400">
                <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
                <span>
                  Facebook
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</footer>
)
};