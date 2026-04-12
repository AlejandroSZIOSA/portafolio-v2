"use client";
import Image from "next/image";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

import me from "../../../public/images/me/me-light_b.png";
import LanguagePanel from "../ui/panels/LanguagePanel";
import Message from "../ui/Message";

export default function IntroSection() {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library
  return (
    <div className="flex flex-col pt-4 items-center justify-center md:flex-row md:pt-8 md:pb-12 md:mr-auto md:pl-16">
      <div>
        <Image
          src={me}
          className="rounded-[15%]"
          width={isMobile ? 310 : 400}
          height="auto"
          alt="no picture"
          loading="eager" //is like priority in next/image, it forces the image to load as soon as possible, which is good for above-the-fold images like profile pictures.
        />
        <LanguagePanel />
      </div>
      <div className="py-2 my-3 text-center w-11/12 border-2 border-black rounded-xl bg-[#9CB3A5] lg:text-left lg:w-96 lg:h-auto lg:py-0 lg:mt-auto lg:ml-11">
        <p className="font-mono ml-3 p-2 text-left text-lg lg:ml-4 lg:p-3 lg:text-xl">
          Hi!😎 <br></br>My name is{" "}
          <strong id="intro_text_strong">Gabriel Alejandro</strong>
          <br></br>I am an action oriented, highly focused and very curious
          <strong> Frontend Developer Junior.</strong>
        </p>
      </div>
      {/* TODO: fix to desktop ui
       */}
      <div className="flex flex-col items-center lg:items-stretch lg:flex-row-reverse lg:relative lg:h-[stretch] lg:bg-slate-300">
        <Message variant="my-wish">
          const MY_WISH:”Become a multi-platform fullstack Javascript developer”
        </Message>
        <Message variant="my-hobbies">
          const MY_FAVORITE_HOBBIES:[“It-support”,“Training”,”Ukelele”,
          ”Checkers”]
        </Message>
        <Message variant="my-current-focus">
          <span className="mr-2">🎯</span>
          {"let currentFocus:{backend:[“Architecture”,“Good practices”]}"}
        </Message>
      </div>
    </div>
  );
}
