import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-lg">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-8 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-8 space-y-4">
        <div>
          <label className="font-body text-sm font-medium text-foreground mb-1 block">Name</label>
          <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label className="font-body text-sm font-medium text-foreground mb-1 block">Email</label>
          <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label className="font-body text-sm font-medium text-foreground mb-1 block">Message</label>
          <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
        </div>
        <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
