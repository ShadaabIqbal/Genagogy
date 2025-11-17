// components/AwardVideoCard.jsx
import React, { useRef, useState } from "react";

export default function AwardVideoCard({ src, title, description }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) {
      v.play();
      setPlaying(true);
    }
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className="
        w-full
        max-w-[380px]     /* Perfect width on mobile */
        h-[520px]         /* Tall vertical card */
        sm:w-64 sm:h-[520px]

        rounded-xl overflow-hidden
        border border-border/30
        shadow-lg bg-black
        flex-shrink-0
        transition-all duration-300
        hover:shadow-2xl hover:scale-[1.02]
      "
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video */}
      <div className="relative h-full bg-black">
        <video
          ref={videoRef}
          src={src}
          muted
          autoPlay
          playsInline
          loop
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        {/* Title */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg">
          {title}
        </div>

        {/* Controls (Mute / Play) */}
        <div
          className={`absolute bottom-4 right-4 flex gap-2 transition-all duration-500 ease-in-out ${
            showControls
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          {/* Mute */}
          <button
            onClick={toggleMute}
            className="bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {muted ? "Unmute" : "Mute"}
          </button>

          {/* Play / Pause */}
          <button
            onClick={togglePlay}
            className="bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="p-4 bg-background/80 backdrop-blur-sm border-t border-border/30">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
