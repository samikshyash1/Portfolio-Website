
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Software Engineering Student",
  },
  {
    icon: Code2,
    title: "Currently building",
    description: "Web applications with React",
  },
  {
    icon: Lightbulb,
    title: "Interested in",
    description: "Software development & problem solving",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#faf6f2] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c99fa3]" />
            <p className="text-[13px] font-medium tracking-[0.25em] text-[#b88a8e]">
              A LITTLE ABOUT ME
            </p>
          </div>

          <h2 className="max-w-2xl text-[42px] font-semibold leading-tight tracking-tight text-[#493b3b] md:text-[54px]">
            More than just
            <span className="font-serif font-normal italic text-[#c99fa3]">
              {" "}code & coffee.
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">

          {/* Introduction */}
          <div>
            <h3 className="mb-6 text-[23px] font-medium text-[#493b3b]">
              Hello again!
            </h3>

            <div className="space-y-5 text-[17px] leading-[1.9] text-[#897773]">
              <p>
                I'm Samikshya, a Software Engineering student
                with a growing passion for building things for
                the web and understanding how technology works.
              </p>

              <p>
                I enjoy turning ideas into functional, thoughtful
                digital experiences. From designing interfaces
                to figuring out how things work behind the scenes,
                I'm always curious to learn something new.
              </p>

              <p>
                Currently, I'm strengthening my skills in React
                and exploring backend development while working
                on projects that challenge me to think beyond
                just writing code.
              </p>
            </div>

            <a
              href="#projects"
              className="mt-9 inline-flex items-center gap-2 border-b border-[#c99fa3] pb-2 text-base font-medium text-[#493b3b] transition-colors hover:text-[#bd8990]"
            >
              Explore what I build
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Profile card */}
          <div className="relative">
            <div className="rounded-3xl border border-[#eadeda] bg-[#f3e7e4] p-7 md:p-9">

              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#faf6f2] text-[#c99fa3]">
                  <Sparkles size={22} />
                </div>

                <span className="rounded-full border border-[#dfc7c3] px-4 py-1.5 text-[13px] text-[#897773]">
                  A little snapshot
                </span>
              </div>

              <h3 className="mb-3 text-[29px] font-semibold text-[#493b3b]">
                What keeps me curious?
              </h3>

              <p className="mb-9 text-[16px] leading-7 text-[#897773]">
                Learning, experimenting, solving problems and
                creating things that are genuinely useful.
              </p>

              <div className="space-y-6">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#faf6f2] text-[#bd8990]">
                        <Icon size={19} />
                      </div>

                      <div>
                        <h4 className="text-base font-medium text-[#493b3b]">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-[15px] leading-6 text-[#897773]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Decorative element */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-[#e8cfcc]/50 blur-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
