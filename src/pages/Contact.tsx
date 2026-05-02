// ==================== CONTACT PAGE ====================
// Contact form, info cards, and FAQ link
// =====================================================

import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Clock, Phone, Send } from "lucide-react";
import featuredDealBg from "@/assets/featured-deal.jpg";

// ---- Contact Page Component ----
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  // ---- Form Submit Handler ----
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };
  // ---- End Form Submit Handler ----

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* ---- Hero Banner ---- */}
      <section className="relative h-[280px] overflow-hidden">
        <img src={featuredDealBg} alt="Contact Whiffle" className="w-full h-full object-cover scale-105 animate-scale-in" width={1920} height={512} />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/40 via-chocolate/65 to-chocolate/85 flex items-end">
          <div className="container mx-auto px-4 pb-8 text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-cream/15 backdrop-blur-sm border border-cream/20 px-4 py-1.5 rounded-full mb-3">
              <Send size={14} className="text-cream" />
              <span className="font-heading text-xs font-semibold text-cream tracking-wide uppercase">We'd love to chat</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-cream italic mb-2 drop-shadow">Get in Touch</h1>
            <p className="font-body text-cream/85">Real bakers, real replies — usually within 24 hours.</p>
          </div>
        </div>
      </section>
      {/* ---- End Hero Banner ---- */}

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ---- Contact Info Cards ---- */}
          <div className="space-y-4">
            {[
              { icon: Mail, title: "Email Us", detail: "hello@whiffle.com", sub: "We reply within 24 hours" },
              { icon: Phone, title: "Call Us", detail: "+1 (555) 123-4567", sub: "Mon-Fri 9am-5pm EST" },
              { icon: MapPin, title: "Visit Us", detail: "123 Baker Street", sub: "New York, NY 10001" },
              { icon: Clock, title: "Business Hours", detail: "Mon - Fri: 9am - 5pm", sub: "Sat: 10am - 2pm" },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-xl border border-border p-6 flex items-start gap-4 shadow-sm">
                <div className="bg-soft-pink w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm">{item.title}</h3>
                  <p className="font-body text-foreground text-sm">{item.detail}</p>
                  <p className="font-body text-muted-foreground text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          {/* ---- End Contact Info Cards ---- */}

          {/* ---- Contact Form ---- */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                  <input type="text" required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your question or feedback..." className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                </div>
                {/* ---- Submit Button ---- */}
                <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>
                {/* ---- End Submit Button ---- */}
              </form>
            </div>
          </div>
          {/* ---- End Contact Form ---- */}
        </div>
      </div>

      {/* ---- FAQ Link Section ---- */}
      <section className="bg-gradient-to-r from-secondary to-soft-pink/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2 italic">Have Questions?</h2>
          <p className="font-body text-muted-foreground mb-4">Check out our FAQ page for quick answers to common questions.</p>
          <a href="/faq" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity inline-block">
            View FAQ
          </a>
        </div>
      </section>
      {/* ---- End FAQ Link Section ---- */}
    </div>
  );
};
// ---- End Contact Page Component ----

export default Contact;
// ==================== END CONTACT PAGE ====================
