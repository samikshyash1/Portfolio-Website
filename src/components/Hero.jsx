
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="section-container">
        <div className="grid items-start gap-16 md:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* Introduction */}
          <div className="order-2 md:order-1">

            {/* Greeting */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#c47789]" />
              <p className="text-sm font-semibold tracking-[0.22em] text-[#b47785] uppercase">
                Hey there! I'm
              </p>
            </div>

            {/* Name */}
            <h1 className="mb-8 text-6xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#c47789] sm:text-7xl lg:text-8xl">
              <span className="block">Samikshya</span>
              <span className="mt-1 block">Sharma</span>
            </h1>

            {/* Role */}
            <h2 className="mb-6 text-xl font-medium leading-relaxed text-[#493b3b] sm:text-2xl">
              Software Engineering Student
              <span className="mx-2 text-[#c99fa3]">&</span>
              Frontend Developer
            </h2>

            {/* Description */}
            <p className="max-w-xl text-base leading-[2] text-[#8f7d79] sm:text-lg">
              I'm a software engineering student who enjoys bringing
              ideas to life through code. I love creating thoughtful,
              user-friendly interfaces and understanding how things
              work behind the scenes.
            </p>

            <p className="mt-5 max-w-xl text-base leading-[2] text-[#8f7d79] sm:text-lg">
              Currently exploring React, building projects, and growing
              my skills as a developer. Always curious, always learning,
              and always looking for something interesting to build.
            </p>

            {/* Action buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full bg-[#493b3b] px-7 py-4 text-sm font-medium text-[#fffdfb] transition-all duration-300 hover:-translate-y-1 hover:bg-[#624d4d]"
              >
                Explore my work
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#e5d3ce] px-7 py-4 text-sm font-medium text-[#493b3b] transition-all duration-300 hover:-translate-y-1 hover:border-[#c99fa3] hover:bg-[#f3e7e4]"
              >
                Get in touch
              </a>
            </div>

            {/* Social links */}
            <div className="mt-12 flex items-center gap-5">
              <span className="text-xs font-semibold tracking-[0.18em] text-[#a18e88] uppercase">
                Find me on
              </span>

              <a
                href="https://github.com/Samikshyash"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-xl text-[#897773] transition hover:-translate-y-1 hover:text-[#c99fa3]"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/samikshya-sharma-63140423a/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-xl text-[#897773] transition hover:-translate-y-1 hover:text-[#c99fa3]"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Profile illustration */}
          <div className="order-1 flex justify-center md:order-2 md:mt-12 md:justify-end">
            <div className="relative w-full max-w-[390px]">

              {/* Decorative outline */}
              <div className="absolute -right-5 -top-5 h-full w-full rounded-[48%_48%_8%_8%] border border-[#e8cfcc]" />

              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_8%_8%] bg-[#f3e7e4]">
                <img
                  src={profileImage}
                  alt="Illustrated portrait"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Decorative initials */}
              <div className="absolute -right-4 top-12 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8cfcc] text-[#493b3b] shadow-sm">
                <span className="heading-font text-2xl italic">
                  SS
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 hidden items-center gap-3 text-xs tracking-[0.2em] text-[#a18e88] uppercase md:flex">
          <ArrowDown size={15} />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
