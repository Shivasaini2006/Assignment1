import Button from "./Button";

function PlantCard({ plant, large = false }) {
  const { name, description, price, image } = plant;

  return (
    <div className="group relative bg-gradient-to-br from-[#1f3a30]/80 to-[#2d5f4d]/60 rounded-[1.75rem] overflow-hidden border border-white/10 hover:border-[#4a9d7f]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4a9d7f]/20 hover:-translate-y-2 backdrop-blur-sm">
      {/* Image Container */}
      <div
        className={`relative ${
          large ? "h-72 md:h-80" : "h-64 md:h-72"
        } overflow-hidden`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a2e] via-transparent to-transparent opacity-70"></div>
      </div>

      {/* Content */}
      <div className="p-7 md:p-8 space-y-5">
        <div className="space-y-3">
          <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight tracking-tight">
            {name}
          </h3>
          <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-3">
          <div className="space-y-1">
            <p className="text-white/50 text-xs uppercase tracking-wider font-medium">
              Price
            </p>
            <p className="text-white text-2xl md:text-3xl font-bold tracking-tight">
              Rs. {price}/-
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="primary" size="md">
              Explore
            </Button>
            <button
              aria-label="Add to cart"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#4a9d7f] border border-white/20 hover:border-[#4a9d7f] transition-all duration-300 group/btn"
            >
              <svg
                className="w-5 h-5 text-white transition-transform group-hover/btn:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hover Indicator */}
      <div className="absolute top-5 right-5 w-2.5 h-2.5 bg-[#4a9d7f] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-[#4a9d7f]/50"></div>
    </div>
  );
}

export default PlantCard;
