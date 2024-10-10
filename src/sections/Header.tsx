"use client";
// import { useRouter } from "next/router";
// import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
export const Header = () => {
  // const router = useRouter();
  const css =
    "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 trasition-all";

  // const path = usePathname();
  // console.log(path);
  const [home, setHome] = useState(true);
  const [projects, setProjects] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <div className="flex justify-center items-center relative  top-3 z-10">
      <nav className="flex gap-1 p-0.5 lg:gap-16 border fixed top-3 border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          onClick={() => {
            setHome(true);
            setAbout(false);
            setContact(false);
            setProjects(false);
          }}
          className={`nav-item ${home && css}`}
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={() => {
            setHome(false);
            setAbout(false);
            setContact(false);
            setProjects(true);
          }}
          className={`nav-item ${projects && css}`}
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={() => {
            setHome(false);
            setAbout(true);
            setContact(false);
            setProjects(false);
          }}
          className={`nav-item ${about && css}`}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={() => {
            setHome(false);
            setAbout(false);
            setContact(true);
            setProjects(false);
          }}
          className={`nav-item ${contact && css}`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
