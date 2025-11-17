// components/AwardHighlight.jsx
import React from "react";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function AwardHighlight({
  image,
  headline,
  subheadline,
  description,
}) {
  return (
    <section className="relative container-max -mt-16 mb-12">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative h-[420px] lg:h-[520px] bg-black">
          <ImageWithFallback
            src={image}
            alt={headline}
            fallback="/placeholder.svg"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

          {/* Floating text card */}
          <div className="absolute left-6 lg:left-12 bottom-6 lg:bottom-12 max-w-lg bg-black/60 backdrop-blur-md border border-primary/20 rounded-xl p-6 lg:p-8 shadow-lg">
            <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">
              {headline}
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              {subheadline}
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed line-clamp-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
