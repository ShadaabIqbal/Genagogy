import React from "react";
import { Typewriter } from "react-simple-typewriter";

const FranchiseBadge = () => {
  return (
    <section className="flex justify-center mt-8 mb-12 relative">
      <div className="flex items-center gap-8">
        {/* HD Logo */}
        <div className="flex-shrink-0 w-36 h-36 md:w-48 md:h-48">
          <img
            src="/affliations/technoglobe_srinagar_logo.png"
            alt="Technoglobe Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <div className="text-2xl md:text-3xl font-extrabold text-foreground tracking-wide leading-tight">
            Part of the Technoglobe Network
          </div>
          <div className="text-base md:text-lg text-muted-foreground mt-1">
            <Typewriter
              words={[
                "Trusted Excellence in Learning",
                "Empowering Future Professionals",
                "World-Class Education Standards",
                "Shaping Careers with Expertise",
              ]}
              loop={0} // infinite loop
              cursor // show cursor
              cursorStyle="|" // simple elegant cursor
              typeSpeed={70} // typing speed
              deleteSpeed={40} // deleting speed
              delaySpeed={2000} // delay before next word
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseBadge;
