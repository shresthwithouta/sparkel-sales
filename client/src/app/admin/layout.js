"use client";

import { useState } from "react";
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
  Users,
  Menu,
  X
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AdminGuard from "@/components/AdminGuard";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: <LayoutDashboard size={18} />, label: "Dashboard", href: "/admin" },
    { icon: <Package size={18} />, label: "Products", href: "/admin/products" },
    { icon: <Tags size={18} />, label: "Categories", href: "/admin/categories" },
    { icon: <ShoppingBag size={18} />, label: "Orders", href: "/admin/orders" },
    { icon: <MessageSquare size={18} />, label: "Inquiries", href: "/admin/inquiries" },
    { icon: <ImageIcon size={18} />, label: "Banners", href: "/admin/banners" },
    { icon: <Users size={18} />, label: "Users", href: "/admin/users" },
    { icon: <Settings size={18} />, label: "Site Settings", href: "/admin/settings" },
  ];

  const SidebarContent = () => (
    <>
      <div className="p-8">
        <h2 className="text-xl font-black tracking-tighter uppercase leading-none">
          Spark <span className="text-brand">Innovations</span>
          <span className="block text-[10px] text-white/40 mt-1">Admin Dashboard</span>
        </h2>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1.5">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 mb-6 text-[9px] font-black uppercase tracking-widest text-brand hover:text-white hover:bg-brand transition-all border border-brand/20 rounded-sm"
        >
          <Globe size={18} />
          View Website
        </Link>

        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-4 py-3 rounded-sm text-[9px] font-black uppercase tracking-widest transition-all ${
              pathname === item.href 
              ? "bg-brand text-white shadow-xl shadow-brand/20" 
              : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              {item.label}
            </div>
            {pathname === item.href && <ChevronRight size={12} />}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-3 text-[9px] font-black uppercase tracking-widest text-white/60 hover:text-brand transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </>
  );

  return (
    <AdminGuard>
      <div className="min-h-screen bg-slate-50 flex">
        {}
        <aside className="hidden lg:flex w-64 bg-brand-blue text-white fixed h-full flex-col z-50">
          <SidebarContent />
        </aside>

        {}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <aside 
          className={`lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-brand-blue text-white z-[70] transition-transform duration-500 ease-in-out flex flex-col ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent />
        </aside>

        {}
        <main className="flex-1 lg:ml-64 min-h-screen">
          <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-brand-blue hover:bg-slate-50 rounded-sm transition-colors"
              >
                <Menu size={24} />
              </button>
              <div>
                <h1 className="text-lg md:text-xl font-black text-brand-blue uppercase tracking-tight leading-none">
                  {menuItems.find(i => i.href === pathname)?.label || "Admin Panel"}
                </h1>
                <p className="hidden md:block text-[8px] text-slate-400 font-medium mt-1 uppercase tracking-widest">Management Portal</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="hidden md:block text-right">
                <p className="text-[9px] font-black text-brand-blue uppercase tracking-widest leading-none">{user?.name || 'Admin User'}</p>
                <p className="text-[7px] text-slate-400 font-medium uppercase tracking-widest mt-1">Administrator</p>
              </div>
              <div className="w-9 h-9 md:w-10 md:h-10 bg-brand rounded-full border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-white">
                {user?.avatar ? (
                  <img src={user.avatar} alt="Admin" className="w-full h-full object-cover" />
                ) : (
                  <LayoutDashboard size={18} />
                )}
              </div>
            </div>
          </header>

          <div className="p-4 md:p-8 lg:p-10">
            {children}
          </div>
        </main>
      </div>
    </AdminGuard>
  );
}
