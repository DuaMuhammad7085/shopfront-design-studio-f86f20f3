import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is Whiffle?", a: "Whiffle is a guided baking e-commerce platform that helps you find the right baking products and teaches you how to use them." },
  { q: "Do you offer free shipping?", a: "Yes! Free shipping on all orders over $35." },
  { q: "What are Starter Kits?", a: "Starter Kits are curated bundles of essential baking tools perfect for beginners." },
  { q: "Can I return products?", a: "Yes, we offer a 30-day return policy on all unused products." },
  { q: "Do you have recipes?", a: "Absolutely! Check out our Recipes section for step-by-step baking guides linked to our products." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-8 text-center">FAQ</h1>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-4 font-heading font-semibold text-foreground text-left">
              {faq.q}
              <ChevronDown size={18} className={`transition-transform shrink-0 ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <div className="px-4 pb-4 font-body text-muted-foreground text-sm">{faq.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
