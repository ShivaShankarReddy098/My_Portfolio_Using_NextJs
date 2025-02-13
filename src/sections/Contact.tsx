"use client";
// import Arrow from "@/assets/icons/arrow-up-right.svg";
// import { DialogBar } from "@/components/Dialog";

import { ContactSideBar } from "@/components/ContactSideBar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactUs } from "@/components/Emailjs";

// import { useState } from "react";
gsap.registerPlugin(ScrollTrigger);
export const ContactSection = () => {
  // const [showDialog, setShowDialog] = useState(false);
  useGSAP(() => {
    // const tl = gsap.timeline();
    gsap.from("#contact", {
      // stagger: 0.3,
      opacity: 0,
      scrollTrigger: {
        trigger: "#contact",
        // scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      y: 200,
      duration: 2,
    });
  });
  return (
    <div id="contact" className="py-16 pt-6 ">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center">
          <h2 className="font-serif text-2xl">
            Let&apos;s create something amazing together
          </h2>
          <p className="text-lg mt-2 text-gray-600">
            Ready to bring your next project to life ?. Let&apos;s connect and
            discuss.I can help you to achieve your goals.
          </p>
          {/* <button className="text-white bg-gray-900 inline-flex px-6 h-12 rounded-2xl items-center gap-2 mt-8">
            <span className="font-semibold">Contact Me</span>
            <Arrow className="size-4" />
          </button> */}
          <ContactSideBar />
          {/* <ContactUs /> */}
        </div>
      </div>
    </div>
  );
};
