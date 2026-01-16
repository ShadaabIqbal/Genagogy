const Loader = ({ fullScreen = true, size = "default" }) => {
  // Size variants
  const sizeClasses = {
    small: "w-12 h-12",
    default: "w-16 h-16",
    large: "w-24 h-24",
  };

  const containerClasses = fullScreen
    ? "fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-sm"
    : "flex items-center justify-center";

  return (
    <div className={containerClasses}>
      <div className="relative flex flex-col items-center justify-center gap-4">
        {/* Main Fluid Line Animation */}
        <div className={`relative ${sizeClasses[size] || sizeClasses.default}`}>
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
          
          {/* Fluid line that draws itself */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="175"
              strokeDashoffset="175"
              className="animate-draw-circle"
              style={{
                filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.4))",
              }}
            />
          </svg>

          {/* Inner pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-gentle"></div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 w-1 h-1 rounded-full bg-primary/60 animate-float-1"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-primary/40 animate-float-2"></div>
            <div className="absolute left-0 top-1/2 w-1 h-1 rounded-full bg-primary/50 animate-float-3"></div>
            <div className="absolute right-0 top-1/2 w-1 h-1 rounded-full bg-primary/30 animate-float-4"></div>
          </div>
        </div>

        {/* Subtle text (optional, only for full screen) */}
        {fullScreen && (
          <div className="mt-2">
            <p className="text-sm text-muted-foreground font-light tracking-wide animate-fade-in-delayed">
              Technoglobe
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;

