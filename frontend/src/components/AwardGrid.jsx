// components/AwardGrid.jsx
import React, { useState } from "react";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function AwardGrid({ logos = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="container-max py-8 px-4 sm:px-6">
        <div className="bg-card rounded-2xl p-4 sm:p-6 border border-border/40 shadow-inner">
          <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
            Awards & Certificates
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            Selected recognitions & partner awards. Click to view larger.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 auto-rows-fr">
            {logos.map((src, i) => (
              <button
                key={i}
                onClick={() => openModal(src)}
                className="
                  flex items-center justify-center 
                  p-3 
                  bg-background/40 
                  rounded-lg 
                  border border-border/20 
                  hover:scale-105 
                  hover:shadow-xl
                  hover:border-primary/50
                  transition-all duration-300 
                  cursor-pointer
                  group
                "
              >
                <ImageWithFallback
                  src={src}
                  alt={`award-${i}`}
                  fallback="/placeholder.svg"
                  className="max-h-16 sm:max-h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />

                {/* Zoom indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 rounded-lg pointer-events-none">
                  <svg
                    className="w-6 h-6 text-white drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div className="pointer-events-auto relative max-w-5xl max-h-[90vh] w-full">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-[60] 
             bg-white/20 hover:bg-white/30 
             backdrop-blur-md border border-white/30 
             text-white p-3 rounded-full shadow-2xl 
             transition-all duration-300 hover:scale-110"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image container */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
                <img
                  src={selectedImage}
                  alt="Award certificate"
                  className="w-full h-full max-h-[80vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Download hint */}
              <div className="text-center mt-4 text-white/60 text-sm">
                Click outside to close • Right-click to save image
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
