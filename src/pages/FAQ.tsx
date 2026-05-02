// ==================== FAQ PAGE ====================
// Accordion-style frequently asked questions
// ==============================================

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

// ---- FAQ Data ----
const faqs = [
  { q: "What is Whiffle?", a: "Whiffle is a guided baking e-commerce platform that helps you find the right baking products and teaches you how to use them. We offer curated bakeware, ingredients, decorating tools, accessories, bundles, and starter kits." },
  { q: "Do you offer free shipping?", a: "Yes! We offer free shipping on all orders over $35. Orders under $35 have a flat shipping rate of $5.99." },
  { q: "What are Starter Kits?", a: "Starter Kits are curated bundles of essential baking tools perfect for beginners. Each kit includes everything you need to get started with a specific type of baking, from cupcakes to sourdough bread." },
  { q: "Can I return products?", a: "Yes, we offer a 30-day return policy on all unused products in their original packaging. Contact our support team to initiate a return." },
  { q: "Do you have recipes?", a: "Absolutely! Check out our Recipes section for step-by-step baking guides. We have recipes for all skill levels, from easy chocolate chip cookies to challenging French macarons." },
  { q: "How do difficulty levels work?", a: "Every product in our catalog is tagged with a difficulty level: Beginner, Intermediate, or Pro. This helps you choose products that match your current skill level and grow with you." },
  { q: "What brands do you carry?", a: "We carry a curated selection of brands including Whiffle (our own brand), BakeRight, SweetCraft, ProBake, KitchenPro, ArtisanBake, Baker's Choice, and CakeMaster." },
  { q: "How can I contact support?", a: "You can reach us via email at hello@whiffle.com, call us at +1 (555) 123-4567 during business hours, or use the contact form on our Contact page." },
];
// ---- End FAQ Data ----

// ---- FAQ Page Component ----
const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        {/* ---- Page Header ---- */}
        <div className="text-center mb-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-soft-pink/40 px-4 py-2 rounded-full mb-4">
            <HelpCircle size={16} className="text-primary" />
            <span className="font-heading text-xs font-semibold text-primary tracking-wide uppercase">Help Center</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3 italic">Frequently Asked Questions</h1>
          <p className="font-body text-muted-foreground max-w-md mx-auto">Quick answers to the things bakers ask us most. Can't find yours? <Link to="/contact" className="text-primary hover:underline">Drop us a line</Link>.</p>
        </div>
        {/* ---- End Page Header ---- */}

        {/* ---- FAQ Accordion ---- */}
        <div className="space-y-3 stagger">
          {faqs.map((faq, i) => (
            <div key={i} style={{ ['--i' as any]: i }} className={`bg-card rounded-2xl border overflow-hidden shadow-sm transition-all ${open === i ? "border-primary/40 shadow-md" : "border-border"}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 font-heading font-semibold text-foreground text-left hover:bg-secondary/40 transition-colors"
                aria-expanded={open === i}
              >
                <span className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === i ? "bg-primary text-primary-foreground" : "bg-soft-pink text-primary"}`}>
                    <span className="font-heading text-xs font-bold">{i + 1}</span>
                  </span>
                  {faq.q}
                </span>
                <ChevronDown size={18} className={`transition-transform shrink-0 ml-4 ${open === i ? "rotate-180 text-primary" : ""}`} />
              </button>
              {/* Answer panel: animated reveal via grid-rows trick keeps height auto without JS measure */}
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pl-16 font-body text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ---- End FAQ Accordion ---- */}

        {/* ---- Still Need Help CTA ---- */}
        <div className="mt-10 bg-gradient-to-r from-soft-pink/40 to-secondary rounded-2xl border border-border p-6 text-center">
          <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <MessageCircle size={20} className="text-primary-foreground" />
          </div>
          <h3 className="font-heading font-bold text-foreground mb-1">Still have a question?</h3>
          <p className="font-body text-sm text-muted-foreground mb-4">We usually reply within 24 hours.</p>
          <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-heading font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-md">
            Contact Support
          </Link>
        </div>
        {/* ---- End Still Need Help CTA ---- */}
      </div>
    </div>
  );
};
// ---- End FAQ Page Component ----

export default FAQ;
// ==================== END FAQ PAGE ====================
