// // import Sidebar from "@/components/layout/Sidebar";
// import Sidebar from "../components/layout/Sidebar";

// export default function DashboardLayout({ children }) {
//   return (
//     <div className="flex min-h-screen bg-zinc-950 text-white">

//       {/* <Sidebar /> */}

//       <main className="flex-1 p-6">
//         {children}
//       </main>

//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
// import Sidebar from "@/components/layout/Sidebar";
import Sidebar from "../components/layout/Sidebar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
  }
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-zinc-950 flex"
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      {/* Desktop sidebar — visible only on lg+ */}
      <div className="hidden lg:flex flex-col sticky top-0 h-screen flex-shrink-0">
        <Sidebar onLogout={handleLogout} mobile={false} onClose={() => {}} />
      </div>
      {/* Mobile drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-72 z-10">
            <Sidebar
              onLogout={handleLogout}
              mobile={true}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      )}
      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile top bar — hidden on lg+ */}
        <header
          className="lg:hidden flex items-center justify-between px-4 py-3 border-b sticky top-0 z-40"
          style={{
            background: "rgba(24,24,27,0.95)",
            borderColor: "rgba(63,63,70,0.4)",
            backdropFilter: "blur(20px)",
          }}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-zinc-400 hover:text-white transition-colors p-1.5 rounded-lg"
            style={{ border: "1px solid rgba(63,63,70,0.5)" }}
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{
                background: "rgba(249,115,22,0.15)",
                border: "1px solid rgba(249,115,22,0.3)",
              }}
            >
              <svg viewBox="0 0 64 64" fill="none" className="w-4 h-4">
                <rect x="8"  y="26" width="8"  height="12" rx="3" fill="#f97316" />
                <rect x="16" y="22" width="5"  height="20" rx="2" fill="#fb923c" />
                <rect x="21" y="29" width="22" height="6"  rx="2" fill="#f97316" />
                <rect x="43" y="22" width="5"  height="20" rx="2" fill="#fb923c" />
                <rect x="48" y="26" width="8"  height="12" rx="3" fill="#f97316" />
              </svg>
            </div>
            <span className="text-white font-black text-sm">يوم اللياقة</span>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#f97316" }}>FD</span>
          </div>
          <div className="w-9" />
        </header>
        {/* Page content */}
        <main className="flex-1 p-5 lg:p-8 space-y-6 lg:space-y-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}