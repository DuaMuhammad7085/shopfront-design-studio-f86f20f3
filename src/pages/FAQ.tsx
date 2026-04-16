// ==================== FAQ PAGE ====================
// Accordion-style frequently asked questions
// ==============================================

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

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
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-soft-pink/40 px-4 py-2 rounded-full mb-4">
            <HelpCircle size={18} className="text-primary" />
            <span className="font-heading text-sm font-semibold text-primary">Help Center</span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Frequently Asked Questions</h1>
          <p className="font-body text-muted-foreground">Quick answers to common questions about Whiffle.</p>
        </div>
        {/* ---- End Page Header ---- */}

        {/* ---- FAQ Accordion ---- */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 font-heading font-semibold text-foreground text-left">
                {faq.q}
                <ChevronDown size={18} className={`transition-transform shrink-0 ml-4 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 font-body text-muted-foreground text-sm leading-relaxed">{faq.a}</div>}
            </div>
          ))}
        </div>
        {/* ---- End FAQ Accordion ---- */}
      </div>
    </div>
  );
};
// ---- End FAQ Page Component ----

export default FAQ;
// ==================== END FAQ PAGE ====================
