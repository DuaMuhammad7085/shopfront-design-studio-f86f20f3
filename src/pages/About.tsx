import { Link } from "react-router-dom";

const About = () => (
  <div className="container mx-auto px-4 py-16 max-w-3xl">
    <h1 className="font-heading text-4xl font-bold text-foreground mb-6 text-center">About Whiffle</h1>
    <div className="bg-card rounded-xl border border-border p-8 space-y-6 font-body text-muted-foreground leading-relaxed">
      <p><strong className="text-foreground">Our Story:</strong> Whiffle was born from a simple idea — baking should be accessible to everyone. We noticed beginners often felt overwhelmed by the sheer number of tools and ingredients available, so we built a platform that guides you every step of the way.</p>
      <p><strong className="text-foreground">Our Mission:</strong> To make baking joyful, simple, and rewarding for bakers of all skill levels.</p>
      <p><strong className="text-foreground">Our Vision:</strong> A world where everyone can bake with confidence, armed with the right tools, knowledge, and inspiration.</p>
    </div>
    <div className="text-center mt-8">
      <Link to="/shop" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">Start Shopping</Link>
    </div>
  </div>
);

export default About;
