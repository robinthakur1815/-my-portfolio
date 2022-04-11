import React, { useState, useEffect } from "react";
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
  const [projectData, setProjectData] = useState(null);

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

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description,
          projectType,
          link,
          tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;
  return (

    <main class="font-sans bg-white">
      <div>
        <header class="bg-white shadow border-t-4 border-indigo-600">


          <div class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
            <div class="grid justify-center items-center order-1 col-span-1">
              <img class=" lg:h-80 md:h-64 h-40 rounded-full "
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
                <img src={urlFor(author.authorImage).url()} class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600" />
              </div>
              <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                  <h3 class="text-2xl font-semibold text-purple-900">UI Design</h3>
                  <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                  <a href="#" class="block font-medium text-purple-600">Know more</a>
                </div>
                <img src={urlFor(author.authorImage).url()} class="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600" />
              </div>
              <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                  <h3 class="text-2xl font-semibold text-purple-900">UX Design</h3>
                  <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                  <a href="#" class="block font-medium text-purple-600">Know more</a>
                </div>
                <img src={urlFor(author.authorImage).url()} class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600" />
              </div>
            </div>
          </div>
        </div>

        <section class="bg-white py-20">

          <div class="max-w-5xl px-6 mx-auto text-center">
            <h2 class="text-2xl font-semibold text-gray-800">Latest projects</h2>

            <div class="flex flex-col items-center justify-center mt-6">
              {projectData &&
                projectData.map((project, index) => (
                  <a class="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                    <div class="flex items-center justify-between px-4 py-2">
                      <h3 class="text-lg font-medium text-gray-700">{project.title}</h3>
                      <span>
                        {project.projectType}
                      </span>
                      <span class="block text-gray-600 font-light text-sm"> {new Date(project.date).toLocaleDateString()}</span>
                    </div>
                  </a>

                ))}
            </div>

            <div class="flex items-center justify-center mt-12">
              <a class="flex items-center text-gray-600 hover:underline hover:text-gray-500" href="/project">
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
            <h2 class="text-2xl font-semibold text-white">Latest BLog Posts</h2>

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
              <a class="flex items-center text-gray-600 hover:underline hover:text-gray-500" href="/post">
                <span>View More</span>

                <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>

      
    </main>


  )
};