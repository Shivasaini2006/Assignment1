import Image from "next/image";
import Button from "./Button";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen pt-24 md:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1a2e25]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 md:space-y-10 z-10">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight">
                Earth&apos;s Exhale
              </h1>
              <p className="text-lg sm:text-xl md:text-[1.15rem] text-white/70 max-w-xl leading-relaxed font-light">
                We&apos;re Earth advocates promoting beauty and health of
                Earth&apos;s exhale using improved technology and creativity.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Video
              </Button>
            </div>

            {/* Feature Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-[1.25rem] p-6 md:p-7 border border-white/10 max-w-md shadow-xl">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#4a9d7f]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-7 h-7 text-[#4a9d7f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-semibold text-[1.1rem]">
                    Amazing plants
                  </h3>
                  <p className="text-white/60 text-[0.9rem] leading-relaxed font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Plant Images */}
          <div className="relative h-[550px] md:h-[650px] lg:h-[700px]">
            {/* Main Large Plant */}
            <div className="absolute top-0 right-0 w-[75%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#1a2e25]">
              <div className="relative w-full h-full bg-gradient-to-br from-[#2d5f4d] to-[#1a3a2e]">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                  alt="Beautiful green plant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Featured Plant Card - Positioned like Figma */}
            <div className="absolute top-[45%] right-0 bg-white/10 backdrop-blur-xl rounded-[1.5rem] p-5 border border-white/20 shadow-2xl max-w-[180px]">
              <img
                src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200&q=80"
                alt="Monstera plant"
                className="w-full h-32 object-cover rounded-xl mb-3"
              />
              <p className="text-white/60 text-xs mb-1 font-light">
                Recent Buy
              </p>
              <h4 className="text-white font-semibold text-sm mb-3">
                Monstera plant
              </h4>
              <Button variant="secondary" size="sm">
                Buy Now
              </Button>
            </div>

            {/* Small Plant Top Left */}
            <div className="absolute top-0 left-0 w-36 h-36 md:w-44 md:h-44 rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-[#1a2e25]">
              <img
                src="https://images.unsplash.com/photo-1459156212016-c812468e2115?w=300&q=80"
                alt="Small decorative plant"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative floating dots */}
            <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#4a9d7f] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      {/* Background Blur Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#4a9d7f]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-[#2d5f4d]/5 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
