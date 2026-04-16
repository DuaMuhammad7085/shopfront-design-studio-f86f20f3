// ==================== PRIVACY POLICY PAGE ====================
// Static privacy policy content
// =============================================================

// ---- Privacy Page Component ----
const Privacy = () => (
  <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-8 text-center">Privacy Policy</h1>
      <div className="bg-card rounded-xl border border-border p-8 font-body text-muted-foreground leading-relaxed space-y-6 shadow-sm">
        <p>At Whiffle, we value your privacy. This policy outlines how we collect, use, and protect your personal information.</p>

        <div>
          <h2 className="font-heading font-bold text-foreground mb-2">Information We Collect</h2>
          <p>We collect information you provide when creating an account, placing orders, or contacting us. This includes your name, email address, shipping address, and payment information.</p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-foreground mb-2">How We Use It</h2>
          <p>Your information is used to process orders, improve our services, communicate updates and offers, and personalize your shopping experience. We never sell your personal information to third parties.</p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-foreground mb-2">Data Security</h2>
          <p>We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your data from unauthorized access.</p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-foreground mb-2">Your Rights</h2>
          <p>You have the right to access, modify, or delete your personal data at any time. Contact us at hello@whiffle.com for any privacy-related requests.</p>
        </div>
      </div>
    </div>
  </div>
);
// ---- End Privacy Page Component ----

export default Privacy;
// ==================== END PRIVACY POLICY PAGE ====================
