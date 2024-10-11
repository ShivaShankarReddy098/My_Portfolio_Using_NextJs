"use client";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";
import { ProjectsSection } from "./Projects";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP);
export const HeroSection = () => {
  useGSAP(() => {
    // gsap.to("#img", { duration: 2, x: -40 });
    gsap.from("#img", {
      duration: 2,
      y: -50,
      opacity: 0.6,
      // rotation: 360,
      // ease: "bounce",
    });
    gsap.from("#heroH1", { duration: 10, x: 500, ease: "back" });
    gsap.from("#heroPara", { duration: 15, x: -500, ease: "elastic" });
    gsap.from("#btn1", { duration: 4, y: 700, ease: "back-in" });
    gsap.from("#btn2", { duration: 5, y: 500, ease: "back-in" });
    gsap.to("#name1", {
      duration: 3,
      opacity: 0.8,
    });
    gsap.to("#name2", {
      duration: 6,
      opacity: 1,
    });
    // gsap.to("#container", { stagger: 0.3 });
  });

  return (
    <div
      id="home"
      className="py-32 md:py-48 lg:py-40 relative z-0 overflow-x-clip "
    >
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="size-[620px] hero-ring  "></div>
      <div className="size-[820px] hero-ring  "></div>
      <div className="size-[1020px] hero-ring  "></div>
      <div className="size-[1220px] hero-ring  "></div>
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={680} rotation={40}>
        <StarIcon className="size-28 text-emerald-300/15" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={620} rotation={130}>
        <StarIcon className="size-24 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={580} rotation={190}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={480} rotation={-45}>
        <StarIcon className="size-12 text-emerald-300/15" />
      </HeroOrbit>
      <HeroOrbit size={580} rotation={-125}>
        <StarIcon className="size-24 text-emerald-300/15" />
      </HeroOrbit>

      <div id="container" className="container">
        <div className="flex flex-col items-center">
          <div className=" inline-flex items-center justify-center ">
            <Image
              id="img"
              src={memojiImage}
              className="lg:size-[90px] size-[80px]"
              alt="heroImg"
            />
            <div className="flex flex-col absolute items-start  lg:mt-6">
              <div className="flex flex-col lg:top-2 lg:left-36 relative top-3 left-28 ">
                <p id="name1" className="z-10 text-white sm:text-sm opacity-0">
                  Hello !
                </p>
                <p id="name2" className="z-10 text-white sm:text-sm opacity-0">
                  I&apos;m Shiva Shankar Reddy
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-400 size-2.5 rounded-full animate-pulse"></div>
            <div className="font-medium text-sm">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1
            id="heroH1"
            className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide"
          >
            Building Exceptional User Experience
          </h1>
          <p
            id="heroPara"
            className="mt-4 text-center text-white/60 md:text-lg"
          >
            I specialize in transforming designs into funtional,high-performing
            web applications.Let&apos;s discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-center items-center mt-8 gap-4">
          <button
            id="btn1"
            className="inline-flex items-center z-10 gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <Link href="#projects">
              <span className="font-semibold">Explore My Work</span>
            </Link>
            <ArrowDown className="size-4" />
          </button>

          <button
            id="btn2"
            className="inline-flex items-center z-10 gap-2 border border-white bg-white/90 text-green-900 h-12 px-6 rounded-xl"
          >
            <span>🤝</span>
            <Link href="#contact">
              <span className="font-semibold">Let&apos;s Connect</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
