"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  Tags, 
  ShoppingBag,
  MessageSquare, 
  Image as ImageIcon, 
  Settings, 
  LogOut,
  ChevronRight,
  Globe,
  Users
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AdminGuard from "@/components/AdminGuard";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", href: "/admin" },
    { icon: <Package size={20} />, label: "Products", href: "/admin/products" },
    { icon: <Tags size={20} />, label: "Categories", href: "/admin/categories" },
    { icon: <ShoppingBag size={20} />, label: "Orders", href: "/admin/orders" },
    { icon: <MessageSquare size={20} />, label: "Inquiries", href: "/admin/inquiries" },
    { icon: <ImageIcon size={20} />, label: "Banners", href: "/admin/banners" },
    { icon: <Users size={20} />, label: "Users", href: "/admin/users" },
    { icon: <Settings size={20} />, label: "Site Settings", href: "/admin/settings" },
  ];

  return (
    <AdminGuard>
      <div className="flex min-h-screen bg-slate-50">
      {}
      <aside className="w-64 bg-brand-blue text-white fixed h-full flex flex-col">
        <div className="p-8">
          <h2 className="text-xl font-black tracking-tighter uppercase">Sparkel <span className="text-brand">Admin</span></h2>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 mb-6 text-[10px] font-black uppercase tracking-widest text-brand hover:text-white hover:bg-brand transition-all border border-brand/20 rounded-sm"
          >
            <Globe size={20} />
            Back to Website
          </Link>

          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all ${
                pathname === item.href 
                ? "bg-brand text-white shadow-lg shadow-brand/20" 
                : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                {item.label}
              </div>
              {pathname === item.href && <ChevronRight size={14} />}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-3 text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-brand transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {}
      <main className="ml-64 flex-1 p-10">
        <header className="flex justify-between items-center mb-10 pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-2xl font-black text-brand-blue uppercase tracking-tight">
              {menuItems.find(i => i.href === pathname)?.label || "Admin Panel"}
            </h1>
            <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-widest">Welcome back, Administrator</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right">
                <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest">{user?.name || 'Admin User'}</p>
                <p className="text-[8px] text-slate-400 font-medium uppercase tracking-widest">Administrator</p>
             </div>
             <div className="w-10 h-10 bg-brand rounded-full border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-white">
               {user?.avatar ? (
                 <img src={user.avatar} alt="Admin" className="w-full h-full object-cover" />
               ) : (
                 <LayoutDashboard size={20} />
               )}
             </div>
          </div>
        </header>

        {children}
      </main>
    </div>
    </AdminGuard>
  );
}




