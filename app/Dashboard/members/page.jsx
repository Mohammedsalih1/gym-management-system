"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Users, UserCheck, AlertCircle, Wallet, Plus, Search,
  ChevronDown, Pencil, RefreshCw, Trash2, X, CheckCircle,
  UserX, TrendingUp,
} from "lucide-react";
// import {
//   getMembers, addMember, updateMember, deleteMember,
//   renewSubscription, getMemberStatus, getRemainingDays, PLANS,
// } from "@/services/storage";

import {   getMembers, addMember, updateMember, deleteMember,
  renewSubscription, getMemberStatus, getRemainingDays, PLANS, } from "@/app/services/storage";


const PLAN_OPTIONS = Object.keys(PLANS);
const STATUS_STYLE = {
  "نشط":          { bg: "rgba(34,197,94,0.1)",  color: "#86efac", border: "rgba(34,197,94,0.25)"  },
  "منتهي":        { bg: "rgba(239,68,68,0.1)",  color: "#fca5a5", border: "rgba(239,68,68,0.25)"  },
  "ينتهي قريباً": { bg: "rgba(249,115,22,0.1)", color: "#fdba74", border: "rgba(249,115,22,0.25)" },
};
function StatusBadge({ endDate }) {
  const status = getMemberStatus(endDate);
  const s = STATUS_STYLE[status];
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
      {status}
    </span>
  );
}
function ActionButton({ icon: Icon, label, color, onClick, full }) {
  return (
    <button onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${full ? "flex-1 justify-center" : ""}`}
      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
      onMouseEnter={(e) => { e.currentTarget.style.background = `${color}30`; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = `${color}18`; e.currentTarget.style.transform = "translateY(0)"; }}>
      <Icon size={12} />
      {label}
    </button>
  );
}
function Input({ label, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && <label className="block text-sm font-semibold" style={{ color: "#e4e4e7" }}>{label}</label>}
      <input
        className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200"
        style={{ background: "rgba(39,39,42,0.8)", border: "1px solid rgba(63,63,70,0.8)" }}
        onFocus={(e) => { e.currentTarget.style.border = "1px solid rgba(249,115,22,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.1)"; }}
        onBlur={(e) => { e.currentTarget.style.border = "1px solid rgba(63,63,70,0.8)"; e.currentTarget.style.boxShadow = "none"; }}
        {...props}
      />
    </div>
  );
}
function SelectField({ label, children, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && <label className="block text-sm font-semibold" style={{ color: "#e4e4e7" }}>{label}</label>}
      <select
        className="w-full px-4 py-2.5 rounded-xl text-sm text-white outline-none transition-all duration-200 appearance-none cursor-pointer"
        style={{ background: "rgba(39,39,42,0.9)", border: "1px solid rgba(63,63,70,0.8)" }}
        onFocus={(e) => { e.currentTarget.style.border = "1px solid rgba(249,115,22,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.1)"; }}
        onBlur={(e) => { e.currentTarget.style.border = "1px solid rgba(63,63,70,0.8)"; e.currentTarget.style.boxShadow = "none"; }}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="w-full max-w-md rounded-2xl overflow-hidden"
        style={{ background: "rgba(24,24,27,0.98)", border: "1px solid rgba(63,63,70,0.6)", boxShadow: "0 25px 60px rgba(0,0,0,0.6)" }}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(63,63,70,0.4)" }}>
          <h3 className="text-white font-bold text-base">{title}</h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors p-1 rounded-lg"
            style={{ border: "1px solid rgba(63,63,70,0.4)" }}>
            <X size={16} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
function ConfirmModal({ message, onConfirm, onClose }) {
  return (
    <Modal title="تأكيد الحذف" onClose={onClose}>
      <div className="flex flex-col items-center text-center gap-5">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
          <Trash2 size={24} style={{ color: "#ef4444" }} />
        </div>
        <p className="text-[#d4d4d8] text-sm leading-relaxed">{message}</p>
        <div className="flex gap-3 w-full">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{ background: "rgba(63,63,70,0.4)", color: "#a1a1aa", border: "1px solid rgba(63,63,70,0.5)" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(63,63,70,0.6)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(63,63,70,0.4)"}>
            إلغاء
          </button>
          <button onClick={onConfirm} className="flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #ef4444, #dc2626)", color: "#fff", boxShadow: "0 4px 15px rgba(239,68,68,0.3)" }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-1px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
            حذف
          </button>
        </div>
      </div>
    </Modal>
  );
}
const TODAY = new Date().toISOString().split("T")[0];
function AddMemberModal({ onClose, onSaved }) {
  const [form, setForm] = useState({ name: "", phone: "", plan: PLAN_OPTIONS[0], startDate: TODAY });
  const [loading, setLoading] = useState(false);
  const planInfo = PLANS[form.plan];
  const endDate = form.startDate
    ? new Date(new Date(form.startDate).getTime() + planInfo.durationDays * 86400000).toISOString().split("T")[0]
    : "";
  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setLoading(true);
    setTimeout(() => { addMember(form); onSaved(); onClose(); }, 300);
  }
  return (
    <Modal title="+ إضافة عضو جديد" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="الاسم الكامل" placeholder="أحمد محمد" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <Input label="رقم الهاتف" placeholder="05xxxxxxxx" dir="ltr" value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
        <SelectField label="الخطة" value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })}>
          {PLAN_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
        </SelectField>
        <Input label="تاريخ البداية" type="date" dir="ltr" value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
        <div className="rounded-xl p-3 space-y-1.5" style={{ background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.15)" }}>
          <div className="flex justify-between text-xs">
            <span style={{ color: "#a1a1aa" }}>السعر</span>
            <span className="font-bold" style={{ color: "#fb923c" }}>{planInfo.price} ج</span>
          </div>
          <div className="flex justify-between text-xs">
            <span style={{ color: "#a1a1aa" }}>تاريخ الانتهاء</span>
            <span className="font-bold text-white" dir="ltr">{endDate}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span style={{ color: "#a1a1aa" }}>المدة</span>
            <span className="font-bold text-white">{planInfo.durationDays} يوم</span>
          </div>
        </div>
        <button type="submit" disabled={loading}
          className="w-full py-3 rounded-xl text-white font-bold text-sm transition-all duration-300 disabled:opacity-70"
          style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 4px 20px rgba(249,115,22,0.3)" }}
          onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(249,115,22,0.45)"; } }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(249,115,22,0.3)"; }}>
          {loading ? "جاري الإضافة..." : "إضافة العضو"}
        </button>
      </form>
    </Modal>
  );
}
function EditMemberModal({ member, onClose, onSaved }) {
  const [form, setForm] = useState({ name: member.name, phone: member.phone, plan: member.plan });
  const [loading, setLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { updateMember(member.id, form); onSaved(); onClose(); }, 300);
  }
  return (
    <Modal title="تعديل بيانات العضو" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="الاسم الكامل" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <Input label="رقم الهاتف" dir="ltr" value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
        <SelectField label="الخطة" value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })}>
          {PLAN_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
        </SelectField>
        <button type="submit" disabled={loading}
          className="w-full py-3 rounded-xl text-white font-bold text-sm transition-all duration-300 disabled:opacity-70"
          style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 4px 20px rgba(249,115,22,0.3)" }}
          onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}>
          {loading ? "جاري الحفظ..." : "حفظ التعديلات"}
        </button>
      </form>
    </Modal>
  );
}
const RENEW_OPTIONS = [
  { label: "30 يوم", days: 30 },
  { label: "60 يوم", days: 60 },
  { label: "90 يوم", days: 90 },
];
function RenewModal({ member, onClose, onSaved }) {
  const [selected, setSelected] = useState(30);
  const [loading, setLoading] = useState(false);
  function handleRenew() {
    setLoading(true);
    setTimeout(() => { renewSubscription(member.id, selected); onSaved(); onClose(); }, 300);
  }
  return (
    <Modal title="تجديد الاشتراك" onClose={onClose}>
      <div className="space-y-5">
        <div className="flex items-center gap-3 p-3 rounded-xl"
          style={{ background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.15)" }}>
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
            {member.name[0]}
          </div>
          <div>
            <p className="text-white font-semibold text-sm">{member.name}</p>
            <p className="text-xs" style={{ color: "#a1a1aa" }}>{member.plan}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold mb-2" style={{ color: "#e4e4e7" }}>اختر مدة التجديد</p>
          <div className="grid grid-cols-3 gap-2">
            {RENEW_OPTIONS.map(({ label, days }) => (
              <button key={days} onClick={() => setSelected(days)}
                className="py-3 rounded-xl text-sm font-bold transition-all duration-200"
                style={selected === days
                  ? { background: "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(249,115,22,0.1))", color: "#fb923c", border: "1px solid rgba(249,115,22,0.4)", boxShadow: "0 0 15px rgba(249,115,22,0.15)" }
                  : { background: "rgba(39,39,42,0.6)", color: "#a1a1aa", border: "1px solid rgba(63,63,70,0.5)" }}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleRenew} disabled={loading}
          className="w-full py-3 rounded-xl text-white font-bold text-sm transition-all duration-300 disabled:opacity-70"
          style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 4px 20px rgba(249,115,22,0.3)" }}
          onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}>
          {loading ? "جاري التجديد..." : `تجديد لمدة ${selected} يوم`}
        </button>
      </div>
    </Modal>
  );
}
export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("الكل");
  const [sortBy, setSortBy] = useState("الأحدث");
  const [modal, setModal] = useState(null);
  const reload = useCallback(() => setMembers(getMembers()), []);
  useEffect(() => { reload(); }, [reload]);
  const enriched = members.map((m) => ({
    ...m,
    status: getMemberStatus(m.endDate),
    remainingDays: getRemainingDays(m.endDate),
  }));
  const stats = {
    total:    enriched.length,
    active:   enriched.filter((m) => m.status === "نشط").length,
    expiring: enriched.filter((m) => m.status === "ينتهي قريباً").length,
    revenue:  enriched.filter((m) => m.status !== "منتهي").reduce((s, m) => s + (m.price || 0), 0),
  };
  const STATS_CARDS = [
    { label: "عدد الأعضاء",        value: stats.total,                    suffix: "",    icon: Users,       accent: "#f97316", glow: "rgba(249,115,22,0.12)", border: "rgba(249,115,22,0.2)",  trend: "إجمالي المسجلين"       },
    { label: "الاشتراكات النشطة",  value: stats.active,                   suffix: "",    icon: UserCheck,   accent: "#22c55e", glow: "rgba(34,197,94,0.1)",   border: "rgba(34,197,94,0.2)",   trend: "اشتراك فعّال"          },
    { label: "تنتهي قريباً",       value: stats.expiring,                 suffix: "",    icon: AlertCircle, accent: "#f97316", glow: "rgba(249,115,22,0.1)",   border: "rgba(249,115,22,0.2)",  trend: "خلال 7 أيام"           },
    { label: "الإيرادات الشهرية",  value: stats.revenue.toLocaleString(), suffix: " ج",  icon: Wallet,      accent: "#f97316", glow: "rgba(249,115,22,0.1)",   border: "rgba(249,115,22,0.2)",  trend: "من الاشتراكات النشطة"  },
  ];
  let filtered = [...enriched];
  if (search.trim()) {
    const q = search.trim().toLowerCase();
    filtered = filtered.filter((m) => m.name.toLowerCase().includes(q) || m.phone.includes(q));
  }
  if (filterStatus !== "الكل")       filtered = filtered.filter((m) => m.status === filterStatus);
  if (sortBy === "الأحدث")            filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (sortBy === "الأقدم")            filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  if (sortBy === "الأقرب انتهاءً")   filtered.sort((a, b) => a.remainingDays - b.remainingDays);
  return (
    <>
      {/* ── Page header ── */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-white mb-1">إدارة الأعضاء</h1>
          <p className="text-sm font-medium" style={{ color: "#a1a1aa" }}>
            إدارة جميع المشتركين ومتابعة الاشتراكات بسهولة
          </p>
        </div>
        <button
          onClick={() => setModal({ type: "add" })}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-sm transition-all duration-300 flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 4px 20px rgba(249,115,22,0.3)" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(249,115,22,0.45)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(249,115,22,0.3)"; }}>
          <Plus size={16} />
          إضافة عضو جديد
        </button>
      </div>
      {/* ── Stats ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS_CARDS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label}
              className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ background: "rgba(24,24,27,0.8)", border: `1px solid ${s.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.25)" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${s.glow}`; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.25)"; }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: s.glow, border: `1px solid ${s.border}` }}>
                <Icon size={18} style={{ color: s.accent }} />
              </div>
              <p className="text-xs font-medium mb-1" style={{ color: "#71717a" }}>{s.label}</p>
              <p className="text-2xl lg:text-3xl font-black text-white leading-none mb-2">{s.value}{s.suffix}</p>
              <div className="flex items-center gap-1">
                <TrendingUp size={11} style={{ color: s.accent }} />
                <span className="text-xs font-medium" style={{ color: s.accent }}>{s.trend}</span>
              </div>
            </div>
          );
        })}
      </div>
      {/* ── Search & filter ── */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={15} className="absolute top-1/2 -translate-y-1/2 right-3.5" style={{ color: "#71717a" }} />
          <input type="text" placeholder="البحث بالاسم أو رقم الهاتف..."
            value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 rounded-xl text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200"
            style={{ background: "rgba(24,24,27,0.8)", border: "1px solid rgba(63,63,70,0.5)" }}
            onFocus={(e) => { e.currentTarget.style.border = "1px solid rgba(249,115,22,0.4)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.08)"; }}
            onBlur={(e) => { e.currentTarget.style.border = "1px solid rgba(63,63,70,0.5)"; e.currentTarget.style.boxShadow = "none"; }}
          />
        </div>
        <div className="relative">
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
            className="appearance-none pl-8 pr-4 py-2.5 rounded-xl text-sm text-white outline-none cursor-pointer"
            style={{ background: "rgba(24,24,27,0.8)", border: "1px solid rgba(63,63,70,0.5)", minWidth: "140px" }}>
            {["الكل", "نشط", "ينتهي قريباً", "منتهي"].map((s) => <option key={s}>{s}</option>)}
          </select>
          <ChevronDown size={13} className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none" style={{ color: "#71717a" }} />
        </div>
        <div className="relative">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none pl-8 pr-4 py-2.5 rounded-xl text-sm text-white outline-none cursor-pointer"
            style={{ background: "rgba(24,24,27,0.8)", border: "1px solid rgba(63,63,70,0.5)", minWidth: "150px" }}>
            {["الأحدث", "الأقدم", "الأقرب انتهاءً"].map((s) => <option key={s}>{s}</option>)}
          </select>
          <ChevronDown size={13} className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none" style={{ color: "#71717a" }} />
        </div>
      </div>
      {/* ── Table / Empty state ── */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 rounded-2xl"
          style={{ background: "rgba(24,24,27,0.5)", border: "1px solid rgba(63,63,70,0.4)" }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
            style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.15)" }}>
            <UserX size={28} style={{ color: "#f97316" }} />
          </div>
          <p className="text-white font-bold text-lg mb-1">لا يوجد أعضاء حالياً</p>
          <p className="text-sm mb-6" style={{ color: "#71717a" }}>
            {search || filterStatus !== "الكل" ? "لا توجد نتائج مطابقة للبحث" : "ابدأ بإضافة أول عضو في الصالة"}
          </p>
          {!search && filterStatus === "الكل" && (
            <button onClick={() => setModal({ type: "add" })}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-sm transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 4px 20px rgba(249,115,22,0.3)" }}>
              <Plus size={15} />
              إضافة أول عضو
            </button>
          )}
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden"
          style={{ background: "rgba(24,24,27,0.8)", border: "1px solid rgba(63,63,70,0.5)" }}>
          {/* Desktop table */}
          <div className="overflow-x-auto">
            <table className="w-full hidden md:table">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(63,63,70,0.4)", background: "rgba(39,39,42,0.4)" }}>
                  {["الاسم","الهاتف","الخطة","تاريخ البداية","تاريخ الانتهاء","الأيام المتبقية","الحالة","الإجراءات"].map((h) => (
                    <th key={h} className="px-4 py-3 text-right text-xs font-bold" style={{ color: "#71717a" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((m) => (
                  <tr key={m.id} style={{ borderBottom: "1px solid rgba(63,63,70,0.2)", transition: "background 0.15s" }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "rgba(63,63,70,0.12)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                          style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                          {m.name[0]}
                        </div>
                        <span className="text-white text-sm font-semibold">{m.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm" style={{ color: "#a1a1aa" }} dir="ltr">{m.phone}</td>
                    <td className="px-4 py-3 text-sm" style={{ color: "#a1a1aa" }}>{m.plan}</td>
                    <td className="px-4 py-3 text-sm" style={{ color: "#a1a1aa" }} dir="ltr">{m.startDate}</td>
                    <td className="px-4 py-3 text-sm" style={{ color: "#a1a1aa" }} dir="ltr">{m.endDate}</td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-bold"
                        style={{ color: m.remainingDays <= 0 ? "#ef4444" : m.remainingDays <= 7 ? "#f97316" : "#a1a1aa" }}>
                        {m.remainingDays <= 0 ? "منتهي" : `${m.remainingDays} يوم`}
                      </span>
                    </td>
                    <td className="px-4 py-3"><StatusBadge endDate={m.endDate} /></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <ActionButton icon={Pencil}    label="تعديل" color="#3b82f6" onClick={() => setModal({ type: "edit",   member: m })} />
                        <ActionButton icon={RefreshCw} label="تجديد" color="#22c55e" onClick={() => setModal({ type: "renew",  member: m })} />
                        <ActionButton icon={Trash2}    label="حذف"   color="#ef4444" onClick={() => setModal({ type: "delete", member: m })} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Mobile cards */}
            <div className="md:hidden">
              {filtered.map((m) => (
                <div key={m.id} className="p-4 space-y-3 border-b" style={{ borderColor: "rgba(63,63,70,0.3)" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                        style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                        {m.name[0]}
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">{m.name}</p>
                        <p className="text-xs" style={{ color: "#71717a" }} dir="ltr">{m.phone}</p>
                      </div>
                    </div>
                    <StatusBadge endDate={m.endDate} />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg p-2" style={{ background: "rgba(39,39,42,0.5)" }}>
                      <p style={{ color: "#71717a" }} className="mb-0.5">الخطة</p>
                      <p className="text-white font-medium">{m.plan}</p>
                    </div>
                    <div className="rounded-lg p-2" style={{ background: "rgba(39,39,42,0.5)" }}>
                      <p style={{ color: "#71717a" }} className="mb-0.5">الأيام المتبقية</p>
                      <p className="font-bold"
                        style={{ color: m.remainingDays <= 0 ? "#ef4444" : m.remainingDays <= 7 ? "#f97316" : "#a1a1aa" }}>
                        {m.remainingDays <= 0 ? "منتهي" : `${m.remainingDays} يوم`}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <ActionButton icon={Pencil}    label="تعديل" color="#3b82f6" onClick={() => setModal({ type: "edit",   member: m })} full />
                    <ActionButton icon={RefreshCw} label="تجديد" color="#22c55e" onClick={() => setModal({ type: "renew",  member: m })} full />
                    <ActionButton icon={Trash2}    label="حذف"   color="#ef4444" onClick={() => setModal({ type: "delete", member: m })} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 py-3 border-t flex items-center justify-between" style={{ borderColor: "rgba(63,63,70,0.3)" }}>
            <span className="text-xs" style={{ color: "#71717a" }}>إجمالي النتائج: {filtered.length} عضو</span>
            <div className="flex items-center gap-1">
              <CheckCircle size={12} style={{ color: "#22c55e" }} />
              <span className="text-xs" style={{ color: "#71717a" }}>محدّث</span>
            </div>
          </div>
        </div>
      )}
      {/* Modals */}
      {modal?.type === "add"    && <AddMemberModal onClose={() => setModal(null)} onSaved={reload} />}
      {modal?.type === "edit"   && <EditMemberModal member={modal.member} onClose={() => setModal(null)} onSaved={reload} />}
      {modal?.type === "renew"  && <RenewModal member={modal.member} onClose={() => setModal(null)} onSaved={reload} />}
      {modal?.type === "delete" && (
        <ConfirmModal
          message={`هل أنت متأكد من حذف العضو "${modal.member.name}"؟ لا يمكن التراجع عن هذا الإجراء.`}
          onConfirm={() => { deleteMember(modal.member.id); reload(); setModal(null); }}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
