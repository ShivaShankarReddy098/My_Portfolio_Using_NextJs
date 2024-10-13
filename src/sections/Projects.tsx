"use client";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import eCommerceApp from "@/assets/images/E-Commerce-app.png";
import blogApp from "@/assets/images/Blog_App_Using_NextJs.png";
import foodApp from "@/assets/images/FoodApp.png";
import pendingImg from "@/assets/images/Pending_Project.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//list as many as you'd like

const portfolioProjects = [
  {
    company: "Completed",
    year: "2023",
    title: "E-Learning Platform",
    results: [
      { title: "ReactJS & React Query" },
      { title: "Tailwind CSS" },
      { title: "NodeJS & ExpressJS" },
      { title: "MongoDB" },
    ],
    link: "/",
    image: eCommerceApp,
  },
  {
    company: "Completed",
    year: "2024",
    title: " Foodie web-App",
    results: [
      { title: "ReactJS" },
      { title: "NextJS" },
      { title: "Tailwind CSS" },
      { title: "Better SqlLite" },
    ],
    link: "https://food-app-using-next-js.vercel.app/",
    image: foodApp,
  },
  {
    company: "Completed",
    year: "2024",
    title: "Blog App",
    results: [
      { title: "ReactJS & NextJS" },
      { title: "Tailwind CSS" },
      { title: "NodeJS & ExpressJS" },
      { title: "MongoDB" },
    ],
    link: "https://blog-app-using-next-js-nine.vercel.app/",
    image: blogApp,
  },
  {
    company: "Pending",
    year: "2024",
    title: "AI Interview Mocker",
    results: [
      { title: "Pending1..." },
      { title: "Pending2..." },
      { title: "Pending3..." },
      { title: "Pending4..." },
    ],
    link: "",
    image: pendingImg,
  },
  {
    company: "Pending",
    year: "2024",
    title: "E-Commerce Website",
    results: [
      { title: "Pending5..." },
      { title: "Pending6..." },
      { title: "Pending7..." },
      { title: "Pending8..." },
    ],
    link: "",
    image: pendingImg,
  },
  {
    company: "Pendind",
    year: "2024",
    title: "College Management Dashboard",
    results: [
      { title: "Pending9..." },
      { title: "Pending10..." },
      { title: "Pending11..." },
      { title: "Pending12..." },
    ],
    link: "",
    image: pendingImg,
  },
];
gsap.registerPlugin(ScrollTrigger); //MotionPathPlugin  ,MorphSVGPlugin
export const ProjectsSection = () => {
  useGSAP(() => {
    gsap.from("#para", {
      scrollTrigger: {
        trigger: "#para",
        // scrub: true,
        toggleActions: "restart pause none pause",
      },
      duration: 1,
      y: 100,
    });
    gsap.from("#h2", {
      scrollTrigger: {
        trigger: "#h2",
        // scrub: true,
        // start: "top center",
        toggleActions: "restart pause none pause",
      },
      duration: 1,
      y: 100,
    });
    gsap.from("#para1", {
      scrollTrigger: {
        trigger: "#para1",
        // scrub: true,
        // start: "top",
        // markers:true,
        toggleActions: "restart pause none pause",
      },
      duration: 1,
      y: 100,
    });
  });
  return (
    <section id="projects" className="pb-16 lg:py-24 py-12 ">
      <div className="container">
        <div className="flex justify-center">
          <p
            id="para"
            className="text-xl md:text-lg max-w-md mx-auto uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text"
          >
            Real-World Results
          </p>
        </div>
        <h2
          id="h2"
          className="font-serif text-3xl md:text-5xl text-center mt-6"
        >
          Featured Projects
        </h2>
        <p
          id="para1"
          className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto mb-8"
        >
          See how I trasformed concepts into engaging digital experiences.
        </p>
        <div className="mt-1 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="sticky top-14 transition-all px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 md:mt-5 after:pointer-events-none bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10   after:content[''] after:absolute after:inset-0 after:outline-white/20 after:outline-2 after:rounded-3xl after:outline after:-outline-offset-2"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase gap-2 tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white  text-gray-950 md:w-auto md:px-6 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
