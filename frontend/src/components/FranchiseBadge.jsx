import { Typewriter } from "react-simple-typewriter";

const FranchiseBadge = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mb-12 md:space-x-8 space-y-4 md:space-y-0">
      {/* Technoglobe Logo */}
      <div className="flex-shrink-0">
        <img
          src="../../public/affliations/technoglobe_logo.png" // adjust filename
          alt="Technoglobe Logo"
          className="w-36 h-36 md:w-48 md:h-48 object-contain" // bigger logo
        />
      </div>

      {/* Typewriter Tagline */}
      <div className="bg-white/20 backdrop-blur-md px-8 py-5 rounded-full shadow-lg flex items-center justify-center">
        <span className="text-lg md:text-2xl font-extrabold text-primary tracking-wide">
          <Typewriter
            words={[
              "Part of the Technoglobe Network",
              "Powered by Technoglobe Excellence",
              "Leveraging Technoglobe Expertise"
            ]}
            loop={0} // infinite loop
            cursor
            cursorStyle={<span className="text-yellow-400">•</span>} // colored dot
            typeSpeed={80} // faster typing
            deleteSpeed={40} // faster deleting
            delaySpeed={1500}
          />
        </span>
      </div>
    </div>
  );
};

export default FranchiseBadge;
