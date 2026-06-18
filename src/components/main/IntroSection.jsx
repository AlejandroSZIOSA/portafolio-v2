"use client";
import Image from "next/image";
import { INFO_ABOUT_ME } from "@/utils/constants";

import me from "../../../public/images/me/me-light_b.png";
import LanguagePanel from "../ui/panels/LanguagePanel";
import Message from "../ui/Message";

export default function IntroSection() {
  return (
    <div className="flex flex-col pt-4 w-full items-center justify-center md:flex-row md:pb-6 md:mr-auto md:pl-16">
      <div>
        <Image
          src={me}
          className="rounded-[15%] w-[310px] lg:w-[500px]"
          height="auto"
          alt="no picture"
          loading="eager" //is like priority in next/image, it forces the image to load as soon as possible, which is good for above-the-fold images like profile pictures.
        />
        <LanguagePanel />
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:w-[stretch] lg:items-stretch lg:h-[stretch] lg:mx-5">
        <div className="py-2 my-3 text-center w-11/12 border-2 border-black rounded-xl bg-[#9CB3A5] lg:hidden">
          <p className="font-mono p-2 text-left text-lg lg:p-4 lg:text-xl">
            Hi!😎 <br></br>My name is{" "}
            <strong id="intro_text_strong">Gabriel Alejandro</strong>
            <br></br>I am an action oriented, highly focused and very curious
            <strong> Frontend Developer Junior.</strong>
          </p>
        </div>
        <Message variant="my-wish">
          <p>{INFO_ABOUT_ME.myWish}</p>
        </Message>
        <Message variant="my-hobbies">
          <p>{INFO_ABOUT_ME.myHobbies}</p>
        </Message>
        <Message variant="my-current-focus">
          <p>
            <span className="mr-2">🎯</span>
            {INFO_ABOUT_ME.myCurrentFocus}
          </p>
        </Message>
        {/*         only desktop message
         */}
        <Message variant="center-desktop">
          <article className="w-max">
            <h3>
              <strong>Short About me</strong>
            </h3>
            <p className="text-justify p-1">
              Hi!😎, My name is{" "}
              <strong id="intro_text_strong">Gabriel Alejandro </strong> I am an
              action oriented, highly focused and very curious Frontend
              Developer Junior.
            </p>
            <h3>
              <strong>My Hobbies</strong>
            </h3>
            <p className="text-center p-1">
              “It-support”,“Training”,”International Checkers”,”Ukelele”
            </p>
            <h3>
              <span className="mr-2 text-base">🎯</span>
              <strong>My Current Focus</strong>
            </h3>
            <div className="p-1">
              <p className="text-center">
                <strong>React + Sanity CMS basics + A.I Assistance</strong>
              </p>
              <p className="text-left">
                “Functionality”,"Architecture",“Good practices”
              </p>
            </div>
            <h3>
              <strong>My Wish</strong>
            </h3>
            <p className="text-center p-1">
              ”Become a multi-platform fullstack Javascript developer”
            </p>
          </article>
        </Message>
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-full">
          <h1 className="font-mea text-7xl"> Always in Action</h1>
        </div>
      </div>
    </div>
  );
}
