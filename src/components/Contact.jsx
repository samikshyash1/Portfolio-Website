
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f3e7e4]/50 px-6 py-28 md:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#e8cfcc]/50 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#faf6f2] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-[#c99fa3]" />
          <p className="text-[13px] font-medium tracking-[0.25em] text-[#b88a8e]">
            GET IN TOUCH
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_0.6fr] md:items-end">

          <div>
            <h2 className="max-w-3xl text-[46px] font-semibold leading-[1.12] tracking-tight text-[#493b3b] md:text-[68px]">
              Have an idea?
              <br />
              Let's make something{" "}
              <span className="font-serif font-normal italic text-[#c99fa3]">
                meaningful.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-[17px] leading-[1.9] text-[#897773]">
              I'm always open to connecting with people,
              exploring opportunities, and discussing ideas.
              Whether it's a project, collaboration, or just
              a conversation, I'd love to hear from you.
            </p>

            <a
              href="https://www.linkedin.com/in/samikshya-sharma-63140423a/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#c99fa3] px-7 py-4 text-[15px] font-medium text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#b88a8e] hover:shadow-md"
            >
              Let's connect
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Contact details */}
          <div className="rounded-3xl border border-[#eadeda] bg-[#faf6f2]/80 p-7 md:p-8">
            <p className="mb-7 text-[13px] font-medium tracking-[0.2em] text-[#b88a8e]">
              FIND ME HERE
            </p>

            <div className="space-y-5">

              <a
                href="https://www.linkedin.com/in/samikshya-sharma-63140423a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3e7e4] text-[#bd8990]">
                    <FaLinkedin size={19} />
                  </div>

                  <div>
                    <p className="text-[15px] font-medium text-[#493b3b]">
                      LinkedIn
                    </p>
                    <p className="mt-1 text-[13px] text-[#897773]">
                      Let's connect professionally
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-[#b99b99] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <div className="h-px bg-[#eadeda]" />

              <a
                href="https://github.com/Samikshyash1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3e7e4] text-[#bd8990]">
                    <FaGithub size={19} />
                  </div>

                  <div>
                    <p className="text-[15px] font-medium text-[#493b3b]">
                      GitHub
                    </p>
                    <p className="mt-1 text-[13px] text-[#897773]">
                      Explore what I'm building
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-[#b99b99] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
