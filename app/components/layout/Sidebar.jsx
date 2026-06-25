// // "use client";

// // import {
// //   LayoutDashboard,
// //   Users,
// //   CreditCard,
// //   LogOut,
// //   X,
// //   ChevronLeft,
// // } from "lucide-react";

// // const NAV_ITEMS = [
// //   { icon: LayoutDashboard, label: "لوحة التحكم", href: "/Dashboard" },
// //   { icon: Users, label: "الأعضاء", href: "/Dashboard/members" },
// //   { icon: CreditCard, label: "الاشتراكات", id: "subs" },
// // ];

// // export default function Sidebar({
// //   active,
// //   setActive,
// //   onLogout,
// //   mobile,
// //   onClose,
// // }) {
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
// //       <div
// //         className="px-5 py-6 border-b"
// //         style={{ borderColor: "rgba(63,63,70,0.4)" }}
// //       >
// //         <div className="flex items-center gap-3">
// //           <div
// //             className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
// //             style={{
// //               background:
// //                 "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(249,115,22,0.08))",
// //               border: "1px solid rgba(249,115,22,0.35)",
// //               boxShadow: "0 0 20px rgba(249,115,22,0.1)",
// //             }}
// //           >
// //             <svg viewBox="0 0 64 64" fill="none" className="w-6 h-6">
// //               <rect x="8" y="26" width="8" height="12" rx="3" fill="#f97316" />
// //               <rect x="16" y="22" width="5" height="20" rx="2" fill="#fb923c" />
// //               <rect x="21" y="29" width="22" height="6" rx="2" fill="#f97316" />
// //               <rect x="43" y="22" width="5" height="20" rx="2" fill="#fb923c" />
// //               <rect x="48" y="26" width="8" height="12" rx="3" fill="#f97316" />
// //             </svg>
// //           </div>

// //           <div className="leading-tight">
// //             <p className="text-white font-black text-sm">
// //               يوم اللياقة
// //             </p>

// //             <p
// //               className="text-xs font-semibold tracking-widest uppercase"
// //               style={{ color: "#f97316" }}
// //             >
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

// //       {/* Navigation */}
// //       <nav className="flex-1 px-3 py-4 space-y-1">
// //         {NAV_ITEMS.map(({ icon: Icon, label, id }) => {
// //           const isActive = active === id;

// //           return (
// //             <button
// //               key={id}
// //               onClick={() => {
// //                 setActive(id);

// //                 if (mobile) onClose();
// //               }}
// //               className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-right"
// //               style={
// //                 isActive
// //                   ? {
// //                       background:
// //                         "linear-gradient(135deg, rgba(249,115,22,0.18), rgba(249,115,22,0.06))",
// //                       color: "#fb923c",
// //                       border: "1px solid rgba(249,115,22,0.25)",
// //                       boxShadow: "0 2px 12px rgba(249,115,22,0.1)",
// //                     }
// //                   : {
// //                       color: "#a1a1aa",
// //                       border: "1px solid transparent",
// //                     }
// //               }
// //               onMouseEnter={(e) => {
// //                 if (!isActive) {
// //                   e.currentTarget.style.background =
// //                     "rgba(63,63,70,0.4)";
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

// //               {isActive && (
// //                 <ChevronLeft
// //                   size={14}
// //                   className="mr-auto opacity-60"
// //                 />
// //               )}
// //             </button>
// //           );
// //         })}
// //       </nav>

// //       {/* Logout */}
// //       <div
// //         className="px-3 py-4 border-t"
// //         style={{ borderColor: "rgba(63,63,70,0.4)" }}
// //       >
// //         <button
// //           onClick={onLogout}
// //           className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-right"
// //           style={{
// //             color: "#a1a1aa",
// //             border: "1px solid transparent",
// //           }}
// //           onMouseEnter={(e) => {
// //             e.currentTarget.style.background =
// //               "rgba(239,68,68,0.08)";
// //             e.currentTarget.style.color = "#fca5a5";
// //             e.currentTarget.style.borderColor =
// //               "rgba(239,68,68,0.2)";
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

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   LayoutDashboard,
//   Users,
//   CreditCard,
//   LogOut,
//   X,
//   ChevronLeft,
// } from "lucide-react";

// const NAV_ITEMS = [
//   {
//     icon: LayoutDashboard,
//     label: "لوحة التحكم",
//     href: "/Dashboard",
//   },

//   {
//     icon: Users,
//     label: "الأعضاء",
//     href: "/Dashboard/members",
//   },

//   {
//     icon: CreditCard,
//     label: "الاشتراكات",
//     href: "/Dashboard/subscriptions",
//   },
// ];

// export default function Sidebar({
//   onLogout,
//   mobile,
//   onClose,
// }) {

//   const pathname = usePathname();

//   return (
//     <aside
//       className="flex flex-col h-full"
//       style={{
//         background: "rgba(24,24,27,0.98)",
//         borderLeft: "1px solid rgba(63,63,70,0.5)",
//         width: mobile ? "100%" : "240px",
//         minWidth: mobile ? "unset" : "240px",
//       }}
//     >

//       {/* Logo */}
//       <div
//         className="px-5 py-6 border-b"
//         style={{ borderColor: "rgba(63,63,70,0.4)" }}
//       >
//         <div className="flex items-center gap-3">

//           <div
//             className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
//             style={{
//               background:
//                 "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(249,115,22,0.08))",
//               border: "1px solid rgba(249,115,22,0.35)",
//               boxShadow: "0 0 20px rgba(249,115,22,0.1)",
//             }}
//           >
//             <svg viewBox="0 0 64 64" fill="none" className="w-6 h-6">
//               <rect x="8" y="26" width="8" height="12" rx="3" fill="#f97316" />
//               <rect x="16" y="22" width="5" height="20" rx="2" fill="#fb923c" />
//               <rect x="21" y="29" width="22" height="6" rx="2" fill="#f97316" />
//               <rect x="43" y="22" width="5" height="20" rx="2" fill="#fb923c" />
//               <rect x="48" y="26" width="8" height="12" rx="3" fill="#f97316" />
//             </svg>
//           </div>

//           <div className="leading-tight">
//             <p className="text-white font-black text-sm">
//               يوم اللياقة
//             </p>

//             <p
//               className="text-xs font-semibold tracking-widest uppercase"
//               style={{ color: "#f97316" }}
//             >
//               Fitness Day
//             </p>
//           </div>

//           {mobile && (
//             <button
//               onClick={onClose}
//               className="mr-auto text-zinc-500 hover:text-white transition-colors p-1"
//             >
//               <X size={18} />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-3 py-4 space-y-1">

//         {NAV_ITEMS.map(({ icon: Icon, label, href }) => {

//           const isActive = pathname === href;

//           return (
//             <Link
//               key={href}
//               href={href}

//               onClick={() => {
//                 if (mobile) onClose();
//               }}

//               className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-right"
//               style={
//                 isActive
//                   ? {
//                       background:
//                         "linear-gradient(135deg, rgba(249,115,22,0.18), rgba(249,115,22,0.06))",
//                       color: "#fb923c",
//                       border: "1px solid rgba(249,115,22,0.25)",
//                       boxShadow: "0 2px 12px rgba(249,115,22,0.1)",
//                     }

//                   : {
//                       color: "#a1a1aa",
//                       border: "1px solid transparent",
//                     }
//               }

//               onMouseEnter={(e) => {
//                 if (!isActive) {
//                   e.currentTarget.style.background =
//                     "rgba(63,63,70,0.4)";

//                   e.currentTarget.style.color = "#fff";
//                 }
//               }}

//               onMouseLeave={(e) => {
//                 if (!isActive) {
//                   e.currentTarget.style.background = "transparent";

//                   e.currentTarget.style.color = "#a1a1aa";
//                 }
//               }}
//             >

//               <Icon size={17} className="flex-shrink-0" />

//               {label}

//               {isActive && (
//                 <ChevronLeft
//                   size={14}
//                   className="mr-auto opacity-60"
//                 />
//               )}

//             </Link>
//           );
//         })}
//       </nav>

//       {/* Logout */}
//       <div
//         className="px-3 py-4 border-t"
//         style={{ borderColor: "rgba(63,63,70,0.4)" }}
//       >

//         <button
//           onClick={onLogout}
//           className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-right"
//           style={{
//             color: "#a1a1aa",
//             border: "1px solid transparent",
//           }}

//           onMouseEnter={(e) => {
//             e.currentTarget.style.background =
//               "rgba(239,68,68,0.08)";

//             e.currentTarget.style.color = "#fca5a5";

//             e.currentTarget.style.borderColor =
//               "rgba(239,68,68,0.2)";
//           }}

//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = "transparent";

//             e.currentTarget.style.color = "#a1a1aa";

//             e.currentTarget.style.borderColor = "transparent";
//           }}
//         >

//           <LogOut size={17} className="flex-shrink-0" />

//           تسجيل الخروج

//         </button>
//       </div>
//     </aside>
//   );
// }


"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  LogOut,
  X,
  ChevronLeft,
  Import,
} from "lucide-react";
import Image from "next/image";
const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "لوحة التحكم", href: "/Dashboard" },
  { icon: Users,           label: "الأعضاء",      href: "/Dashboard/members" },
  { icon: CreditCard,      label: "الاشتراكات",   href: "/Dashboard/subscriptions" },
];
export default function Sidebar({ onLogout, mobile, onClose }) {
  const pathname = usePathname();
  return (
    <aside
      className="flex flex-col h-full"
      style={{
        background: "rgba(24,24,27,0.98)",
        borderLeft: "1px solid rgba(63,63,70,0.5)",
        width: mobile ? "100%" : "240px",
        minWidth: mobile ? "unset" : "240px",
      }}
    >
      {/* Logo */}
      <div className="px-5 py-6 border-b" style={{ borderColor: "rgba(63,63,70,0.4)" }}>
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(249,115,22,0.08))",
              border: "1px solid rgba(249,115,22,0.35)",
              boxShadow: "0 0 20px rgba(249,115,22,0.1)",
            }}
          >
              <Image src="/logo.jpg" width={96} height={96} className="rounded-2xl" />

            {/* <svg viewBox="0 0 64 64" fill="none" className="w-6 h-6">
              <rect x="8"  y="26" width="8"  height="12" rx="3" fill="#f97316" />
              <rect x="16" y="22" width="5"  height="20" rx="2" fill="#fb923c" />
              <rect x="21" y="29" width="22" height="6"  rx="2" fill="#f97316" />
              <rect x="43" y="22" width="5"  height="20" rx="2" fill="#fb923c" />
              <rect x="48" y="26" width="8"  height="12" rx="3" fill="#f97316" />
            </svg> */}
          </div>
          <div className="leading-tight">
            <p className="text-white font-black text-sm">FITBOX</p>
            {/* <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#f97316" }}>
              Fitness Day
            </p> */}
          </div>
          {mobile && (
            <button onClick={onClose} className="mr-auto text-zinc-500 hover:text-white transition-colors p-1">
              <X size={18} />
            </button>
          )}
        </div>
      </div>
      {/* Nav links */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV_ITEMS.map(({ icon: Icon, label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={() => { if (mobile) onClose(); }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-right"
              style={
                isActive
                  ? {
                      background: "linear-gradient(135deg, rgba(249,115,22,0.18), rgba(249,115,22,0.06))",
                      color: "#fb923c",
                      border: "1px solid rgba(249,115,22,0.25)",
                      boxShadow: "0 2px 12px rgba(249,115,22,0.1)",
                    }
                  : { color: "#a1a1aa", border: "1px solid transparent" }
              }
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(63,63,70,0.4)";
                  e.currentTarget.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#a1a1aa";
                }
              }}
            >
              <Icon size={17} className="flex-shrink-0" />
              {label}
              {isActive && <ChevronLeft size={14} className="mr-auto opacity-60" />}
            </Link>
          );
        })}
      </nav>
      {/* Logout */}
      <div className="px-3 py-4 border-t" style={{ borderColor: "rgba(63,63,70,0.4)" }}>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-right"
          style={{ color: "#a1a1aa", border: "1px solid transparent" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(239,68,68,0.08)";
            e.currentTarget.style.color = "#fca5a5";
            e.currentTarget.style.borderColor = "rgba(239,68,68,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#a1a1aa";
            e.currentTarget.style.borderColor = "transparent";
          }}
        >
          <LogOut size={17} className="flex-shrink-0" />
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}