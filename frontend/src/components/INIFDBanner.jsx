import { ArrowRight, Sparkles, Award, Users, Palette } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Button } from "@/components/ui/button";

const INIFDBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Fashion Design Image with Elegant Frame */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700 border-4 border-white/10">
                <ImageWithFallback
                  src="/courses/graphic_designing.webp"
                  alt="Fashion Design Excellence"
                  fallback="/course-placeholder.jpg"
                  className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-cover"
                />
                
                {/* Elegant Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Fashion Icons Overlay */}
                <div className="absolute top-8 right-8 flex flex-col gap-3">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center">
                    <Palette className="h-8 w-8 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center ml-auto">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-md">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Award className="h-5 w-5" />
                  <span>Internationally Recognized</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - INIFD Content with Fashion Aesthetic */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* INIFD Logo - Larger and More Prominent */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl"></div>
                <div className="relative w-64 h-40 md:w-80 md:h-48 lg:w-96 lg:h-56 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <ImageWithFallback
                    src="/inifd_logo.png"
                    alt="INIFD - International Institute of Fashion Design"
                    fallback="/placeholder.svg"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Elegant Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 shadow-lg">
                <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">
                  Official Fashion Partner
                </span>
              </div>
            </div>

            {/* Stylish Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center lg:text-left leading-tight">
              <span className="block text-white mb-2">Fashion Design</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-rose-300">
                Excellence
              </span>
              <span className="block text-white text-3xl md:text-4xl lg:text-5xl mt-2 font-light">
                with <span className="font-bold">INIFD</span>
              </span>
            </h2>

            {/* Elegant Description */}
            <p className="text-lg md:text-xl text-white/90 text-center lg:text-left leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Join the prestigious <span className="font-semibold text-white">International Institute of Fashion Design</span> network. 
              Learn from industry experts and unlock your creative potential in fashion design, 
              interior design, and lifestyle management.
            </p>

            {/* Fashion-Forward Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {[
                { icon: Users, title: "Industry Experts", desc: "Learn from renowned fashion designers", color: "from-purple-500 to-purple-600" },
                { icon: Award, title: "Global Recognition", desc: "Internationally recognized certification", color: "from-pink-500 to-pink-600" },
                { icon: Sparkles, title: "Career Support", desc: "Placement assistance and mentorship", color: "from-rose-500 to-rose-600" },
                { icon: Palette, title: "Creative Portfolio", desc: "Build a professional design portfolio", color: "from-purple-500 to-pink-500" },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group relative flex items-start gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-lg">{feature.title}</h3>
                    <p className="text-sm text-white/70">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Elegant CTA Button */}
            <div className="flex justify-center lg:justify-start pt-6">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 rounded-xl overflow-hidden"
                asChild
              >
                <a
                  href="https://nifd.net.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 relative z-10"
                >
                  <span>Explore INIFD Programs</span>
                  <ArrowRight className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-2" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default INIFDBanner;
