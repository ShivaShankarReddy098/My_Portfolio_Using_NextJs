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
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-avatar-1.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

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
    title: "Chrome",
    icon: ChromeIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
];

const hobbies = [
  {
    title: " VolleyBall",
    emoji: "🏐",
  },
  {
    title: " Football",
    emoji: "⚽",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: " Anime",
    emoji: "🎞️",
  },
  {
    title: " Music",
    emoji: "🎧",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="A Glimps Into My World"
          title="About Me"
          description="Learn more about who I am,what I do,and what Inspires me"
        />
        <div className="mt-20">
          <div className=" max-w-xs md:max-w-md md:p-8 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 md:mt-5 after:pointer-events-none bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10  relative after:content[''] after:absolute after:inset-0 after:outline-white/20 after:outline-2 after:rounded-3xl after:outline after:-outline-offset-2">
            <CardHeader
              title="My Idol"
              description="inspired me to not losing hope"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={Messi} alt="messi" />
            </div>
          </div>
          <div className="h-[320px] p-0 max-w-xs md:max-w-md md:p-8 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 md:mt-5 after:pointer-events-none bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10  relative after:content[''] after:absolute after:inset-0 after:outline-white/20 after:outline-2 after:rounded-3xl after:outline after:-outline-offset-2">
            <CardHeader
              className="px-6 pt-6"
              title="My Toolbox"
              description="Explore the technology and tools I use to craft exceptional
                digital experiences."
            />
            <ToolboxItems items={toolboxItems} />
            <ToolboxItems items={toolboxItems} />
          </div>
          <div className="max-w-xs md:max-w-md md:p-8 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 md:mt-5 after:pointer-events-none bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10  relative after:content[''] after:absolute after:inset-0 after:outline-white/20 after:outline-2 after:rounded-3xl after:outline after:-outline-offset-2">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-xs md:max-w-md md:p-8 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 md:mt-5 after:pointer-events-none bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10  relative after:content[''] after:absolute after:inset-0 after:outline-white/20 after:outline-2 after:rounded-3xl after:outline after:-outline-offset-2">
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smile" />
          </div>
        </div>
      </div>
    </div>
  );
};
