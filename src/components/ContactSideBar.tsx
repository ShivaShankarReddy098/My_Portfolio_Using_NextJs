"use client";
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
import { useState } from "react";
export const ContactSideBar = () => {
  const [send, setSend] = useState(false);
  const handleSend = () => {
    setSend(true);
  };
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
        <SheetContent className="bg-gradient-to-r from-emerald-500 to-sky-700 pt-8">
          <SheetHeader>
            <SheetTitle className="font-serif text-2xl text-gray-800/1 font-bold">
              <h1>Get In Touch 😍</h1>
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
                placeholder="xyz@gmail.com"
                className="col-span-3 text-black"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right text-white">
                Message
              </Label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="col-span-3 text-black rounded-lg h-20 p-7"
              />
            </div>
          </div>
          <SheetFooter>
            <Button
              type="submit"
              className="mt-4 p-6  text-lg transition-all"
              onClick={handleSend}
            >
              {send ? "Sent" : "Send"}
            </Button>
            {/* <SheetClose asChild></SheetClose> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};
