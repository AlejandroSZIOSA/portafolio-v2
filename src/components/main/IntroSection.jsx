"use client";
import Image from "next/image";
import { MESSAGES_DATA } from "@/utils/constants";
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
        <div className="py-2 mt-3 mb-2 text-center w-11/12 border-2 border-black rounded-xl bg-[#9CB3A5] lg:hidden">
          <p className="font-mono p-2 text-left text-lg lg:p-4 lg:text-xl">
            {MESSAGES_DATA.meOnMobile.content}
          </p>
        </div>
        <Message variant="my-current-focus">
          <article>
            <h3>
              <span className="mr-2">🎯</span>
              {MESSAGES_DATA.myCurrentFocus.title}
            </h3>
            <p>
              <strong>{MESSAGES_DATA.myCurrentFocus.subtitle}</strong>
            </p>
            <p>{MESSAGES_DATA.myCurrentFocus.content}</p>
          </article>
        </Message>
        <Message variant="my-hobbies">
          <article>
            <h3>{MESSAGES_DATA.myHobbies.title}</h3>
            <p>{MESSAGES_DATA.myHobbies.content}</p>
          </article>
        </Message>
        <Message variant="my-wish">
          <article>
            <h3>{MESSAGES_DATA.myWish.title}</h3>
            <p>{MESSAGES_DATA.myWish.content}</p>
          </article>
        </Message>
        {/* Desktop messages */}
        <Message variant="center-desktop">
          <article className="w-max">
            <h3>
              <strong>Short About me</strong>
            </h3>
            <p className="text-justify p-1">
              {MESSAGES_DATA.meOnDesktop.content}
            </p>
            <h3>
              <strong>{MESSAGES_DATA.myHobbies.title}</strong>
            </h3>
            <p className="text-center p-1">{MESSAGES_DATA.myHobbies.content}</p>
            <h3>
              <span className="mr-2 text-base">🎯</span>
              <strong>{MESSAGES_DATA.myCurrentFocus.title}</strong>
            </h3>
            <div className="p-1">
              {MESSAGES_DATA.myCurrentFocus.subtitle && (
                <p className="text-center">
                  <strong>{MESSAGES_DATA.myCurrentFocus.subtitle}</strong>
                </p>
              )}
              <p className="text-justify">
                {MESSAGES_DATA.myCurrentFocus.content}
              </p>
            </div>
            <h3>
              <strong>{MESSAGES_DATA.myWish.title}</strong>
            </h3>
            <p className="text-center p-1">{MESSAGES_DATA.myWish.content}</p>
          </article>
        </Message>
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-full">
          <h1 className="font-mea text-7xl"> Always in Action</h1>
        </div>
      </div>
    </div>
  );
}
