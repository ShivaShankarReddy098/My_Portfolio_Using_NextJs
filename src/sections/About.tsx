import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import Messi from "@/assets/images/messi8.jpeg";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="A Glimpse Into My World"
        title="About Me"
        description="Learn more about who I am,what I do,and what Inspires me"
      />
      <div className="max-w-xs md:max-w-md md:p-8 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 md:mt-5 after:pointer-events-none bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10  relative after:content[''] after:absolute after:inset-0 after:outline-white/20 after:outline-2 after:rounded-3xl after:outline after:-outline-offset-2">
        <div>
          <StarIcon />
          <h3>My Idol</h3>
          <p>inspired me to not losing hope</p>
        </div>
        <Image src={Messi} alt="messi" />
      </div>
      <div className="max-w-xs md:max-w-md md:p-8 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 md:mt-5 after:pointer-events-none bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10  relative after:content[''] after:absolute after:inset-0 after:outline-white/20 after:outline-2 after:rounded-3xl after:outline after:-outline-offset-2">
        <div>
          <StarIcon />
          <h3>My Toolbox</h3>
          <p>
            Explore the technology and tools I use to craft exceptional digital
            experiences.
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};
