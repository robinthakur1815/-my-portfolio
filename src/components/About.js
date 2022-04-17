import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import plumeria from "../plumeria.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);
  const [experiences, setworkExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "workExperience"]';
    const skillsQuery = '*[_type == "skills"]';

    sanityClient.fetch(query).then((data) => {
      setworkExperience(data);
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

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      {/* <img src={plumeria} alt="Plumeria Flower" className="absolute w-full" /> */}

      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src={urlFor(author.authorImage).url()}
                alt="image"
                loading="lazy"
                width="1000"
                height="1000" />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"> Hey there. I'm{" "}
                <span class="bg-indigo-600 text-white rounded px-1"> {author.name}</span>.</h2>
              <p class="mt-6 text-gray-600">{author.bio}!</p>
              <p class="text-gray-400 mt-4">{author.description}</p>
              <p class="mt-6 text-gray-600">{author.longdescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt="robin"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey there. I'm{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <p className="text-green-200 text-lg">{author.bio}</p>
          </div>
        </section>
      </div> */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">My skills</h1>
            {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">{author.description} </p> */}
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">{author.longdescription}</p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <img class="text-gray-600 text-sm" src={urlFor(skill.icon)} alt={skill.name} />
                  <span class="title-font font-medium">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Experiance</h1>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
         
          {/* <h2 class=" flex relative pt-10 pb-20 sm:items-center font-medium title-font text-gray-900 mb-1 text-xl">{new Date(experience.date).toLocaleDateString()}</h2> */}
          {experiences.map((experience) => (
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            {/* <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div> */}
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">{experience.profile}</h2>
                {/* <p class="leading-relaxed"> {experience.date}</p> */}
                
                 <p class="leading-relaxed">{experience.desc}</p>
                <p class="leading-relaxed"> {experience.company}</p>
                <p class="leading-relaxed"> {experience.duration}</p>
                {new Date(experience.To_date).toLocaleDateString()}
                <p class="leading-relaxed"> {experience.name}</p>
              </div>
            </div>
          </div>
            ))}
          {/* <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          </div> */}
        </div>
        
      </section>
      {/* <section class="text-gray-600 body-font">
        <h2 class="text-center mb-20">Latest projects</h2>
        <div class="container px-5 py-24 mx-auto">
          <h2 class="text-2xl font-semibold text-gray-800"></h2>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <h2 class="text-2xl font-semibold text-gray-800"></h2>
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            {experiences.map((experience) => (
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">{experience.profile}</h2>
                <p class="leading-relaxed text-base">{experience.desc}.</p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">{experience.company}
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>


  );
}