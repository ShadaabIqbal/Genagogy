// components/AwardLongCard.jsx
import React from "react";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function AwardLongCard({ image, title, body }) {
  return (
    <section className="container-max my-8 px-4 sm:px-6">
      <div className="rounded-2xl overflow-hidden border border-border/40 shadow-lg bg-gradient-to-br from-background via-card to-muted/5 flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-auto">
          <ImageWithFallback
            src={image}
            alt={title}
            fallback="/placeholder.svg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 sm:p-6 lg:p-10 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{body}</p>
        </div>
      </div>
    </section>
  );
}
