import Button from "./Button";

function ProductCard({ plant }) {
  const { name, description, price, image } = plant;

  return (
    <div className="group bg-[#1f3a30]/50 backdrop-blur-sm rounded-[1.5rem] overflow-hidden border border-white/10 hover:border-[#4a9d7f]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4a9d7f]/10 hover:-translate-y-3">
      {/* Image Container */}
      <div className="relative h-60 md:h-64 overflow-hidden bg-gradient-to-br from-[#2d5f4d]/40 to-[#1a3a2e]/40">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a2e]/60 via-transparent to-transparent"></div>

        {/* Quick Action Button */}
        <button
          aria-label="Quick view"
          className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#4a9d7f] hover:scale-110"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-6 md:p-6 space-y-4">
        <div className="space-y-2.5">
          <h3 className="text-white text-lg md:text-xl font-semibold leading-tight tracking-tight group-hover:text-[#4a9d7f] transition-colors">
            {name}
          </h3>
          <p className="text-white/55 text-sm leading-relaxed line-clamp-2 font-light">
            {description}
          </p>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div className="space-y-1">
            <p className="text-white/45 text-xs uppercase tracking-wider font-medium">
              Price
            </p>
            <p className="text-white text-xl md:text-2xl font-bold tracking-tight">
              Rs. {price}/-
            </p>
          </div>

          <button
            aria-label="Add to cart"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#4a9d7f] hover:bg-[#3d8669] transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg shadow-[#4a9d7f]/30"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Hover Indicator */}
      <div className="h-1 bg-gradient-to-r from-[#4a9d7f] to-[#2d5f4d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
}

export default ProductCard;
