import SectionTitle from "./SectionTitle";
import Button from "./Button";

function BestO2Section() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Our Best o₂</SectionTitle>

        <div className="mt-12 bg-gradient-to-br from-[#1a3a2e] to-[#2d5f4d] rounded-3xl overflow-hidden border-2 border-[#4a9d7f]/30 hover:border-[#4a9d7f] transition-all duration-500 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
            {/* Image Side */}
            <div className="relative h-80 lg:h-auto min-h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80"
                alt="Best O2 Plant - Premium oxygen producing plant"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a3a2e]/80 lg:to-[#1a3a2e]"></div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-[#4a9d7f] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Best Seller
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  We Have Best Eco Plant for O₂ Plants
                </h3>
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Produces maximum oxygen",
                  "Purifies indoor air quality",
                  "Low maintenance required",
                  "Perfect for home & office",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4a9d7f] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="primary" size="lg">
                  Shop Now
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#4a9d7f]">
                    500+
                  </p>
                  <p className="text-white/60 text-xs md:text-sm mt-1">
                    Happy Customers
                  </p>
                </div>
                <div className="text-center border-x border-white/10">
                  <p className="text-2xl md:text-3xl font-bold text-[#4a9d7f]">
                    98%
                  </p>
                  <p className="text-white/60 text-xs md:text-sm mt-1">
                    Satisfaction
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#4a9d7f]">
                    5★
                  </p>
                  <p className="text-white/60 text-xs md:text-sm mt-1">
                    Average Rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestO2Section;
