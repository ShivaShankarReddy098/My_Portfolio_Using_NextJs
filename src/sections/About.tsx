"use client";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import Messi from "@/assets/images/messi8.jpeg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/MAP.jpg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { Fragment } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const toolboxItems = [
  {
    title: "Javascript",
    icon: JavascriptIcon,
  },
  {
    title: "HTML5",
    icon: HTMLIcon,
  },
  {
    title: "CSS3",
    icon: CssIcon,
  },
  {
    title: "ReactJs",
    icon: ReactIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
  {
    title: "Chrome",
    icon: ChromeIcon,
  },
];

const hobbies = [
  {
    title: " VolleyBall",
    emoji: "🏐",
    left: "0%",
    top: "0%",
  },
  {
    title: " Football",
    emoji: "⚽",
    left: "55%",
    top: "60%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: " Anime",
    emoji: "🎞️",
    left: "-2%",
    top: "65%",
  },
  {
    title: " Music",
    emoji: "🎧",
    left: "67%",
    top: "10%",
  },
];
gsap.registerPlugin(ScrollTrigger);
export const AboutSection = () => {
  useGSAP(() => {
    gsap.from("#section1", {
      // stagger: 0.3,
      scrollTrigger: {
        trigger: "#section1",
        // scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      y: 100,
      duration: 2,
    });
  });
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <div id="section1">
          <SectionHeader
            eyebrow="A Glimps Into My World"
            title="About Me"
            description="Learn more about who I am,what I do,and what Inspires me"
          />
        </div>
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 md:gap-8 flex flex-col gap-8 lg:grid lg:grid-cols-4">
            <div className="lg:col-span-2 max-w-xs md:col-span-2 md:max-w-md md:p-8 px-8 pt-8 md:pt-12 md:px-10  md:mt-5 after:pointer-events-none bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10  relative after:content[''] after:absolute after:inset-0 after:outline-white/20 after:outline-2 after:rounded-3xl after:outline after:-outline-offset-2">
              <CardHeader
                title="My Idol"
                description="Lionel Messi has inspired me to never lose hope, reminding me that perseverance and dedication can lead to greatness."
              />

              <Image
                src={Messi}
                alt="messi"
                className="h-full w-full object-cover md:object-contain"
              />
            </div>
            <div className="h-[320px] lg:col-span-2 max-w-xs md:col-span-3 md:max-w-md md:p-8  md:pt-12 md:px-10  md:mt-5 after:pointer-events-none bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10  relative after:content[''] after:absolute after:inset-0 after:outline-white/20 after:outline-2 after:rounded-3xl after:outline after:-outline-offset-2">
              <CardHeader
                className="px-6 pt-6"
                title="My Toolbox"
                description="Explore the technology and tools I use to craft exceptional
                digital experiences."
              />
              <div className="flex flex-none animate-move-left [animation-duration:5s]">
                {[...new Array(2)].fill(0).map((_, idx) => (
                  <Fragment key={idx}>
                    <ToolboxItems
                      items={toolboxItems}
                      className="mt-2"
                      itemWrapperClassName="-translate-x-1/2"
                    />
                  </Fragment>
                ))}
              </div>
              <div className="flex flex-none animate-move-left [animation-duration:8s]">
                {[...new Array(2)].fill(0).map((_, idx) => (
                  <Fragment key={idx}>
                    <ToolboxItems
                      items={toolboxItems}
                      className="mt-2"
                      itemWrapperClassName="-translate-x-1/2"
                    />
                  </Fragment>
                ))}
              </div>
              {/* <ToolboxItems items={toolboxItems} className="mt-1" /> */}
            </div>
          </div>
          <div className="md:grid md:grid-cols-5 md:gap-8  flex flex-col gap-8 lg:grid lg:grid-cols-4">
            <div className="h-[320px] flex flex-col lg:col-span-2 md:col-span-3 p-0 max-w-xs md:max-w-md md:p-8  md:pt-12 md:px-10 lg:pt-16 lg:px-20 md:mt-5 after:pointer-events-none bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10  relative after:content[''] after:absolute after:inset-0 after:outline-white/20 after:outline-2 after:rounded-3xl after:outline after:-outline-offset-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies."
                className="px-6 py-6 md:px-1 md:py-1 lg:px-0 lg:absolute lg:top-2 lg:left-7"
              />
              <div className="relative flex-1 ">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="animate-pulse [animation-duration:2s] inline-flex gap-2 items-center px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute lg:mt-5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[320px] lg:p-0 md:p-0 lg:col-span-2 md:col-span-2 max-w-xs md:max-w-md md:px-10  md:mt-5 after:pointer-events-none bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10   after:content[''] after:absolute after:inset-0 after:outline-white/20 after:outline-2 after:rounded-3xl after:outline after:-outline-offset-2">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-center md:h-full md:w-full md:object-cover"
              />
              <div className="flex absolute top-52 left-28 lg:left-44 lg:top-64  z-1 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 size-14 justify-center items-center">
                <Image
                  src={smileMemoji}
                  alt="smile"
                  className="size-22 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
