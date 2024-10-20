"use client";
import React, { useRef, FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  //   Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
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
import { redirect } from "next/navigation";
const initValues = {
  name: "",
  email: "",
  message: "",
};
const initState = { values: initValues };
export const ContactUs: React.FC = () => {
  const [state, setState] = useState(false);
  //   const [touched, setTouched] = useState(initState);
  const [isLoading, setIsLoading] = useState(false);
  //   const { values } = touched;

  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (form.current) {
      emailjs
        .sendForm(
          "service_n9ck6xe",
          "template_z3cdbl5",
          form.current,
          "zx-qtRVKo3AqtxY2W"
        )
        .then(
          () => {
            setIsLoading(false);
            setState(true);
            console.log("SUCCESS!");
            // redirect("http://localhost:3000/");
            // redirect("/#contact");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    //   <form ref={form} onSubmit={sendEmail}>
    //     <label>Name</label>
    //     <input type="text" name="user_name" required />
    //     <label>Email</label>
    //     <input type="email" name="user_email" required />
    //     <label>Message</label>
    //     <textarea name="message" required />
    //     {/* <input type="submit" value="Send" /> */}
    //     <button type="submit">Send</button>{" "}
    //   </form>
    <SheetContent className="bg-gray-900 text-white antialiased font-sans">
      <SheetHeader>
        <SheetTitle className="font-serif text-2xl text-gray-800/1 font-bold">
          <h1>Get In Touch </h1>
        </SheetTitle>
        <SheetDescription className="text-white/2">
          Enter Name,Email And Message To Touch With Me.
        </SheetDescription>
      </SheetHeader>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid gap-8 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-right text-white sm:text-base"
            >
              Name
            </Label>
            <Input
              type="text"
              name="to_name"
              required
              id="name"
              placeholder="Your Name"
              className="col-span-3 text-black"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="email"
              className="text-right text-white sm:text-base"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="user_email"
              required
              placeholder="xyz@gmail.com"
              className="col-span-3 text-black"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="message"
              className="text-right text-white sm:text-base"
            >
              Message
            </Label>
            <textarea
              name="message"
              required
              id="message"
              placeholder="Your Message"
              className="col-span-3 text-black rounded-lg h-20 p-7"
            />
          </div>
        </div>
        <SheetFooter>
          <Button
            type="submit"
            className="mt-4 px-4 py-2  text-lg transition-all border rounded-lg text-yellow-300 hover:bg-white/15"
            isLoading={isLoading}
            disabled={state}
          >
            {state ? "Sent" : "Send"}
          </Button>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </form>
    </SheetContent>
  );
};
