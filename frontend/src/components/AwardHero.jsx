// components/AwardsHero.jsx
import React from "react";

export default function AwardsHero({
  title = "Awards & Recognition",
  subtitle,
}) {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#030303] via-[#07101a] to-[#07101a]">
      <div className="container-max py-16 sm:py-20 md:py-24 lg:py-32 relative px-4 sm:px-6">
        {/* Big premium icon / subtle gold emblem */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-lg mb-4 sm:mb-6">
            {/* premium emblem */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-yellow-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3l3.09 6.26L22 10.27l-5 4.88L18.18 21 12 17.77 5.82 21 7 15.15l-5-4.88 6.91-1.01L12 3z"
              />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            {subtitle ||
              "Celebrating excellence, achievements, and the milestones that define Technoglobe's journey of impact."}
          </p>
        </div>
      </div>
    </section>
  );
}
