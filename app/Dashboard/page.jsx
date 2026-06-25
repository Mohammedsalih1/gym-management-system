// // "use client"

// // import { useState } from "react";
// // // import { useLocation } from "wouter";
// // import {
// //   LayoutDashboard,
// //   Users,
// //   CreditCard,
// //   LogOut,
// //   Menu,
// //   X,
// //   TrendingUp,
// //   AlertCircle,
// //   Wallet,
// //   UserCheck,
// //   Star,
// //   Clock,
// //   ChevronLeft,
// // } from "lucide-react";
// // const NAV_ITEMS = [
// //   { icon: LayoutDashboard, label: "لوحة التحكم", id: "dashboard" },
// //   { icon: Users,           label: "الأعضاء",      id: "members"   },
// //   { icon: CreditCard,      label: "الاشتراكات",   id: "subs"      },
// // ];
// // const STATS = [
// //   {
// //     label:  "عدد الأعضاء",
// //     value:  "152",
// //     trend:  "+12 هذا الأسبوع",
// //     icon:   Users,
// //     accent: "#f97316",
// //     glow:   "rgba(249,115,22,0.12)",
// //     border: "rgba(249,115,22,0.2)",
// //   },
// //   {
// //     label:  "الاشتراكات النشطة",
// //     value:  "128",
// //     trend:  "+8 هذا الشهر",
// //     icon:   UserCheck,
// //     accent: "#22c55e",
// //     glow:   "rgba(34,197,94,0.1)",
// //     border: "rgba(34,197,94,0.2)",
// //   },
// //   {
// //     label:  "تنتهي قريباً",
// //     value:  "8",
// //     trend:  "خلال 7 أيام",
// //     icon:   AlertCircle,
// //     accent: "#f97316",
// //     glow:   "rgba(249,115,22,0.1)",
// //     border: "rgba(249,115,22,0.2)",
// //   },
// //   {
// //     label:  "الإيرادات الشهرية",
// //     value:  "450,000 ج",
// //     trend:  "+15% عن الشهر الماضي",
// //     icon:   Wallet,
// //     accent: "#f97316",
// //     glow:   "rgba(249,115,22,0.1)",
// //     border: "rgba(249,115,22,0.2)",
// //   },
// // ];
// // const MEMBERS = [
// //   { name: "أحمد محمد الشهري",    plan: "3 أيام / أسبوع", days: 22, status: "نشط"          },
// //   { name: "محمد علي الغامدي",    plan: "يومي",            days: 5,  status: "ينتهي قريباً" },
// //   { name: "خالد أحمد العمري",    plan: "5 أيام / أسبوع", days: 14, status: "نشط"          },
// //   { name: "سارة عبدالله الحربي", plan: "3 أيام / أسبوع", days: 0,  status: "منتهي"        },
// //   { name: "نورة سعد القحطاني",   plan: "يومي",            days: 3,  status: "ينتهي قريباً" },
// //   { name: "عمر فهد الدوسري",     plan: "5 أيام / أسبوع", days: 30, status: "نشط"          },
// // ];
// // const EXPIRING = [
// //   { name: "محمد أحمد العتيبي",  days: 2 },
// //   { name: "فاطمة علي الزهراني", days: 3 },
// //   { name: "يوسف سالم الشمري",   days: 5 },
// //   { name: "هند ناصر المطيري",   days: 7 },
// // ];
// // function StatusBadge({ status }) {
// //   const styles = {
// //     "نشط":          { bg: "rgba(34,197,94,0.1)",  color: "#86efac", border: "rgba(34,197,94,0.25)"  },
// //     "منتهي":        { bg: "rgba(239,68,68,0.1)",  color: "#fca5a5", border: "rgba(239,68,68,0.25)"  },
// //     "ينتهي قريباً": { bg: "rgba(249,115,22,0.1)", color: "#fdba74", border: "rgba(249,115,22,0.25)" },
// //   };
// //   const s = styles[status] || styles["نشط"];
// //   return (
// //     <span
// //       className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
// //       style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
// //     >
// //       {status}
// //     </span>
// //   );
// // }
// // function Sidebar({ active, setActive, onLogout, mobile, onClose }) {
// //   return (
// //     <aside
// //       className="flex flex-col h-full"
// //       style={{
// //         background: "rgba(24,24,27,0.98)",
// //         borderLeft: "1px solid rgba(63,63,70,0.5)",
// //         width: mobile ? "100%" : "240px",
// //         minWidth: mobile ? "unset" : "240px",
// //       }}
// //     >
// //       {/* Logo */}
// //       <div className="px-5 py-6 border-b" style={{ borderColor: "rgba(63,63,70,0.4)" }}>
// //         <div className="flex items-center gap-3">
// //           <div
// //             className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
// //             style={{
// //               background: "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(249,115,22,0.08))",
// //               border: "1px solid rgba(249,115,22,0.35)",
// //               boxShadow: "0 0 20px rgba(249,115,22,0.1)",
// //             }}
// //           >
// //             <svg viewBox="0 0 64 64" fill="none" className="w-6 h-6">
// //               <rect x="8"  y="26" width="8"  height="12" rx="3" fill="#f97316" />
// //               <rect x="16" y="22" width="5"  height="20" rx="2" fill="#fb923c" />
// //               <rect x="21" y="29" width="22" height="6"  rx="2" fill="#f97316" />
// //               <rect x="43" y="22" width="5"  height="20" rx="2" fill="#fb923c" />
// //               <rect x="48" y="26" width="8"  height="12" rx="3" fill="#f97316" />
// //             </svg>
// //           </div>
// //           <div className="leading-tight">
// //             <p className="text-white font-black text-sm">يوم اللياقة</p>
// //             <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#f97316" }}>
// //               Fitness Day
// //             </p>
// //           </div>
// //           {mobile && (
// //             <button
// //               onClick={onClose}
// //               className="mr-auto text-zinc-500 hover:text-white transition-colors p-1"
// //             >
// //               <X size={18} />
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //       {/* Nav links */}
// //       <nav className="flex-1 px-3 py-4 space-y-1">
// //         {NAV_ITEMS.map(({ icon: Icon, label, id }) => {
// //           const isActive = active === id;
// //           return (
// //             <button
// //               key={id}
// //               onClick={() => { setActive(id); if (mobile) onClose(); }}
// //               className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-right"
// //               style={
// //                 isActive
// //                   ? {
// //                       background: "linear-gradient(135deg, rgba(249,115,22,0.18), rgba(249,115,22,0.06))",
// //                       color: "#fb923c",
// //                       border: "1px solid rgba(249,115,22,0.25)",
// //                       boxShadow: "0 2px 12px rgba(249,115,22,0.1)",
// //                     }
// //                   : { color: "#a1a1aa", border: "1px solid transparent" }
// //               }
// //               onMouseEnter={(e) => {
// //                 if (!isActive) {
// //                   e.currentTarget.style.background = "rgba(63,63,70,0.4)";
// //                   e.currentTarget.style.color = "#fff";
// //                 }
// //               }}
// //               onMouseLeave={(e) => {
// //                 if (!isActive) {
// //                   e.currentTarget.style.background = "transparent";
// //                   e.currentTarget.style.color = "#a1a1aa";
// //                 }
// //               }}
// //             >
// //               <Icon size={17} className="flex-shrink-0" />
// //               {label}
// //               {isActive && <ChevronLeft size={14} className="mr-auto opacity-60" />}
// //             </button>
// //           );
// //         })}
// //       </nav>
// //       {/* Logout */}
// //       <div className="px-3 py-4 border-t" style={{ borderColor: "rgba(63,63,70,0.4)" }}>
// //         <button
// //           onClick={onLogout}
// //           className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-right"
// //           style={{ color: "#a1a1aa", border: "1px solid transparent" }}
// //           onMouseEnter={(e) => {
// //             e.currentTarget.style.background = "rgba(239,68,68,0.08)";
// //             e.currentTarget.style.color = "#fca5a5";
// //             e.currentTarget.style.borderColor = "rgba(239,68,68,0.2)";
// //           }}
// //           onMouseLeave={(e) => {
// //             e.currentTarget.style.background = "transparent";
// //             e.currentTarget.style.color = "#a1a1aa";
// //             e.currentTarget.style.borderColor = "transparent";
// //           }}
// //         >
// //           <LogOut size={17} className="flex-shrink-0" />
// //           تسجيل الخروج
// //         </button>
// //       </div>
// //     </aside>
// //   );
// // }
// // export default function DashboardPage() {
// // //   const [, navigate] = useLocation();
// //   const [activeNav, setActiveNav] = useState("dashboard");
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   function handleLogout() {
// //     localStorage.removeItem("isLoggedIn");
// //     navigate("/");
// //   }
// //   return (
// //     <div dir="rtl" className="min-h-screen bg-zinc-950 flex" style={{ fontFamily: "'Cairo', sans-serif" }}>
// //       {/* ═══ DESKTOP SIDEBAR ═══ */}
// //       <div className="hidden lg:flex flex-col sticky top-0 h-screen flex-shrink-0">
// //         <Sidebar
// //           active={activeNav}
// //           setActive={setActiveNav}
// //           onLogout={handleLogout}
// //           mobile={false}
// //           onClose={() => {}}
// //         />
// //       </div>
// //       {/* ═══ MOBILE SIDEBAR DRAWER ═══ */}
// //       {sidebarOpen && (
// //         <div className="fixed inset-0 z-50 lg:hidden">
// //           <div
// //             className="absolute inset-0"
// //             style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
// //             onClick={() => setSidebarOpen(false)}
// //           />
// //           <div className="absolute top-0 right-0 h-full w-72 z-10">
// //             <Sidebar
// //               active={activeNav}
// //               setActive={setActiveNav}
// //               onLogout={handleLogout}
// //               mobile={true}
// //               onClose={() => setSidebarOpen(false)}
// //             />
// //           </div>
// //         </div>
// //       )}
// //       {/* ═══ MAIN CONTENT ═══ */}
// //       <div className="flex-1 flex flex-col min-w-0">
// //         {/* ── Mobile top bar ── */}
// //         <header
// //           className="lg:hidden flex items-center justify-between px-4 py-3 border-b sticky top-0 z-40"
// //           style={{
// //             background: "rgba(24,24,27,0.95)",
// //             borderColor: "rgba(63,63,70,0.4)",
// //             backdropFilter: "blur(20px)",
// //           }}
// //         >
// //           <button
// //             onClick={() => setSidebarOpen(true)}
// //             className="text-zinc-400 hover:text-white transition-colors p-1"
// //           >
// //             <Menu size={22} />
// //           </button>
// //           <div className="flex items-center gap-2">
// //             <span className="text-white font-black text-sm">يوم اللياقة</span>
// //             <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#f97316" }}>FD</span>
// //           </div>
// //           <div className="w-8" />
// //         </header>
// //         <main className="flex-1 p-5 lg:p-8 space-y-6 lg:space-y-8">
// //           {/* ══════════════════════════════
// //               1. WELCOME SECTION
// //           ══════════════════════════════ */}
// //           <div
// //             className="relative rounded-2xl overflow-hidden p-6 lg:p-8"
// //             style={{
// //               background: "rgba(24,24,27,0.7)",
// //               border: "1px solid rgba(63,63,70,0.5)",
// //               boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
// //             }}
// //           >
// //             {/* Glow */}
// //             <div
// //               className="absolute top-0 right-0 w-80 h-40 pointer-events-none"
// //               style={{
// //                 background: "radial-gradient(ellipse at top right, rgba(249,115,22,0.1) 0%, transparent 70%)",
// //                 filter: "blur(20px)",
// //               }}
// //             />
// //             <div className="relative z-10">
// //               <h1 className="text-2xl lg:text-3xl font-black text-white mb-1.5">
// //                 مرحباً بعودتك 👋
// //               </h1>
// //               <p className="text-zinc-400 font-medium text-sm lg:text-base">
// //                 إليك نظرة سريعة على نشاط الصالة والاشتراكات اليوم
// //               </p>
// //             </div>
// //             {/* Bottom accent line */}
// //             <div
// //               className="absolute bottom-0 right-0 left-0 h-0.5"
// //               style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)" }}
// //             />
// //           </div>
// //           {/* ══════════════════════════════
// //               2. STATS CARDS
// //           ══════════════════════════════ */}
// //           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
// //             {STATS.map((stat, i) => {
// //               const Icon = stat.icon;
// //               return (
// //                 <div
// //                   key={stat.label}
// //                   className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-default"
// //                   style={{
// //                     background: "rgba(24,24,27,0.8)",
// //                     border: `1px solid ${stat.border}`,
// //                     boxShadow: `0 4px 24px rgba(0,0,0,0.25), 0 0 0 1px ${stat.border}`,
// //                     animationDelay: `${i * 0.07}s`,
// //                   }}
// //                   onMouseEnter={(e) => {
// //                     e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${stat.glow}`;
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     e.currentTarget.style.boxShadow = `0 4px 24px rgba(0,0,0,0.25), 0 0 0 1px ${stat.border}`;
// //                   }}
// //                 >
// //                   {/* Icon box */}
// //                   <div
// //                     className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
// //                     style={{ background: stat.glow, border: `1px solid ${stat.border}` }}
// //                   >
// //                     <Icon size={18} style={{ color: stat.accent }} />
// //                   </div>
// //                   <p className="text-zinc-500 text-xs font-medium mb-1">{stat.label}</p>
// //                   <p className="text-2xl lg:text-3xl font-black text-white leading-none mb-2">{stat.value}</p>
// //                   <div className="flex items-center gap-1">
// //                     <TrendingUp size={11} style={{ color: stat.accent }} />
// //                     <span className="text-xs font-medium" style={{ color: stat.accent }}>{stat.trend}</span>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //           {/* ══════════════════════════════
// //               3. MEMBERS TABLE + SIDE CARDS
// //           ══════════════════════════════ */}
// //           <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
// //             {/* Recent Members table — spans 2 cols on xl */}
// //             <div
// //               className="xl:col-span-2 rounded-2xl overflow-hidden"
// //               style={{ background: "rgba(24,24,27,0.8)", border: "1px solid rgba(63,63,70,0.5)" }}
// //             >
// //               {/* Table header */}
// //               <div
// //                 className="px-5 py-4 border-b flex items-center gap-2"
// //                 style={{ borderColor: "rgba(63,63,70,0.4)" }}
// //               >
// //                 <Users size={16} style={{ color: "#f97316" }} />
// //                 <h2 className="text-white font-bold text-sm">الأعضاء الجدد</h2>
// //               </div>
// //               {/* Column labels */}
// //               <div
// //                 className="grid grid-cols-4 px-5 py-2.5 text-xs font-semibold text-zinc-500 border-b"
// //                 style={{ borderColor: "rgba(63,63,70,0.3)" }}
// //               >
// //                 <span>الاسم</span>
// //                 <span className="text-center">الخطة</span>
// //                 <span className="text-center">الأيام المتبقية</span>
// //                 <span className="text-center">الحالة</span>
// //               </div>
// //               {/* Rows */}
// //               {MEMBERS.map((m) => (
// //                 <div
// //                   key={m.name}
// //                   className="grid grid-cols-4 items-center px-5 py-3.5 transition-all duration-150"
// //                   style={{ borderBottom: "1px solid rgba(63,63,70,0.2)" }}
// //                   onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(63,63,70,0.15)")}
// //                   onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
// //                 >
// //                   {/* Name + avatar */}
// //                   <div className="flex items-center gap-2 min-w-0">
// //                     <div
// //                       className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
// //                       style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
// //                     >
// //                       {m.name[0]}
// //                     </div>
// //                     <span className="text-white text-xs font-semibold truncate hidden sm:block">{m.name}</span>
// //                   </div>
// //                   {/* Plan */}
// //                   <span className="text-zinc-400 text-xs text-center">{m.plan}</span>
// //                   {/* Days */}
// //                   <span
// //                     className="text-center text-xs font-bold"
// //                     style={{ color: m.days === 0 ? "#ef4444" : m.days <= 5 ? "#f97316" : "#a1a1aa" }}
// //                   >
// //                     {m.days === 0 ? "—" : `${m.days} يوم`}
// //                   </span>
// //                   {/* Status */}
// //                   <div className="flex justify-center">
// //                     <StatusBadge status={m.status} />
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //             {/* RIGHT COLUMN */}
// //             <div className="flex flex-col gap-5">
// //               {/* ── Expiring Soon ── */}
// //               <div
// //                 className="rounded-2xl overflow-hidden flex-1"
// //                 style={{ background: "rgba(24,24,27,0.8)", border: "1px solid rgba(249,115,22,0.2)" }}
// //               >
// //                 <div
// //                   className="px-5 py-4 border-b flex items-center gap-2"
// //                   style={{ borderColor: "rgba(249,115,22,0.15)" }}
// //                 >
// //                   <Clock size={15} style={{ color: "#f97316" }} />
// //                   <h2 className="text-white font-bold text-sm">اشتراكات تنتهي قريباً</h2>
// //                 </div>
// //                 <div className="p-4 space-y-2">
// //                   {EXPIRING.map((e) => (
// //                     <div
// //                       key={e.name}
// //                       className="flex items-center justify-between p-3 rounded-xl transition-all duration-150"
// //                       style={{ background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.1)" }}
// //                       onMouseEnter={(ev) => (ev.currentTarget.style.background = "rgba(249,115,22,0.1)")}
// //                       onMouseLeave={(ev) => (ev.currentTarget.style.background = "rgba(249,115,22,0.05)")}
// //                     >
// //                       <div className="flex items-center gap-2">
// //                         <div
// //                           className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
// //                           style={{ background: "rgba(249,115,22,0.25)" }}
// //                         >
// //                           {e.name[0]}
// //                         </div>
// //                         <span className="text-zinc-300 text-xs font-medium">{e.name}</span>
// //                       </div>
// //                       <span
// //                         className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
// //                         style={{
// //                           background: e.days <= 2 ? "rgba(239,68,68,0.15)" : "rgba(249,115,22,0.15)",
// //                           color:      e.days <= 2 ? "#fca5a5"              : "#fdba74",
// //                         }}
// //                       >
// //                         {e.days <= 1 ? "غداً" : `${e.days} أيام`}
// //                       </span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //               {/* ── Most Popular Plan ── */}
// //               <div
// //                 className="rounded-2xl overflow-hidden"
// //                 style={{
// //                   background: "rgba(24,24,27,0.8)",
// //                   border: "1px solid rgba(249,115,22,0.2)",
// //                   boxShadow: "0 0 30px rgba(249,115,22,0.06)",
// //                 }}
// //               >
// //                 <div
// //                   className="px-5 py-4 border-b flex items-center gap-2"
// //                   style={{ borderColor: "rgba(249,115,22,0.15)" }}
// //                 >
// //                   <Star size={15} style={{ color: "#f97316" }} />
// //                   <h2 className="text-white font-bold text-sm">الخطة الأكثر اشتراكاً</h2>
// //                 </div>
// //                 <div className="p-5">
// //                   {/* Plan name */}
// //                   <div className="flex items-center gap-2 mb-1">
// //                     <div
// //                       className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
// //                       style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.25)" }}
// //                     >
// //                       <Star size={14} style={{ color: "#f97316" }} />
// //                     </div>
// //                     <p className="text-white font-black text-base">3 أيام في الأسبوع</p>
// //                   </div>
// //                   <p className="text-zinc-500 text-xs mb-4 mr-10">الخطة الأكثر شعبية بين الأعضاء</p>
// //                   {/* Count */}
// //                   <div className="flex items-end justify-between mb-2">
// //                     <span className="text-zinc-400 text-xs font-medium">المشتركون</span>
// //                     <span className="text-white font-black text-lg">
// //                       78 <span className="text-zinc-500 text-xs font-normal">مشترك</span>
// //                     </span>
// //                   </div>
// //                   {/* Progress bar */}
// //                   <div className="w-full h-2.5 rounded-full overflow-hidden mb-1"
// //                     style={{ background: "rgba(63,63,70,0.5)" }}>
// //                     <div
// //                       className="h-full rounded-full"
// //                       style={{
// //                         width: "78%",
// //                         background: "linear-gradient(90deg, #f97316, #ea580c)",
// //                         boxShadow: "0 0 10px rgba(249,115,22,0.5)",
// //                       }}
// //                     />
// //                   </div>
// //                   <div className="flex justify-between text-xs text-zinc-600">
// //                     <span>0</span>
// //                     <span className="font-semibold" style={{ color: "#f97316" }}>78%</span>
// //                     <span>100</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// // import Sidebar from "@/components/layout/Sidebar";
// import Sidebar from "../components/layout/Sidebar";

// import {
//   Menu,
//   TrendingUp,
//   AlertCircle,
//   Wallet,
//   Users,
//   UserCheck,
//   Star,
//   Clock,
// } from "lucide-react";

// const STATS = [
//   {
//     label: "عدد الأعضاء",
//     value: "152",
//     trend: "+12 هذا الأسبوع",
//     icon: Users,
//     accent: "#f97316",
//     glow: "rgba(249,115,22,0.12)",
//     border: "rgba(249,115,22,0.2)",
//   },
//   {
//     label: "الاشتراكات النشطة",
//     value: "128",
//     trend: "+8 هذا الشهر",
//     icon: UserCheck,
//     accent: "#22c55e",
//     glow: "rgba(34,197,94,0.1)",
//     border: "rgba(34,197,94,0.2)",
//   },
//   {
//     label: "تنتهي قريباً",
//     value: "8",
//     trend: "خلال 7 أيام",
//     icon: AlertCircle,
//     accent: "#f97316",
//     glow: "rgba(249,115,22,0.1)",
//     border: "rgba(249,115,22,0.2)",
//   },
//   {
//     label: "الإيرادات الشهرية",
//     value: "450,000 ج",
//     trend: "+15% عن الشهر الماضي",
//     icon: Wallet,
//     accent: "#f97316",
//     glow: "rgba(249,115,22,0.1)",
//     border: "rgba(249,115,22,0.2)",
//   },
// ];

// const MEMBERS = [
//   {
//     name: "أحمد محمد الشهري",
//     plan: "3 أيام / أسبوع",
//     days: 22,
//     status: "نشط",
//   },
//   {
//     name: "محمد علي الغامدي",
//     plan: "يومي",
//     days: 5,
//     status: "ينتهي قريباً",
//   },
//   {
//     name: "خالد أحمد العمري",
//     plan: "5 أيام / أسبوع",
//     days: 14,
//     status: "نشط",
//   },
//   {
//     name: "سارة عبدالله الحربي",
//     plan: "3 أيام / أسبوع",
//     days: 0,
//     status: "منتهي",
//   },
//   {
//     name: "نورة سعد القحطاني",
//     plan: "يومي",
//     days: 3,
//     status: "ينتهي قريباً",
//   },
//   {
//     name: "عمر فهد الدوسري",
//     plan: "5 أيام / أسبوع",
//     days: 30,
//     status: "نشط",
//   },
// ];

// const EXPIRING = [
//   { name: "محمد أحمد العتيبي", days: 2 },
//   { name: "فاطمة علي الزهراني", days: 3 },
//   { name: "يوسف سالم الشمري", days: 5 },
//   { name: "هند ناصر المطيري", days: 7 },
// ];

// function StatusBadge({ status }) {
//   const styles = {
//     نشط: {
//       bg: "rgba(34,197,94,0.1)",
//       color: "#86efac",
//       border: "rgba(34,197,94,0.25)",
//     },

//     منتهي: {
//       bg: "rgba(239,68,68,0.1)",
//       color: "#fca5a5",
//       border: "rgba(239,68,68,0.25)",
//     },

//     "ينتهي قريباً": {
//       bg: "rgba(249,115,22,0.1)",
//       color: "#fdba74",
//       border: "rgba(249,115,22,0.25)",
//     },
//   };

//   const s = styles[status] || styles["نشط"];

//   return (
//     <span
//       className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
//       style={{
//         background: s.bg,
//         color: s.color,
//         border: `1px solid ${s.border}`,
//       }}
//     >
//       {status}
//     </span>
//   );
// }

// export default function DashboardPage() {
//   const router = useRouter();

//   const [activeNav, setActiveNav] = useState("dashboard");
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   function handleLogout() {
//     localStorage.removeItem("isLoggedIn");
//     router.push("/");
//   }

//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-zinc-950 flex"
//       style={{ fontFamily: "'Cairo', sans-serif" }}
//     >
//       {/* Desktop Sidebar */}
//       <div className="hidden lg:flex flex-col sticky top-0 h-screen flex-shrink-0">
//         <Sidebar
//           active={activeNav}
//           setActive={setActiveNav}
//           onLogout={handleLogout}
//           mobile={false}
//           onClose={() => {}}
//         />
//       </div>

//       {/* Mobile Sidebar */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div
//             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             onClick={() => setSidebarOpen(false)}
//           />

//           <div className="absolute top-0 right-0 h-full w-72 z-10">
//             <Sidebar
//               active={activeNav}
//               setActive={setActiveNav}
//               onLogout={handleLogout}
//               mobile={true}
//               onClose={() => setSidebarOpen(false)}
//             />
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* Mobile Header */}
//         <header
//           className="lg:hidden flex items-center justify-between px-4 py-3 border-b sticky top-0 z-40"
//           style={{
//             background: "rgba(24,24,27,0.95)",
//             borderColor: "rgba(63,63,70,0.4)",
//             backdropFilter: "blur(20px)",
//           }}
//         >
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="text-zinc-400 hover:text-white transition-colors p-1"
//           >
//             <Menu size={22} />
//           </button>

//           <div className="flex items-center gap-2">
//             <span className="text-white font-black text-sm">
//               يوم اللياقة
//             </span>

//             <span
//               className="text-xs font-semibold tracking-widest uppercase"
//               style={{ color: "#f97316" }}
//             >
//               FD
//             </span>
//           </div>

//           <div className="w-8" />
//         </header>

//         <main className="flex-1 p-5 lg:p-8 space-y-6 lg:space-y-8">
//           {/* Welcome */}
//           <div
//             className="relative rounded-2xl overflow-hidden p-6 lg:p-8"
//             style={{
//               background: "rgba(24,24,27,0.7)",
//               border: "1px solid rgba(63,63,70,0.5)",
//               boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
//             }}
//           >
//             <div
//               className="absolute top-0 right-0 w-80 h-40 pointer-events-none"
//               style={{
//                 background:
//                   "radial-gradient(ellipse at top right, rgba(249,115,22,0.1) 0%, transparent 70%)",
//                 filter: "blur(20px)",
//               }}
//             />

//             <div className="relative z-10">
//               <h1 className="text-2xl lg:text-3xl font-black text-white mb-1.5">
//                 مرحباً بعودتك 👋
//               </h1>

//               <p className="text-zinc-400 font-medium text-sm lg:text-base">
//                 إليك نظرة سريعة على نشاط الصالة والاشتراكات اليوم
//               </p>
//             </div>

//             <div
//               className="absolute bottom-0 right-0 left-0 h-0.5"
//               style={{
//                 background:
//                   "linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)",
//               }}
//             />
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//             {STATS.map((stat, i) => {
//               const Icon = stat.icon;

//               return (
//                 <div
//                   key={stat.label}
//                   className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-default"
//                   style={{
//                     background: "rgba(24,24,27,0.8)",
//                     border: `1px solid ${stat.border}`,
//                     boxShadow: `0 4px 24px rgba(0,0,0,0.25), 0 0 0 1px ${stat.border}`,
//                     animationDelay: `${i * 0.07}s`,
//                   }}
//                 >
//                   <div
//                     className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
//                     style={{
//                       background: stat.glow,
//                       border: `1px solid ${stat.border}`,
//                     }}
//                   >
//                     <Icon size={18} style={{ color: stat.accent }} />
//                   </div>

//                   <p className="text-zinc-500 text-xs font-medium mb-1">
//                     {stat.label}
//                   </p>

//                   <p className="text-2xl lg:text-3xl font-black text-white leading-none mb-2">
//                     {stat.value}
//                   </p>

//                   <div className="flex items-center gap-1">
//                     <TrendingUp
//                       size={11}
//                       style={{ color: stat.accent }}
//                     />

//                     <span
//                       className="text-xs font-medium"
//                       style={{ color: stat.accent }}
//                     >
//                       {stat.trend}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Tables */}
//           <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
//             {/* Members */}
//             <div
//               className="xl:col-span-2 rounded-2xl overflow-hidden"
//               style={{
//                 background: "rgba(24,24,27,0.8)",
//                 border: "1px solid rgba(63,63,70,0.5)",
//               }}
//             >
//               <div
//                 className="px-5 py-4 border-b flex items-center gap-2"
//                 style={{ borderColor: "rgba(63,63,70,0.4)" }}
//               >
//                 <Users size={16} style={{ color: "#f97316" }} />

//                 <h2 className="text-white font-bold text-sm">
//                   الأعضاء الجدد
//                 </h2>
//               </div>

//               <div
//                 className="grid grid-cols-4 px-5 py-2.5 text-xs font-semibold text-zinc-500 border-b"
//                 style={{ borderColor: "rgba(63,63,70,0.3)" }}
//               >
//                 <span>الاسم</span>
//                 <span className="text-center">الخطة</span>
//                 <span className="text-center">الأيام المتبقية</span>
//                 <span className="text-center">الحالة</span>
//               </div>

//               {MEMBERS.map((m) => (
//                 <div
//                   key={m.name}
//                   className="grid grid-cols-4 items-center px-5 py-3.5 transition-all duration-150"
//                   style={{
//                     borderBottom: "1px solid rgba(63,63,70,0.2)",
//                   }}
//                 >
//                   <div className="flex items-center gap-2 min-w-0">
//                     <div
//                       className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
//                       style={{
//                         background:
//                           "linear-gradient(135deg, #f97316, #ea580c)",
//                       }}
//                     >
//                       {m.name[0]}
//                     </div>

//                     <span className="text-white text-xs font-semibold truncate hidden sm:block">
//                       {m.name}
//                     </span>
//                   </div>

//                   <span className="text-zinc-400 text-xs text-center">
//                     {m.plan}
//                   </span>

//                   <span
//                     className="text-center text-xs font-bold"
//                     style={{
//                       color:
//                         m.days === 0
//                           ? "#ef4444"
//                           : m.days <= 5
//                           ? "#f97316"
//                           : "#a1a1aa",
//                     }}
//                   >
//                     {m.days === 0 ? "—" : `${m.days} يوم`}
//                   </span>

//                   <div className="flex justify-center">
//                     <StatusBadge status={m.status} />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Side Cards */}
//             <div className="flex flex-col gap-5">
//               {/* Expiring */}
//               <div
//                 className="rounded-2xl overflow-hidden flex-1"
//                 style={{
//                   background: "rgba(24,24,27,0.8)",
//                   border: "1px solid rgba(249,115,22,0.2)",
//                 }}
//               >
//                 <div
//                   className="px-5 py-4 border-b flex items-center gap-2"
//                   style={{
//                     borderColor: "rgba(249,115,22,0.15)",
//                   }}
//                 >
//                   <Clock size={15} style={{ color: "#f97316" }} />

//                   <h2 className="text-white font-bold text-sm">
//                     اشتراكات تنتهي قريباً
//                   </h2>
//                 </div>

//                 <div className="p-4 space-y-2">
//                   {EXPIRING.map((e) => (
//                     <div
//                       key={e.name}
//                       className="flex items-center justify-between p-3 rounded-xl"
//                       style={{
//                         background: "rgba(249,115,22,0.05)",
//                         border: "1px solid rgba(249,115,22,0.1)",
//                       }}
//                     >
//                       <div className="flex items-center gap-2">
//                         <div
//                           className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
//                           style={{
//                             background: "rgba(249,115,22,0.25)",
//                           }}
//                         >
//                           {e.name[0]}
//                         </div>

//                         <span className="text-zinc-300 text-xs font-medium">
//                           {e.name}
//                         </span>
//                       </div>

//                       <span
//                         className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
//                         style={{
//                           background:
//                             e.days <= 2
//                               ? "rgba(239,68,68,0.15)"
//                               : "rgba(249,115,22,0.15)",

//                           color:
//                             e.days <= 2 ? "#fca5a5" : "#fdba74",
//                         }}
//                       >
//                         {e.days <= 1 ? "غداً" : `${e.days} أيام`}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Popular Plan */}
//               <div
//                 className="rounded-2xl overflow-hidden"
//                 style={{
//                   background: "rgba(24,24,27,0.8)",
//                   border: "1px solid rgba(249,115,22,0.2)",
//                   boxShadow: "0 0 30px rgba(249,115,22,0.06)",
//                 }}
//               >
//                 <div
//                   className="px-5 py-4 border-b flex items-center gap-2"
//                   style={{
//                     borderColor: "rgba(249,115,22,0.15)",
//                   }}
//                 >
//                   <Star size={15} style={{ color: "#f97316" }} />

//                   <h2 className="text-white font-bold text-sm">
//                     الخطة الأكثر اشتراكاً
//                   </h2>
//                 </div>

//                 <div className="p-5">
//                   <div className="flex items-center gap-2 mb-1">
//                     <div
//                       className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
//                       style={{
//                         background: "rgba(249,115,22,0.15)",
//                         border: "1px solid rgba(249,115,22,0.25)",
//                       }}
//                     >
//                       <Star
//                         size={14}
//                         style={{ color: "#f97316" }}
//                       />
//                     </div>

//                     <p className="text-white font-black text-base">
//                       3 أيام في الأسبوع
//                     </p>
//                   </div>

//                   <p className="text-zinc-500 text-xs mb-4 mr-10">
//                     الخطة الأكثر شعبية بين الأعضاء
//                   </p>

//                   <div className="flex items-end justify-between mb-2">
//                     <span className="text-zinc-400 text-xs font-medium">
//                       المشتركون
//                     </span>

//                     <span className="text-white font-black text-lg">
//                       78{" "}
//                       <span className="text-zinc-500 text-xs font-normal">
//                         مشترك
//                       </span>
//                     </span>
//                   </div>

//                   <div
//                     className="w-full h-2.5 rounded-full overflow-hidden mb-1"
//                     style={{
//                       background: "rgba(63,63,70,0.5)",
//                     }}
//                   >
//                     <div
//                       className="h-full rounded-full"
//                       style={{
//                         width: "78%",
//                         background:
//                           "linear-gradient(90deg, #f97316, #ea580c)",
//                         boxShadow:
//                           "0 0 10px rgba(249,115,22,0.5)",
//                       }}
//                     />
//                   </div>

//                   <div className="flex justify-between text-xs text-zinc-600">
//                     <span>0</span>

//                     <span
//                       className="font-semibold"
//                       style={{ color: "#f97316" }}
//                     >
//                       78%
//                     </span>

//                     <span>100</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { TrendingUp, AlertCircle, Wallet, UserCheck, Users, Star, Clock } from "lucide-react";
import { initializeStorage } from "../services/storage";

import {
  getMembers,
  getTotalMembers,
  getActiveMembersCount,
  getTotalRevenue,
  getRemainingDays,
  getMemberStatus, getMostPopularPlan
} from "../services/storage";
// const [members, setMembers] = useState([]);

// const STATS = [
//   {
//     label:  "عدد الأعضاء",
//     value:  "152",
//     trend:  "+12 هذا الأسبوع",
//     icon:   Users,
//     accent: "#f97316",
//     glow:   "rgba(249,115,22,0.12)",
//     border: "rgba(249,115,22,0.2)",
//   },
//   {
//     label:  "الاشتراكات النشطة",
//     value:  "128",
//     trend:  "+8 هذا الشهر",
//     icon:   UserCheck,
//     accent: "#22c55e",
//     glow:   "rgba(34,197,94,0.1)",
//     border: "rgba(34,197,94,0.2)",
//   },
//   {
//     label:  "تنتهي قريباً",
//     value:  "8",
//     trend:  "خلال 7 أيام",
//     icon:   AlertCircle,
//     accent: "#f97316",
//     glow:   "rgba(249,115,22,0.1)",
//     border: "rgba(249,115,22,0.2)",
//   },
//   {
//     label:  "الإيرادات الشهرية",
//     value:  "450,000 ج",
//     trend:  "+15% عن الشهر الماضي",
//     icon:   Wallet,
//     accent: "#f97316",
//     glow:   "rgba(249,115,22,0.1)",
//     border: "rgba(249,115,22,0.2)",
//   },
// ];
// const MEMBERS = [
//   { name: "أحمد محمد الشهري",    plan: "3 أيام / أسبوع", days: 22, status: "نشط"          },
//   { name: "محمد علي الغامدي",    plan: "يومي",            days: 5,  status: "ينتهي قريباً" },
//   { name: "خالد أحمد العمري",    plan: "5 أيام / أسبوع", days: 14, status: "نشط"          },
//   { name: "سارة عبدالله الحربي", plan: "3 أيام / أسبوع", days: 0,  status: "منتهي"        },
//   { name: "نورة سعد القحطاني",   plan: "يومي",            days: 3,  status: "ينتهي قريباً" },
//   { name: "عمر فهد الدوسري",     plan: "5 أيام / أسبوع", days: 30, status: "نشط"          },
// ];
// const EXPIRING = [
//   { name: "محمد أحمد العتيبي",  days: 2 },
//   { name: "فاطمة علي الزهراني", days: 3 },
//   { name: "يوسف سالم الشمري",   days: 5 },
//   { name: "هند ناصر المطيري",   days: 7 },
// ];
function StatusBadge({ status }) {
  const map = {
    "نشط":          { bg: "rgba(34,197,94,0.1)",  color: "#86efac", border: "rgba(34,197,94,0.25)"  },
    "منتهي":        { bg: "rgba(239,68,68,0.1)",  color: "#fca5a5", border: "rgba(239,68,68,0.25)"  },
    "ينتهي قريباً": { bg: "rgba(249,115,22,0.1)", color: "#fdba74", border: "rgba(249,115,22,0.25)" },
  };
  const s = map[status] || map["نشط"];
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
      {status}
    </span>
  );
}

export default function DashboardPage() {

  
  const [members, setMembers] = useState([]);
  const totalMembers = getTotalMembers();


  useEffect(() => {
    initializeStorage();

    const data = getMembers();
    setMembers(data);
  }, []);


  const activeMembers = getActiveMembersCount();

  const expiringMembers = members.filter((member) => {
    const days = getRemainingDays(member);
    return days > 0 && days <= 7;
  });

  const totalRevenue = getTotalRevenue();

  const stats = [
    {
      label: "عدد الأعضاء",
      value: totalMembers,
      icon: Users,
      accent: "#f97316",
      glow: "rgba(249,115,22,0.12)",
      border: "rgba(249,115,22,0.2)",
      trend: "",
    },

    {
      label: "الاشتراكات النشطة",
      value: activeMembers,
      icon: UserCheck,
      accent: "#22c55e",
      glow: "rgba(34,197,94,0.1)",
      border: "rgba(34,197,94,0.2)",
      trend: "",
    },

    {
      label: "تنتهي قريباً",
      value: expiringMembers.length,
      icon: AlertCircle,
      accent: "#f97316",
      glow: "rgba(249,115,22,0.1)",
      border: "rgba(249,115,22,0.2)",
      trend: "خلال 7 أيام",
    },

    {
      label: "الإيرادات",
      value: `${totalRevenue} ج`,
      icon: Wallet,
      accent: "#f97316",
      glow: "rgba(249,115,22,0.1)",
      border: "rgba(249,115,22,0.2)",
      trend: "",
    },
  ];

  const popularPlan = getMostPopularPlan();

const percentage =
  totalMembers > 0
    ? Math.round((popularPlan.count / totalMembers) * 100)
    : 0;

  return (
    <>
      {/* 1. WELCOME */}
      <div className="relative rounded-2xl overflow-hidden p-6 lg:p-8"
        style={{ background: "rgba(24,24,27,0.7)", border: "1px solid rgba(63,63,70,0.5)", boxShadow: "0 4px 30px rgba(0,0,0,0.2)" }}>
        <div className="absolute top-0 right-0 w-80 h-40 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(249,115,22,0.1) 0%, transparent 70%)", filter: "blur(20px)" }} />
        <div className="relative z-10">
          <h1 className="text-2xl lg:text-3xl font-black text-white mb-1.5">مرحباً بعودتك 👋</h1>
          <p className="text-zinc-400 font-medium text-sm lg:text-base">إليك نظرة سريعة على نشاط الصالة والاشتراكات اليوم</p>
        </div>
        <div className="absolute bottom-0 right-0 left-0 h-0.5"
          style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)" }} />
      </div>
      {/* 2. STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label}
              className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ background: "rgba(24,24,27,0.8)", border: `1px solid ${stat.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.25)" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${stat.glow}`; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.25)"; }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: stat.glow, border: `1px solid ${stat.border}` }}>
                <Icon size={18} style={{ color: stat.accent }} />
              </div>
              <p className="text-zinc-500 text-xs font-medium mb-1">{stat.label}</p>
              <p className="text-2xl lg:text-3xl font-black text-white leading-none mb-2">{stat.value}</p>
              <div className="flex items-center gap-1">
                <TrendingUp size={11} style={{ color: stat.accent }} />
                <span className="text-xs font-medium" style={{ color: stat.accent }}>{stat.trend}</span>
              </div>
            </div>
          );
        })}
      </div>
      {/* 3. TABLE + SIDE CARDS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* Members table */}
        <div className="xl:col-span-2 rounded-2xl overflow-hidden"
          style={{ background: "rgba(24,24,27,0.8)", border: "1px solid rgba(63,63,70,0.5)" }}>
          <div className="px-5 py-4 border-b flex items-center gap-2" style={{ borderColor: "rgba(63,63,70,0.4)" }}>
            <Users size={16} style={{ color: "#f97316" }} />
            <h2 className="text-white font-bold text-sm">الأعضاء الجدد</h2>
          </div>
          <div className="grid grid-cols-4 px-5 py-2.5 text-xs font-semibold text-zinc-500 border-b"
            style={{ borderColor: "rgba(63,63,70,0.3)" }}>
            <span>الاسم</span>
            <span className="text-center">الخطة</span>
            <span className="text-center">الأيام المتبقية</span>
            <span className="text-center">الحالة</span>
          </div>

          {/* {members.map((m) => (
            <div key={m.name}
              className="grid grid-cols-4 items-center px-5 py-3.5 transition-all duration-150"
              style={{ borderBottom: "1px solid rgba(63,63,70,0.2)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(63,63,70,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                  {m.name[0]}
                </div>
                <span className="text-white text-xs font-semibold truncate hidden sm:block">{m.name}</span>
              </div>
              <span className="text-zinc-400 text-xs text-center">{m.plan}</span>
              <span className="text-center text-xs font-bold"
                style={{ color: m.days === 0 ? "#ef4444" : m.days <= 5 ? "#f97316" : "#a1a1aa" }}>
                {m.days === 0 ? "—" : `${m.days} يوم`}
              </span>
              <div className="flex justify-center"><StatusBadge status={m.status} /></div>
            </div>
          ))} */}

{members.map((m) => {

const days = getRemainingDays(m.endDate);
const status = getMemberStatus(m.endDate);

return (
  <div
    key={m.id}
    className="grid grid-cols-4 items-center px-5 py-3.5 transition-all duration-150"
    style={{ borderBottom: "1px solid rgba(63,63,70,0.2)" }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.background = "rgba(63,63,70,0.15)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.background = "transparent")
    }
  >
    <div className="flex items-center gap-2 min-w-0">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, #f97316, #ea580c)",
        }}
      >
        {m.name?.[0]}
      </div>

      <span className="text-white text-xs font-semibold truncate hidden sm:block">
        {m.name}
      </span>
    </div>

    <span className="text-zinc-400 text-xs text-center">
      {m.plan}
    </span>

    <span
      className="text-center text-xs font-bold"
      style={{
        color:
          days <= 0
            ? "#ef4444"
            : days <= 5
            ? "#f97316"
            : "#a1a1aa",
      }}
    >
      {days <= 0 ? "—" : `${days} يوم`}
    </span>

    <div className="flex justify-center">
      <StatusBadge status={status} />
    </div>
  </div>
);
})}
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-5">
          {/* Expiring soon */}
          <div className="rounded-2xl overflow-hidden flex-1"
            style={{ background: "rgba(24,24,27,0.8)", border: "1px solid rgba(249,115,22,0.2)" }}>
            <div className="px-5 py-4 border-b flex items-center gap-2" style={{ borderColor: "rgba(249,115,22,0.15)" }}>
              <Clock size={15} style={{ color: "#f97316" }} />
              <h2 className="text-white font-bold text-sm">اشتراكات تنتهي قريباً</h2>
            </div>
            <div className="p-4 space-y-2">
              {expiringMembers.map((member) => {
                const days = getRemainingDays(member.endDate);
              return (
                <div key={member.name}
                  className="flex items-center justify-between p-3 rounded-xl transition-all duration-150"
                  style={{ background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.1)" }}
                  onMouseEnter={(ev) => (ev.currentTarget.style.background = "rgba(249,115,22,0.1)")}
                  onMouseLeave={(ev) => (ev.currentTarget.style.background = "rgba(249,115,22,0.05)")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: "rgba(249,115,22,0.25)" }}>
                      {member.name[0]}
                    </div>
                    <span className="text-zinc-300 text-xs font-medium">{member.name}</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{
                      background: member.days <= 2 ? "rgba(239,68,68,0.15)" : "rgba(249,115,22,0.15)",
                      color:      member.days <= 2 ? "#fca5a5"              : "#fdba74",
                    }}>
                    {member.days <= 1 ? "غداً" : `${member.days} أيام`}
                  </span>
                </div>
              )})}
            </div>
          </div>
          {/* Most popular plan */}
          <div className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(24,24,27,0.8)", border: "1px solid rgba(249,115,22,0.2)", boxShadow: "0 0 30px rgba(249,115,22,0.06)" }}>
            <div className="px-5 py-4 border-b flex items-center gap-2" style={{ borderColor: "rgba(249,115,22,0.15)" }}>
              <Star size={15} style={{ color: "#f97316" }} />
              <h2 className="text-white font-bold text-sm">الخطة الأكثر اشتراكاً</h2>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.25)" }}>
                  <Star size={14} style={{ color: "#f97316" }} />
                </div>
                <p className="text-white font-black text-base">{popularPlan.plan || "لا توجد بيانات"}</p>
              </div>
              <p className="text-zinc-500 text-xs mb-4 mr-10">الخطة الأكثر شعبية بين الأعضاء</p>
              <div className="flex items-end justify-between mb-2">
                <span className="text-zinc-400 text-xs font-medium">المشتركون</span>
                <span className="text-white font-black text-lg">{popularPlan.count} <span className="text-zinc-500 text-xs font-normal">مشترك</span></span>
              </div>
              <div className="w-full h-2.5 rounded-full overflow-hidden mb-1" style={{ background: "rgba(63,63,70,0.5)" }}>
                <div className="h-full rounded-full"
                  style={{
                    width: `${percentage}%`,
                    background: "linear-gradient(90deg, #f97316, #ea580c)",
                    boxShadow: "0 0 10px rgba(249,115,22,0.5)"
                  }} />
              </div>
              <div className="flex justify-between text-xs text-zinc-600">
                <span>0</span>
                <span className="font-semibold" style={{ color: "#f97316" }}> {percentage}%</span>
                <span>100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}