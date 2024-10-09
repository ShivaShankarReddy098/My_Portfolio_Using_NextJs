// "use client";
import Arrow from "@/assets/icons/arrow-up-right.svg";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { useState } from "react";
// gsap.registerPlugin(ScrollTrigger);
export const Footer = () => {
  // useGSAP(() => [
  //   gsap.from("#nav1", {
  //     scrollTrigger: {
  //       trigger: "#nav1",
  //       // scrub: true,
  //       toggleActions: "restart none none none",
  //     },
  //     x: 300,
  //     duration: 2,
  //     // delay: 3,
  //   }),
  // ]);
  return (
    <footer>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:gap-48 lg:flex-row lg:gap-96 items-center gap-8 ">
          <div className="text-white/40">
            &copy; 2024. All righhts reserved.
          </div>
          <nav
            id="nav1"
            className="flex flex-col md:flex-row lg:flex-row lg:gap-16 items-center gap-8"
          >
            <a
              href="https://github.com/ShivaShankarReddy098"
              target="_blank"
              className="inline-flex items-center gap-1.5 hover:text-white/50 transition-all"
            >
              <span className="font-semibold">Github</span>
              <Arrow className="size-4" />
            </a>
            <a
              href="https://www.instagram.com/shivashankarreddy.98/"
              target="_blank"
              className="inline-flex items-center gap-1.5 hover:text-white/50 transition-all"
            >
              <span className="font-semibold">Instagram</span>
              <Arrow className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shiva-shankar-reddy-2639b4235/"
              target="_blank"
              className="inline-flex items-center gap-1.5 hover:text-white/50 transition-all"
            >
              <span className="font-semibold">LinkedIn</span>
              <Arrow className="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
