// ==================== PRIVACY POLICY PAGE ====================
// Static privacy content — restyled with iconified section cards so it doesn't
// read like a wall of text. Same color tokens as the rest of the site.
// =============================================================

import { Shield, Database, Lock, UserCheck, Cookie, Mail } from "lucide-react";

// ---- Section Data ----
// Centralized so the layout loop stays clean and the policy is easy to extend.
const sections = [
  { icon: Database, title: "Information We Collect", body: "We collect information you provide when creating an account, placing orders, or contacting us. This includes your name, email address, shipping address, and payment information. We also collect anonymous usage data to improve the experience." },
  { icon: UserCheck, title: "How We Use It", body: "Your information is used to process orders, improve our services, communicate updates and offers, and personalize your shopping experience. We never sell your personal information to third parties — full stop." },
  { icon: Lock, title: "Data Security", body: "We implement industry-standard security measures including TLS encryption in transit, encrypted storage at rest, and regular security audits to protect your data from unauthorized access." },
  { icon: Cookie, title: "Cookies & Tracking", body: "We use a small number of essential cookies to keep you signed in and remember your cart. Optional analytics cookies help us understand which recipes and products you love — you can opt out anytime in your browser settings." },
  { icon: UserCheck, title: "Your Rights", body: "You have the right to access, modify, export, or delete your personal data at any time. Reach out to us at hello@whiffle.com and we'll handle any request within 30 days." },
  { icon: Mail, title: "Contact Us", body: "Questions about this policy? Email hello@whiffle.com or write to us at 123 Baker Street, New York, NY 10001. We're real bakers and happy to chat." },
];
// ---- End Section Data ----

// ---- Privacy Page Component ----
const Privacy = () => (
  <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      {/* ---- Page Header ---- */}
      <div className="text-center mb-10 animate-fade-up">
        <div className="inline-flex items-center gap-2 bg-soft-pink/40 px-4 py-2 rounded-full mb-4">
          <Shield size={16} className="text-primary" />
          <span className="font-heading text-xs font-semibold text-primary tracking-wide uppercase">Your privacy matters</span>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3 italic">Privacy Policy</h1>
        <p className="font-body text-muted-foreground">Plain-English summary of how we handle your data.</p>
        <p className="font-body text-xs text-muted-foreground/70 mt-2">Last updated: January 2026</p>
      </div>
      {/* ---- End Page Header ---- */}

      {/* ---- Section Cards ---- */}
      <div className="space-y-4 stagger">
        {sections.map((s, i) => (
          <div key={s.title} style={{ ['--i' as any]: i }} className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-soft-pink w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <s.icon size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-lg font-bold text-foreground mb-1.5">{s.title}</h2>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">{s.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ---- End Section Cards ---- */}
    </div>
  </div>
);
// ---- End Privacy Page Component ----

export default Privacy;
// ==================== END PRIVACY POLICY PAGE ====================
