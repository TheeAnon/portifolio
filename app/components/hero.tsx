"use client";
import React, { useState } from "react";
import { FaGithub, FaUpwork, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { CgClose } from "react-icons/cg";

const Hero = () => {
  const [modalImg, setModalImg] = useState("");
  return (
    <>
      <section className="min-h-screen gap-8 w-full flex flex-col items-center justify-evenly">
        <div className="lg:grid lg:grid-cols-2 gap-8 lg:gap-4 p-4 relative w-full flex flex-col items-center">
          <div className="flex flex-col gap-10 rounded-lg p-4 w-full items-center lg:items-start">
            <div className="flex flex-col gap-4 items-center w-auto justify-center text-center sm:flex-row sm:text-start">
              <button
                onClick={() => setModalImg("/images/japhe3.png")}
                className="p-1 rounded-full hover:opacity-70 cursor-pointer"
              >
                <Image
                  src="/images/japhe3.png"
                  alt="Japheth Kemboi dark"
                  width={150}
                  height={150}
                  className="rounded-full aspect-square"
                />
              </button>
              <div className="flex flex-col gap-4">
                <h1 className="flex text-black dark:text-white items-center font-extrabold gap-2 text-3xl self-center sm:self-start sm:text-3xl md:text-3xl xl:text-4xl ease-in">
                  Japheth Kemboi
                  <MdVerified fill="blue" className="dark:fill-blue-500" />
                </h1>
                <h2 className="text-black/80 dark:text-white/60 sm:text-lg md:text-xl">
                  Full stack developer
                </h2>
                <p className="text-[var(--text-color)] dark:text-white/50 text-sm sm:text-base">
                  I develop web and mobile apps.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-evenly text-[var(--text-color)] text-sm items-center md:text-xl self-center lg:self-start">
              <a
                target="_blank"
                href="mailto:japhethkemboi69@gmail.com"
                className="p-2 flex rounded-full text-white hover:text-black hover:bg-white/60 gap-2 px-4 items-center xs:text-sm bg-[var(--primary-color)]"
              >
                <IoMdMail />
                Contact
              </a>
              <div className="flex gap-4 items-center self-center lg:self-start">
                <a
                  target="_blank"
                  href="https://github.com/TheeAnon"
                  className="p-2 rounded-full bg-white/60 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
                >
                  <FaGithub />
                </a>
                <a
                  target="_blank"
                  href="https://x.com/japhe_ke_"
                  className="p-2 rounded-full bg-white/60 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
                >
                  <FaXTwitter />
                </a>
                <a
                  target="_blank"
                  href="https://linkedin.com/in/japheth-kemboi-879a48271"
                  className="p-2 rounded-full bg-white/60 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
                >
                  <CiLinkedin />
                </a>
                <a
                  target="_blank"
                  href="https://upwork.com/freelancers/~01ba600a501ec65914"
                  className="p-2 rounded-full bg-white/60 flex items-center hover:bg-[var(--primary-color)] hover:text-[var(--active-link-color)]"
                >
                  <FaUpwork />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full justify-evenly p-4 rounded sm:text-sm text-xs md:text-base">
            <h2 className="flex text-black dark:text-white self-center font-bold gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl ease-in">
              Tech stack
            </h2>
            <div className="flex p-4 flex-wrap gap-4 justify-evenly">
              <div className="flex flex-col gap-4 rounded-lg border p-4 bg-white/40 dark:bg-gray-800 grow items-center">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold max-w-md text-black dark:text-white">
                  Languages
                </h3>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-4">
                    <SiJavascript /> Javascript
                  </li>
                  <li className="flex items-center gap-4">
                    <SiPython /> Python
                  </li>
                  <li className="flex items-center gap-4">
                    <SiTypescript /> Typescript
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border p-4 bg-white/40 dark:bg-gray-800 grow items-center">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold max-w-md text-black dark:text-white">
                  Front-End
                </h3>
                <ul className="flex flex-col gap-2 h-full">
                  <li className="flex items-center gap-4">
                    <SiReact /> React js
                  </li>
                  <li className="flex items-center gap-4">
                    <SiNextdotjs /> Next js
                  </li>
                  <li className="flex items-center gap-4">
                    <SiTailwindcss /> TailwindCSS
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border p-4 bg-white/40 dark:bg-gray-800 grow items-center">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold max-w-md text-black dark:text-white">
                  Back-End
                </h3>
                <ul className="flex flex-col gap-2 h-full">
                  <li className="flex items-center gap-4">
                    <SiDjango /> Django
                  </li>
                  <li className="flex items-center gap-4">
                    <SiMysql /> MySQL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-white/40 border dark:bg-gray-800 p-4 w-full inline-flex gap-8 flex-nowrap whitespace-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] text-sm sm:text-sm md:text-base dark:text-white/40">
          <div className="flex gap-8 animate-marquee">
            <li className="flex items-center gap-2">Dandia</li>
            <li className="flex items-center gap-2">BurghExpress</li>
            <li className="flex items-center gap-2">Priority 1 Radio</li>
            <li className="flex items-center gap-2">The Northern Market</li>
            <li className="flex items-center gap-2">RentWise</li>
            <li className="flex items-center gap-2">Primermovies</li>
            <li className="flex items-center gap-2">Mopp.pl</li>
            <li className="flex items-center gap-2">
              <SiJavascript /> Javascript
            </li>
            <li className="flex items-center gap-2">
              <SiTypescript /> Typescript
            </li>
            <li className="flex items-center gap-2">
              <SiPython /> Python
            </li>
            <li className="flex items-center gap-2">
              <SiReact /> React js
            </li>
            <li className="flex items-center gap-2">
              <SiNextdotjs /> Next js
            </li>
            <li className="flex items-center gap-2">
              <SiTailwindcss /> TailwindCSS
            </li>
            <li className="flex items-center gap-2">
              <SiDjango /> Django
            </li>
            <li className="flex items-center gap-2">
              <SiMysql /> MySQL
            </li>
          </div>
          <div className="flex gap-8 animate-marquee2 absolute ml-36">
            <li className="flex items-center gap-2">Dandia</li>
            <li className="flex items-center gap-2">BurghExpress</li>
            <li className="flex items-center gap-2">Priority 1 Radio</li>
            <li className="flex items-center gap-2">The Northern Market</li>
            <li className="flex items-center gap-2">RentWise</li>
            <li className="flex items-center gap-2">Primermovies</li>
            <li className="flex items-center gap-2">Mopp.pl</li>
            <li className="flex items-center gap-2">
              <SiJavascript /> Javascript
            </li>
            <li className="flex items-center gap-2">
              <SiPython /> Python
            </li>
            <li className="flex items-center gap-2">
              <SiReact /> React js
            </li>
            <li className="flex items-center gap-2">
              <SiNextdotjs /> Next js
            </li>
            <li className="flex items-center gap-2">
              <TbBrandReactNative /> React Native
            </li>
            <li className="flex items-center gap-2">
              <SiTailwindcss /> TailwindCSS
            </li>
            <li className="flex items-center gap-2">
              <SiDjango /> Django
            </li>
            <li className="flex items-center gap-2">
              <SiNodedotjs /> Node js
            </li>
            <li className="flex items-center gap-2">
              <SiMysql /> MySQL
            </li>
            <li className="flex items-center gap-2">
              <SiMongodb /> MongoDB
            </li>
          </div>
        </div>
      </section>
      {modalImg && (
        <div className="fixed z-40 flex flex-col top-0 bottom-0 justify-center items-center gap-4 overflow-hidden w-full min-h-screen bg-gray-950/80 backdrop-blur">
          <div className="relative shrink-0 w-1/2 h-96 overflow-hidden">
            <Image
              src={modalImg}
              alt="alt screenshot"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <button
            onClick={() => setModalImg("")}
            className="right-3 rounded-full bg-white/90 flex gap-2 items-center p-4 border hover:opacity-80 hover:scale-110"
          >
            <CgClose />
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Hero;
