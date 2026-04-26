import Link from "next/link";

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = "primary", 
  className = "", 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 active:translate-y-1 rounded-sm";
  
  const variants = {
    primary: "px-10 py-5 bg-brand text-white hover:bg-brand-dark shadow-xl shadow-brand/10",
    secondary: "px-10 py-5 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
    outline: "px-6 py-3 border border-slate-300 text-slate-600 hover:border-brand hover:text-brand",
    ghost: "px-4 py-2 text-slate-600 hover:text-brand"
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles} {...props}>
      {children}
    </button>
  );
}



