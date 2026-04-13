import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(isSignup ? "Account created! (Demo)" : "Logged in! (Demo)");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="bg-card rounded-xl border border-border p-8 w-full max-w-md">
        <h1 className="font-heading text-2xl font-bold text-foreground text-center mb-2">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="font-body text-sm text-muted-foreground text-center mb-6">
          {isSignup ? "Join Whiffle and start baking!" : "Sign in to your Whiffle account"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1 block">Full Name</label>
              <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          )}
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-1 block">Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-1 block">Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="font-body text-sm text-muted-foreground text-center mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsSignup(!isSignup)} className="text-primary hover:underline font-semibold">
            {isSignup ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
