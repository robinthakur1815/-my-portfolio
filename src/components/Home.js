import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
// import logo from '../assets/profile.png';
// import laravel from '../assets/vue.png';
// import vue from '../assets/vue.png';
// import react from '../assets/react.png';
import { Link } from 'react-router-dom';
import useWindowPosition from '../hook/useWindowPosition';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {

  const [author, setAuthor] = useState(null);
  const [postData, setPost] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    sanityClient.fetch(query).then((data) => {
      setExperiences(data);
    });

    sanityClient.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url,
          description,
          longdescription
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type == "skills"]{
  //         name,
  //         bgColor,
  //         icon
  //     }`
  //     )
  //     .then((data) => setskills(data[0]))
  //     .catch(console.error);
  // }, []);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type == "workExperience"]{
  //         name,
  //         bgColor,
  //         icon
  //     }`
  //     )
  //     .then((data) => setWorkExperience(data[0]))
  //     .catch(console.error);
  // }, []);
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
            "projectImage": image.asset->url,
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
            tags2
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
            <div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
              <img
                src={urlFor(author.authorImage).url()}
                alt="robin"
                layout="fill"
                objectFit="cover"
                className=" rounded-full cursor-pointer hidden md:block"
              />
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
            <h2 class="text-2xl font-semibold text-white">More About Me</h2>
            {/* <p class="text-gray-400 mt-4">{author.bio}</p> */}
            <p class="text-gray-400 mt-4">{author.description}</p>
            <p class="text-gray-400 mt-4">{author.longdescription}</p>
            <a class="flex items-center text-gray-600 hover:underline hover:text-gray-500" href="/about">
                <span>View More</span>
                <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                  <a class="mt-3 text-pink-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                  <a class="mt-3 text-pink-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
                  <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                  <a class="mt-3 text-pink-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <button class="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button>
          </div>
        </section>

        <section class="bg-white py-20">

          <div class="max-w-5xl px-6 mx-auto text-center">
            <h2 class="text-2xl font-semibold text-gray-800">Latest projects</h2>

            <div class="flex flex-wrap -m-4 bg-white-900">
      {projectData &&
            projectData.map((project, index) => (
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" 
            src={urlFor(project.projectImage)} 
            alt="blog"/>
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              <strong className="font-bold text-gray-900">Type</strong>:{" "}
                    {project.projectType}
                    <span>
                    || <strong className="font-bold text-gray-900" >place</strong>:{" "}
                    {project.place}
                  </span>
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3"> 
              <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                  </h1>
              <p class="leading-relaxed mb-3">
              {project.description}
              </p>
              <div class="flex items-center flex-wrap ">
                <a class="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">
                <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block font-medium text-purple-600"
                  >
                    View More{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </a>
                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <strong className="font-bold text-gray-900">Date</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                </span>
               
              </div>
              {/* <span class="font-bold text-gray-900">
                {project. tags}
                {project. tags2}
                </span> */}
            </div>
          </div>
        </div>
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