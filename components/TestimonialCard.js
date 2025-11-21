const TestimonialCard = ({ review }) => {
  const { name, role, rating, comment, avatar } = review;

  return (
    <div className="bg-[#1a3a2e]/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#4a9d7f]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#4a9d7f]/5 group">
      {/* Header with Avatar and Info */}
      <div className="flex items-start gap-4 mb-6">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-[#4a9d7f]/30 group-hover:border-[#4a9d7f] transition-colors duration-500"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#4a9d7f] rounded-full flex items-center justify-center border-2 border-[#0f1e19]">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-white text-lg md:text-xl font-bold">
                {name}
              </h4>
              <p className="text-white/60 text-sm">{role}</p>
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1">
              {[...Array(rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Review Comment */}
      <div className="relative">
        <svg
          className="absolute -top-2 -left-2 w-8 h-8 text-[#4a9d7f]/20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-white/70 text-sm md:text-base leading-relaxed pl-6">
          {comment}
        </p>
      </div>

      {/* Decorative element */}
      <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-white/40 text-xs">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Verified Purchase</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
