import ImageWithFallback from "@/components/ImageWithFallback";

// Using the folder name as provided by the user: `public/affliations/`
// Paths below match the exact filenames found in that folder.
const affiliations = [
  { name: "Adobe", src: "/affliations/Adobe-Logo-History-1-1155x770.png" },
  {
    name: "MSME",
    src: "/affliations/msme-micro-small-medium-enterprises-logo-png_seeklogo-259373.png",
  },
  {
    name: "Rajasthan Technical University",
    src: "/affliations/Rajasthan_Technical_University_logo.jpg",
  },
  { name: "Microsoft", src: "/affliations/microsoft_logo.png" },
  { name: "Tally", src: "/affliations/Tally_-_Logo.png" },
  {
    name: "Skill Development Council Canada",
    src: "/affliations/skill_development_council_canada_cover.jpeg",
    boxClass: "w-60 h-24 md:w-64",
    imgClass: "saturate-150 contrast-150 brightness-110",
  },
  { name: "TechnoGlobe", src: "/affliations/technoglobe_logo.png" },
  {
    name: "Certiport",
    src: "/affliations/certiport-logo-png_seeklogo-301744.png",
  },
  { name: "TASA Incorporated", src: "/affliations/TASA_logo.png" },
  { name: "IBM", src: "/affliations/IBM-Logo.wine.png" },
  { name: "HPE", src: "/affliations/Hewlett_Packard_Enterprise-Logo.wine.svg" },
];

const Affiliations = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          Our Affiliations & Partners
        </h2>
        <div className="relative overflow-hidden py-2">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          <div className="flex items-center gap-8 md:gap-10 animate-infinite-scroll min-h-[96px] whitespace-nowrap min-w-max">
            {[...affiliations, ...affiliations].map((a, i) => (
              <div
                key={i}
                className="p-2 md:p-3 rounded-lg bg-white border border-border/60 shadow-soft flex-shrink-0"
                style={{ backgroundColor: "white" }}
              >
                <div
                  className={`flex items-center justify-center transition duration-300 w-48 h-24 ${
                    a.boxClass || ""
                  }`}
                >
                  <ImageWithFallback
                    src={a.src}
                    alt={a.name}
                    className={`max-h-full max-w-full object-contain drop-shadow-sm saturate-125 contrast-125 ${
                      a.imgClass || ""
                    }`}
                    fallback="/placeholder.svg"
                    loading="eager"
                    decoding="async"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
