"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DEMO_EMAIL = "admin@fitBOX.com";
const DEMO_PASSWORD = "123456";
export default function LoginPage() {
    const router = useRouter();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {

        localStorage.setItem("isLoggedIn", "true");
        router.push("/Dashboard");
        // navigate("/Dashboard");
      } else {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      }
      setLoading(false);
    }, 800);
  }
  return (
    <div dir="rtl" className="min-h-screen flex bg-zinc-950" style={{ fontFamily: "'Cairo', sans-serif" }}>
      {/* ═══════════════════════════════════════════════
          LEFT SIDE — Hero panel (hidden on mobile)
      ═══════════════════════════════════════════════ */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col items-center justify-center p-12">
        {/* Ambient glow */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(249,115,22,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(249,115,22,0.07) 0%, transparent 60%)"
        }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        {/* Glow orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full animate-glow-pulse pointer-events-none" style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
          filter: "blur(40px)"
        }} />
        <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
          {/* ── Logo ── */}
          <div className="animate-fade-in-up opacity-0-init mb-8">
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 mx-auto" style={{
              background: "linear-gradient(135deg, rgba(249,115,22,0.2) 0%, rgba(249,115,22,0.05) 100%)",
              border: "1px solid rgba(249,115,22,0.3)",
              boxShadow: "0 0 40px rgba(249,115,22,0.15), inset 0 1px 0 rgba(255,255,255,0.05)"
            }}>
              <Image src="/logo.jpg" width={96} height={96} className="rounded-2xl" />
              {/* <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                <rect x="8"  y="26" width="8"  height="12" rx="3" fill="#f97316" />
                <rect x="16" y="22" width="5"  height="20" rx="2" fill="#fb923c" />
                <rect x="21" y="29" width="22" height="6"  rx="2" fill="#f97316" />
                <rect x="43" y="22" width="5"  height="20" rx="2" fill="#fb923c" />
                <rect x="48" y="26" width="8"  height="12" rx="3" fill="#f97316" />
              </svg> */}
            </div>
            <h1 className="text-4xl font-black text-white tracking-tight leading-none"
              style={{ textShadow: "0 0 30px rgba(249,115,22,0.3)" }}>
              FITBOX
            </h1>
            {/* <p className="text-lg font-semibold tracking-[0.3em] uppercase mt-1" style={{ color: "#f97316" }}>
              Fitness Day
            </p> */}
          </div>
          {/* Divider */}
          <div className="w-24 h-px mb-8 animate-fade-in-up opacity-0-init delay-100" style={{
            background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)"
          }} />
          {/* ── Hero text ── */}
          <div className="animate-fade-in-up opacity-0-init delay-200 space-y-4">
            <h2 className="text-3xl font-bold text-white leading-snug">
              وداعاً للدفاتر…{" "}
              <span style={{ color: "#f97316" }}>مرحباً بالإدارة الذكية</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
              تابع الأعضاء والاشتراكات وإدارة الصالة بسهولة من الهاتف أو اللابتوب
            </p>
          </div>
          {/* ── Feature pills ── */}
          <div className="animate-fade-in-up opacity-0-init delay-300 flex flex-wrap gap-3 mt-10 justify-center">
            {[
              { icon: "👥", label: "إدارة الأعضاء" },
              { icon: "📊", label: "تقارير مالية" },
              { icon: "⏰", label: "متابعة الاشتراكات" },
              { icon: "📱", label: "تطبيق موبايل" },
            ].map((item) => (
              <div key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", color: "#fdba74" }}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          {/* ── Stats ── */}
          <div className="animate-fade-in-up opacity-0-init delay-400 grid grid-cols-3 gap-6 mt-12 w-full">
            {[
              { value: "+500", label: "عضو نشط" },
              { value: "98%",  label: "رضا العملاء" },
              { value: "24/7", label: "دعم فني" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black" style={{ color: "#f97316" }}>{stat.value}</div>
                <div className="text-zinc-500 text-xs font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(9,9,11,0.8), transparent)" }} />
      </div>
      {/* ═══════════════════════════════════════════════
          RIGHT SIDE — Login form
      ═══════════════════════════════════════════════ */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative">
        {/* Mobile background glow */}
        <div className="absolute inset-0 opacity-30 lg:hidden" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(249,115,22,0.08) 0%, transparent 70%)"
        }} />
        <div className="w-full max-w-md relative z-10">
          {/* ── Mobile logo (hidden on desktop) ── */}
          <div className="flex flex-col items-center mb-8 lg:hidden animate-fade-in">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-3"
              style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)" }}>
              <Image src="/logo.jpg" width={96} height={96} className="rounded-2xl" />
                
              {/* <svg viewBox="0 0 64 64" fill="none" className="w-9 h-9">
                <rect x="8"  y="26" width="8"  height="12" rx="3" fill="#f97316" />
                <rect x="16" y="22" width="5"  height="20" rx="2" fill="#fb923c" />
                <rect x="21" y="29" width="22" height="6"  rx="2" fill="#f97316" />
                <rect x="43" y="22" width="5"  height="20" rx="2" fill="#fb923c" />
                <rect x="48" y="26" width="8"  height="12" rx="3" fill="#f97316" />
              </svg> */}
            </div>
            <h1 className="text-2xl font-black text-white">FITBOX</h1>
            {/* <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#f97316" }}>Fitness Day</p> */}
          </div>
          {/* ── Login card ── */}
          <div className="rounded-2xl p-8 animate-fade-in-up opacity-0-init" style={{
            background: "rgba(24, 24, 27, 0.95)",
            border: "1px solid rgba(63, 63, 70, 0.6)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(249,115,22,0.05), inset 0 1px 0 rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)"
          }}>
            {/* Card header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">مرحباً بعودتك 👋</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                سجّل الدخول للوصول إلى لوحة التحكم وإدارة الصالة بسهولة
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-zinc-300">البريد الإلكتروني</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@fitnessday.com"
                    required
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200"
                    style={{ background: "rgba(39,39,42,0.8)", border: "1px solid rgba(63,63,70,0.8)" }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1px solid rgba(249,115,22,0.5)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = "1px solid rgba(63,63,70,0.8)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 left-3 text-zinc-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Password */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-zinc-300">كلمة المرور</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200"
                    style={{ background: "rgba(39,39,42,0.8)", border: "1px solid rgba(63,63,70,0.8)" }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1px solid rgba(249,115,22,0.5)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = "1px solid rgba(63,63,70,0.8)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  {/* Toggle show/hide */}
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 -translate-y-1/2 left-3 text-zinc-500 hover:text-zinc-300 transition-colors">
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                  {/* Lock icon */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-3 text-zinc-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Error message */}
              {error && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium animate-fade-in"
                  style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.25)", color: "#fca5a5" }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              )}
              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-white font-bold text-base transition-all duration-300 mt-2 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: loading ? "rgba(249,115,22,0.7)" : "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  boxShadow: loading ? "none" : "0 4px 20px rgba(249,115,22,0.35)"
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(249,115,22,0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(249,115,22,0.35)";
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    جاري تسجيل الدخول...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    تسجيل الدخول
                    <svg className="w-4 h-4" style={{ transform: "scaleX(-1)" }} fill="none"
                      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                )}
              </button>
            </form>
            {/* Demo credentials */}
            <div className="mt-6 p-4 rounded-xl"
              style={{ background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.12)" }}>
              <p className="text-zinc-500 text-xs font-medium mb-2">بيانات تجريبية:</p>
              <div className="space-y-1">
                <p className="text-zinc-400 text-xs font-mono" dir="ltr">📧 admin@fitBOX.com</p>
                <p className="text-zinc-400 text-xs font-mono" dir="ltr">🔑 123456</p>
              </div>
            </div>
          </div>
          {/* Footer */}
          <p className="text-center text-zinc-600 text-xs mt-6">
            © 2025 FITBOX  — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </div>
  );
}