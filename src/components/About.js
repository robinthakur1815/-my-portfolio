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
                height="1000"
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                Hey there. I'm{" "}
                <span class="bg-indigo-600 text-white rounded px-1">
                  {" "}
                  {author.name}
                </span>
                .
              </h2>
              <p class="mt-6 text-gray-600">{author.bio}!</p>
              <p class="text-gray-400 mt-4">{author.description}</p>
              <p class="mt-6 text-gray-600">{author.longdescription}</p>
            </div>
          </div>
        </div>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              My skills
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              {author.longdescription}
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                  <img
                    class="object-contain h-24 w-24"
                    src={urlFor(skill.icon)}
                    alt={skill.name}
                  />
                  <span class="mt-2 text-black-500 text-5xl font-bold">
                    {skill.name}
                  </span>
                </div>
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: `${skill.bgColor}`,
                    }}
                  >
                    {skill.percentage}%
                  </div>

                  {/* <div className="h-1 w-full bg-green-300">
                    <div
                      style={{ width: `${skill.percentage}%`}}
                      className={`h-full ${
                        skill.percentage < 70 ? "bg-red-600" : "bg-blue-600"
                      }`}
                    ></div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
          Experiance
        </h1>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <ol>
            {experiences.map((experience) => (
              <li class="border-l-2 border-green-600">
                <div class="md:flex flex-start">
                  <div class="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      class="text-white w-3 h-3"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                      ></path>
                    </svg>
                  </div>
                  <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                    <div class="flex justify-between mb-4">
                      <a
                        href="#!"
                        class="font-medium text-black-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                      >
                        {experience.company}
                      </a>
                      <a
                        href="#!"
                        class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                      >
                        {new Date(experience.date).toLocaleDateString()}
                      </a>
                    </div>
                    <p class="leading-relaxed">
                      {experience.name}, {experience.duration}
                    </p>
                    <p class="text-gray-700 mb-12">{experience.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
