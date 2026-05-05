export default function SectionHeader({ 
  badge, 
  title, 
  description, 
  align = "left",
  className = "" 
}) {
  const isCentered = align === "center";

  return (
    <div className={`mb-8 md:mb-16 ${isCentered ? "text-center mx-auto" : ""} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3 md:mb-4 ${isCentered ? "justify-center" : ""}`}>
          <span className="text-brand font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px]">
            {badge}
          </span>
        </div>
      )}
      
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-brand-blue leading-[1.2] uppercase tracking-tight mb-3 md:mb-4">
        {title}
      </h2>
      
      {description && (
        <p className={`text-slate-500 font-medium text-[11px] md:text-lg leading-relaxed max-w-2xl ${isCentered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}






