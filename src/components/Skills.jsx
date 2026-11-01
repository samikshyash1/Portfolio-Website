
import {
  Code2,
  Layout,
  Braces,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Web Fundamentals",
    description:
      "The building blocks I use to create responsive and accessible web experiences.",
    icon: Layout,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Tools I use to build interactive interfaces and reusable components.",
    icon: Code2,
    skills: ["React", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Programming",
    description:
      "Developing logical thinking and strengthening my programming foundations.",
    icon: Braces,
    skills: ["C", "C++","Java"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#f3e7e4]/40 px-6 py-28 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c99fa3]" />
            <p className="text-[13px] font-medium tracking-[0.25em] text-[#b88a8e]">
              WHAT I WORK WITH
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-xl text-[42px] font-semibold leading-tight tracking-tight text-[#493b3b] md:text-[54px]">
              Skills &{" "}
              <span className="font-serif font-normal italic text-[#c99fa3]">
                technologies.
              </span>
            </h2>

            <p className="max-w-sm text-[16px] leading-8 text-[#897773]">
              A growing toolkit, shaped by curiosity,
              practice, and the things I love building.
            </p>
          </div>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.number}
                className="group rounded-3xl border border-[#eadeda] bg-[#fffdfb]/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#d9c2bd] hover:shadow-[0_15px_40px_rgba(73,59,59,0.05)] md:p-8"
              >
                {/* Card top */}
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3e7e4] text-[#bd8990] transition-colors duration-300 group-hover:bg-[#e8cfcc]">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>

                  <span className="text-sm tracking-widest text-[#b99b99]">
                    {group.number}
                  </span>
                </div>

                {/* Card content */}
                <h3 className="mb-3 text-[25px] font-semibold text-[#493b3b]">
                  {group.title}
                </h3>

                <p className="min-h-[76px] text-[15px] leading-7 text-[#897773]">
                  {group.description}
                </p>

                {/* Skill tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#eadeda] bg-[#faf6f2] px-4 py-2 text-[14px] font-medium text-[#725f5b] transition-colors duration-300 group-hover:border-[#dfc7c3]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#eadeda] pt-7">
          <p className="text-[14px] text-[#897773]">
            Always learning. Always building.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#493b3b] transition-colors hover:text-[#bd8990]"
          >
            See these skills in action
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}
