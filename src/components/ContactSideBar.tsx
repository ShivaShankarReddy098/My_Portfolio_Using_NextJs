// "use client";
// "use server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Arrow from "@/assets/icons/arrow-up-right.svg";
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
// import FormContact from "./FormContact";
// import { useState } from "react";
export const ContactSideBar = () => {
  // const [send, setSend] = useState(false);
  // const handleSend = () => {
  //   setSend(true);
  // };
  //7511b0d8-00af-429a-9c7c-301da677dc30
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "7511b0d8-00af-429a-9c7c-301da677dc30");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

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

        <form onSubmit={handleSubmit}>
          <SheetContent className="bg-gray-900 text-white antialiased font-sans">
            <SheetHeader>
              <SheetTitle className="font-serif text-2xl text-gray-800/1 font-bold">
                <h1>Get In Touch </h1>
              </SheetTitle>
              <SheetDescription className="text-white/2">
                Enter Name,Email And Message To Touch With Me.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-8 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right text-white">
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  required
                  id="name"
                  placeholder="Your Name"
                  className="col-span-3 text-black"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="xyz@gmail.com"
                  className="col-span-3 text-black"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="message" className="text-right text-white">
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
              <button
                type="submit"
                className="mt-4 px-4 py-2  text-lg transition-all border rounded-lg text-yellow-300 hover:bg-white/15"
              >
                Send
              </button>
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </SheetContent>
        </form>
        {/* <FormContact /> */}
      </Sheet>
    </>
  );
};
