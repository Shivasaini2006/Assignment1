const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a9d7f] focus:ring-offset-[#1a2e25] tracking-wide";

  const variants = {
    primary:
      "bg-[#4a9d7f] hover:bg-[#3d8669] text-white shadow-lg hover:shadow-2xl hover:shadow-[#4a9d7f]/30 hover:scale-105 active:scale-95",
    secondary:
      "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl hover:border-white/30",
    outline:
      "bg-transparent hover:bg-white/5 text-white border-2 border-white/30 hover:border-[#4a9d7f] hover:text-[#4a9d7f]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
