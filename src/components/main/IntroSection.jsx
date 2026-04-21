"use client";
import Image from "next/image";

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
      {/*  <div className="py-2 my-3 text-center w-11/12 border-2 border-black rounded-xl bg-[#9CB3A5] lg:text-left lg:w-96 lg:h-fit lg:py-0 lg:mt-auto lg:ml-11">
        <p className="font-mono ml-3 p-2 text-left text-lg lg:ml-4 lg:p-3 lg:text-xl">
          Hi!😎 <br></br>My name is{" "}
          <strong id="intro_text_strong">Gabriel Alejandro</strong>
          <br></br>I am an action oriented, highly focused and very curious
          <strong> Frontend Developer Junior.</strong>
        </p>
      </div> */}
      {/* TODO: fix to desktop ui
       */}
      <div
        id="messages-container"
        className="flex flex-col items-center lg:flex-row-reverse lg:w-[stretch] lg:items-stretch lg:relative lg:h-[stretch] lg:mx-5"
      >
        <div className="py-2 my-3 text-center w-11/12 border-2 lg:border-4 border-black rounded-xl bg-[#9CB3A5] lg:text-left lg:w-[350px] lg:h-[210px] lg:py-0 lg:mt-auto lg:mb-0 lg:absolute lg:left-0 bottom-[8%]">
          <p className="font-mono p-2 text-left text-lg lg:p-4 lg:text-xl">
            Hi!😎 <br></br>My name is{" "}
            <strong id="intro_text_strong">Gabriel Alejandro</strong>
            <br></br>I am an action oriented, highly focused and very curious
            <strong> Frontend Developer Junior.</strong>
          </p>
        </div>

        <Message variant="my-wish">
          const MY_WISH:”Become a multi-platform fullstack Javascript developer”
        </Message>
        <Message variant="my-hobbies">
          {`const MY_HOBBIES:[“It-support”,“Training”,”Ukelele”, ”International Checkers”]`}
        </Message>
        <Message variant="my-current-focus">
          <span className="mr-2">🎯</span>
          {`let currentFocus:{advancedReact:[“Functionality”,"Architecture",“Good practices”]}`}
        </Message>
      </div>
    </div>
  );
}
