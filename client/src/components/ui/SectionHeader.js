export default function SectionHeader({ 
  badge, 
  title, 
  description, 
  align = "left",
  className = "" 
}) {
  const isCentered = align === "center";

  return (
    <div className={`mb-10 md:mb-16 ${isCentered ? "text-center mx-auto" : ""} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-4 ${isCentered ? "justify-center" : ""}`}>
          <span className="text-brand font-bold uppercase tracking-widest text-[10px]">
            {badge}
          </span>
        </div>
      )}
      
      <h2 className="text-3xl md:text-5xl font-bold text-brand-blue leading-tight uppercase tracking-tight mb-4">
        {title}
      </h2>
      
      {description && (
        <p className={`text-slate-500 font-medium text-sm md:text-lg leading-relaxed max-w-2xl ${isCentered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}





