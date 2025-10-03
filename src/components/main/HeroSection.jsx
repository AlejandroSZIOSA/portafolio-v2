"use client";
import Image from "next/image";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

export default function HeroSection() {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //from useMedia library
  return (
    <div className="flex flex-col pt-2 items-center justify-center md:flex-row md:pt-8 md:pb-12 md:mr-auto md:pl-16">
      <Image
        src={"/images/me/me-light_b.png"}
        width={isMobile ? 300 : 400}
        height={150}
        className="rounded-[15%]"
        alt="no picture"
        priority
      />
      <div className="py-2 text-center md:w-96 md:h-auto md:py-0 md:mt-auto md:text-left">
        <p className="font-mono ml-3 p-2 text-left text-lg md:ml-4 md:text-xl">
          Hi!😎 <br></br>My name is <strong>Gabriel Alejandro Sazo. </strong>
          <br></br>I am a positive, high focused and very curious recently
          graduated
          <strong> Frontend Developer. </strong>
        </p>
      </div>
    </div>
  );
}
