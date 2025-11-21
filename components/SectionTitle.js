function SectionTitle({ children, centered = true }) {
  return (
    <div className={`${centered ? "text-center" : ""} space-y-4`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white relative inline-block tracking-tight">
        {children}
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#4a9d7f] rounded-full"></span>
      </h2>
    </div>
  );
}

export default SectionTitle;
