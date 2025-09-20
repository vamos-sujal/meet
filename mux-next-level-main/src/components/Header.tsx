import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SignupModal } from "@/components/SignupModal";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleOpenSignup = () => {
      setIsSignupOpen(true);
    };

    window.addEventListener("openSignup", handleOpenSignup);
    return () => window.removeEventListener("openSignup", handleOpenSignup);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-primary">MeetMux</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/events" className="text-foreground hover:text-primary transition-colors">Events</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How it Works</a>
            <a href="/resources" className="text-foreground hover:text-primary transition-colors">Resources</a>
            <a href="/founders-desk" className="text-foreground hover:text-primary transition-colors">Founder's Desk</a>
            <a href="/referrals-rewards" className="text-foreground hover:text-primary transition-colors">Referrals</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={() => setIsSignupOpen(true)}
              className="hidden sm:inline-flex"
            >
              Log In
            </Button>
            <Button 
              variant="hero"
              onClick={() => setIsSignupOpen(true)}
              className="hidden sm:inline-flex"
            >
              Sign Up
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <a 
                href="/" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/events" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </a>
              <a 
                href="#features" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it Works
              </a>
              <a 
                href="/resources" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </a>
              <a 
                href="/founders-desk" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Founder's Desk
              </a>
              <a 
                href="/referrals-rewards" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Referrals
              </a>
              <a 
                href="#faq" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-4 space-y-2">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setIsSignupOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  Log In
                </Button>
                <Button 
                  variant="hero"
                  onClick={() => {
                    setIsSignupOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
      />
    </>
  );
};