"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { fetchUsers, updateAdminUser } from "@/lib/api";
import { 
  Users, 
  Search, 
  UserCircle, 
  Mail, 
  Calendar, 
  Shield, 
  MoreVertical,
  CheckCircle2,
  XCircle,
  Loader2,
  RefreshCcw
} from "lucide-react";

export default function AdminUsersPage() {
  const { token } = useAuth();
  const { showToast } = useToast();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  const loadUsers = async (showLoading = true) => {
    try {
      if (showLoading) setLoading(true);
      const data = await fetchUsers(token);
      setUsers(data.users || []);
    } catch (error) {
      console.error("Failed to load users:", error);
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const initLoad = async () => {
      try {
        const data = await fetchUsers(token);
        if (isMounted) {
          setUsers(data.users || []);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Failed to load users:", error);
          setLoading(false);
        }
      }
    };
    
    initLoad();
    return () => { isMounted = false; };
  }, [token]);

  const handleRoleToggle = async (userId, currentRole) => {
    const newRole = currentRole === "admin" ? "user" : "admin";
    
    try {
      setUpdatingId(userId);
      await updateAdminUser(token, userId, { role: newRole });
      setUsers(prev => prev.map(u => u._id === userId ? { ...u, role: newRole } : u));
      showToast(`User role updated to ${newRole}`, "success");
    } catch (error) {
      showToast("Failed to update user role", "error");
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredUsers = users.filter(user => 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10 animate-reveal">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight mb-2">User Management</h1>
          <p className="text-slate-500 text-sm font-medium">View and manage all registered accounts on Spark Innovations.</p>
        </div>
        <button 
          onClick={loadUsers}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-sm text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-brand hover:border-brand transition-all"
        >
          <RefreshCcw size={14} className={loading ? "animate-spin" : ""} />
          Refresh List
        </button>
      </div>

      {}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">
              <Users size={18} />
            </div>
            <div className="min-w-0 overflow-hidden">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest truncate">Total Users</p>
              <h3 className="text-xl font-black text-brand-blue leading-none truncate">{users.length}</h3>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shrink-0">
              <Shield size={18} />
            </div>
            <div className="min-w-0 overflow-hidden">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest truncate">Admins</p>
              <h3 className="text-xl font-black text-brand-blue leading-none truncate">
                {users.filter(u => u.role === 'admin').length}
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center shrink-0">
              <UserCircle size={18} />
            </div>
            <div className="min-w-0 overflow-hidden">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest truncate">Customers</p>
              <h3 className="text-xl font-black text-brand-blue leading-none truncate">
                {users.filter(u => u.role === 'user').length}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden">
        <div className="p-4 md:p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-sm text-xs focus:outline-none focus:border-brand transition-colors font-medium"
            />
          </div>
          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
            {filteredUsers.length} Users Listed
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[9px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-200">
                <th className="px-4 md:px-6 py-4">User</th>
                <th className="px-4 md:px-6 py-4 hidden md:table-cell">Contact</th>
                <th className="px-4 md:px-6 py-4 hidden md:table-cell">Joined On</th>
                <th className="px-4 md:px-6 py-4">Role</th>
                <th className="px-4 md:px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-4 py-20 text-center">
                    <Loader2 className="animate-spin text-brand mx-auto mb-4" size={24} />
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Loading Accounts...</p>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-4 py-20 text-center">
                    <XCircle className="text-slate-200 mx-auto mb-4" size={40} />
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">No users found</p>
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center font-black text-[10px] border border-slate-100 uppercase shrink-0">
                          {user.name?.charAt(0) || <UserCircle size={16} />}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[12px] font-black text-brand-blue uppercase tracking-tight truncate">{user.name}</p>
                          <p className="text-[8px] text-slate-300 font-bold uppercase tracking-widest truncate">ID: {user._id.substring(0, 6)}...</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 hidden md:table-cell">
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Mail size={12} className="text-slate-300" />
                          <span className="text-[11px] font-medium truncate max-w-[140px]">{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 hidden md:table-cell">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar size={12} className="text-slate-300" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                          {new Date(user.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: '2-digit'
                          })}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${
                        user.role === 'admin' 
                          ? 'bg-brand text-white shadow-sm shadow-brand/10' 
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {user.role === 'admin' ? <Shield size={8} /> : <UserCircle size={8} />}
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-right">
                      {updatingId === user._id ? (
                        <Loader2 className="animate-spin text-brand ml-auto" size={16} />
                      ) : (
                        <button 
                          onClick={() => handleRoleToggle(user._id, user.role)}
                          className="p-1.5 text-slate-300 hover:text-brand hover:bg-white rounded-sm transition-all"
                          title="Toggle Role"
                        >
                          <RefreshCcw size={16} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
