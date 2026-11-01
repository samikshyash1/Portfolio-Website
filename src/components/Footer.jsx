
export default function Footer() {
  return (
    <footer className="border-t border-[#eadeda] bg-[#faf6f2]">
      <div className="section-container flex flex-col items-center justify-between gap-5 py-7 sm:flex-row">

        {/* Copyright */}
        <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-[13px] text-[#897773] sm:justify-start">
          Designed & built with

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3.5 w-3.5 text-[#c47789]"
            aria-label="love"
            role="img"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.02 6.02 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>

          by Samikshya.
        </p>

        {/* Back to top */}
        <a
          href="#home"
          className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#897773] transition-colors duration-300 hover:text-[#bd8990]"
        >
          Back to top
          <span className="transition-transform duration-300 group-hover:-translate-y-1">
            ↑
          </span>
        </a>

      </div>
    </footer>
  );
}
