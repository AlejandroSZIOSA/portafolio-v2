"use client";
import Image from "next/image";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

import me from "../../../public/images/me/me-light_b.png";
import LanguagePanel from "../ui/panels/LanguagePanel";
import DividerHeaderTitle from "../ui/DividerHeaderTitle";
import Messages from "../ui/Messages";

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
          <strong id="intro_text_strong">Gabriel Alejandro Sazo.</strong>
          <br></br>I am an action oriented, highly focused and very curious
          <strong> Frontend Developer Junior.</strong>
        </p>
      </div>

      <Messages variant="my-wish">
        const MY_WISH: ”Become an expert in creation of multiplatform apps and
        Backend”
      </Messages>

      <Messages variant="my-hobbies">
        {
          "const MY_FAVORITE_HOBBIES: [“it-support”,“training”,”ukelele”,”checkers”]"
        }
      </Messages>
      <Messages variant="my-current-focus">
        <span className="relative bottom-1 right-3">🎯</span>
        {
          "let currentFocus: {masteryReact:[“ functionality”, “good practices”]}"
        }
      </Messages>
    </div>
  );
}
