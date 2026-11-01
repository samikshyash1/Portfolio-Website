
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("about");

  const closeMenu = () => setMenuOpen(false);

  // Scroll progress indicator
  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollableHeight > 0
          ? (window.scrollY / scrollableHeight) * 100
          : 0;

      setScrollProgress(progress);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  // Detect active section while scrolling
  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      let currentSection = "about";

      // Detect bottom of page
      if (scrollPosition + windowHeight >= documentHeight - 10) {
        currentSection = "contact";
      } else {
        const viewingPoint = windowHeight * 0.35;

        links.forEach((link) => {
          const section = document.querySelector(link.href);

          if (
            section &&
            section.getBoundingClientRect().top <= viewingPoint
          ) {
            currentSection = section.id;
          }
        });
      }

      setActiveSection(currentSection);

      // Update URL without reloading the page
      if (window.location.hash !== `#${currentSection}`) {
        window.history.replaceState(null, "", `#${currentSection}`);
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const getLinkStyle = (href) =>
    activeSection === href.slice(1)
      ? "text-[#bd8990]"
      : "text-[#897773] hover:text-[#bd8990]";

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#eadeda]/70 bg-[#faf6f2]/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => {
            closeMenu();
            setActiveSection("about");
          }}
          className="w-fit font-['Dancing_Script'] text-2xl font-bold text-[#c47789] transition-opacity duration-300 hover:opacity-75"
        >
          SAMII
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${getLinkStyle(
                link.href
              )}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact button */}
        <a
          href="#contact"
          className="ml-auto hidden items-center gap-2 rounded-full border border-[#e5d3ce] px-5 py-3 text-sm font-medium text-[#493b3b] transition-all duration-300 hover:border-[#c99fa3] hover:bg-[#f3e7e4] md:flex"
        >
          Let's talk <ArrowUpRight size={16} />
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="col-start-3 ml-auto text-[#493b3b] transition hover:text-[#c99fa3] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-[#eadeda] bg-[#faf6f2]/95 px-6 py-6 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`text-base font-medium transition-colors duration-300 ${getLinkStyle(
                  link.href
                )}`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center gap-2 text-base font-medium text-[#493b3b]"
            >
              Let's talk <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}

      {/* Scroll progress line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#eadeda]/40">
        <div
          className="h-full bg-gradient-to-r from-[#e8cfcc] via-[#c99fa3] to-[#b88a8e]"
          style={{
            width: `${scrollProgress}%`,
            transition: "width 100ms linear",
          }}
        />
      </div>
    </nav>
  );
}
