import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import heroBg from "@/assets/hero-bakery.jpg";
import WhiffleLogo from "@/components/WhiffleLogo";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(isSignup ? "Account created! (Demo)" : "Logged in! (Demo)");
  };

  return (
    <div className="min-h-[80vh] flex">
      {/* Left side - decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img src={heroBg} alt="Fresh baked goods" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-chocolate/80 to-chocolate/50 flex items-center justify-center">
          <div className="text-center px-12">
            <WhiffleLogo className="h-16 w-auto text-cream mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-bold text-cream mb-4 italic">Welcome to Whiffle</h2>
            <p className="font-body text-cream/80 text-lg max-w-sm mx-auto">
              Your guided baking companion. Sign in to access your personalized baking journey.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-background">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <WhiffleLogo className="h-12 w-auto text-chocolate mx-auto mb-2" />
          </div>

          <h1 className="font-heading text-3xl font-bold text-foreground text-center mb-2">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="font-body text-muted-foreground text-center mb-8">
            {isSignup ? "Join Whiffle and start your baking journey!" : "Sign in to your Whiffle account"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignup && (
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            )}
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card font-body focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-card font-body focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isSignup && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-body text-sm text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded border-border accent-primary" />
                  Remember me
                </label>
                <button type="button" className="font-body text-sm text-primary hover:underline">Forgot password?</button>
              </div>
            )}

            <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity text-lg">
              {isSignup ? "Create Account" : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="font-body text-sm text-muted-foreground">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button onClick={() => setIsSignup(!isSignup)} className="text-primary hover:underline font-semibold">
                {isSignup ? "Sign In" : "Create Account"}
              </button>
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link to="/" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
