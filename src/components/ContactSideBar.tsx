// "use client";
// "use server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Arrow from "@/assets/icons/arrow-up-right.svg";
import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ContactUs } from "./Emailjs";
// import FormContact from "./FormContact";
// import { useState } from "react";
export const ContactSideBar = () => {
  // const form = useRef<HTMLFormElement | null>(null);

  // const sendEmail = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (form.current) {
  //     emailjs
  //       .sendForm(
  //         "service_n9ck6xe",
  //         "template_z3cdbl5",
  //         form.current,
  //         "zx-qtRVKo3AqtxY2W"
  //       )
  //       .then(
  //         () => {
  //           console.log("SUCCESS!");
  //         },
  //         (error) => {
  //           console.log("FAILED...", error.text);
  //         }
  //       );
  //   }
  // const [send, setSend] = useState(false);
  // const handleSend = () => {
  //   setSend(true);
  // };
  //7511b0d8-00af-429a-9c7c-301da677dc30
  // async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);

  //   formData.append("access_key", "7511b0d8-00af-429a-9c7c-301da677dc30");

  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: json,
  //   });
  //   const result = await response.json();
  //   if (result.success) {
  //     console.log(result);
  //   }
  // }

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="text-white bg-gray-900 inline-flex px-6 h-12 rounded-2xl items-center gap-2 mt-8"
          >
            <span className="font-semibold">Contact Me</span>
            <Arrow className="size-4" />
          </Button>
        </SheetTrigger>
        <ContactUs />

        {/* <FormContact /> */}
      </Sheet>
    </>
  );
};
