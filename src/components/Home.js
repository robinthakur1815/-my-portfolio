import React, { useState,  useEffect}  from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import logo from '../assets/profile.png';
import { Link } from 'react-router-dom';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {

  const [author, setAuthor] = useState(null);
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "description": description[0].children[0].string,
          "long_description": long_description[0].children[0].string,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;
  return (

    <main class="font-sans bg-white">
      <div>
        <header class="bg-white shadow border-t-4 border-indigo-600">


          <div class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
            <div class="grid justify-center items-center order-1 col-span-1">
              <img class="lg:h-80 md:h-64 h-40 rounded-full"
                src={urlFor(author.authorImage).url()}
                alt="robin" />
            </div>
            <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
              <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6"> Hey there. I'm{" "}
                <span class="bg-indigo-600 text-white rounded px-1"> {author.name}</span> . Nice to meet you.</h1>
              <p class="text-xl text-gray-800 text-center md:text-left">{author.bio}.</p>
              <button class="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">Download Resume</button>
            </div>
          </div>
        </header>
        {/* <section class="bg-white mt-20">
            <div class="max-w-2xl px-6 text-center mx-auto">
                <h2 class="text-3xl font-semibold text-gray-800">
                Hey there. I'm{" "}
                <span class="bg-indigo-600 text-white rounded px-1"> {author.name}</span> . Nice to meet you.</h2>
                <p class="text-gray-600 mt-4"></p>
            </div>
            <div class="flex flex-wrap justify-center">
           <div class="w-2/12 sm:w-2/12 px-12">
           <img
           src={urlFor(author.authorImage).url()}
          alt="robin"
         class="shadow rounded-full max-w-full h-auto align-middle border-none"
          />
  </div>
</div>
        </section> */}

        <section class="bg-gray-800 pattern py-20">
          <div class="max-w-5xl px-6 mx-auto text-center">
            <h2 class="text-2xl font-semibold text-white">About Me</h2>
            <p class="text-gray-400 mt-4">{author.bio}</p>
            <p class="text-gray-400 mt-4">{author.description}</p>
            <p class="text-gray-400 mt-4">{author.lomg_description}</p>
          </div>
        </section>
        <div class="py-16 bg-purple-200">  
    <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">Graphic Design</h3>
                    <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                    <a href="#" class="block font-medium text-purple-600">Know more</a>
                </div>
                <img  src={urlFor(author.authorImage).url()} class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">UI Design</h3>
                    <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                    <a href="#" class="block font-medium text-purple-600">Know more</a>
                </div>
                <img  src={urlFor(author.authorImage).url()} class="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">UX Design</h3>
                    <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                    <a href="#" class="block font-medium text-purple-600">Know more</a>
                </div>
                <img  src={urlFor(author.authorImage).url()} class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
        </div>
    </div>
</div>

        <section class="bg-white py-20">
          <div class="max-w-5xl px-6 mx-auto text-center">
            <h2 class="text-2xl font-semibold text-gray-800">Latest BLog Posts</h2>

            <div class="flex flex-col items-center justify-center mt-6">
              <a class="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                <div class="flex items-center justify-between px-4 py-2">
                  <h3 class="text-lg font-medium text-gray-700">Easy, Free Laravel CI Using GitHub Actions</h3>
                  <span class="block text-gray-600 font-light text-sm">20 Jan 2020</span>
                </div>
              </a>

              <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                <div class="flex items-center justify-between px-4 py-2">
                  <h3 class="text-lg font-medium text-gray-700">Pest: a delightful PHP Testing Framework</h3>
                  <span class="block text-gray-600 font-light text-sm">29 Oct 2019</span>
                </div>
              </a>

              <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                <div class="flex items-center justify-between px-4 py-2">
                  <h3 class="text-lg font-medium text-gray-700">Using inline SVGs in Vue components</h3>
                  <span class="block text-gray-600 font-light text-sm">15 Oct 2019</span>
                </div>
              </a>

              <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                <div class="flex items-center justify-between px-4 py-2">
                  <h3 class="text-lg font-medium text-gray-700">Acceptance Testing Laravel & VueJs Apps with Codeception</h3>
                  <span class="block text-gray-600 font-light text-sm">3 Oct 2019</span>
                </div>
              </a>
            </div>

            <div class="flex items-center justify-center mt-12">
              <a class="flex items-center text-gray-600 hover:underline hover:text-gray-500" href="#">
                <span>View More</span>

                <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section class="bg-gray-800 pattern py-20">
          <div class="max-w-5xl px-6 mx-auto text-center">
            <h2 class="text-2xl font-semibold text-white">Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postData &&
              postData.map((post, index) => (
                <article>
                  <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                    <span
                      className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                      <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>

            <div class="flex items-center justify-center mt-12">
              <a class="flex items-center text-white hover:underline hover:text-gray-200" href="#">
                <span>View More On Github</span>

                <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <footer class="bg-white">
          <div class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
              <div>
                <div class="text-gray-600">&copy; Agustin Rodríguez</div>
              </div>

              <div class="flex items-center -mx-2">
                <a class="flex items-center mx-2 text-gray-600 hover:text-indigo-600" href="#">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>

                <a class="flex items-center mx-2 text-gray-600 hover:text-indigo-600" href="#">
                  <svg class="h-5 w-5 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z' />
                  </svg>
                </a>

                <a class="flex items-center mx-2 text-gray-600 hover:text-indigo-600" href="#">
                  <svg class="h-5 w-5 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>


  )
};